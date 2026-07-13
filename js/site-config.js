const SITE_CONFIG = {
    whatsapp: '5549999999999',
    siteUrl: 'https://jomanto.com.br',
    address: 'Rua Exemplo de Arquitetura, 123 - Centro, Chapecó - SC',
    instagram: 'https://instagram.com/jomanto',
    email: 'contato@jomanto.com.br',
    maps: {
        embedUrl: '',
        directionsUrl: ''
    },
    trustStats: [
        { value: '16+', label: 'Anos de Experiência' },
        { value: '2.000+', label: 'Mulheres na Região' },
        { value: '5', label: 'Referências de Formação' },
        { value: '1:1', label: 'Atendimento Exclusivo' }
    ],
    credentials: [
        {
            mentor: 'Magno Alves',
            discipline: 'Corte',
            area: 'Estrutura & visagismo',
            pages: ['hub', 'visagismo']
        },
        {
            mentor: 'Rodrigo Sintra',
            discipline: 'Corte',
            area: 'Arquitetura capilar',
            pages: ['hub', 'visagismo']
        },
        {
            mentor: 'Mano Albuquerque',
            discipline: 'Corte',
            area: 'Técnica de precisão',
            pages: ['hub', 'visagismo']
        },
        {
            mentor: 'Jack Janini',
            discipline: 'Corte e colorimetria',
            area: 'Cor & leitura técnica',
            pages: ['hub', 'visagismo', 'terapias']
        },
        {
            mentor: 'Academia Longueiras',
            discipline: 'Penteado e corte',
            area: 'Formação institucional',
            pages: ['hub', 'visagismo', 'terapias']
        }
    ],
    credentialsCopy: {
        hub: {
            kicker: 'Formação & Referências',
            title: 'Base técnica com mestres da indústria',
            lede: 'A assinatura Jo Manto combina escuta, visagismo e química avançada — sustentada por formação com profissionais de referência em corte, cor e penteado.'
        },
        visagismo: {
            kicker: 'Certificações & Referências',
            title: 'Corte aprendido com quem define padrão no Brasil',
            lede: 'Cada linha no espelho parte de técnica consolidada: estrutura com mestres de corte, leitura de cor com colorimetria e acabamento formado em penteado profissional.'
        },
        terapias: {
            kicker: 'Base técnica',
            title: 'Cor e cuidado com formação de referência',
            lede: 'Protocolos GL PRO e leitura do fio apoiados em colorimetria e formação institucional — para prescrever com critério, não com receita genérica.',
            bandLabel: 'Colorimetria · Academia Longueiras'
        }
    },
    credentialsBandCopy: {
        visagismo: 'Corte, cor e penteado com referências nacionais',
        terapias: 'Leitura de cor e formação institucional',
        hub: 'Formação com mestres da indústria'
    },
    pages: {
        hub: {
            whatsappMessage: 'Olá, curadoria Jo Manto. Gostaria de saber mais sobre os serviços.',
            ctaLabel: 'Falar com a Curadoria',
            ctaBadge: 'Avaliação Gratuita'
        },
        visagismo: {
            whatsappMessage: 'Olá, curadoria Jo Manto. Gostaria de agendar meu corte e visagismo.',
            ctaLabel: 'Agendar Meu Corte',
            ctaBadge: 'Consultoria de Imagem'
        },
        terapias: {
            whatsappMessage: 'Olá, curadoria Jo Manto. Gostaria de agendar minha avaliação capilar.',
            ctaLabel: 'Agendar Minha Avaliação Capilar',
            ctaBadge: 'Diagnóstico Personalizado'
        }
    },
    investmentTiers: {
        visagismo: {
            discovery: {
                label: 'A Descoberta',
                cta: 'Consultar A Descoberta',
                whatsappMessage: 'Olá, Jo Manto. Tenho interesse na experiência A Descoberta (consultoria + corte). Pode me orientar sobre disponibilidade?'
            },
            signature: {
                label: 'A Assinatura',
                cta: 'Agendar A Assinatura',
                featured: true,
                whatsappMessage: 'Olá, Jo Manto. Quero agendar a experiência A Assinatura (visagismo completo + corte + texturização).'
            }
        },
        terapias: {
            session: {
                label: 'Sessão de Reposição Avulsa',
                cta: 'Agendar Sessão Avulsa',
                whatsappMessage: 'Olá, Jo Manto. Gostaria de agendar uma sessão de reposição avulsa e entender qual leitura capilar faz sentido para mim.'
            },
            cycle: {
                label: 'Ciclo de Reconstrução Inteligente',
                cta: 'Conversar Sobre o Ciclo',
                featured: true,
                whatsappMessage: 'Olá, Jo Manto. Tenho interesse no Ciclo de Reconstrução Inteligente e quero entender se é o melhor caminho para o meu fio.'
            }
        }
    },
    images: {
        hero: {
            hub: 'images/capa.jpg',
            visagismo: 'images/f28e8093-af12-47b3-be8f-046078ea4e0d.jpg',
            terapias: 'images/capa-banner-10.jpg'
        },
        empowerment: 'images/capa-banner-11.jpg',
        filosofia: 'images/capa.jpg',
        jo: 'images/jo-manto-portrait.jpg',
        terapiasStudio: [
            {
                src: 'images/banner-ozonio.jpg',
                alt: 'Terapia capilar com vaporização GL PRO no estúdio Jo Manto — Chapecó',
                caption: 'Infusão de ativos com vaporização controlada',
                kicker: 'Protocolo presencial'
            },
            {
                src: 'images/terapia-lavagem.jpg',
                alt: 'Ritual de lavagem e leitura capilar no estúdio Jo Manto',
                caption: 'Lavagem técnica e escuta antes da prescrição',
                kicker: 'Diagnóstico no lavatório'
            }
        ],
        portfolio: [
            'images/curto.jpg',
            'images/corte-curto-2.jpg',
            'images/f28e8093-af12-47b3-be8f-046078ea4e0d.jpg',
            'images/a63e4aaf-7efd-49c5-a6a3-be290ab76956.jpg'
        ]
    },
    portfolioLabels: [
        'Textura & Movimento',
        'Arquitetura Fina',
        'Integridade do Fio',
        'Adequação Facial'
    ],
    portfolioItems: [
        {
            alt: 'Corte curto texturizado com movimento natural — visagismo Jo Manto Chapecó',
            caption: 'Corte curto pensado para revelar presença e leveza sem perder naturalidade no dia a dia.'
        },
        {
            alt: 'Bob estruturado com franja — corte visagístico Jo Manto',
            caption: 'Linhas limpas e franja desenhada para sustentar imagem sofisticada com manutenção possível.'
        },
        {
            alt: 'Cabelo longo com ondas e brilho — visagismo e saúde do fio',
            caption: 'Movimento e brilho preservados para um resultado bonito no toque e no caimento.'
        },
        {
            alt: 'Corte em camadas com franja — adequação facial Jo Manto',
            caption: 'Camadas e franja equilibrando rosto, textura e personalidade da cliente.'
        }
    ],
    seo: {
        hub: {
            path: '/',
            file: 'index.html',
            title: 'Jo Manto | Visagismo e Terapias Capilares — Chapecó',
            description: 'Jo Manto — Arquitetura capilar personalizada em Chapecó, SC. Visagismo para sua nova identidade ou terapias com protocolos GL PRO.',
            image: 'images/capa.jpg'
        },
        visagismo: {
            path: '/visagismo.html',
            file: 'visagismo.html',
            title: 'Visagismo | Jo Manto — Chapecó',
            description: 'Visagismo e corte estruturado com Jo Manto em Chapecó, SC. Consultoria de imagem personalizada para descobrir a estrutura ideal do seu rosto.',
            image: 'images/f28e8093-af12-47b3-be8f-046078ea4e0d.jpg'
        },
        terapias: {
            path: '/terapias.html',
            file: 'terapias.html',
            title: 'Terapias Capilares | Jo Manto — Chapecó',
            description: 'Terapias capilares com protocolos GL PRO em Chapecó, SC. Mapeamento digital, leitura do fio e reposição personalizada com Jo Manto.',
            image: 'images/capa-banner-10.jpg'
        }
    },
    editorial: [
        {
            slug: 'quebra-ou-porosidade',
            kicker: 'Leitura do fio',
            title: 'Quebra ou porosidade: como saber a diferença?',
            excerpt: 'Os sintomas parecem iguais, mas pedem respostas diferentes. Entenda o que cada um revela antes de escolher um tratamento.',
            href: 'terapias.html#guia-quebra-porosidade'
        },
        {
            slug: 'cronograma-capilar',
            kicker: 'Rotina real',
            title: 'Por que cronograma genérico costuma falhar',
            excerpt: 'Hidratação, nutrição e reconstrução só funcionam quando conversam com o ciclo de lavagem e o histórico do seu fio.',
            href: 'terapias.html#guia-cronograma'
        },
        {
            slug: 'mapeamento-digital',
            kicker: 'Triagem',
            title: 'O que o mapeamento digital prepara — e o que não substitui',
            excerpt: 'Uma triagem online para chegar ao estúdio com contexto, sem abrir mão da avaliação presencial com a Jo.',
            href: 'terapias.html#guia-mapeamento'
        }
    ]
};

const GL_PRO = {
    tagline: 'Para cada dano, uma resposta molecular exata.',
    banner: {
        src: 'images/banner-todos-tier.jpg',
        alt: 'Biblioteca molecular GL PRO — prateleira com 29 ativos de reconstrução capilar no estúdio Jo Manto'
    },
    activesCount: 29,
    actives: [
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
    ],
    categories: [
        {
            name: 'Proteínas & Aminoácidos',
            description: 'Reconstrução estrutural e reposição de massa proteica.',
            products: [
                'AZ PROTEIN WQ',
                'AZ PROTEIN S',
                'AZ PROTEIN QRT',
                'AZ PROTEIN 8K',
                'AMINO Z50',
                'AMINO Z200',
                'AMINO CRM',
                'AMINOÁCIDOS DE ALTA P'
            ]
        },
        {
            name: 'Óleos & Butter',
            description: 'Selagem de cutícula e reposição lipídica profunda.',
            products: [
                'AZ OIL ARGAN',
                'AZ OIL OJON',
                'AZ OIL MARULA',
                'AZ OIL TUTANO',
                'ROSA MOSQUETA',
                'AZ BUTTER CUPUAÇU',
                'BUTTER KARITÉ'
            ]
        },
        {
            name: 'Ativos Especiais',
            description: 'Estímulo, proteção e fortalecimento do bulbo capilar.',
            products: [
                'EXTRACT JABORANDI',
                'D-PANTENOL QUATERNIZADO'
            ]
        }
    ]
};

function renderTrustBar(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !SITE_CONFIG.trustStats) return;

    container.innerHTML = `
        <p class="trust-bar-kicker text-center uppercase font-medium">16+ anos em Chapecó · atendimento exclusivo</p>
        ${SITE_CONFIG.trustStats.map((stat) => `
            <div class="trust-stat text-center px-4 py-2">
                <span class="trust-stat-value font-serif text-3xl md:text-4xl text-espresso block mb-1">${stat.value}</span>
                <span class="trust-stat-label type-kicker type-kicker--secondary">${stat.label}</span>
            </div>
        `).join('')}`;
}

function renderCredentialsSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !SITE_CONFIG.credentials?.length) return;

    const page = container.dataset.credentialsPage || 'hub';
    const variant = container.dataset.credentialsVariant || 'full';
    const layout = container.dataset.credentialsLayout || 'grid';
    const copy = SITE_CONFIG.credentialsCopy?.[page] || SITE_CONFIG.credentialsCopy.hub;
    const bandLabel = SITE_CONFIG.credentialsBandCopy?.[page] || SITE_CONFIG.credentialsBandCopy.hub;
    const items = SITE_CONFIG.credentials.filter((item) => item.pages.includes(page));
    if (!items.length) return;

    if (layout === 'band') {
        const pillsHtml = items.map((item) => `
            <article class="credential-pill" role="listitem">
                <span class="credential-pill__mentor">${item.mentor}</span>
                <span class="credential-pill__discipline">${item.discipline}</span>
            </article>
        `).join('');

        container.innerHTML = `
            <p class="credibility-band__formacao-label type-kicker type-kicker--secondary text-center">${bandLabel}</p>
            <div class="credentials-rail hide-scrollbar" role="list">${pillsHtml}</div>
        `;
        return;
    }

    const showHeader = container.dataset.credentialsHeader !== 'false';
    const headerHtml = showHeader && copy ? `
        <header class="credentials-section__header ${variant === 'compact' ? 'credentials-section__header--compact' : ''}">
            <span class="type-kicker type-kicker--taupe mb-4 block">${copy.kicker}</span>
            <h2 class="credentials-section__title font-serif text-espresso leading-tight">${copy.title}</h2>
            <p class="credentials-section__lede type-body type-body--sm type-body--secondary">${copy.lede}</p>
        </header>
    ` : '';

    const cardsHtml = items.map((item) => `
        <article class="credential-card">
            <p class="credential-card__area type-kicker type-kicker--clay">${item.area}</p>
            <h3 class="credential-card__mentor font-serif text-espresso">${item.mentor}</h3>
            <p class="credential-card__discipline type-kicker type-kicker--secondary type-kicker--inline">${item.discipline}</p>
        </article>
    `).join('');

    container.innerHTML = `
        ${headerHtml}
        <div class="credentials-grid credentials-grid--${variant}" role="list">${cardsHtml}</div>
    `;
}

function applyEmpowermentImage() {
    const img = document.getElementById('img-empowerment');
    if (img && SITE_CONFIG.images.empowerment) {
        img.src = SITE_CONFIG.images.empowerment;
    }
}

function renderGlProSection() {
    const container = document.getElementById('gl-pro-categories');
    if (!container) return;

    container.innerHTML = GL_PRO.categories.map((category) => `
        <div class="bg-canvas border border-mist p-6 md:p-8 rounded-sm">
            <h3 class="font-medium tracking-wide mb-2 text-sm uppercase text-espresso">${category.name}</h3>
            <p class="text-xs text-secondary font-normal leading-relaxed mb-6">${category.description}</p>
            <div class="flex flex-wrap gap-2">
                ${category.products.map((product) => `
                    <span class="gl-pro-chip">${product}</span>
                `).join('')}
            </div>
        </div>
    `).join('');

    const marquee = document.getElementById('gl-pro-marquee');
    if (!marquee) return;

    const allProducts = GL_PRO.actives?.length
        ? GL_PRO.actives
        : GL_PRO.categories.flatMap((category) => category.products);
    const items = [...allProducts, ...allProducts].map((product) => `
        <span class="mx-8 text-sm md:text-base uppercase tracking-[0.25em] text-taupe whitespace-nowrap">${product}</span>
        <span class="text-champagne/60">·</span>
    `).join('');

    marquee.innerHTML = items;

    const taglineEl = document.getElementById('gl-pro-tagline');
    if (taglineEl) taglineEl.textContent = GL_PRO.tagline;

    const bannerImg = document.getElementById('gl-pro-banner');
    if (bannerImg && GL_PRO.banner?.src) {
        bannerImg.src = GL_PRO.banner.src;
        if (GL_PRO.banner.alt) bannerImg.alt = GL_PRO.banner.alt;
    }

    const countEl = document.getElementById('gl-pro-actives-count');
    if (countEl && GL_PRO.activesCount) {
        countEl.textContent = String(GL_PRO.activesCount);
    }
}

function renderTerapiasStudioGallery(containerId = 'terapias-studio-gallery') {
    const container = document.getElementById(containerId);
    const items = SITE_CONFIG.images.terapiasStudio;
    if (!container || !items?.length) return;

    container.innerHTML = items.map((item) => `
        <figure class="studio-gallery__item">
            <div class="studio-gallery__frame">
                <img
                    src="${item.src}"
                    alt="${item.alt}"
                    loading="lazy"
                    decoding="async"
                    class="studio-gallery__img"
                >
            </div>
            <figcaption class="studio-gallery__caption">
                <span class="studio-gallery__kicker">${item.kicker}</span>
                <span class="studio-gallery__label">${item.caption}</span>
            </figcaption>
        </figure>
    `).join('');
}

function applyPortfolioImages() {
    const portfolioImgs = document.querySelectorAll('[data-portfolio-index]');
    portfolioImgs.forEach((img) => {
        const index = Number(img.dataset.portfolioIndex);
        const src = SITE_CONFIG.images.portfolio[index];
        const label = SITE_CONFIG.portfolioLabels[index];
        const item = SITE_CONFIG.portfolioItems?.[index];
        if (src) {
            img.src = src;
            img.loading = 'lazy';
            img.decoding = 'async';
        }
        if (item?.alt) img.alt = item.alt;
        if (label) {
            const labelEl = img.closest('.group')?.querySelector('[data-portfolio-label]');
            if (labelEl) labelEl.textContent = label;
        }
        const trigger = img.closest('[data-portfolio-trigger]');
        if (trigger && item?.alt) {
            trigger.setAttribute('aria-label', `Ampliar: ${item.alt}`);
        }
    });
}

function renderEditorialTeasers(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !SITE_CONFIG.editorial?.length) return;

    container.innerHTML = SITE_CONFIG.editorial.map((article) => `
        <a href="${article.href}" class="editorial-card editorial-teaser group block p-6 md:p-8 h-full">
            <span class="type-kicker type-kicker--clay mb-4">${article.kicker}</span>
            <h3 class="font-serif text-xl md:text-2xl text-espresso leading-snug mb-4 group-hover:text-clay transition-colors">${article.title}</h3>
            <p class="text-xs font-normal text-secondary leading-relaxed mb-6">${article.excerpt}</p>
            <span class="type-link group-hover:tracking-[0.35em]">Ler guia →</span>
        </a>
    `).join('');
}
