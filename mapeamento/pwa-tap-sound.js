/**
 * GL PRO · Tap sound for installed PWA (standalone / kiosk) — ES module re-export.
 * @module pwa-tap-sound
 */

export function isPwaStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;
}

export function playTapSound(weight) {
  if (window.PwaTapSound && typeof window.PwaTapSound.play === 'function') {
    window.PwaTapSound.play(weight || 'light');
  }
}

export function bindPwaButtonTapSounds(root) {
  if (window.PwaTapSound && typeof window.PwaTapSound.bind === 'function') {
    window.PwaTapSound.bind(root);
  }
}

export function initMapeamentoPwaTapSounds(document) {
  if (!isPwaStandalone()) return;
  bindPwaButtonTapSounds(document.getElementById('view-funnel'));
  bindPwaButtonTapSounds(document.getElementById('view-dossier'));
  bindPwaButtonTapSounds(document.getElementById('staff-access-modal'));
}
