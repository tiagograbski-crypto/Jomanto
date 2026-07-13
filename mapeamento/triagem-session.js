/**
 * Persistência volátil da triagem (sessionStorage — kiosk) + sinalização ao site pai (iframe).
 * @module triagem-session
 */

import { TRIAGEM_SESSION_KEY } from './mapeamento-logic.js';

export { TRIAGEM_SESSION_KEY };

/** @typedef {'intro'|'name'|'immersion'|'complete'} TriagemChromePhase */

function readVolatileStorage() {
  if (typeof sessionStorage === 'undefined') return null;
  return sessionStorage;
}

/** Remove legado localStorage (migração kiosk). */
function clearLegacyLocalStorage() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(TRIAGEM_SESSION_KEY);
    }
  } catch (_) {
    /* ignore */
  }
}

/**
 * @returns {{ completed: boolean, currentStep: number, userData: object|null, updatedAt: number }|null}
 */
export function loadTriagemSession() {
  try {
    const storage = readVolatileStorage();
    if (!storage) return null;
    const raw = storage.getItem(TRIAGEM_SESSION_KEY);
    clearLegacyLocalStorage();
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      completed: Boolean(parsed.completed),
      currentStep: typeof parsed.currentStep === 'number' ? parsed.currentStep : -1,
      userData: parsed.userData && typeof parsed.userData === 'object' ? parsed.userData : null,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    };
  } catch (_) {
    return null;
  }
}

/**
 * @param {{ completed?: boolean, currentStep?: number, userData?: object|null }} patch
 */
export function saveTriagemSession(patch) {
  try {
    const storage = readVolatileStorage();
    if (!storage) return;
    const prev = loadTriagemSession() || {
      completed: false,
      currentStep: -1,
      userData: null,
      updatedAt: 0,
    };
    const next = {
      completed: patch.completed != null ? Boolean(patch.completed) : prev.completed,
      currentStep: patch.currentStep != null ? patch.currentStep : prev.currentStep,
      userData: patch.userData !== undefined ? patch.userData : prev.userData,
      updatedAt: Date.now(),
    };
    storage.setItem(TRIAGEM_SESSION_KEY, JSON.stringify(next));
    clearLegacyLocalStorage();
  } catch (_) {
    /* storage indisponível */
  }
}

/** @param {TriagemChromePhase} phase */
export function notifySiteChrome(phase) {
  if (typeof window === 'undefined' || window.parent === window) return;
  try {
    window.parent.postMessage(
      { type: 'glpro:mapeamento-chrome', phase: phase },
      window.location.origin,
    );
  } catch (_) {
    /* ignore */
  }
}

/**
 * Encaminha progresso do funil ao site pai (iframe) para analytics/presença.
 * @param {number} stepIndex
 * @param {string} [stepId]
 */
export function notifySiteAnalytics(_stepIndex, _stepId) {
  /* no-op — sem tracking no embed Jo Manto */
}

/**
 * Informa altura do documento ao site pai (iframe embed).
 * @param {number} height
 * @param {'funnel'|'complete'} [mode]
 */
export function notifySiteResize(height, mode) {
  if (typeof window === 'undefined' || window.parent === window) return;
  if (!height || height < 1) return;
  try {
    window.parent.postMessage(
      {
        type: 'glpro:mapeamento-resize',
        height: Math.ceil(height),
        mode: mode || 'funnel',
      },
      window.location.origin,
    );
  } catch (_) {
    /* ignore */
  }
}

/** @deprecated Parent SPA must not mirror iframe GTM — events fire inside mapeamento only. */
export function notifySiteSchedule(_payload) {
  /* intentionally no-op: avoids duplicate click_cta_whatsapp / schedule_service on parent dataLayer */
}
