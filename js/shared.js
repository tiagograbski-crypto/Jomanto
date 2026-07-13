const NAV_ITEMS = [
    { href: 'index.html', label: 'Início', id: 'hub' },
    { href: 'visagismo.html', label: 'Visagismo', id: 'visagismo' },
    { href: 'terapias.html', label: 'Terapias', id: 'terapias' }
];

const PAGE_HERO_TONE = {
    hub: 'light',
    visagismo: 'light',
    terapias: 'balanced'
};

const FUNNEL_PERSONALIZATION = {
    visagismo: {
        kicker: 'Rota Visagismo',
        title: 'Quando você quer mudar, mas não quer errar no espelho.',
        copy: 'Para quem está em uma nova fase, cansada de repetir o mesmo corte ou insegura sobre o que combina com o rosto e a rotina.',
        fear: 'Cortar e sentir que perdeu a sua cara.',
        proof: 'Ver a proposta antes da tesoura entrar em cena.',
        next: 'Uma conversa de imagem e um corte pensado para você.',
        cta: 'Conversar Sobre Visagismo',
        badge: 'Rota Visagismo',
        whatsappMessage: 'Olá, Jo Manto. Acredito que minha rota seja visagismo/corte. Quero entender qual imagem combina com minha fase atual.'
    },
    terapias: {
        kicker: 'Rota Terapias Capilares',
        title: 'Quando o fio não responde como antes — e você quer entender o porquê.',
        copy: 'Para quem sente quebra, frizz, opacidade ou cansaço de tratamentos que prometem muito e entregam pouco.',
        fear: 'Gastar em produto ou sessão e continuar com o mesmo problema.',
        proof: 'Saber o que o fio precisa antes de escolher qualquer protocolo.',
        next: 'Uma leitura capilar e um plano feito para o seu cabelo.',
        cta: 'Conversar Sobre Terapias',
        badge: 'Rota Terapias',
        whatsappMessage: 'Olá, Jo Manto. Acredito que minha rota seja terapia capilar. Quero entender o que meu fio precisa de verdade.'
    }
};

function renderNav(currentPage, heroTone) {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    const tone = heroTone || PAGE_HERO_TONE[currentPage] || 'light';
    nav.dataset.heroTone = tone;
    nav.classList.add('nav--on-hero', `nav--${tone}`);

    const links = NAV_ITEMS.map((item) => {
        const isActive = item.id === currentPage;
        const activeClass = isActive ? 'nav-link-active' : 'nav-link';
        return `<a href="${item.href}" class="${activeClass} transition-colors duration-300">${item.label}</a>`;
    }).join('');

    const mobileLinks = NAV_ITEMS.map((item) => {
        const isActive = item.id === currentPage;
        return `
            <a href="${item.href}"
               class="mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}">
                <span>${item.label}</span>
                <span aria-hidden="true">&rarr;</span>
            </a>
        `;
    }).join('');

    nav.innerHTML = `
        <a href="index.html" class="nav-logo font-serif text-xl tracking-wide transition-colors duration-300">Jo Manto</a>
        <div class="site-nav-desktop hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
            ${links}
        </div>
        <button id="mobile-menu-button"
                class="mobile-menu-button md:hidden"
                type="button"
                aria-expanded="false"
                aria-controls="mobile-menu"
                aria-label="Abrir menu">
            <span></span>
            <span></span>
        </button>
        <div id="mobile-menu" class="mobile-menu md:hidden" aria-hidden="true">
            <div class="mobile-menu-panel">
                <p class="type-kicker type-kicker--taupe mb-8">Navegação</p>
                <div class="space-y-1">
                    ${mobileLinks}
                </div>
                <div class="mt-8 pt-6 border-t border-mist">
                    <a href="privacidade.html" class="text-xs text-taupe hover:text-espresso transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </div>
    `;
}

function initMobileNav() {
    const nav = document.getElementById('site-nav');
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!nav || !button || !menu) return;

    const setOpen = (open) => {
        nav.classList.toggle('mobile-menu-open', open);
        document.body.classList.toggle('mobile-menu-lock', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        menu.setAttribute('aria-hidden', String(!open));
    };

    button.addEventListener('click', () => {
        setOpen(!nav.classList.contains('mobile-menu-open'));
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) setOpen(false);
    }, { passive: true });
}

function initScrolledNav() {
    const nav = document.getElementById('site-nav');
    const hero = document.getElementById('hero');
    const usePillNav = document.body.classList.contains('page-visagismo');

    if (!nav) return;

    if (!hero) {
        nav.classList.add('nav--scrolled');
        nav.classList.remove('nav--on-hero');
        if (usePillNav) nav.classList.add('nav--pill');
        return;
    }

    const onScroll = () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const scrolled = window.scrollY > heroBottom - 80;

        if (usePillNav) {
            nav.classList.toggle('nav--pill', scrolled);
            nav.classList.toggle('nav--scrolled', scrolled);
            nav.classList.toggle('nav--on-hero', !scrolled);
            return;
        }

        nav.classList.toggle('nav--scrolled', scrolled);
        nav.classList.toggle('nav--on-hero', !scrolled);
        nav.classList.remove('nav--pill');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

function resolveMapsConfig() {
    const query = encodeURIComponent(SITE_CONFIG.address);
    const customEmbed = SITE_CONFIG.maps?.embedUrl?.trim();
    return {
        embedUrl: customEmbed || `https://maps.google.com/maps?q=${query}&z=16&output=embed`,
        directionsUrl: SITE_CONFIG.maps?.directionsUrl?.trim() || `https://www.google.com/maps/search/?api=1&query=${query}`
    };
}

const FOOTER_NAV = {
    hub: [
        { href: 'visagismo.html', label: 'Visagismo' },
        { href: 'terapias.html', label: 'Terapias' }
    ],
    visagismo: [
        { href: 'index.html', label: 'Início' },
        { href: 'terapias.html', label: 'Terapias' }
    ],
    terapias: [
        { href: 'index.html', label: 'Início' },
        { href: 'visagismo.html', label: 'Visagismo' }
    ],
    privacidade: [
        { href: 'index.html', label: 'Início' },
        { href: 'visagismo.html', label: 'Visagismo' },
        { href: 'terapias.html', label: 'Terapias' }
    ]
};

function renderSiteFooter(page) {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const navLinks = FOOTER_NAV[page] || FOOTER_NAV.hub;
    const linksHtml = navLinks.map((item) => (
        `<a href="${item.href}" class="hover:text-champagne transition-colors">${item.label}</a>`
    )).join('');

    footer.className = 'bg-parchment text-espresso py-16 md:py-20 px-4 sm:px-6 2xl:px-8 reveal';
    footer.innerHTML = `
        <div class="max-w-7xl 2xl:max-w-[90rem] mx-auto">
            <div class="footer-layout grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-start">
                <div class="text-center md:text-left max-w-md mx-auto md:mx-0 w-full">
                    <h2 class="font-serif text-3xl md:text-4xl 2xl:text-[2.75rem] mb-2 tracking-wide">Jo Manto</h2>
                    <p class="type-kicker type-kicker--taupe mb-6 md:mb-8">Visagismo &amp; Saúde Capilar</p>
                    <p class="text-xs font-normal text-espresso/70 mb-2">Atendimento exclusivo com hora marcada.</p>
                    <p id="site-address" class="text-xs font-normal text-espresso/70 leading-relaxed mb-4"></p>
                    <div class="footer-chip-row grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 mb-6 type-kicker type-kicker--taupe">
                        <span class="border border-mist bg-canvas/45 px-3 py-2">Chapecó e região</span>
                        <span class="border border-mist bg-canvas/45 px-3 py-2">Atendimento 1:1</span>
                        <span class="border border-mist bg-canvas/45 px-3 py-2">Hora marcada</span>
                    </div>
                    <a id="maps-directions-link" href="#" target="_blank" rel="noopener noreferrer"
                       class="inline-block type-link type-kicker--champagne hover:text-espresso mb-8">
                        Como chegar &rarr;
                    </a>
                    <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-xs border-t border-mist pt-6">
                        ${linksHtml}
                        <a id="instagram-link" href="#" target="_blank" rel="noopener noreferrer" class="hover:text-champagne transition-colors">Instagram</a>
                        <a href="privacidade.html" class="hover:text-champagne transition-colors">Privacidade</a>
                    </div>
                </div>
                <div class="footer-map-wrap w-full">
                    <p class="type-kicker type-kicker--taupe mb-3 text-center md:text-left">Localização</p>
                    <div id="footer-map" class="footer-map" role="region" aria-label="Mapa — Jo Manto, Chapecó"></div>
                </div>
            </div>
            <p class="text-center type-kicker type-kicker--taupe mt-10 md:mt-12 pt-6 border-t border-mist">
                &copy; <span id="footer-year"></span> Jo Manto. Todos os direitos reservados.
            </p>
        </div>
    `;
}

function renderFooter() {
    const addressEl = document.getElementById('site-address');
    if (addressEl) addressEl.textContent = SITE_CONFIG.address;

    const instagramEl = document.getElementById('instagram-link');
    if (instagramEl) instagramEl.href = SITE_CONFIG.instagram;

    const maps = resolveMapsConfig();
    const directionsEl = document.getElementById('maps-directions-link');
    if (directionsEl) directionsEl.href = maps.directionsUrl;

    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const mapContainer = document.getElementById('footer-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <iframe
                src="${maps.embedUrl}"
                title="Localização Jo Manto — ${SITE_CONFIG.address}"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        `;
    }
}

function applyPageCta(page) {
    const pageConfig = SITE_CONFIG.pages[page];
    if (!pageConfig) return;

    const waLink = document.getElementById('whatsapp-link');
    if (waLink) {
        const text = encodeURIComponent(pageConfig.whatsappMessage);
        waLink.href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`;
    }

    const ctaLabel = document.getElementById('cta-label');
    if (ctaLabel) ctaLabel.textContent = pageConfig.ctaLabel;

    const ctaBadge = document.getElementById('cta-badge');
    if (ctaBadge) ctaBadge.textContent = pageConfig.ctaBadge;
}

function initDualFunnelPersonalization() {
    const options = Array.from(document.querySelectorAll('[data-funnel-option]'));
    const panel = document.getElementById('funnel-panel');
    const funnelLink = document.getElementById('funnel-whatsapp-link');
    if (!options.length || !panel || !funnelLink) return;

    const fields = {
        kicker: document.getElementById('funnel-kicker'),
        title: document.getElementById('funnel-title'),
        copy: document.getElementById('funnel-copy'),
        fear: document.getElementById('funnel-fear'),
        proof: document.getElementById('funnel-proof'),
        next: document.getElementById('funnel-next')
    };

    const mainCta = document.getElementById('whatsapp-link');
    const mainCtaLabel = document.getElementById('cta-label');
    const mainCtaBadge = document.getElementById('cta-badge');

    const applyRoute = (route) => {
        const config = FUNNEL_PERSONALIZATION[route] || FUNNEL_PERSONALIZATION.visagismo;
        Object.entries(fields).forEach(([key, el]) => {
            if (el) el.textContent = config[key];
        });

        const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
        funnelLink.href = whatsappHref;
        funnelLink.textContent = config.cta;

        if (mainCta) mainCta.href = whatsappHref;
        if (mainCtaLabel) mainCtaLabel.textContent = config.cta;
        if (mainCtaBadge) mainCtaBadge.textContent = config.badge;

        options.forEach((option) => {
            const active = option.dataset.funnelOption === route;
            option.classList.toggle('funnel-option-active', active);
            option.setAttribute('aria-selected', String(active));
            option.tabIndex = active ? 0 : -1;
            if (active) {
                panel.setAttribute('aria-labelledby', option.id || '');
            }
        });
    };

    const focusRoute = (route) => {
        const target = options.find((opt) => opt.dataset.funnelOption === route);
        if (target) target.focus();
    };

    options.forEach((option) => {
        option.addEventListener('click', () => applyRoute(option.dataset.funnelOption));
        option.addEventListener('keydown', (event) => {
            const index = options.indexOf(option);
            let nextIndex = index;

            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault();
                nextIndex = (index + 1) % options.length;
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault();
                nextIndex = (index - 1 + options.length) % options.length;
            } else if (event.key === 'Home') {
                event.preventDefault();
                nextIndex = 0;
            } else if (event.key === 'End') {
                event.preventDefault();
                nextIndex = options.length - 1;
            } else {
                return;
            }

            const nextRoute = options[nextIndex].dataset.funnelOption;
            applyRoute(nextRoute);
            focusRoute(nextRoute);
        });
    });

    applyRoute('visagismo');
}

function initFaq() {
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach((button, index) => {
        const content = button.nextElementSibling;
        if (!content || !content.classList.contains('faq-content')) return;

        const panelId = `faq-panel-${index}`;
        content.id = panelId;
        button.setAttribute('aria-controls', panelId);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('type', 'button');

        const icon = button.querySelector('.faq-icon');
        button.addEventListener('click', () => {
            const isHidden = content.classList.contains('hidden');

            document.querySelectorAll('.faq-content').forEach((c) => c.classList.add('hidden'));
            document.querySelectorAll('.faq-btn').forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
            document.querySelectorAll('.faq-icon').forEach((i) => {
                i.style.transform = 'rotate(0deg)';
            });

            if (isHidden) {
                content.classList.remove('hidden');
                button.setAttribute('aria-expanded', 'true');
                if (icon) icon.style.transform = 'rotate(45deg)';
            }
        });
    });
}

function initReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = document.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
        revealElements.forEach((el) => el.classList.add('active'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach((el) => revealObserver.observe(el));
}

function applyMapeamentoChromePhase(phase) {
    const section = document.getElementById('mapeamento');
    if (!section) return;

    const resolved = phase || 'intro';
    section.classList.remove(
        'mapeamento-chrome-intro',
        'mapeamento-chrome-name',
        'mapeamento-chrome-immersion',
        'mapeamento-chrome-complete'
    );
    section.classList.add(`mapeamento-chrome-${resolved}`);

    const immersive = resolved === 'immersion' || resolved === 'name';
    section.classList.toggle('mapeamento-immersive', immersive);
    document.body.classList.toggle('mapeamento-immersive-open', immersive);
}

function applyHeroImage(page) {
    const heroImg = document.getElementById('img-hero');
    if (!heroImg) return;

    const src = SITE_CONFIG.images.hero[page] || SITE_CONFIG.images.hero.hub;
    heroImg.src = src;
}

function applyHeroKicker(page) {
    const kicker = document.getElementById('hero-kicker');
    if (!kicker) return;

    const copy = SITE_CONFIG.hero?.[page]?.kicker;
    if (copy) kicker.textContent = copy;
}

function applyJoImage() {
    const joImg = document.getElementById('img-jo');
    if (joImg) joImg.src = SITE_CONFIG.images.jo;
}

function getMapeamentoFrameMinHeight() {
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    const section = document.getElementById('mapeamento');
    const isIntro = section?.classList.contains('mapeamento-chrome-intro');
    if (isIntro) {
        return mobile ? 440 : 460;
    }
    const ratio = mobile ? 0.7 : 0.58;
    return Math.max(Math.round(window.innerHeight * ratio), mobile ? 480 : 520);
}

function getMapeamentoFrameMaxHeight() {
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    return Math.min(mobile ? 640 : 600, Math.round(window.innerHeight * (mobile ? 0.82 : 0.72)));
}

function syncMapeamentoFrameHeight(iframe, section, contentHeight, mode) {
    const immersive = section.classList.contains('mapeamento-immersive');

    if (immersive) {
        iframe.style.height = '100%';
        iframe.style.minHeight = '0';
        iframe.style.maxHeight = 'none';
        section.style.setProperty('--mapeamento-frame-height', '100%');
        section.classList.add('mapeamento-frame-synced');
        return;
    }

    const viewportMin = getMapeamentoFrameMinHeight();
    const viewportMax = getMapeamentoFrameMaxHeight();
    const measured = contentHeight > 0 ? contentHeight : viewportMin;
    const nextHeight = Math.min(Math.max(measured, viewportMin), viewportMax);

    iframe.style.height = `${nextHeight}px`;
    iframe.style.minHeight = `${viewportMin}px`;
    iframe.style.maxHeight = `${viewportMax}px`;
    section.style.setProperty('--mapeamento-frame-height', `${nextHeight}px`);
    section.classList.add('mapeamento-frame-synced');
}

function initMapeamentoEmbed() {
    const iframe = document.getElementById('mapeamento-iframe');
    const section = document.getElementById('mapeamento');
    if (!iframe || !section) return;

    let lastContentHeight = 0;

    window.addEventListener('message', (event) => {
        if (event.origin !== window.location.origin) return;
        if (event.source !== iframe.contentWindow) return;
        const data = event.data;
        if (!data?.type) return;

        if (data.type === 'glpro:mapeamento-chrome') {
            applyMapeamentoChromePhase(data.phase);
            const mode = data.phase === 'complete' ? 'complete' : 'funnel';
            syncMapeamentoFrameHeight(iframe, section, lastContentHeight, mode);
            return;
        }

        if (data.type === 'glpro:mapeamento-resize' && data.height) {
            lastContentHeight = data.height;
            syncMapeamentoFrameHeight(iframe, section, data.height, data.mode || 'funnel');
        }
    });

    iframe.addEventListener('load', () => {
        const mode = section.classList.contains('mapeamento-chrome-complete') ? 'complete' : 'funnel';
        syncMapeamentoFrameHeight(iframe, section, lastContentHeight, mode);
    });

    const embedWrap = section.querySelector('.mapeamento-embed-wrap');
    embedWrap?.addEventListener('pointerdown', () => {
        section.classList.add('mapeamento-embed-engaged');
    }, { passive: true });

    syncMapeamentoFrameHeight(iframe, section, 0, 'funnel');

    window.addEventListener('resize', () => {
        if (!section.classList.contains('mapeamento-frame-synced')) return;
        const mode = section.classList.contains('mapeamento-chrome-complete') ? 'complete' : 'funnel';
        syncMapeamentoFrameHeight(iframe, section, lastContentHeight, mode);
    }, { passive: true });

    if (window.location.hash === '#mapeamento') {
        requestAnimationFrame(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

function initMapeamentoFloatingCtaHide() {
    const section = document.getElementById('mapeamento');
    const floating = document.querySelector('.floating-cta-wrap');
    if (!section || !floating) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const suppress = entry.isIntersecting && entry.intersectionRatio >= 0.12;
            floating.classList.toggle('floating-cta-wrap--suppressed', suppress);
        });
    }, { threshold: [0, 0.12, 0.35] });

    observer.observe(section);
}

function initTestimonialsRail() {
    document.querySelectorAll('[data-testimonials-rail]').forEach((rail) => {
        const track = rail.querySelector('.testimonials-track');
        const dotsWrap = rail.querySelector('.testimonials-dots');
        if (!track || !dotsWrap) return;

        const cards = Array.from(track.querySelectorAll('.testimonials-card'));
        if (!cards.length) return;

        dotsWrap.innerHTML = cards.map((_, index) => (
            `<button type="button" class="testimonials-dot${index === 0 ? ' testimonials-dot--active' : ''}" aria-label="Depoimento ${index + 1}" data-dot-index="${index}"></button>`
        )).join('');

        const dots = Array.from(dotsWrap.querySelectorAll('.testimonials-dot'));

        const setActiveDot = (index) => {
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('testimonials-dot--active', dotIndex === index);
            });
        };

        const updateRailState = () => {
            const cardWidth = cards[0]?.offsetWidth || 0;
            const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 20;
            const fitsAll = track.clientWidth >= (cards.length * cardWidth) + ((cards.length - 1) * gap) - 4;
            rail.classList.toggle('testimonials-rail--desktop-grid', fitsAll);

            const maxScroll = track.scrollWidth - track.clientWidth;
            const atEnd = fitsAll || maxScroll <= 4 || track.scrollLeft >= maxScroll - 8;
            rail.classList.toggle('testimonials-rail--scrolled-end', atEnd);

            if (!cards.length || fitsAll) return;

            const trackRect = track.getBoundingClientRect();
            const midpoint = trackRect.left + trackRect.width / 2;
            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardMid = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardMid - midpoint);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveDot(closestIndex);
        };

        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                const index = Number(dot.dataset.dotIndex);
                const card = cards[index];
                if (!card) return;
                card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });
        });

        track.addEventListener('scroll', updateRailState, { passive: true });
        window.addEventListener('resize', updateRailState, { passive: true });
        updateRailState();
    });
}

function initInvestmentTiers() {
    document.querySelectorAll('[data-investment-tier]').forEach((card) => {
        const page = card.dataset.investmentPage;
        const tier = card.dataset.investmentTier;
        const config = SITE_CONFIG.investmentTiers?.[page]?.[tier];
        const cta = card.querySelector('[data-investment-cta]');
        if (!config || !cta) return;

        const href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
        cta.href = href;
        cta.textContent = config.cta;

        if (config.featured) {
            card.classList.add('pricing-tier--featured');
            const badge = card.querySelector('[data-investment-badge]');
            if (badge) badge.classList.remove('hidden');
        }
    });
}

function resolveSiteOrigin() {
    const configured = SITE_CONFIG.siteUrl?.trim();
    if (configured) return configured.replace(/\/$/, '');
    if (typeof window !== 'undefined' && window.location?.origin) {
        return window.location.origin;
    }
    return '';
}

function resolveAbsoluteUrl(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    const origin = resolveSiteOrigin();
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return origin ? `${origin}${normalized}` : path;
}

function upsertHeadTag(selector, createFn, applyFn) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = createFn();
        document.head.appendChild(el);
    }
    applyFn(el);
}

function applyPageSeo(page) {
    const seo = SITE_CONFIG.seo?.[page];
    if (!seo) return;

    const canonical = resolveAbsoluteUrl(seo.path || seo.file);
    const image = resolveAbsoluteUrl(seo.image);

    upsertHeadTag(
        'link[rel="canonical"]',
        () => {
            const link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            return link;
        },
        (el) => el.setAttribute('href', canonical)
    );

    upsertHeadTag(
        'meta[property="og:url"]',
        () => document.createElement('meta'),
        (el) => {
            el.setAttribute('property', 'og:url');
            el.setAttribute('content', canonical);
        }
    );

    upsertHeadTag(
        'meta[property="og:image"]',
        () => document.createElement('meta'),
        (el) => {
            el.setAttribute('property', 'og:image');
            el.setAttribute('content', image);
        }
    );

    upsertHeadTag(
        'meta[name="twitter:image"]',
        () => document.createElement('meta'),
        (el) => {
            el.setAttribute('name', 'twitter:image');
            el.setAttribute('content', image);
        }
    );
}

function injectLocalBusinessSchema() {
    if (document.getElementById('schema-local-business')) return;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HairSalon',
        name: 'Jo Manto',
        description: SITE_CONFIG.seo?.hub?.description,
        url: resolveSiteOrigin() || undefined,
        image: resolveAbsoluteUrl(SITE_CONFIG.seo?.hub?.image),
        email: SITE_CONFIG.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address,
            addressLocality: 'Chapecó',
            addressRegion: 'SC',
            addressCountry: 'BR'
        },
        areaServed: 'Chapecó e região',
        priceRange: '$$'
    };

    const script = document.createElement('script');
    script.id = 'schema-local-business';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

function initPortfolioLightbox() {
    const triggers = document.querySelectorAll('[data-portfolio-trigger]');
    if (!triggers.length) return;

    const items = SITE_CONFIG.portfolioItems || [];
    let activeIndex = 0;
    let lightbox = document.getElementById('portfolio-lightbox');

    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'portfolio-lightbox';
        lightbox.className = 'portfolio-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.setAttribute('aria-label', 'Visualização do portfólio');
        lightbox.innerHTML = `
            <div class="portfolio-lightbox-backdrop" data-lightbox-close></div>
            <div class="portfolio-lightbox-panel">
                <button type="button" class="portfolio-lightbox-close" data-lightbox-close aria-label="Fechar visualização">×</button>
                <button type="button" class="portfolio-lightbox-nav portfolio-lightbox-nav--prev" data-lightbox-prev aria-label="Imagem anterior">‹</button>
                <figure class="portfolio-lightbox-figure">
                    <img class="portfolio-lightbox-image" alt="" decoding="async">
                    <figcaption class="portfolio-lightbox-caption"></figcaption>
                </figure>
                <button type="button" class="portfolio-lightbox-nav portfolio-lightbox-nav--next" data-lightbox-next aria-label="Próxima imagem">›</button>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const imageEl = lightbox.querySelector('.portfolio-lightbox-image');
    const captionEl = lightbox.querySelector('.portfolio-lightbox-caption');
    let lastFocus = null;

    const render = (index) => {
        if (!items.length) return;
        activeIndex = (index + items.length) % items.length;
        const src = SITE_CONFIG.images.portfolio[activeIndex];
        const item = items[activeIndex];
        const label = SITE_CONFIG.portfolioLabels[activeIndex];
        if (imageEl && src) imageEl.src = src;
        if (imageEl && item?.alt) imageEl.alt = item.alt;
        if (captionEl) captionEl.textContent = item?.caption || label || '';
    };

    const open = (index) => {
        if (!items.length) return;
        lastFocus = document.activeElement;
        render(index);
        lightbox.classList.add('portfolio-lightbox--open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('portfolio-lightbox-open');
        lightbox.querySelector('.portfolio-lightbox-close')?.focus();
    };

    const close = () => {
        lightbox.classList.remove('portfolio-lightbox--open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('portfolio-lightbox-open');
        if (imageEl) imageEl.removeAttribute('src');
        if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const index = Number(trigger.dataset.portfolioIndex);
            open(Number.isFinite(index) ? index : 0);
        });
    });

    lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
        el.addEventListener('click', close);
    });
    lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => render(activeIndex - 1));
    lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click', () => render(activeIndex + 1));

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('portfolio-lightbox--open')) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowLeft') render(activeIndex - 1);
        if (event.key === 'ArrowRight') render(activeIndex + 1);
    });
}

function initPage(page) {
    const heroTone = PAGE_HERO_TONE[page] || 'light';
    renderSiteFooter(page);
    renderNav(page, heroTone);
    renderFooter();
    applyPageCta(page);
    applyHeroImage(page);
    applyHeroKicker(page);
    applyJoImage();
    if (typeof applyEmpowermentImage === 'function') applyEmpowermentImage();
    applyPortfolioImages();
    renderTrustBar('trust-bar');
    renderCredentialsSection('credentials-section');
    applyPageSeo(page);
    if (page === 'hub') injectLocalBusinessSchema();
    renderEditorialTeasers('editorial-teasers');
    initScrolledNav();
    initMobileNav();
    initDualFunnelPersonalization();
    initMapeamentoEmbed();
    initMapeamentoFloatingCtaHide();
    initTestimonialsRail();
    initInvestmentTiers();
    initPortfolioLightbox();
    initFaq();
    initReveal();
}

function initLegalPage() {
    renderSiteFooter('privacidade');
    renderNav('privacidade');
    renderFooter();
    initScrolledNav();
    initMobileNav();
    initReveal();
}
