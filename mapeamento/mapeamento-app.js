/**
 * GL PRO · Mapeamento App Controller
 * Navigation, state, and event handlers — imports logic + ui modules.
 * @module mapeamento-app
 */

import {
  CROSS_PRELOAD_MS,
  CROSS_PRELOAD_COPY_INTERVAL_MS,
  CROSS_PRELOAD_COPY_LINES,
  PROCESSING_MS,
  TRANSITION_MS,
  TRANSITION_FADE_MS,
  SEMANTIC_LABELS,
  TOTAL_STEPS,
  assessTriagemSessionIntegrity,
  createInitialUserData,
  formatHistorySummary,
  formatSymptomsSummary,
  formatWashSummary,
  formatDisplayName,
  formatGoalDisplayLabel,
  getDisplayStep,
  isHistoryStepReady,
  SCHEDULE_CTA,
  TRIAGEM_NOMENCLATURE,
  WHATSAPP_NUMBER,
  generateWhatsAppHandoffURL,
  validateStaffPin,
  purgeKioskSession,
  registerKioskPurgeUiHook,
  KIOSK_IDLE_TIMEOUT_MS,
  KIOSK_IDLE_DOSSIER_TIMEOUT_MS,
  KIOSK_HANDOFF_PURGE_DELAY_MS,
  bindSensoryFeedback,
  bindBrandLogoLongPressReset
} from './mapeamento-logic.js';
import { createDomHelpers, renderDynamicDossierEssential, renderEmbedDossierWizard, observeDossierLazySections, applyTriagemNomenclature, resetProtocolLockState, setScheduleFabVisible } from './mapeamento-ui.js';
import { setMolecularStripVisible } from './molecular-marquee.js';
import { loadTriagemSession, saveTriagemSession, notifySiteChrome, notifySiteAnalytics, notifySiteResize } from './triagem-session.js';
import { clickWhatsApp, funnelStep, trackEvent } from './tracking-stub.js';

const MAPEAMENTO_SERVICE_NAME = 'Mapeamento Capilar Digital';
const MAPEAMENTO_FUNNEL_NAME = 'mapeamento_capilar';

export function createMapeamentoApp({ document, window }) {
  const dom = createDomHelpers(document);
  applyTriagemNomenclature(dom, document);

  let currentStep = -1;
  let contactLeadTracked = false;
  let friendsInvited = 0;
  let crossPreloadReady = false;
  let userData = createInitialUserData();
  let protocolUnlocked = false;
  let resizeNotifyTimer;
  /** Trava de navegação — impede double-click e transições concorrentes. */
  let isNavigating = false;
  /** IDs de setTimeout ativos (transições do funil). */
  const activeTimers = new Set();
  /** Evita simulateProcessing / generateFinalDossier em duplicata. */
  let processingStarted = false;
  /** Timer de inatividade kiosk (tablet compartilhado). */
  let kioskIdleTimerId = null;
  let kioskIdleListenersBound = false;
  /** Intervalo de rotação de micro-copy no preload 3 → 4. */
  let crossPreloadCopyIntervalId = null;
  let crossPreloadCopyIndex = 0;
  /** Rastreia revelação da seção de recência (Passo 2) para auto-scroll único. */
  let historyWindowSectionVisible = false;
  /** Wizard embed Jo Manto · telas 1–3 */
  let dossierEmbedStep = 1;
  /** Histórico: procedures → window (lateral) */
  let historySubstep = 'procedures';
  /** Intro: welcome → structure */
  let introSubstep = 'welcome';

  function isEmbedMode() {
    return document.body.classList.contains('is-embed');
  }

  function clearPaneMotion(el) {
    if (!el) return;
    el.classList.remove(
      'slide-up',
      'slide-in-right',
      'slide-in-left',
      'slide-out-left',
      'slide-out-right',
      'fade-in',
      'fade-out'
    );
  }

  function transitionPane(outgoing, incoming, direction) {
    const enterClass = direction === 'back' ? 'slide-in-left' : 'slide-in-right';
    const exitClass = direction === 'back' ? 'slide-out-right' : 'slide-out-left';

    if (outgoing && outgoing !== incoming) {
      clearPaneMotion(outgoing);
      outgoing.classList.add(exitClass);
      scheduleFunnelTimer(function () {
        outgoing.classList.add('hidden');
        clearPaneMotion(outgoing);
      }, motionDelay(320, 40));
    }

    if (incoming) {
      clearPaneMotion(incoming);
      incoming.classList.remove('hidden');
      incoming.classList.add(enterClass);
    }
    resetFunnelScroll();
    focusPane(incoming);
  }

  function focusPane(pane) {
    if (!pane) return;
    requestAnimationFrame(function () {
      const heading = pane.querySelector('h1, h2, [tabindex="-1"]');
      const input = pane.querySelector('input:not([type="hidden"])');
      const firstBtn = pane.querySelector('button.structure-card, button.option-card');
      const target = input || heading || firstBtn;
      if (target && typeof target.focus === 'function') {
        target.focus({ preventScroll: true });
      }
    });
  }

  function setFieldError(inputId, errorId, show) {
    const input = inputId ? document.getElementById(inputId) : null;
    const error = errorId ? document.getElementById(errorId) : null;
    if (input) input.classList.toggle('field-input--error', !!show);
    if (error) error.classList.toggle('hidden', !show);
  }

  function clearStepFieldErrors() {
    setFieldError('user-name', 'user-name-error', false);
    setFieldError(null, 'symptoms-error', false);
    setFieldError(null, 'wash-frequency-error', false);
    setFieldError(null, 'history-procedures-error', false);
  }

  function ensureProgressDots(containerId, total) {
    const container = document.getElementById(containerId);
    if (!container || container.childElementCount >= total) return;
    container.innerHTML = '';
    for (let i = 1; i <= total; i++) {
      const dot = document.createElement('span');
      dot.className = 'jm-progress-dot';
      dot.dataset.step = String(i);
      container.appendChild(dot);
    }
  }

  function updateProgressDots(containerId, activeStep, total) {
    ensureProgressDots(containerId, total);
    const container = document.getElementById(containerId);
    document.querySelectorAll('#' + containerId + ' .jm-progress-dot').forEach(function (dot, index) {
      const step = index + 1;
      dot.classList.toggle('is-complete', step < activeStep);
      dot.classList.toggle('is-active', step === activeStep);
    });
    if (container) {
      container.setAttribute('aria-valuenow', String(activeStep));
      container.setAttribute('aria-valuemax', String(total));
    }
  }

  function showHistorySubstep(substep, direction) {
    historySubstep = substep === 'window' ? 'window' : 'procedures';
    const procedures = document.getElementById('step-2-procedures');
    const windowPane = document.getElementById('step-2-window');
    if (!procedures || !windowPane) return;

    if (historySubstep === 'window') {
      transitionPane(procedures, windowPane, direction || 'forward');
      procedures.classList.remove('is-active');
      windowPane.classList.add('is-active');
      windowPane.setAttribute('aria-hidden', 'false');
      procedures.setAttribute('aria-hidden', 'true');
    } else {
      transitionPane(windowPane, procedures, direction || 'back');
      windowPane.classList.remove('is-active');
      procedures.classList.add('is-active');
      procedures.setAttribute('aria-hidden', 'false');
      windowPane.setAttribute('aria-hidden', 'true');
    }
    syncFooterNextButton();
  }

  function resetHistorySubstep() {
    historySubstep = 'procedures';
    const procedures = document.getElementById('step-2-procedures');
    const windowPane = document.getElementById('step-2-window');
    if (procedures) {
      clearPaneMotion(procedures);
      procedures.classList.add('is-active');
      procedures.classList.remove('hidden');
      procedures.setAttribute('aria-hidden', 'false');
    }
    if (windowPane) {
      clearPaneMotion(windowPane);
      windowPane.classList.remove('is-active');
      windowPane.classList.add('hidden');
      windowPane.setAttribute('aria-hidden', 'true');
    }
  }

  function resetFunnelScroll() {
    const steps = document.getElementById('steps-container');
    if (steps) steps.scrollTop = 0;
    const wizard = document.getElementById('dossier-embed-wizard');
    if (wizard) wizard.scrollTop = 0;
    if (isEmbedMode()) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  function measureEmbedNotifyHeight(mode) {
    if (!isEmbedMode()) {
      return Math.max(
        document.documentElement.scrollHeight,
        document.body ? document.body.scrollHeight : 0,
      );
    }
    const viewportCap = Math.min(680, Math.round(window.innerHeight * 0.85));
    if (mode === 'complete') {
      const wizard = document.getElementById('dossier-embed-wizard');
      if (wizard && !wizard.classList.contains('view-hidden')) {
        return Math.min(wizard.offsetHeight + 8, viewportCap);
      }
    }
    return viewportCap;
  }

  function tryAutoAdvanceStep(delayMs) {
    const delay = delayMs == null ? 400 : delayMs;
    scheduleFunnelTimer(function () {
      if (isNavigating) return;
      if (currentStep === 2) {
        const isVirgem = userData.history.includes('virgem');
        if (isVirgem && isHistoryStepReady(userData)) {
          confirmHistoryStep();
          return;
        }
        if (historySubstep === 'window' && isHistoryStepReady(userData)) {
          confirmHistoryStep();
          return;
        }
        return;
      }
      if (currentStep === 5 && userData.wash_frequency >= 1 && userData.wash_frequency <= 4) {
        if (!acquireNavigation()) return;
        advanceStepCore();
        releaseNavigation();
      }
    }, delay);
  }

  function showDossierEmbedStep(step) {
    const prevStep = dossierEmbedStep;
    dossierEmbedStep = Math.max(1, Math.min(3, step));
    const direction = dossierEmbedStep < prevStep ? 'back' : 'forward';

    for (let i = 1; i <= 3; i++) {
      const pane = document.getElementById('dossier-embed-pane-' + i);
      if (!pane) continue;
      if (i === dossierEmbedStep) {
        clearPaneMotion(pane);
        pane.classList.remove('hidden');
        pane.classList.add(direction === 'back' ? 'slide-in-left' : 'slide-in-right');
      } else if (i === prevStep && prevStep !== dossierEmbedStep) {
        clearPaneMotion(pane);
        pane.classList.add(direction === 'back' ? 'slide-out-right' : 'slide-out-left');
        scheduleFunnelTimer(function () {
          pane.classList.add('hidden');
          clearPaneMotion(pane);
        }, motionDelay(320, 40));
      } else {
        pane.classList.add('hidden');
        clearPaneMotion(pane);
      }
    }
    const counter = document.getElementById('dossier-embed-counter');
    if (counter) counter.textContent = String(dossierEmbedStep).padStart(2, '0') + ' / 03';
    updateProgressDots('dossier-embed-dots', dossierEmbedStep, 3);

    const prev = document.getElementById('dossier-embed-prev');
    const next = document.getElementById('dossier-embed-next');
    if (prev) prev.classList.toggle('hidden', dossierEmbedStep === 1);
    if (next) {
      next.textContent = dossierEmbedStep === 3 ? 'Abrir WhatsApp' : 'Continuar';
    }
    resetFunnelScroll();
    scheduleSiteResizeNotify('complete');
  }

  function dossierEmbedNext(event) {
    if (dossierEmbedStep < 3) {
      showDossierEmbedStep(dossierEmbedStep + 1);
      return;
    }
    schedulePresentialVisit(event);
  }

  function dossierEmbedPrev() {
    if (dossierEmbedStep > 1) showDossierEmbedStep(dossierEmbedStep - 1);
  }

  registerKioskPurgeUiHook(function (defaults) {
    clearActiveTimers();
    releaseNavigation();
    clearKioskIdleTimer();
    currentStep = defaults.currentStep;
    friendsInvited = defaults.friendsInvited;
    crossPreloadReady = defaults.crossPreloadReady;
    userData = defaults.userData;
    protocolUnlocked = defaults.protocolUnlocked;
    processingStarted = defaults.processingStarted;
    closeStaffAccess();
    resetFunnelToIntro({ persist: false });
    resetKioskIdleTimer();
  });

  function clearKioskIdleTimer() {
    if (kioskIdleTimerId) {
      clearTimeout(kioskIdleTimerId);
      kioskIdleTimerId = null;
    }
  }

  function resolveKioskIdleTimeoutMs() {
    const dossier = document.getElementById('view-dossier');
    const onDossier = dossier && !dossier.classList.contains('view-hidden');
    if (onDossier || currentStep === 8) {
      return KIOSK_IDLE_DOSSIER_TIMEOUT_MS;
    }
    return KIOSK_IDLE_TIMEOUT_MS;
  }

  function resetKioskIdleTimer() {
    clearKioskIdleTimer();
    kioskIdleTimerId = setTimeout(function () {
      purgeKioskSession();
    }, resolveKioskIdleTimeoutMs());
  }

  function bindKioskIdleTracker() {
    if (kioskIdleListenersBound) return;
    kioskIdleListenersBound = true;
    const bumpIdle = function () {
      resetKioskIdleTimer();
    };
    document.addEventListener('touchstart', bumpIdle, { passive: true });
    document.addEventListener('mousemove', bumpIdle, { passive: true });
    document.addEventListener('click', bumpIdle, { passive: true });
    document.addEventListener('keydown', bumpIdle);
    resetKioskIdleTimer();
  }

  function clearCrossPreloadMotion() {
    if (crossPreloadCopyIntervalId) {
      clearInterval(crossPreloadCopyIntervalId);
      crossPreloadCopyIntervalId = null;
    }
  }

  function clearActiveTimers() {
    clearCrossPreloadMotion();
    activeTimers.forEach(function (timerId) {
      clearTimeout(timerId);
    });
    activeTimers.clear();
  }

  function scheduleFunnelTimer(fn, delayMs) {
    const timerId = setTimeout(function () {
      activeTimers.delete(timerId);
      fn();
    }, delayMs);
    activeTimers.add(timerId);
    return timerId;
  }

  function acquireNavigation() {
    if (isNavigating) return false;
    isNavigating = true;
    clearActiveTimers();
    return true;
  }

  function releaseNavigation() {
    isNavigating = false;
  }

  function initLucideIcons() {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function trackMapeamentoStep(stepIndex, stepId) {
    const resolvedId = stepId || ('mapeamento_step_' + stepIndex);
    notifySiteAnalytics(stepIndex, resolvedId);
  }

  function trackMapeamentoContactLead() {
    if (contactLeadTracked) return;
    contactLeadTracked = true;
    trackEvent('generate_lead', {
      funnel_name: MAPEAMENTO_FUNNEL_NAME,
      service_name: MAPEAMENTO_SERVICE_NAME,
      lead_type: 'b2c',
      step_id: 'contact-capture',
      gtm_category: 'conversao',
      gtm_action: 'captura_nome',
      gtm_label: 'mapeamento_capilar',
    });
  }

  function syncChromePhase(phase) {
    notifySiteChrome(phase);
    scheduleSiteResizeNotify(phase === 'complete' ? 'complete' : 'funnel');
  }

  function scheduleSiteResizeNotify(mode) {
    if (resizeNotifyTimer) clearTimeout(resizeNotifyTimer);
    resizeNotifyTimer = setTimeout(function () {
      notifySiteResize(measureEmbedNotifyHeight(mode), mode);
    }, 80);
  }

  function bindSiteResizeObserver() {
    if (window.parent === window || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(function () {
      const dossier = document.getElementById('view-dossier');
      const mode = dossier && !dossier.classList.contains('view-hidden') ? 'complete' : 'funnel';
      scheduleSiteResizeNotify(mode);
    });

    if (isEmbedMode()) {
      const funnel = document.getElementById('view-funnel');
      const wizard = document.getElementById('dossier-embed-wizard');
      if (funnel) observer.observe(funnel);
      if (wizard) observer.observe(wizard);
      return;
    }

    observer.observe(document.documentElement);
    if (document.body) observer.observe(document.body);
  }

  function persistTriagemProgress(overrides) {
    saveTriagemSession({
      completed: overrides && overrides.completed != null ? overrides.completed : undefined,
      currentStep: overrides && overrides.currentStep != null ? overrides.currentStep : currentStep,
      userData: userData,
    });
  }

  function syncDynNames(name) {
    const display = formatDisplayName(name);
    document.querySelectorAll('.dyn-name').forEach(function (el) {
      el.textContent = display;
    });
  }

  function focusNameInput() {
    const nameInput = document.getElementById('user-name');
    if (!nameInput) return;
    requestAnimationFrame(function () {
      nameInput.focus({ preventScroll: true });
    });
  }

  function syncIntroProgress() {
    dom.safeUpdate('step-counter', '01 / 07');
    dom.safeUpdate('semantic-progress', TRIAGEM_NOMENCLATURE.progressIdle);
    updateProgressDots('progress-dots', 1, TOTAL_STEPS);
  }

  function syncIntroChrome() {
    const hdr = document.getElementById('progress-header');
    if (hdr) {
      if (introSubstep === 'welcome') hdr.classList.add('hidden');
      else hdr.classList.remove('hidden');
    }
    if (introSubstep === 'structure') syncIntroProgress();
  }

  function beginStructureStep() {
    const welcome = document.getElementById('step-intro');
    const structure = document.getElementById('step-intro-structure');
    if (!welcome || !structure) return;

    introSubstep = 'structure';
    transitionPane(welcome, structure, 'forward');

    const hdr = document.getElementById('progress-header');
    if (hdr) hdr.classList.remove('hidden');
    syncIntroProgress();
    syncChromePhase('immersion');
    scheduleSiteResizeNotify('funnel');
  }

  function showWelcomeStep() {
    const welcome = document.getElementById('step-intro');
    const structure = document.getElementById('step-intro-structure');
    if (!welcome || !structure) return;

    introSubstep = 'welcome';
    transitionPane(structure, welcome, 'back');

    const hdr = document.getElementById('progress-header');
    if (hdr) hdr.classList.add('hidden');
    syncChromePhase('intro');
    scheduleSiteResizeNotify('funnel');
  }

  function showFunnelStep(stepIndex) {
    const intro = document.getElementById('step-intro');
    const introStructure = document.getElementById('step-intro-structure');
    const target = document.getElementById('step-' + stepIndex);

    document.querySelectorAll('.step-pane').forEach(function (pane) {
      if (pane === target) return;
      pane.classList.add('hidden');
      clearPaneMotion(pane);
    });

    if (intro && intro !== target) {
      intro.classList.add('hidden');
      clearPaneMotion(intro);
    }
    if (introStructure) {
      introStructure.classList.add('hidden');
      clearPaneMotion(introStructure);
    }

    if (target) {
      target.classList.remove('hidden');
      clearPaneMotion(target);
      target.classList.add('slide-in-right');
      focusPane(target);
    }

    if (stepIndex === 2) resetHistorySubstep();
    else historySubstep = 'procedures';

    const hdr = document.getElementById('progress-header');
    const ft = document.getElementById('footer-controls');
    const showProgressHeader = stepIndex >= 0;
    const showFooter = stepIndex >= 0;
    if (hdr) hdr.classList.toggle('hidden', !showProgressHeader);
    if (ft) ft.classList.toggle('hidden', !showFooter);
    document.body.classList.toggle('funnel-footer-active', showFooter);
    setMolecularStripVisible(document, stepIndex < 0);
    syncStepChrome();
    resetFunnelScroll();
  }

  function syncStepChrome() {
    updateProgress();
    syncFooterNextButton();
  }

  function clearMapeamentoHash() {
    try {
      const base = window.location.pathname + window.location.search;
      if (window.location.hash) {
        history.replaceState(null, '', base);
      }
    } catch {
      /* noop */
    }
  }

  function restartMapping() {
    clearActiveTimers();
    releaseNavigation();
    clearMapeamentoHash();
    purgeKioskSession();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initLucideIcons();
  }

  function renderDossierView() {
    const wizard = document.getElementById('dossier-embed-wizard');
    const full = document.getElementById('dossier-full-report');

    if (isEmbedMode()) {
      renderEmbedDossierWizard(dom, userData, {
        document,
        refreshIcons: initLucideIcons,
      });
      if (wizard) wizard.classList.remove('view-hidden');
      if (full) full.classList.add('view-hidden');
      setScheduleFabVisible(document, false);
      showDossierEmbedStep(1);
      scheduleSiteResizeNotify('complete');
      return;
    }

    if (wizard) wizard.classList.add('view-hidden');
    if (full) full.classList.remove('view-hidden');

    const dossierDeps = {
      document,
      refreshIcons: initLucideIcons,
      onLazySectionReady: function () { scheduleSiteResizeNotify('complete'); },
    };
    renderDynamicDossierEssential(dom, userData, dossierDeps);
    observeDossierLazySections(dom, userData, dossierDeps);
    scheduleSiteResizeNotify('complete');
  }

  function restoreCompletedTriagem(session) {
    userData = Object.assign(createInitialUserData(), session.userData || {});
    if (userData.name) {
      syncDynNames(userData.name);
      contactLeadTracked = true;
    }

    const funnel = document.getElementById('view-funnel');
    if (funnel) funnel.classList.add('view-hidden');
    renderDossierView();
    protocolUnlocked = false;
    resetProtocolLockState(document);
    setMolecularStripVisible(document, false);
    setScheduleFabVisible(document, !isEmbedMode());

    const dossier = document.getElementById('view-dossier');
    if (dossier) {
      dossier.classList.remove('view-hidden');
      dossier.classList.add('fade-in');
    }
    currentStep = 8;
    syncChromePhase('complete');
  }

  function restoreInProgressTriagem(session) {
    userData = Object.assign(createInitialUserData(), session.userData || {});
    currentStep = session.currentStep;

    if (userData.name) {
      syncDynNames(userData.name);
      const nameInput = document.getElementById('user-name');
      if (nameInput) nameInput.value = userData.name;
      if (currentStep > 0) contactLeadTracked = true;
    }
    if (userData.struct) {
      dom.safeUpdate('intro-struct-label', userData.struct);
      dom.safeUpdate('dos-struct', userData.struct);
    }

    if (currentStep <= 0) {
      syncChromePhase('name');
      showFunnelStep(0);
      focusNameInput();
      return;
    }

    syncChromePhase('immersion');
    showFunnelStep(currentStep);
    updateProgress();
    if (currentStep === 2) updateHistoryStepUI();
    if (currentStep === 5) updateWashStepUI();
    if (currentStep === 6) initRegionStepUI();
    restoreCheckboxSelectionsFromUserData();
  }

  function tryRestoreFromHash() {
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    if (hash !== 'dossier' && hash !== 'dossie') return false;

    const session = loadTriagemSession();
    const integrity = assessTriagemSessionIntegrity(session);
    if (session && session.completed && session.userData && integrity.valid && !integrity.resetToIntro) {
      restoreCompletedTriagem(session);
      return true;
    }
    return false;
  }

  function bootTriagemFromSession() {
    if (tryRestoreFromHash()) return;

    const session = loadTriagemSession();
    if (!session) {
      resetFunnelToIntro({ persist: false });
      return;
    }

    const integrity = assessTriagemSessionIntegrity(session);
    if (!integrity.valid || integrity.resetToIntro) {
      resetFunnelToIntro({ persist: true });
      return;
    }

    if (session.completed) {
      restoreCompletedTriagem(session);
      return;
    }

    if (integrity.shouldSimulateProcessing) {
      userData = Object.assign(createInitialUserData(), session.userData || {});
      if (userData.name) {
        syncDynNames(userData.name);
        contactLeadTracked = true;
      }
      currentStep = 8;
      syncChromePhase('immersion');
      showFunnelStep(8);
      updateProgress();
      simulateProcessing();
      return;
    }

    if (session.currentStep >= 0 && session.userData) {
      restoreInProgressTriagem(session);
      return;
    }

    resetFunnelToIntro({ persist: false });
  }

  function resetFunnelToIntro(options) {
    const persist = !options || options.persist !== false;
    clearActiveTimers();
    releaseNavigation();
    processingStarted = false;
    crossPreloadReady = false;
    currentStep = -1;
    introSubstep = 'welcome';
    userData = createInitialUserData();
    contactLeadTracked = false;
    protocolUnlocked = false;
    friendsInvited = 0;

    if (persist) {
      saveTriagemSession({ completed: false, currentStep: -1, userData: null });
    }

    document.querySelectorAll('.step-pane').forEach(function (pane) {
      pane.classList.add('hidden');
      clearPaneMotion(pane);
    });
    resetHistorySubstep();
    clearStepFieldErrors();

    const intro = document.getElementById('step-intro');
    const introStructure = document.getElementById('step-intro-structure');
    if (introStructure) {
      introStructure.classList.add('hidden');
      clearPaneMotion(introStructure);
    }
    if (intro) {
      intro.classList.remove('hidden', 'fade-out');
      intro.classList.add('slide-up');
    }

    const hdr = document.getElementById('progress-header');
    if (hdr) hdr.classList.add('hidden');

    const ft = document.getElementById('footer-controls');
    if (ft) ft.classList.add('hidden');
    document.body.classList.remove('funnel-footer-active');

    const funnel = document.getElementById('view-funnel');
    const dossier = document.getElementById('view-dossier');
    const loader = document.getElementById('view-transition');
    if (funnel) funnel.classList.remove('view-hidden', 'fade-out');
    if (dossier) dossier.classList.add('view-hidden');
    if (loader) loader.classList.add('view-hidden');

    setMolecularStripVisible(document, true);
    setScheduleFabVisible(document, false);
    syncChromePhase('intro');
    ensureProgressDots('progress-dots', TOTAL_STEPS);
    ensureProgressDots('dossier-embed-dots', 3);
    initLucideIcons();
  }

  function clearHistoryWindowSelection() {
    document.querySelectorAll('.history-segment-opt').forEach(function (opt) {
      opt.classList.remove('selected');
      opt.setAttribute('aria-pressed', 'false');
    });
  }

  function isHistoryWindowSectionShown() {
    return userData.history.length > 0 && !userData.history.includes('virgem');
  }

  function getHistoryStepFooterLabel() {
    if (historySubstep === 'procedures' && isHistoryWindowSectionShown()) {
      return 'Continuar';
    }
    if (historySubstep === 'window' && !userData.historyWindow) {
      return 'Selecione o Tempo Acima';
    }
    return FOOTER_NEXT_LABELS[2] || TRIAGEM_NOMENCLATURE.historyConfirm;
  }

  function focusHistoryWindowSection(section) {
    if (!section) return;
    section.classList.remove('history-window-reveal-attention');
    requestAnimationFrame(function () {
      section.classList.add('history-window-reveal-attention');
      scheduleFunnelTimer(function () {
        section.classList.remove('history-window-reveal-attention');
      }, 1500);
    });
  }

  function updateHistoryStepUI() {
    const isVirgem = userData.history.includes('virgem');
    const hasProcedures = userData.history.length > 0;
    const summary = document.getElementById('history-selection-summary');
    const summaryText = document.getElementById('history-summary-text');
    const err = document.getElementById('history-window-error');

    if (isVirgem) {
      userData.historyWindow = 'virgem';
      clearHistoryWindowSelection();
      if (historySubstep === 'window') showHistorySubstep('procedures', 'back');
    } else if (!hasProcedures) {
      userData.historyWindow = '';
      clearHistoryWindowSelection();
      if (historySubstep === 'window') showHistorySubstep('procedures', 'back');
    }

    if (summary && summaryText) {
      const ready = isHistoryStepReady(userData);
      summary.classList.toggle('hidden', !ready || historySubstep !== 'window');
      if (ready) summaryText.textContent = formatHistorySummary(userData);
    }

    if (err) err.classList.add('hidden');
    if (userData.goal) {
      dom.safeUpdate('lbl-goal-dyn', formatGoalDisplayLabel(userData.goal));
    }
    syncFooterNextButton();
  }

  function updateWashStepUI() {
    const summary = document.getElementById('wash-selection-summary');
    const summaryText = document.getElementById('wash-summary-text');
    const ready = userData.wash_frequency >= 1 && userData.wash_frequency <= 4;

    document.querySelectorAll('#wash-frequency-options .history-segment-opt').forEach(function (opt) {
      const match = Number(opt.getAttribute('data-wash')) === Number(userData.wash_frequency);
      opt.classList.toggle('selected', match);
      opt.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    if (summary && summaryText) {
      summary.classList.toggle('hidden', !ready);
      if (ready) summaryText.textContent = formatWashSummary(userData);
    }
    syncFooterNextButton();
  }

  function initRegionStepUI() {
    const sel = document.getElementById('region-zone');
    if (!sel) return;
    if (!userData.region) userData.region = 'auto';
    sel.value = userData.region;
  }

  function updateProgress() {
    if (currentStep === -1) {
      if (introSubstep === 'structure') syncIntroProgress();
      syncFooterNextButton();
      return;
    }
    if (currentStep >= 0 && currentStep <= 8) {
      const displayStep = getDisplayStep(currentStep);
      dom.safeUpdate('step-counter', `${String(displayStep).padStart(2, '0')} / ${String(TOTAL_STEPS).padStart(2, '0')}`);
      dom.safeUpdate('semantic-progress', SEMANTIC_LABELS[currentStep] || SEMANTIC_LABELS[8]);
      updateProgressDots('progress-dots', displayStep, TOTAL_STEPS);
    }
    syncFooterNextButton();
  }

  const FOOTER_NEXT_LABELS = {
    0: TRIAGEM_NOMENCLATURE.step0Button,
    2: 'Confirmar histórico',
    3: 'Confirmar sintomas',
    5: 'Confirmar frequência',
    6: 'Confirmar ambiente',
  };

  const FOOTER_AUTO_ADVANCE_STEPS = { 1: true, 4: true };

  function isCrossPreloadPaneVisible() {
    const step35 = document.getElementById('step-3-5');
    return !!(step35 && !step35.classList.contains('hidden'));
  }

  function isFinalPreloadPaneVisible() {
    const step7 = document.getElementById('step-7');
    return !!(step7 && !step7.classList.contains('hidden'));
  }

  function syncFooterDock() {
    const ft = document.getElementById('footer-controls');
    if (!ft || !document.body.classList.contains('is-mobile-view')) {
      if (ft) ft.classList.remove('funnel-footer--docked');
      document.body.classList.remove('funnel-footer-docked');
      return;
    }

    const funnel = document.getElementById('view-funnel');
    const funnelOpen = funnel && !funnel.classList.contains('view-hidden');
    const inFunnelSteps = currentStep >= 0 && currentStep < 8;
    const btn = document.getElementById('btn-footer-next');
    const hint = document.getElementById('footer-step-hint');
    const nextVisible = !!(btn && !btn.classList.contains('hidden'));
    const hintVisible = !!(hint && !hint.classList.contains('hidden'));
    const preloadPending = (currentStep === 3 && isCrossPreloadPaneVisible() && !crossPreloadReady)
      || (currentStep === 6 && isFinalPreloadPaneVisible());
    const dockVisible = inFunnelSteps && funnelOpen && !preloadPending && (nextVisible || hintVisible);

    ft.classList.toggle('funnel-footer--docked', dockVisible);
    ft.classList.toggle('hidden', !dockVisible);
    document.body.classList.toggle('funnel-footer-docked', dockVisible);
  }

  function syncFooterNextButton() {
    const btn = document.getElementById('btn-footer-next');
    const hint = document.getElementById('footer-step-hint');
    if (!btn) return;

    if (currentStep < 0 || currentStep >= 8) {
      btn.classList.add('hidden');
      if (hint) hint.classList.add('hidden');
      syncFooterDock();
      return;
    }

    if (FOOTER_AUTO_ADVANCE_STEPS[currentStep]) {
      btn.classList.add('hidden');
      if (hint) {
        hint.textContent = 'Selecione uma opção acima para continuar';
        hint.classList.remove('hidden');
      }
      syncFooterDock();
      return;
    }

    if (currentStep === 3 && isCrossPreloadPaneVisible()) {
      if (hint) hint.classList.add('hidden');
      btn.classList.add('hidden');
      btn.disabled = true;
      syncFooterDock();
      return;
    }

    if (currentStep === 6 && isFinalPreloadPaneVisible()) {
      if (hint) hint.classList.add('hidden');
      btn.classList.add('hidden');
      btn.disabled = true;
      syncFooterDock();
      return;
    }

    if (hint) hint.classList.add('hidden');
    btn.classList.remove('hidden');
    btn.textContent = FOOTER_NEXT_LABELS[currentStep] || 'Continuar';

    if (currentStep === 2) {
      if (historySubstep === 'procedures') {
        btn.disabled = userData.history.length === 0;
      } else {
        btn.disabled = !isHistoryStepReady(userData);
      }
      btn.textContent = getHistoryStepFooterLabel();
    } else if (currentStep === 5) {
      btn.disabled = !(userData.wash_frequency >= 1 && userData.wash_frequency <= 4);
    } else {
      btn.disabled = false;
    }
    syncFooterDock();
  }

  function footerNext() {
    if (isNavigating) return;
    if (currentStep === 2) {
      confirmHistoryStep();
      return;
    }
    if (currentStep === 3 && isCrossPreloadPaneVisible() && crossPreloadReady) {
      confirmCrossPreloadContinue();
      return;
    }
    if (currentStep === 6) {
      confirmEnvironmentStep();
      return;
    }
    nextStep();
  }

  function motionDelay(normalMs, fastMs) {
    if (fastMs === undefined) fastMs = 60;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return fastMs;
    }
    return normalMs;
  }

  function runFunnelPreloadPane(options) {
    const hideEl = options.hideEl;
    const showEl = options.showEl;
    const statusElId = options.statusElId;
    const barId = options.barId;
    const progressId = options.progressId;
    const onComplete = options.onComplete;
    const statusEl = document.getElementById(statusElId);
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    clearCrossPreloadMotion();
    crossPreloadCopyIndex = 0;

    if (hideEl) hideEl.classList.add('hidden');
    if (showEl) {
      showEl.classList.remove('hidden');
      showEl.setAttribute('aria-busy', 'true');
      showEl.classList.toggle('cross-preload--reduced', reduced);
    }
    syncFooterNextButton();

    dom.safeUpdate(statusElId, CROSS_PRELOAD_COPY_LINES[0]);

    const bar = document.getElementById(barId);
    const progress = document.getElementById(progressId);
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
    }
    if (progress) progress.setAttribute('aria-valuenow', '0');

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (bar) {
          bar.style.transition = reduced ? 'width 0.2s linear' : 'width 3s cubic-bezier(0.16, 1, 0.3, 1)';
          bar.style.width = '100%';
        }
        if (progress) progress.setAttribute('aria-valuenow', '100');
      });
    });

    if (!reduced && statusEl) {
      crossPreloadCopyIntervalId = setInterval(function () {
        crossPreloadCopyIndex = (crossPreloadCopyIndex + 1) % CROSS_PRELOAD_COPY_LINES.length;
        statusEl.textContent = CROSS_PRELOAD_COPY_LINES[crossPreloadCopyIndex];
        statusEl.classList.remove('cross-preload-status--tick');
        void statusEl.offsetWidth;
        statusEl.classList.add('cross-preload-status--tick');
      }, motionDelay(CROSS_PRELOAD_COPY_INTERVAL_MS, 0));
    }

    scheduleFunnelTimer(function () {
      clearCrossPreloadMotion();
      if (showEl) showEl.setAttribute('aria-busy', 'false');
      if (statusEl) {
        statusEl.textContent = CROSS_PRELOAD_COPY_LINES[CROSS_PRELOAD_COPY_LINES.length - 1];
      }
      if (onComplete) onComplete();
    }, motionDelay(CROSS_PRELOAD_MS, 320));
  }

  function runCrossAnalysisPreload() {
    const step3 = document.getElementById('step-3');
    const step35 = document.getElementById('step-3-5');

    crossPreloadReady = false;
    dom.safeUpdate('cross-goal-dyn', userData.goal || '—');
    dom.safeUpdate('cross-preload-symptoms', `Indicadores do fio: ${formatSymptomsSummary(userData)}`);

    runFunnelPreloadPane({
      hideEl: step3,
      showEl: step35,
      statusElId: 'cross-preload-status',
      barId: 'cross-preload-bar',
      progressId: 'cross-preload-progress',
      onComplete: function () {
        crossPreloadReady = true;
        releaseNavigation();
        confirmCrossPreloadContinue();
      },
    });
  }

  function runFinalMappingPreload() {
    const step6 = document.getElementById('step-6');
    const step7 = document.getElementById('step-7');

    runFunnelPreloadPane({
      hideEl: step6,
      showEl: step7,
      statusElId: 'final-preload-status',
      barId: 'final-preload-bar',
      progressId: 'final-preload-progress',
      onComplete: completeFinalMappingPreload,
    });
  }

  function completeFinalMappingPreload() {
    const step7 = document.getElementById('step-7');
    if (step7) {
      step7.classList.add('hidden');
      step7.classList.remove('cross-preload--reduced');
    }
    currentStep = 8;
    const hdr = document.getElementById('progress-header');
    const ft = document.getElementById('footer-controls');
    if (hdr) hdr.classList.add('hidden');
    if (ft) ft.classList.add('hidden');
    updateProgress();
    trackMapeamentoStep(8, 'step-8');
    persistTriagemProgress({ currentStep: 8 });
    releaseNavigation();
    simulateProcessing();
  }

  function confirmEnvironmentStep() {
    if (isNavigating) return;
    if (!acquireNavigation()) return;
    persistTriagemProgress({ currentStep: 6 });
    runFinalMappingPreload();
  }

  function simulateProcessing() {
    if (processingStarted) return;
    processingStarted = true;
    if (!isNavigating && !acquireNavigation()) {
      processingStarted = false;
      return;
    }

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const txt = document.getElementById('loader-text');
    if (txt && !reduced) {
      scheduleFunnelTimer(function () { txt.style.transform = 'translateY(-24px)'; }, motionDelay(400, 0));
      scheduleFunnelTimer(function () { txt.style.transform = 'translateY(-48px)'; }, motionDelay(800, 0));
      scheduleFunnelTimer(function () { txt.style.transform = 'translateY(-72px)'; }, motionDelay(1200, 0));
    }
    scheduleFunnelTimer(function () {
      trackMapeamentoStep(8, 'step-dossier-ready');
      generateFinalDossier();
    }, motionDelay(PROCESSING_MS));
  }

  function generateFinalDossier() {
    const funnel = document.getElementById('view-funnel');
    if (funnel) funnel.classList.add('fade-out');

    scheduleFunnelTimer(function () {
      if (funnel) funnel.classList.add('view-hidden');
      const loader = document.getElementById('view-transition');
      if (loader) {
        loader.classList.remove('view-hidden');
        loader.classList.add('fade-in');
      }

      scheduleFunnelTimer(function () {
        if (loader) loader.classList.add('fade-out');
        scheduleFunnelTimer(function () {
          if (loader) loader.classList.add('view-hidden');

          renderDossierView();
          protocolUnlocked = false;
          resetProtocolLockState(document);
          setMolecularStripVisible(document, false);
          setScheduleFabVisible(document, !isEmbedMode());

          const dossier = document.getElementById('view-dossier');
          if (dossier) {
            dossier.classList.remove('view-hidden');
            dossier.classList.add('fade-in');
          }
          persistTriagemProgress({ completed: true, currentStep: 8 });
          syncChromePhase('complete');
          resetFunnelScroll();
          releaseNavigation();
        }, motionDelay(TRANSITION_FADE_MS));
      }, motionDelay(TRANSITION_MS));
    }, motionDelay(TRANSITION_FADE_MS));
  }

  function reducedMotionScroll() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function openLabView(viewId) {
    const views = ['view-funnel', 'view-transition', 'view-dossier'];
    views.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('view-hidden');
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.remove('view-hidden');
      target.classList.add('fade-in');
    }
    setMolecularStripVisible(document, viewId === 'view-funnel' && currentStep < 0);
    setScheduleFabVisible(document, viewId === 'view-dossier');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initLucideIcons();
  }

  function applyMapeamentoHash() {
    tryRestoreFromHash();
  }

  function startMapping(structValue) {
    if (!acquireNavigation()) return;

    userData.struct = structValue;
    dom.safeUpdate('intro-struct-label', structValue);
    dom.safeUpdate('dos-struct', structValue);

    const structure = document.getElementById('step-intro-structure');
    const step0 = document.getElementById('step-0');
    currentStep = 0;
    transitionPane(structure, step0, 'forward');

    const hdr = document.getElementById('progress-header');
    const ft = document.getElementById('footer-controls');
    if (hdr) hdr.classList.remove('hidden');
    if (ft) ft.classList.remove('hidden');
    document.body.classList.add('funnel-footer-active');
    setMolecularStripVisible(document, false);
    syncStepChrome();
    trackMapeamentoStep(0, 'step-intro-complete');
    syncChromePhase('name');
    persistTriagemProgress({ currentStep: 0 });
    focusNameInput();
    releaseNavigation();
  }

  function advanceStepCore() {
    if (currentStep < 8) {
      const currEl = document.getElementById(`step-${currentStep}`);
      const prevStepIndex = currentStep;
      if (currentStep === 3) currentStep++;
      else currentStep++;
      if (currentStep === 7) currentStep++;

      const nextEl = document.getElementById(`step-${currentStep}`);
      transitionPane(currEl, nextEl, 'forward');
      focusPane(nextEl);
      if (prevStepIndex === 2) resetHistorySubstep();

      updateProgress();
      if (currentStep === 2) {
        resetHistorySubstep();
        updateHistoryStepUI();
      }
      if (currentStep === 5) updateWashStepUI();
      if (currentStep === 6) initRegionStepUI();
      trackMapeamentoStep(currentStep, 'step-' + currentStep);
      persistTriagemProgress({ currentStep: currentStep });
      resetFunnelScroll();

      if (currentStep === 8) {
        const hdr = document.getElementById('progress-header');
        const ft = document.getElementById('footer-controls');
        if (hdr) hdr.classList.add('hidden');
        if (ft) ft.classList.add('hidden');
        simulateProcessing();
        return;
      }
    }
    releaseNavigation();
  }

  function nextStep() {
    if (isNavigating) return;
    if (currentStep === -1) return;

    if (currentStep === 0) {
      const nameInput = document.getElementById('user-name');
      if (!nameInput || !nameInput.value.trim()) {
        setFieldError('user-name', 'user-name-error', true);
        if (nameInput) nameInput.focus({ preventScroll: true });
        return;
      }
      setFieldError('user-name', 'user-name-error', false);
      if (!acquireNavigation()) return;

      userData.name = nameInput.value.trim();
      syncDynNames(userData.name);
      trackMapeamentoContactLead();

      const hdr = document.getElementById('progress-header');
      const ft = document.getElementById('footer-controls');
      if (hdr) hdr.classList.remove('hidden');
      if (ft) ft.classList.remove('hidden');
      syncChromePhase('immersion');
      persistTriagemProgress({ currentStep: 0 });
    } else if (!acquireNavigation()) {
      return;
    }

    if (currentStep === 5) {
      if (!userData.wash_frequency || userData.wash_frequency < 1) {
        setFieldError(null, 'wash-frequency-error', true);
        releaseNavigation();
        return;
      }
      setFieldError(null, 'wash-frequency-error', false);
    }

    if (currentStep === 3) {
      if (isCrossPreloadPaneVisible()) {
        if (crossPreloadReady) confirmCrossPreloadContinue();
        else releaseNavigation();
        return;
      }
      if (userData.symptoms.length === 0) {
        setFieldError(null, 'symptoms-error', true);
        releaseNavigation();
        return;
      }
      setFieldError(null, 'symptoms-error', false);
      runCrossAnalysisPreload();
      return;
    }

    advanceStepCore();
  }

  function prevStep() {
    clearActiveTimers();
    releaseNavigation();
    processingStarted = false;

    if (currentStep === 2 && historySubstep === 'window') {
      showHistorySubstep('procedures', 'back');
      return;
    }

    if (currentStep > 1) {
      const currEl = document.getElementById(`step-${currentStep}`);
      if (currentStep === 4) {
        crossPreloadReady = false;
        clearCrossPreloadMotion();
        const step35 = document.getElementById('step-3-5');
        const bar = document.getElementById('cross-preload-bar');
        const statusEl = document.getElementById('cross-preload-status');
        if (step35) {
          step35.classList.add('hidden');
          step35.classList.remove('cross-preload--reduced');
        }
        if (bar) {
          bar.style.width = '0%';
          bar.style.transition = '';
        }
        if (statusEl) {
          statusEl.textContent = CROSS_PRELOAD_COPY_LINES[0];
          statusEl.classList.remove('cross-preload-status--tick');
        }
        currentStep = 3;
      } else {
        currentStep--;
        if (currentStep === 7) currentStep--;
      }

      const prevEl = document.getElementById(`step-${currentStep}`);
      transitionPane(currEl, prevEl, 'back');
      updateProgress();
      if (currentStep === 2) {
        resetHistorySubstep();
        updateHistoryStepUI();
        initLucideIcons();
      }
      if (currentStep === 5) updateWashStepUI();
    } else if (currentStep === 1) {
      const currEl = document.getElementById('step-1');
      currentStep = 0;
      const prevEl = document.getElementById('step-0');
      transitionPane(currEl, prevEl, 'back');

      const hdr = document.getElementById('progress-header');
      const ft = document.getElementById('footer-controls');
      if (hdr) hdr.classList.remove('hidden');
      if (ft) ft.classList.remove('hidden');
      document.body.classList.add('funnel-footer-active');
      setMolecularStripVisible(document, false);
      syncChromePhase('name');
      updateProgress();
      persistTriagemProgress({ currentStep: 0 });
    } else if (currentStep === 0) {
      const currEl = document.getElementById('step-0');
      currentStep = -1;
      introSubstep = 'structure';
      userData.name = '';
      const nameInput = document.getElementById('user-name');
      if (nameInput) nameInput.value = '';
      setFieldError('user-name', 'user-name-error', false);

      const structure = document.getElementById('step-intro-structure');
      transitionPane(currEl, structure, 'back');

      const hdr = document.getElementById('progress-header');
      const ft = document.getElementById('footer-controls');
      if (hdr) hdr.classList.remove('hidden');
      if (ft) ft.classList.add('hidden');
      document.body.classList.remove('funnel-footer-active');
      setMolecularStripVisible(document, false);
      syncChromePhase('immersion');
      syncIntroProgress();
      persistTriagemProgress({ currentStep: -1 });
      syncFooterNextButton();
    }
  }

  function selectOption(el, group, val) {
    if (!acquireNavigation()) return;

    const siblings = el.parentNode.querySelectorAll('.option-card');
    siblings.forEach(function (sib) { sib.classList.remove('selected'); });
    el.classList.add('selected');

    if (group === 'goal') {
      userData.goal = val;
      dom.safeUpdate('lbl-goal-dyn', formatGoalDisplayLabel(val));
    }
    if (group === 'caliber') {
      userData.caliber = val;
      dom.safeUpdate('dos-caliber', val);
    }
    if (group === 'lifestyle') {
      userData.lifestyle = val;
    }

    scheduleFunnelTimer(function () {
      advanceStepCore();
    }, 350);
  }

  function setCheckboxVisual(label, checked, accent) {
    if (!label) return;
    label.classList.toggle('checked', checked);
    const ind = label.querySelector('.chk-icon');
    if (!ind) return;
    ind.classList.remove('chk-icon--accent', 'bg-[#10B981]', 'border-[#10B981]');
    if (checked) {
      if (accent === 'green') {
        ind.classList.add('bg-[#10B981]', 'border-[#10B981]');
      } else {
        ind.classList.add('chk-icon--accent');
      }
      ind.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-white"></i>';
    } else {
      ind.innerHTML = '';
    }
  }

  function clearPeerCheckboxLabels(peerClass, exceptLabel) {
    document.querySelectorAll('.' + peerClass).forEach(function (peerLabel) {
      if (peerLabel === exceptLabel) return;
      const peerInput = peerLabel.querySelector('.triage-chk-input');
      if (peerInput) peerInput.checked = false;
      setCheckboxVisual(peerLabel, false, peerInput ? peerInput.dataset.accent : undefined);
    });
  }

  function applyMultiSelection(label, group, val, checked) {
    const input = label ? label.querySelector('.triage-chk-input') : null;

    if (group === 'history' && checked) {
      const virgemInput = document.getElementById('triagem-history-virgem');
      if (virgemInput && virgemInput.checked) {
        virgemInput.checked = false;
        setCheckboxVisual(document.getElementById('chk-virgem'), false);
        userData.history = [];
        userData.historyWindow = '';
      }
    }

    if (group === 'symptoms' && checked) {
      const saudavelInput = document.getElementById('triagem-symptom-saudavel');
      if (saudavelInput && saudavelInput.checked) {
        saudavelInput.checked = false;
        setCheckboxVisual(document.getElementById('chk-saudavel'), false, 'green');
        userData.symptoms = [];
      }
    }

    setCheckboxVisual(label, checked, input ? input.dataset.accent : undefined);

    if (checked) {
      if (!userData[group].includes(val)) userData[group].push(val);
    } else {
      userData[group] = userData[group].filter(function (i) { return i !== val; });
    }

    if (group === 'history') {
      if (userData.history.length > 0) setFieldError(null, 'history-procedures-error', false);
      updateHistoryStepUI();
    }
    if (group === 'symptoms' && userData.symptoms.length > 0) {
      setFieldError(null, 'symptoms-error', false);
    }
    initLucideIcons();
  }

  function applyExclusiveSelection(label, group, val, checked, peerClass) {
    const input = label ? label.querySelector('.triage-chk-input') : null;

    if (checked) {
      clearPeerCheckboxLabels(peerClass, label);
      if (input) input.checked = true;
      setCheckboxVisual(label, true, input ? input.dataset.accent : undefined);
      userData[group] = [val];
      if (group === 'history' && val === 'virgem') {
        userData.historyWindow = 'virgem';
        clearHistoryWindowSelection();
      }
    } else {
      if (input) input.checked = false;
      setCheckboxVisual(label, false, input ? input.dataset.accent : undefined);
      userData[group] = [];
      if (group === 'history') userData.historyWindow = '';
    }

    if (group === 'history') updateHistoryStepUI();
    initLucideIcons();
    if (group === 'history' && checked && val === 'virgem') tryAutoAdvanceStep();
  }

  function applyExclusiveSymptomSelection(label, group, val, checked, peerClass) {
    const input = label ? label.querySelector('.triage-chk-input') : null;

    if (checked) {
      clearPeerCheckboxLabels(peerClass, label);
      if (input) input.checked = true;
      setCheckboxVisual(label, true, 'green');
      userData[group] = [val];
    } else {
      if (input) input.checked = false;
      setCheckboxVisual(label, false, 'green');
      userData[group] = [];
    }

    initLucideIcons();
  }

  function handleTriagemCheckboxChange(event) {
    const input = event.target;
    if (!input || !input.classList.contains('triage-chk-input')) return;
    const label = input.closest('label');
    const group = input.dataset.group;
    const val = input.dataset.value;
    const mode = input.dataset.mode || 'multi';

    if (mode === 'exclusive') {
      applyExclusiveSelection(label, group, val, input.checked, input.dataset.peers);
      return;
    }
    if (mode === 'exclusive-symptom') {
      applyExclusiveSymptomSelection(label, group, val, input.checked, input.dataset.peers);
      return;
    }
    applyMultiSelection(label, group, val, input.checked);
  }

  function bindTriagemCheckboxInputs() {
    if (document.body.dataset.triagemChkBound === '1') return;
    document.body.dataset.triagemChkBound = '1';
    document.addEventListener('change', handleTriagemCheckboxChange);
  }

  function restoreCheckboxSelectionsFromUserData() {
    document.querySelectorAll('.triage-chk-input').forEach(function (input) {
      const group = input.dataset.group;
      const val = input.dataset.value;
      const values = userData[group] || [];
      const checked = values.includes(val);
      input.checked = checked;
      setCheckboxVisual(input.closest('label'), checked, input.dataset.accent);
    });
    initLucideIcons();
  }

  function toggleExclusive(el, group, val, otherClass) {
    const input = el.querySelector('.triage-chk-input');
    const nextChecked = input ? !input.checked : !el.classList.contains('checked');
    if (input) input.checked = nextChecked;
    applyExclusiveSelection(el, group, val, nextChecked, otherClass);
  }

  function confirmCrossPreloadContinue() {
    if (!crossPreloadReady || isNavigating) return;
    if (!acquireNavigation()) return;

    const step35 = document.getElementById('step-3-5');

    crossPreloadReady = false;

    currentStep++;
    const nextStepEl = document.getElementById(`step-${currentStep}`);
    transitionPane(step35, nextStepEl, 'forward');
    updateProgress();
    syncFooterNextButton();
    trackMapeamentoStep(currentStep, 'step-' + currentStep);
    initLucideIcons();
    releaseNavigation();
  }

  function selectHistoryWindow(el, val) {
    document.querySelectorAll('.history-segment-opt').forEach(function (opt) {
      opt.classList.remove('selected');
      opt.setAttribute('aria-pressed', 'false');
    });
    el.classList.add('selected');
    el.setAttribute('aria-pressed', 'true');
    userData.historyWindow = val;
    updateHistoryStepUI();
    if (isHistoryStepReady(userData)) tryAutoAdvanceStep();
  }

  function confirmHistoryStep() {
    if (isNavigating) return;

    if (historySubstep === 'procedures') {
      if (userData.history.length === 0) {
        setFieldError(null, 'history-procedures-error', true);
        return;
      }
      setFieldError(null, 'history-procedures-error', false);
      if (isHistoryWindowSectionShown()) {
        showHistorySubstep('window', 'forward');
        const section = document.getElementById('history-window-section');
        if (section) focusHistoryWindowSection(section);
        return;
      }
    }

    if (!isHistoryStepReady(userData)) {
      const err = document.getElementById('history-window-error');
      const isVirgem = userData.history.includes('virgem');

      if (!isVirgem && userData.history.length === 0) {
        setFieldError(null, 'history-procedures-error', true);
        return;
      }
      setFieldError(null, 'history-procedures-error', false);

      if (err) err.classList.remove('hidden');
      const section = document.getElementById('history-window-section');
      if (section) focusHistoryWindowSection(section);
      return;
    }

    if (!acquireNavigation()) return;

    const btn = document.getElementById('btn-footer-next');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'A validar...';
    }

    scheduleFunnelTimer(function () {
      if (btn) {
        btn.textContent = getHistoryStepFooterLabel();
        btn.disabled = !isHistoryStepReady(userData);
      }
      advanceStepCore();
    }, 420);
  }

  function toggleExclusiveSymptom(el, group, val, otherClass) {
    const input = el.querySelector('.triage-chk-input');
    const nextChecked = input ? !input.checked : !el.classList.contains('checked');
    if (input) input.checked = nextChecked;
    applyExclusiveSymptomSelection(el, group, val, nextChecked, otherClass);
  }

  function toggleMulti(el, group, val) {
    const input = el.querySelector('.triage-chk-input');
    const nextChecked = input ? !input.checked : !el.classList.contains('checked');
    if (input) input.checked = nextChecked;
    applyMultiSelection(el, group, val, nextChecked);
  }

  function selectWashFrequency(el, val) {
    document.querySelectorAll('#wash-frequency-options .history-segment-opt').forEach(function (opt) {
      opt.classList.remove('selected');
      opt.setAttribute('aria-pressed', 'false');
    });
    el.classList.add('selected');
    el.setAttribute('aria-pressed', 'true');
    userData.wash_frequency = val;
    setFieldError(null, 'wash-frequency-error', false);
    updateWashStepUI();
    persistTriagemProgress({ currentStep: 5 });
    tryAutoAdvanceStep();
  }

  function selectRegionZone(val) {
    userData.region = val || 'auto';
    persistTriagemProgress({ currentStep: 6 });
  }

  function sendB2CReferral(btn) {
    const input = document.getElementById('friend-phone');
    if (!input || input.value.length < 8) {
      if (input) {
        input.classList.add('shake', 'border-red-500');
        setTimeout(function () { input.classList.remove('shake', 'border-red-500'); }, 400);
      }
      return;
    }
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<div class="loader-ring w-4 h-4 border-white after:border-white after:w-3 after:h-3 after:m-[1px] mr-2"></div> Processando...';

    setTimeout(function () {
      friendsInvited++;
      if (friendsInvited > 5) friendsInvited = 5;

      dom.safeUpdate('friend-counter', `${friendsInvited}/5 Indicadas`);
      const progress = document.getElementById('friend-progress');
      if (progress) progress.style.width = `${(friendsInvited / 5) * 100}%`;

      btn.classList.remove('bg-[#D97706]', 'hover:bg-[#b46204]');
      btn.classList.add('bg-[#10B981]', 'hover:bg-[#059669]');

      if (friendsInvited === 5) {
        btn.innerHTML = '50% OFF Liberado! <i data-lucide="check-circle" class="w-4 h-4 ml-2"></i>';
        input.value = '';
        input.disabled = true;
        btn.disabled = true;
      } else {
        btn.innerHTML = 'Convite Enviado! <i data-lucide="check" class="w-4 h-4 ml-2"></i>';
        input.value = '';
        setTimeout(function () {
          btn.classList.remove('bg-[#10B981]', 'hover:bg-[#059669]');
          btn.classList.add('bg-[#D97706]', 'hover:bg-[#b46204]');
          btn.innerHTML = originalContent;
          initLucideIcons();
        }, 2000);
      }
      initLucideIcons();
    }, 800);
  }

  function sendB2BReferral(btn) {
    const input = document.getElementById('pro-phone');
    if (!input || input.value.length < 8) {
      if (input) {
        input.classList.add('shake', 'border-red-500');
        setTimeout(function () { input.classList.remove('shake', 'border-red-500'); }, 400);
      }
      return;
    }
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<div class="loader-ring w-4 h-4 border-[#D97706] after:border-[#D97706] after:w-3 after:h-3 after:m-[1px] mr-2"></div> Conectando...';

    setTimeout(function () {
      btn.classList.remove('border-[#D97706]', 'text-[#D97706]', 'hover:bg-[#D97706]', 'hover:text-white');
      btn.classList.add('bg-[#10B981]', 'text-white', 'border-[#10B981]');
      btn.innerHTML = 'Licença B2B Enviada! <i data-lucide="check" class="w-4 h-4 ml-2"></i>';
      input.value = '';
      initLucideIcons();

      setTimeout(function () {
        btn.classList.remove('bg-[#10B981]', 'text-white', 'border-[#10B981]');
        btn.classList.add('border-[#D97706]', 'text-[#D97706]', 'hover:bg-[#D97706]', 'hover:text-white');
        btn.innerHTML = originalContent;
        initLucideIcons();
      }, 3000);
    }, 1200);
  }

  function schedulePresentialVisit(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    const dossierId = userData._handoffSessionId
      || userData._lastDossierId
      || (document.getElementById('dynamic-id') && document.getElementById('dynamic-id').textContent)
      || '';

    let url;
    try {
      url = generateWhatsAppHandoffURL(userData, userData._lastDiagnostics, { dossierId: dossierId });
    } catch {
      url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(
        'Olá! Finalizei meu Mapeamento Capilar Digital e gostaria de agendar minha Avaliação Presencial.'
      );
    }

    clickWhatsApp({
      cta_location: 'dossier_cta',
      service_name: MAPEAMENTO_SERVICE_NAME,
      lead_type: 'b2c',
      dossier_id: dossierId,
      campaign_id: SCHEDULE_CTA.campaignId,
    });

    /* GTM SSOT: iframe only — parent SPA must not mirror click_cta_whatsapp / schedule_service.
       Intentional dual conversion: click_cta_whatsapp (channel) + schedule_service (intent). */

    trackEvent('schedule_service', {
      service_name: MAPEAMENTO_SERVICE_NAME,
      lead_type: 'b2c',
      campaign: SCHEDULE_CTA.campaignId,
      dossier_id: dossierId,
      step: 'dossier-cta',
      cta_location: 'dossier_cta',
    });

    window.open(url, '_blank', 'noopener,noreferrer');

    scheduleFunnelTimer(function () {
      purgeKioskSession();
      clearMapeamentoHash();
    }, KIOSK_HANDOFF_PURGE_DELAY_MS);
  }

  function openStaffAccess() {
    if (protocolUnlocked) return;
    const modal = document.getElementById('staff-access-modal');
    const input = document.getElementById('staff-pin-input');
    const error = document.getElementById('staff-pin-error');
    if (error) error.classList.add('view-hidden');
    if (input) {
      input.value = '';
      input.classList.remove('shake');
    }
    if (modal) {
      modal.classList.remove('view-hidden');
      modal.classList.add('fade-in');
    }
    if (input) {
      setTimeout(function () { input.focus(); }, 100);
    }
    initLucideIcons();
  }

  function closeStaffAccess() {
    const modal = document.getElementById('staff-access-modal');
    const input = document.getElementById('staff-pin-input');
    const error = document.getElementById('staff-pin-error');
    if (modal) modal.classList.add('view-hidden');
    if (input) input.value = '';
    if (error) error.classList.add('view-hidden');
  }

  function unlockApplicationProtocol() {
    protocolUnlocked = true;
    const wrapper = document.getElementById('protocolo-aplicacao-wrapper');
    const overlay = document.getElementById('protocol-lock-overlay');
    if (wrapper) {
      wrapper.classList.remove('protocol-application--locked');
      wrapper.classList.add('protocol-application--unlocked');
    }
    if (overlay) {
      overlay.classList.add('view-hidden');
      overlay.setAttribute('aria-hidden', 'true');
    }

    const ativosLocked = document.getElementById('ativos-necessarios-locked');
    const ativosOverlay = document.getElementById('ativos-lock-overlay');
    if (ativosLocked) {
      ativosLocked.classList.remove('protocol-application--locked');
      ativosLocked.classList.add('protocol-application--unlocked');
    }
    if (ativosOverlay) {
      ativosOverlay.classList.add('view-hidden');
      ativosOverlay.setAttribute('aria-hidden', 'true');
    }

    closeStaffAccess();
    initLucideIcons();
  }

  async function submitStaffPin() {
    const input = document.getElementById('staff-pin-input');
    const error = document.getElementById('staff-pin-error');
    const pin = input ? String(input.value).trim() : '';

    const valid = await validateStaffPin(pin);
    if (valid) {
      unlockApplicationProtocol();
      return;
    }

    if (error) error.classList.remove('view-hidden');
    if (input) {
      input.classList.add('shake');
      input.value = '';
      input.focus();
      scheduleFunnelTimer(function () { input.classList.remove('shake'); }, 400);
    }
  }

  function bindStaffAccessModal() {
    const input = document.getElementById('staff-pin-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitStaffPin();
      }
      if (event.key === 'Escape') {
        closeStaffAccess();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initLucideIcons);
  document.addEventListener('DOMContentLoaded', bindStaffAccessModal);
  document.addEventListener('DOMContentLoaded', bindTriagemCheckboxInputs);
  document.addEventListener('DOMContentLoaded', bindSiteResizeObserver);
  document.addEventListener('DOMContentLoaded', bindKioskIdleTracker);
  document.addEventListener('DOMContentLoaded', function () {
    bindSensoryFeedback(document);
    bindBrandLogoLongPressReset(document, restartMapping);
    ensureProgressDots('progress-dots', TOTAL_STEPS);
    ensureProgressDots('dossier-embed-dots', 3);
    const nameInput = document.getElementById('user-name');
    if (nameInput) {
      nameInput.addEventListener('input', function () {
        if (nameInput.value.trim()) setFieldError('user-name', 'user-name-error', false);
      });
    }
    const mobileMq = window.matchMedia('(max-width: 639px)');
    const resyncFooter = function () { syncStepChrome(); };
    if (typeof mobileMq.addEventListener === 'function') {
      mobileMq.addEventListener('change', resyncFooter);
    } else if (typeof mobileMq.addListener === 'function') {
      mobileMq.addListener(resyncFooter);
    }
  });
  window.addEventListener('hashchange', applyMapeamentoHash);
  initLucideIcons();

  return {
    startMapping,
    beginStructureStep,
    showWelcomeStep,
    nextStep,
    prevStep,
    footerNext,
    bootTriagemFromSession,
    selectOption,
    toggleExclusive,
    toggleExclusiveSymptom,
    toggleMulti,
    selectHistoryWindow,
    confirmHistoryStep,
    confirmCrossPreloadContinue,
    selectWashFrequency,
    selectRegionZone,
    sendB2CReferral,
    sendB2BReferral,
    schedulePresentialVisit,
    purgeKioskSession,
    openStaffAccess,
    closeStaffAccess,
    submitStaffPin,
    dossierEmbedNext,
    dossierEmbedPrev
  };
}
