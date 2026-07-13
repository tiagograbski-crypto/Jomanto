import { createMapeamentoApp } from './mapeamento-app.js';
import { applyMobileView, initMolecularMarquees } from './molecular-marquee.js';
import { initPerfLiteMode } from './mapeamento-logic.js';
import { initReadingComfortToggle } from './reading-comfort.js';

initPerfLiteMode(window);

document.body.classList.add('jo-manto-skin');

if (window.parent !== window) {
  document.documentElement.classList.add('is-embed');
  document.body.classList.add('is-embed');
}

const app = createMapeamentoApp({ document, window });
globalThis.GLProMapeamento = app;

document.addEventListener('DOMContentLoaded', function () {
  applyMobileView(document);
  initMolecularMarquees(document);
  initReadingComfortToggle(document);
  window.matchMedia('(max-width: 639px)').addEventListener('change', function () {
    applyMobileView(document);
    const stripRoot = document.getElementById('molecular-strip-root');
    if (stripRoot) {
      stripRoot.dataset.marqueeReady = '0';
      stripRoot.classList.remove('view-hidden');
    }
    initMolecularMarquees(document);
  });
  /* Boot unificado: hash → sessão → intro (mapeamento-app.js) */
  if (typeof app.bootTriagemFromSession === 'function') {
    app.bootTriagemFromSession();
  }
});
