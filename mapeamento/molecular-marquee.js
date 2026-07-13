/**
 * GL PRO · Molecular Arsenal Ticker — CSS-only infinite marquee.
 * @module molecular-marquee
 */

/** Manifesto de autoridade molecular — copy neurovendas, sem promessa médica. */
export const MOLECULAR_MANIFESTO_COPY = {
  title: 'Para cada dano, uma resposta molecular exata.',
  subtitle:
    'Não trabalhamos com achismos. Nosso espaço físico conta com um arsenal químico completo para mapear, intervir e estabilizar a exata necessidade do seu fio.'
};

/** Label da esteira (abaixo do manifesto). */
export const MOLECULAR_MARQUEE_COPY = {
  label: 'Ativos moleculares disponíveis para restituição estrutural do fio',
  sublabel: 'Biblioteca molecular · compatibilidade orientativa na bancada'
};
/** @type {readonly string[]} */
export const MOLECULAR_ARSENAL_ACTIVES = [
  'AZ PROTEIN WQ',
  'AMINO Z50',
  'AZ OIL ARGAN',
  'AZ BUTTER CUPUAÇU',
  'AMINO CRM',
  'AZ OIL OJON',
  'AMINO Z200',
  'ROSA MOSQUETA',
  'AZ PROTEIN S',
  'AZ PROTEIN QRT',
  'EXTRACT JABORANDI',
  'D-PANTENOL QUATERNIZADO',
  'AZ PROTEIN 8K',
  'AZ OIL MARULA',
  'BUTTER KARITÉ',
  'AZ OIL TUTANO',
  'AMINOÁCIDOS DE ALTA PERFORMANCE',
  'EXTRACT ALV BABOSA',
  'AZ OIL SEMENTE DE UVA',
  'AZ OIL MACADÂMIA',
  'EXTRACT MLG MEL',
  'AZ OIL ALGODÃO',
  'EXTRACT HTL HORTELÃ',
  'EXTRACT ALC ALECRIM',
  'VITAMINA A OLEOSA',
  'SENSOIL PLUS',
  'SILSOFT AX',
  'ÓLEO DE MONOI',
  'GARDEN ACTIVE'
];

/**
 * Monta HTML interno de um grupo do ticker (uma passagem completa da lista).
 * @param {readonly string[]} actives
 * @returns {string}
 */
export function buildMolecularMarqueeGroupHtml(actives) {
  let html = '';
  actives.forEach(function (name, index) {
    if (index > 0) {
      html += '<span class="molecular-marquee__sep" aria-hidden="true">/</span>';
    }
    html += '<span class="molecular-marquee__item">' + name + '</span>';
  });
  return html;
}

/**
 * Monta bloco completo: label + faixa única em loop.
 * @param {readonly string[]} [actives]
 * @param {{ label?: string, sublabel?: string }} [copy]
 * @returns {string}
 */
export function buildMolecularMarqueeBlockHtml(actives, copy) {
  const list = actives || MOLECULAR_ARSENAL_ACTIVES;
  const c = copy || MOLECULAR_MARQUEE_COPY;
  return (
    '<div class="molecular-strip">' +
    '<p class="molecular-strip__label">' + c.label + '</p>' +
    buildMolecularMarqueeHtml(list, 'light') +
    '</div>'
  );
}

/**
 * Versão mobile (celular): sem faixa inferior nem rótulos textuais.
 * @param {Document} document
 */
export function isMobileView(document) {
  return document.body.classList.contains('is-mobile-view');
}

export function applyMobileView(document) {
  const mobile = window.matchMedia('(max-width: 639px)').matches;
  document.body.classList.toggle('is-mobile-view', mobile);
}

/**
 * Rotatoria fixa: manifesto + ticker. Mobile = só ticker numérico, sem rótulos.
 * @param {readonly string[]} [actives]
 * @param {boolean} [mobileOnlyNumbers]
 * @returns {string}
 */
export function buildActiveRoundaboutStripHtml(actives, mobileOnlyNumbers) {
  if (mobileOnlyNumbers) {
    return (
      '<div class="molecular-strip molecular-strip--numbers-only">' +
      buildMolecularMarqueeHtml(actives, 'light') +
      '</div>'
    );
  }
  const c = MOLECULAR_MANIFESTO_COPY;
  return (
    '<div class="molecular-strip">' +
    '<p class="molecular-strip__label molecular-strip__label--manifesto">' + c.title + '</p>' +
    buildMolecularMarqueeHtml(actives, 'light') +
    '</div>'
  );
}

/**
 * Manifesto compacto + esteira na intro do funil.
 * @param {readonly string[]} [actives]
 * @returns {string}
 */
export function buildIntroManifestoMarqueeHtml(actives) {
  const c = MOLECULAR_MANIFESTO_COPY;
  return (
    '<div class="intro-manifesto-marquee">' +
    '<p class="intro-manifesto-marquee__title">' + c.title + '</p>' +
    buildMolecularMarqueeHtml(actives, 'light') +
    '</div>'
  );
}

/**
 * Monta markup da faixa em loop.
 * @param {readonly string[]} [actives]
 * @param {'light'|'dark'} [variant]
 * @returns {string}
 */
export function buildMolecularMarqueeHtml(actives, variant) {
  const list = actives || MOLECULAR_ARSENAL_ACTIVES;
  const v = variant || 'light';
  const groupHtml = buildMolecularMarqueeGroupHtml(list);
  return (
    '<div class="molecular-marquee molecular-marquee--' + v + '" role="presentation">' +
    '<div class="molecular-marquee__track">' +
    '<div class="molecular-marquee__group">' + groupHtml + '</div>' +
    '<div class="molecular-marquee__group" aria-hidden="true">' + groupHtml + '</div>' +
    '</div></div>'
  );
}

/**
 * Unidade de confiança: manifesto + esteira molecular (Deep Obsidian).
 * @param {readonly string[]} [actives]
 * @returns {string}
 */
export function buildClinicalManifestoUnitHtml(actives) {
  const c = MOLECULAR_MANIFESTO_COPY;
  return (
    '<div class="molecular-manifesto-unit gl-dark-card">' +
    '<div class="molecular-manifesto-block py-12 px-6">' +
    '<h2 id="molecular-manifesto-title" class="molecular-manifesto__title">' + c.title + '</h2>' +
    '<p class="molecular-manifesto__subtitle">' + c.subtitle + '</p>' +
    '</div>' +
    buildMolecularMarqueeHtml(actives, 'dark') +
    '</div>'
  );
}

/**
 * Pausa animação em touch (mobile).
 * @param {HTMLElement} root
 */
function bindMarqueeTouchPause(root) {
  const track = root.querySelector('.molecular-marquee__track');
  if (!track || root.dataset.touchBound === '1') return;
  root.dataset.touchBound = '1';

  root.addEventListener('touchstart', function () {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  root.addEventListener('touchend', function () {
    track.style.animationPlayState = 'running';
  }, { passive: true });

  root.addEventListener('touchcancel', function () {
    track.style.animationPlayState = 'running';
  }, { passive: true });
}

/**
 * Inicializa todos os mount points `[data-molecular-marquee]`.
 * @param {Document} document
 */
export function initMolecularMarquees(document) {
  const mobile = isMobileView(document);
  const mounts = document.querySelectorAll('[data-molecular-marquee]');
  mounts.forEach(function (mount) {
    if (mount.dataset.marqueeReady === '1') return;
    mount.dataset.marqueeReady = '1';
    const mode = mount.dataset.marqueeBlock;
    if (mode === 'manifesto') {
      if (mobile) {
        mount.innerHTML = buildMolecularMarqueeHtml(MOLECULAR_ARSENAL_ACTIVES, 'dark');
        mount.classList.add('molecular-manifesto-unit', 'gl-dark-card', 'molecular-manifesto-unit--numbers-only');
      } else {
        mount.innerHTML = buildClinicalManifestoUnitHtml(MOLECULAR_ARSENAL_ACTIVES);
      }
    } else if (mode === 'roundabout') {
      mount.innerHTML = buildActiveRoundaboutStripHtml(MOLECULAR_ARSENAL_ACTIVES, false);
    } else if (mode === 'intro') {
      mount.innerHTML = buildIntroManifestoMarqueeHtml(MOLECULAR_ARSENAL_ACTIVES);
    } else if (mode === 'true') {
      mount.innerHTML = buildMolecularMarqueeBlockHtml(MOLECULAR_ARSENAL_ACTIVES);
    } else {
      mount.innerHTML = buildMolecularMarqueeHtml(MOLECULAR_ARSENAL_ACTIVES, mount.dataset.marqueeVariant || 'light');
    }
    const marquee = mount.querySelector('.molecular-marquee');
    if (marquee) bindMarqueeTouchPause(marquee);
  });
}

/**
 * Exibe ou oculta a rotatoria fixa (ex.: ocultar no dossiê).
 * @param {Document} document
 * @param {boolean} visible
 */
export function setMolecularStripVisible(document, visible) {
  const root = document.getElementById('molecular-strip-root');
  if (!root) return;
  if (visible) {
    root.classList.remove('view-hidden');
  } else {
    root.classList.add('view-hidden');
  }
}
