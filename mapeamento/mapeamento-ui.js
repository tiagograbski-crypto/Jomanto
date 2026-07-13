/**
 * GL PRO · Mapeamento UI
 * DOM rendering layer — imports pure logic from mapeamento-logic.js
 * @module mapeamento-ui
 */

import {
  HISTORY_WINDOW_LABELS,
  FAQ_PUBLIC_COPY,
  SCHEDULE_CTA,
  TRIAGEM_NOMENCLATURE,
  buildApplicationProtocol,
  buildAtivosNecessariosMarkup,
  buildEnvironmentProfile,
  buildProtocolApplicationMarkup,
  buildProtocolDossierMarkup,
  buildRegionalWaterBriefMarkup,
  formatDisplayName,
  generateWhatsAppHandoffURL,
  generateHandoffSessionId,
  computeConflictAlert,
  computeHaircutOrientation,
  computeHydricBars,
  computeIntegrityScore,
  formatHistorySummary,
  resolveMatrixCopy
} from './mapeamento-logic.js';

export const SYMPTOM_CARDS = {
  saudavel: `<div class="bg-[#F0FDF4] p-5 sm:p-8 border border-[#10B981]/20 rounded-2xl shadow-sm col-span-1 md:col-span-2"><div class="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-4"><i data-lucide="shield-check" class="w-5 h-5 text-[#10B981]"></i></div><h3 class="text-lg font-medium text-[#10B981] mb-3">Fio sem queixas reportadas</h3><p class="text-[#065F46] text-sm leading-relaxed font-normal">Você indicou cabelo saudável. A orientação focará em manutenção e proteção da rotina.</p></div>`,
  quebra: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="scissors" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Fragilidade e Quebra</h3><p class="text-secondary leading-relaxed font-normal">A sua fibra atingiu o limite de tensão mecânica. O córtex está desprotegido, causando a rutura do fio e pontas ralas.</p></div>`,
  emborrachamento: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="activity" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Elasticidade Comprometida</h3><p class="text-secondary leading-relaxed font-normal">Indício de desnaturação proteica na matriz de queratina. A fibra pode apresentar instabilidade elástica.</p></div>`,
  porosidade: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="droplets" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Alta Porosidade</h3><p class="text-secondary leading-relaxed font-normal">Indício de escamas dilatadas, associado a frizz, perda hídrica e aspecto baço.</p></div>`,
  rigidez: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="shield" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Rigidez Estrutural</h3><p class="text-secondary leading-relaxed font-normal">A fibra apresenta excesso de saturação (fio "duro"), geralmente causado por acumulação de minerais pesados e metais da água local.</p></div>`,
  afinamento: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="arrow-down-to-line" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Perda de Massa (Afinamento)</h3><p class="text-secondary leading-relaxed font-normal">Há perda gradual do diâmetro nas pontas — desfiadas ou extrafinas. Protocolos semipermanentes não restauram essa zona; a orientação pode incluir corte de limpeza na avaliação presencial.</p></div>`,
  misto: `<div class="bg-white p-5 sm:p-8 border border-[#EBEBEB] rounded-2xl shadow-sm hover:border-[#D97706] transition-colors"><div class="w-10 h-10 bg-[#FDF1E6] rounded-full flex items-center justify-center mb-4"><i data-lucide="refresh-ccw" class="w-5 h-5 text-[#D97706]"></i></div><h3 class="text-lg font-medium text-espresso mb-3">Desequilíbrio Lipídico</h3><p class="text-secondary leading-relaxed font-normal">A barreira capilar está danificada, impedindo a hidratação natural de chegar às pontas (Raiz Oleosa / Pontas Secas).</p></div>`
};

const SYMPTOM_FALLBACK_CARD = `<div class="bg-[#F0FDF4] p-5 sm:p-8 border border-[#10B981]/20 rounded-2xl shadow-sm col-span-1 md:col-span-2"><div class="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-4"><i data-lucide="shield-check" class="w-5 h-5 text-[#10B981]"></i></div><h3 class="text-lg font-medium text-[#10B981] mb-3">Sem indicadores do fio reportados</h3><p class="text-[#065F46] text-sm leading-relaxed font-normal">A orientação considerará manutenção preventiva com base na sua rotina.</p></div>`;

/** Aplica nomenclatura pública (mapeamento honesto) em elementos estáticos do funil. */
export function applyTriagemNomenclature(dom, document) {
  const n = TRIAGEM_NOMENCLATURE;
  if (document && document.title !== undefined) {
    document.title = n.pageTitle;
  }

  const map = {
    'triagem-intro-headline': n.introHeadline,
    'triagem-intro-subline': n.introSubline,
    'triagem-intro-disclaimer': n.introDisclaimer,
    'triagem-structure-rationale': n.introStructureRationale,
    'semantic-progress': n.progressIdle,
    'step-0-greeting': n.step0Greeting,
    'step-1-title': n.step1Title,
    'step-1-subline-suffix': n.step1SublineSuffix,
    'goal-quebra-label': n.goalQuebra,
    'goal-brilho-label': n.goalBrilho,
    'goal-diagnostico-label': n.goalDiagnostico,
    'goal-discover-label': n.goalDiscover,
    'step-8-title': n.processingTitle,
    'loader-line-1': n.processingLine1,
    'loader-line-2': n.processingLine2,
    'loader-line-3': n.processingLine3,
    'loader-line-done': n.processingDone,
    'transition-title': n.transitionTitle,
    'transition-sub': n.transitionSub,
    'dossier-title': n.dossierTitle,
    'dossier-score-label': n.dossierScoreLabel,
    'dossier-integrity-title': n.dossierIntegrityTitle,
    'dossier-projection-label': n.dossierProjectionLabel,
    'dossier-symptoms-title': n.dossierSymptomsTitle,
    'dossier-intro-lede': n.dossierIntroLede,
    'dossier-hydric-legend': n.dossierHydricLegend,
    'dossier-protocol-badge': n.dossierProtocolBadge,
    'bancada-section-title': n.bancadaSectionTitle,
    'step-4-title': n.step4Title,
    'step-4-subline': n.step4Subline,
    'step-5-title': n.step5Title,
    'step-5-subline': n.step5Subline,
    'step-5-note': n.step5Note,
    'step-6-title': n.step6Title,
    'step-6-subline': n.step6Subline,
    'final-preload-title': n.finalPreloadTitle,
    'step-2-title': n.step2Title,
    'step-2-context': n.step2Context,
    'dossier-blur-hint': n.dossierBlurHint,
    'dossier-chemical-footnote-title': n.dossierChemicalFootnoteTitle,
    'dossier-chemical-footnote-body': n.dossierChemicalFootnoteBody,
    'dossier-haircut-footnote-title': n.dossierHaircutFootnoteTitle,
    'dossier-haircut-footnote-body': n.dossierHaircutFootnoteBody,
    'dossier-status-label': n.dossierStatus,
    'legal-disclaimer-main': n.legalDisclaimerMain,
    'legal-disclaimer-footer': n.legalDisclaimerFooter,
    'bancada-ctr-label': SCHEDULE_CTA.ctrLabel,
    'bancada-ctr-hint': SCHEDULE_CTA.ctrHint,
  };

  Object.keys(map).forEach(function (id) {
    dom.safeUpdate(id, map[id]);
  });

  const funnelFooter = document.getElementById('footer-controls');
  if (funnelFooter && n.funnelNavLabel) {
    funnelFooter.setAttribute('aria-label', n.funnelNavLabel);
  }
}

export function renderFaqAccordion(dom) {
  const root = document.getElementById('faq-accordion');
  if (!root) return;
  let html = '';
  FAQ_PUBLIC_COPY.forEach(function (item) {
    html += '<details class="group bg-white border border-[#EBEBEB] rounded-xl cursor-pointer">';
    html += '<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-espresso">';
    html += '<span>' + item.q + '</span>';
    html += '<span class="transition group-open:rotate-180 p-2 -m-2 inline-flex items-center justify-center shrink-0"><i data-lucide="chevron-down" class="w-4 h-4"></i></span>';
    html += '</summary>';
    html += '<div class="text-secondary text-sm mt-3 font-normal px-5 pb-5 leading-relaxed">' + item.a + '</div>';
    html += '</details>';
  });
  dom.setHtml('faq-accordion', html);
}

export function createDomHelpers(document) {
  function safeUpdate(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function query(selector) {
    return document.querySelector(selector);
  }

  function queryAll(selector) {
    return document.querySelectorAll(selector);
  }

  return { safeUpdate, setHtml, query, queryAll };
}

export function renderScheduleCta(dom, userData, dossierId) {
  const url = generateWhatsAppHandoffURL(userData, userData._lastDiagnostics, { dossierId: dossierId });

  document.querySelectorAll('.dossier-cta-bar__label').forEach(function (el) {
    el.textContent = SCHEDULE_CTA.stickyLabel;
  });
  document.querySelectorAll('.dossier-cta-bar__sub').forEach(function (el) {
    el.textContent = SCHEDULE_CTA.stickySub;
  });

  document.querySelectorAll('.dossier-cta-bar__btn').forEach(function (btn) {
    btn.setAttribute('data-wa-handoff-url', url);
    btn.setAttribute('aria-label', SCHEDULE_CTA.stickyLabel + ' · ' + SCHEDULE_CTA.stickySub);
  });
}

const DOSSIER_STICKY_CTA_ID = 'dossier-bottom-cta';

/** Exibe ou oculta a barra fixa de conversão no dossiê. */
export function setScheduleFabVisible(document, visible) {
  const el = document.getElementById(DOSSIER_STICKY_CTA_ID);
  if (!el) return;
  if (visible) {
    el.classList.remove('view-hidden');
    el.classList.add('dossier-cta-bar--revealed');
  } else {
    el.classList.add('view-hidden');
    el.classList.remove('dossier-cta-bar--revealed');
  }
}

export function renderProtocolDossier(dom, diagnosticsArray) {
  const html = buildProtocolDossierMarkup(diagnosticsArray);
  dom.setHtml('protocol-dossier-panel', html);
}

/** Restaura ofuscação do protocolo e ativos extras (estado não persiste entre recargas). */
export function resetProtocolLockState(document) {
  const wrapper = document.getElementById('protocolo-aplicacao-wrapper');
  const overlay = document.getElementById('protocol-lock-overlay');
  if (wrapper) {
    wrapper.classList.add('protocol-application--locked');
    wrapper.classList.remove('protocol-application--unlocked');
  }
  if (overlay) {
    overlay.classList.remove('view-hidden');
    overlay.setAttribute('aria-hidden', 'false');
  }

  const ativosLocked = document.getElementById('ativos-necessarios-locked');
  const ativosOverlay = document.getElementById('ativos-lock-overlay');
  if (ativosLocked) {
    ativosLocked.classList.add('protocol-application--locked');
    ativosLocked.classList.remove('protocol-application--unlocked');
  }
  if (ativosOverlay) {
    ativosOverlay.classList.remove('view-hidden');
    ativosOverlay.setAttribute('aria-hidden', 'false');
  }
}

export function renderApplicationProtocol(dom, userData, envProfile) {
  const protocol = buildApplicationProtocol(userData, envProfile);
  dom.setHtml('ativos-necessarios-panel', buildAtivosNecessariosMarkup(protocol.ativos));
  dom.setHtml('protocolo-aplicacao-content', buildProtocolApplicationMarkup(protocol.steps));
  resetProtocolLockState(document);
}

export function renderMatrixCopy(dom, userData, envProfile) {
  const { bancada } = resolveMatrixCopy(userData, envProfile);

  userData._lastDiagnostics = (bancada.tricho && bancada.tricho.diagnostics)
    ? bancada.tricho.diagnostics
    : [];

  dom.safeUpdate('bancada-categoria', bancada.protocol.categoria);
  dom.safeUpdate('bancada-foco', bancada.protocol.foco);
  dom.safeUpdate('bancada-rationale', bancada.rationale.join(' · '));

  const diagnostics = bancada.tricho ? bancada.tricho.diagnostics : [];
  renderProtocolDossier(dom, diagnostics);
  renderApplicationProtocol(dom, userData, envProfile);
}

export function renderEnvironmentDashboard(dom, profile, userData) {
  renderDossierExposureSummary(dom, profile, userData);

  dom.safeUpdate('dark-city-db', profile.water.headline);
  dom.safeUpdate('dark-water-subtitle', profile.water.subtitle);
  dom.safeUpdate('dark-pollution-level', profile.air.level);
  dom.safeUpdate('dark-pollution-risk', profile.air.risk);
  dom.safeUpdate('dark-season-name', profile.season.name);
  dom.safeUpdate('dark-season-risk', profile.season.risk);

  dom.setHtml('dark-mixed-alert', profile.mixed.alert);

  dom.safeUpdate('dark-ph-note', profile.ph.note);
  dom.safeUpdate('dark-ph-value', profile.ph.estimated.toFixed(1));
  const phMarker = document.getElementById('dark-ph-marker');
  if (phMarker) phMarker.style.left = profile.ph.position + '%';

  dom.setHtml('regional-water-brief', buildRegionalWaterBriefMarkup(profile, userData));
}

export function renderDossierExposureSummary(dom, profile, userData) {
  const exposureLabel = profile.exposureIndex >= 65 ? 'Alta' : profile.exposureIndex >= 40 ? 'Moderada' : 'Controlada';
  const profileLine = profile.mixed.profile + ' · ' + profile.region.label;

  dom.queryAll('.dyn-profile').forEach(function (el) {
    el.textContent = profileLine;
  });
  dom.queryAll('.dyn-region').forEach(function (el) {
    el.textContent = profile.region.label;
  });
  dom.safeUpdate('dyn-exposure-badge', exposureLabel + ' · Tendência ' + profile.exposureIndex + '/100');
  dom.safeUpdate('dark-exposure-index', profile.exposureIndex);
  dom.safeUpdate('dos-lifestyle-mixed', profile.mixed.profile);
}

export function renderDossierCore(dom, userData, deps) {
  const { document } = deps;
  const integrity = computeIntegrityScore(userData);

  dom.safeUpdate('dos-score', integrity.baseScore);
  dom.safeUpdate('dos-proj', integrity.projection);

  const statusTxt = document.getElementById('dos-status-text');
  if (statusTxt) {
    statusTxt.textContent = integrity.statusText;
    statusTxt.className = integrity.statusClass;
  }

  setTimeout(function () {
    const ring = document.getElementById('dossier-ring');
    if (ring) ring.style.strokeDashoffset = integrity.ringOffset;
  }, 400);

  const dateSpan = document.getElementById('current-datetime');
  if (dateSpan) {
    const now = new Date();
    dateSpan.textContent = `Emissão: ${now.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}`;
  }

  const handoffId = generateHandoffSessionId();
  userData._handoffSessionId = handoffId;
  userData._lastDossierId = handoffId;
  dom.safeUpdate('dynamic-id', handoffId);
  dom.safeUpdate('dos-struct', userData.struct || 'Não definido');

  if (userData.name) {
    const displayName = formatDisplayName(userData.name);
    dom.queryAll('.dyn-name').forEach(function (el) {
      el.textContent = displayName;
    });
  }

  dom.safeUpdate('dos-caliber', userData.caliber || 'Não definido');
  dom.safeUpdate('dos-history-window', HISTORY_WINDOW_LABELS[userData.historyWindow] || 'Não informado');
  dom.safeUpdate('dos-history', formatHistorySummary(userData));

  const washLabels = ['1-2x/Semana', '3-4x/Semana', '5-6x/Semana', 'Diária'];
  dom.safeUpdate('dos-wash', washLabels[userData.wash_frequency - 1] || 'Não informado');

  const conflict = computeConflictAlert(userData);
  const alertBox = document.getElementById('conflict-alert');
  const alertMessage = document.getElementById('alert-message');
  if (conflict.hasAlert) {
    dom.safeUpdate('alert-title', conflict.title);
    if (alertMessage) alertMessage.innerHTML = conflict.message;
    if (alertBox) alertBox.classList.remove('hidden');
  } else if (alertBox) {
    alertBox.classList.add('hidden');
  }

  const footnote = document.getElementById('dossier-chemical-footnote');
  const hasHeavyChemical = userData.history.includes('hene') || userData.history.includes('formol');
  if (footnote) footnote.classList.toggle('hidden', !hasHeavyChemical);

  const haircutFootnote = document.getElementById('dossier-haircut-footnote');
  const haircut = computeHaircutOrientation(userData);
  if (haircutFootnote) {
    haircutFootnote.classList.toggle('hidden', !haircut.active);
    if (haircut.active) {
      dom.safeUpdate('dossier-haircut-footnote-title', haircut.title);
      const haircutBody = document.getElementById('dossier-haircut-footnote-body');
      if (haircutBody) haircutBody.innerHTML = haircut.message;
    }
  }
}

export function renderDossierHydricBars(dom, userData, envProfile) {
  const bars = computeHydricBars(userData, envProfile);
  const bWater = document.getElementById('bar-water');
  const bLipids = document.getElementById('bar-lipids');
  const bProtein = document.getElementById('bar-protein');
  if (bWater) {
    bWater.style.width = bars.water + '%';
    dom.safeUpdate('bar-water-val', bars.water + '%');
  }
  if (bLipids) {
    bLipids.style.width = bars.lipids + '%';
    dom.safeUpdate('bar-lipids-val', bars.lipids + '%');
  }
  if (bProtein) {
    bProtein.style.width = bars.protein + '%';
    dom.safeUpdate('bar-protein-val', bars.protein + '%');
  }
}

export function renderDossierSymptoms(dom, userData) {
  const symptomsContainer = document.getElementById('dynamic-symptoms-grid');
  if (!symptomsContainer) return;
  symptomsContainer.innerHTML = '';
  if (userData.symptoms.length === 0 && !userData.symptoms.includes('saudavel')) {
    symptomsContainer.innerHTML = SYMPTOM_FALLBACK_CARD;
  } else {
    userData.symptoms.forEach(function (symp) {
      if (SYMPTOM_CARDS[symp]) symptomsContainer.innerHTML += SYMPTOM_CARDS[symp];
    });
  }
}

export function buildDossierLiveMessage(userData) {
  const integrity = computeIntegrityScore(userData);
  const envProfile = buildEnvironmentProfile(userData);
  return TRIAGEM_NOMENCLATURE.liveMessagePrefix + ' Indicador orientativo ' + integrity.baseScore + ' de 100. Perfil: ' + integrity.statusText + '. Exposição estimada ' + envProfile.exposureIndex + ' de 100.';
}

/** Wizard embed Jo Manto · 3 telas compactas (sem relatório GL PRO). */
export function renderEmbedDossierWizard(dom, userData, deps) {
  const { document, refreshIcons } = deps;
  const integrity = computeIntegrityScore(userData);

  dom.safeUpdate('embed-dos-score', integrity.baseScore);
  dom.safeUpdate('embed-dos-status', integrity.statusText);
  dom.safeUpdate('embed-dos-lead', 'Indicador orientativo — a confirmação do protocolo acontece na avaliação presencial com a Jo Manto.');

  setTimeout(function () {
    const ring = document.getElementById('embed-dossier-ring');
    if (ring) ring.style.strokeDashoffset = integrity.ringOffset;
  }, 200);

  if (userData.name) {
    const displayName = formatDisplayName(userData.name);
    dom.queryAll('.dyn-name').forEach(function (el) {
      el.textContent = displayName;
    });
  }

  dom.safeUpdate('embed-dos-struct', userData.struct || 'Não definido');
  dom.safeUpdate('embed-dos-history', formatHistorySummary(userData));

  const grid = document.getElementById('embed-symptoms-grid');
  if (grid) {
    grid.innerHTML = '';
    const symptoms = userData.symptoms || [];
    if (symptoms.length === 0 || symptoms.includes('saudavel')) {
      grid.innerHTML = '<div class="bg-[#F0FDF4] p-4 border border-[#10B981]/20 rounded-xl text-sm text-[#065F46] font-normal">Integridade preservada — foco em prevenção e manutenção.</div>';
    } else {
      symptoms.slice(0, 3).forEach(function (symp) {
        if (SYMPTOM_CARDS[symp]) grid.innerHTML += SYMPTOM_CARDS[symp];
      });
      if (symptoms.length > 3) {
        grid.innerHTML += '<p class="text-xs text-secondary text-center">+' + (symptoms.length - 3) + ' indicador(es) na avaliação presencial.</p>';
      }
    }
  }

  const handoffId = generateHandoffSessionId();
  userData._handoffSessionId = handoffId;
  userData._lastDossierId = handoffId;

  const waBtn = document.getElementById('embed-wa-cta');
  if (waBtn) {
    const url = generateWhatsAppHandoffURL(userData, userData._lastDiagnostics, { dossierId: handoffId });
    waBtn.setAttribute('data-wa-handoff-url', url);
  }

  if (refreshIcons) refreshIcons();
}

export const LAZY_DOSSIER_SECTIONS = ['environment', 'faq'];

function markDossierLazyPending(sectionKeys) {
  (sectionKeys || []).forEach(function (key) {
    const section = document.querySelector('[data-dossier-lazy="' + key + '"]');
    if (section) {
      section.classList.add('dossier-lazy-pending');
      section.classList.remove('dossier-lazy-ready');
    }
  });
}

/** Core dossier: header, scores, CTAs — deferred sections load on scroll. */
export function renderDynamicDossierEssential(dom, userData, deps) {
  const { refreshIcons } = deps;
  renderDossierCore(dom, userData, deps);

  const envProfile = buildEnvironmentProfile(userData);
  renderDossierExposureSummary(dom, envProfile, userData);
  renderDossierHydricBars(dom, userData, envProfile);
  renderDossierSymptoms(dom, userData);
  renderMatrixCopy(dom, userData, envProfile);
  renderScheduleCta(dom, userData, userData._lastDossierId);
  markDossierLazyPending(LAZY_DOSSIER_SECTIONS);

  if (refreshIcons) refreshIcons();
}

export function renderDynamicDossier(dom, userData, deps) {
  renderDynamicDossierEssential(dom, userData, deps);
  LAZY_DOSSIER_SECTIONS.forEach(function (key) {
    renderDynamicDossierLazy(dom, userData, deps, key);
  });

  const { refreshIcons } = deps;
  if (refreshIcons) refreshIcons();
}

export function observeDossierLazySections(dom, userData, deps) {
  const pending = document.querySelectorAll('[data-dossier-lazy].dossier-lazy-pending');
  if (!pending.length) return;

  if (typeof IntersectionObserver === 'undefined') {
    pending.forEach(function (section) {
      const key = section.getAttribute('data-dossier-lazy');
      if (key) renderDynamicDossierLazy(dom, userData, deps, key);
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const key = entry.target.getAttribute('data-dossier-lazy');
      if (!key) return;
      renderDynamicDossierLazy(dom, userData, deps, key);
      observer.unobserve(entry.target);
      if (deps.onLazySectionReady) deps.onLazySectionReady(key);
    });
  }, { rootMargin: '120px 0px', threshold: 0.01 });

  pending.forEach(function (section) { observer.observe(section); });
}

export function renderDynamicDossierLazy(dom, userData, deps, sectionKey) {
  const { refreshIcons } = deps;
  const envProfile = buildEnvironmentProfile(userData);

  if (sectionKey === 'hydric') {
    renderDossierHydricBars(dom, userData, envProfile);
  }
  if (sectionKey === 'environment') {
    renderEnvironmentDashboard(dom, envProfile, userData);
  }
  if (sectionKey === 'symptoms') {
    renderDossierSymptoms(dom, userData);
  }
  if (sectionKey === 'matrix') {
    renderMatrixCopy(dom, userData, envProfile);
  }
  if (sectionKey === 'faq') {
    renderFaqAccordion(dom);
  }

  const section = document.querySelector('[data-dossier-lazy="' + sectionKey + '"]');
  if (section) {
    section.classList.remove('dossier-lazy-pending');
    section.classList.add('dossier-lazy-ready');
    section.removeAttribute('aria-busy');
  }

  if (refreshIcons) refreshIcons();
}
