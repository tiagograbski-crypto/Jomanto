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
        { value: '100%', label: 'Protocolo Personalizado' },
        { value: '1:1', label: 'Atendimento Exclusivo' }
    ],
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
            terapias: 'images/BANNER CABELO PRETO.jpg'
        },
        empowerment: 'images/CURTO.jpg',
        filosofia: 'images/capa.jpg',
        jo: 'images/58bbf966-c5b2-4079-bd2f-fc04d91ed96d.jpg',
        portfolio: [
            'images/CURTO.jpg',
            'images/CORTE CURTO2.jpg',
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
            image: 'images/BANNER%20CABELO%20PRETO.jpg'
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
                <span class="trust-stat-label text-[10px] uppercase tracking-[0.2em] text-taupe font-medium">${stat.label}</span>
            </div>
        `).join('')}`;
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
            <p class="text-xs text-taupe font-light leading-relaxed mb-6">${category.description}</p>
            <div class="flex flex-wrap gap-2">
                ${category.products.map((product) => `
                    <span class="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-linen border border-mist text-espresso/80">${product}</span>
                `).join('')}
            </div>
        </div>
    `).join('');

    const marquee = document.getElementById('gl-pro-marquee');
    if (!marquee) return;

    const allProducts = GL_PRO.categories.flatMap((category) => category.products);
    const items = [...allProducts, ...allProducts].map((product) => `
        <span class="mx-8 text-sm md:text-base uppercase tracking-[0.25em] text-taupe whitespace-nowrap">${product}</span>
        <span class="text-champagne/60">·</span>
    `).join('');

    marquee.innerHTML = items;

    const taglineEl = document.getElementById('gl-pro-tagline');
    if (taglineEl) taglineEl.textContent = GL_PRO.tagline;
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
            <span class="text-[10px] uppercase tracking-[0.28em] text-clay mb-4 block">${article.kicker}</span>
            <h3 class="font-serif text-xl md:text-2xl text-espresso leading-snug mb-4 group-hover:text-clay transition-colors">${article.title}</h3>
            <p class="text-xs font-light text-taupe leading-relaxed mb-6">${article.excerpt}</p>
            <span class="text-[10px] uppercase tracking-widest text-espresso group-hover:tracking-[0.35em] transition-all">Ler guia →</span>
        </a>
    `).join('');
}
