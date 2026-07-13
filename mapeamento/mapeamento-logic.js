/**
 * GL PRO · Mapeamento Logic (SSOT)
 * Pure state, scoring, environment intelligence — no DOM.
 * @module mapeamento-logic
 */

export const TOTAL_STEPS = 7;

export const JOURNEY_PHASES = {
  digital: 'Mapeamento digital',
  presential: 'Avaliação técnica presencial'
};

export const PHASE2_MECHA_NOTE = ' Recomenda-se teste de mecha antes de novo procedimento.';

/** Nomenclatura pública — Jo Manto · leitura capilar honesta. */
export const TRIAGEM_NOMENCLATURE = {
  pageTitle: 'Jo Manto · Mapeamento Capilar',
  productName: 'Mapeamento Capilar',
  introHeadline: 'Mapeamento Capilar Digital',
  introSubline: 'Cruze histórico, sintomas e rotina para uma leitura orientativa do seu fio.',
  introDisclaimer: 'Leitura capilar preparatória — a validação acontece no estúdio Jo Manto · Chapecó.',
  introStructureRationale: 'Sua estrutura dita como o fio absorve os ativos do protocolo.',
  progressIdle: 'Arquitetura natural',
  step0Greeting: 'Antes de começar, como podemos te chamar?',
  step0Subline: 'Para personalizar a leitura do seu fio {struct}, informe seu primeiro nome:',
  step0Button: 'Continuar >',
  step4Title: 'Espessura do fio.',
  step4Subline: 'Isso ajuda a calibrar a intensidade do protocolo sem sobrecarregar a fibra.',
  step5Title: 'Rotina de lavagem.',
  step5Subline: 'Com que frequência você lava os fios? Isso define a cadência ideal do tratamento.',
  step5Note: '',
  step6Title: 'Exposição do dia a dia.',
  step6Subline: 'Selecione o que mais impacta seu fio no cotidiano (múltipla escolha).',
  step6Button: 'Confirmar ambiente',
  finalPreloadTitle: 'A consolidar sua leitura capilar',
  step2Title: 'Histórico químico.',
  step2Context: 'Marque os procedimentos que seu cabelo já passou — isso define a zona de segurança do protocolo.',
  goalQuebra: 'Recuperar quebra e elasticidade',
  goalBrilho: 'Devolver brilho e maciez',
  goalDiagnostico: 'Entender por que nada funciona',
  goalDiscover: 'Só quero diagnóstico antes de investir',
  step1Title: 'Qual é a sua principal dor hoje?',
  step1SublineSuffix: ', o que mais incomoda no seu fio neste momento?',
  historyConfirm: 'Confirmar histórico',
  symptomsNext: 'Confirmar sintomas',
  processingTitle: 'A preparar sua leitura capilar...',
  processingLine1: 'A organizar o perfil do fio...',
  processingLine2: 'A cruzar histórico e rotina...',
  processingLine3: 'A sugerir linha de cuidados...',
  processingDone: 'Leitura concluída.',
  transitionTitle: 'A organizar orientações para o seu fio...',
  transitionSub: 'Mapeamento digital · Jo Manto',
  dossierTitle: 'Resumo da Leitura Capilar',
  dossierStatus: 'Leitura capilar concluída · orientativa',
  dossierScoreLabel: 'Indicador orientativo',
  dossierIntegrityTitle: 'Perfil do fio (estimativa)',
  dossierProjectionLabel: 'Referência orientativa',
  dossierSymptomsTitle: 'O que você reportou',
  dossierIntroLede: 'Consolidamos estrutura, histórico químico e exposição em um resumo orientativo. A Jo valida presencialmente e define o protocolo GL PRO certo para o seu momento.',
  dossierHydricLegend: 'Estimativa algorítmica. A avaliação presencial confirmará os valores absolutos.',
  dossierProtocolBadge: 'Protocolo GL PRO · reservado',
  dossierBlurHint: 'Detalhes completos de aplicação são validados presencialmente com a Jo.',
  dossierChemicalFootnoteTitle: 'Nota sobre henê ou formol',
  dossierChemicalFootnoteBody: 'Procedimentos com henê ou formol alteram a resposta do fio. A confirmação e teste de mecha, se necessário, ocorrem na avaliação presencial.',
  dossierHaircutFootnoteTitle: 'Pontas ralas ou extrafinas · orientação de corte',
  dossierHaircutFootnoteBody: 'Quando a fibra distal perde massa, protocolos semipermanentes não restauram o diâmetro nas pontas. A Jo combina tratamento com corte de limpeza quando necessário — a definição é validada na avaliação presencial.',
  bancadaSectionTitle: 'Linha sugerida na avaliação presencial',
  matrixStep1Default: 'Limpeza preparatória conforme perfil reportado no mapeamento.',
  matrixStep2Default: 'Protocolo sugerido — detalhes na avaliação presencial.',
  matrixStep3Default: 'Finalização e proteção conforme rotina e exposição reportadas.',
  matrixLockDefault: 'Detalhes na avaliação presencial',
  liveMessagePrefix: 'Leitura capilar concluída.',
  legalDisclaimerMain: 'Mapeamento estético preparatório — não substitui avaliação presencial com a Jo Manto. Indicadores são estimativas orientativas.',
  legalDisclaimerFooter: 'Jo Manto · Chapecó · leitura capilar orientativa. Confirmação na avaliação presencial.',
  funnelNavLabel: 'Navegação do mapeamento'
};

/** Número WhatsApp oficial GL PRO (mesmo padrão do site: main.js, Concierge, estúdios). */
export const WHATSAPP_NUMBER = '5549999999999';

/** CTA de agendamento presencial — Jo Manto Chapecó. */
export const SCHEDULE_CTA = {
  campaignId: 'JO-MANTO-CHAPE',
  whatsappNumber: WHATSAPP_NUMBER,
  studioLabel: 'Jo Manto · Chapecó',
  stickyLabel: 'AGENDAR AVALIAÇÃO PRESENCIAL',
  stickySub: 'Falar com a curadoria via WhatsApp',
  buttonLabel: 'Agendar Avaliação Capilar',
  ctrLabel: 'Equipe Jo Manto',
  ctrHint: 'continuar no WhatsApp'
};

/** Copy padronizada nas áreas bloqueadas (ativos + protocolo). */
export const PROTOCOL_LOCK_LABEL = 'PROTOCOLO RESERVADO PARA VALIDAÇÃO PRESENCIAL';

/** Rótulo público para fatores do cruzamento tricológico (substitui "Cenário A/B"). */
export const TRICHO_FACTOR_LABEL = 'Fator crítico identificado';

/** FAQ público — alinhado ao fluxo presencial (sem pagamento). */
export const FAQ_PUBLIC_COPY = [
  {
    q: 'Como agendo a avaliação presencial?',
    a: 'Após concluir o mapeamento, use a barra fixa <strong>Agendar Avaliação Presencial</strong> na parte inferior da tela. Sua mensagem já vai com o resumo do mapeamento para Chapecó.'
  },
  {
    q: 'Por que alguns ativos e o protocolo aparecem bloqueados?',
    a: 'O mapeamento digital é orientativo. A sequência completa de aplicação e os ativos extras são liberados na <strong>avaliação presencial</strong>, com teste de mecha quando necessário. Não há pagamento online nesta etapa.'
  },
  {
    q: 'E se os produtos sugeridos forem muito caros?',
    a: 'Indicamos <strong>ativos moleculares</strong> (ex.: ácido lático), não marcas fechadas. Com o nome técnico, você pode buscar na farmácia, online ou aplicar na unidade conforme seu orçamento.'
  },
  {
    q: 'Este mapeamento substitui a avaliação técnica no estúdio?',
    a: 'Não. É preparatória e não substitui avaliação presencial nem avaliação presencial no estúdio. Os indicadores são estimativas — a confirmação ocorre na unidade.'
  }
];

/** Rótulos curtos de alertas para handoff WhatsApp. */
export const HANDOFF_ALERT_SHORT_LABELS = {
  water_oeste_sc: 'Agressão Hídrica Regional',
  triple_thermal: 'Rotina Tripla',
  thermal_shock: 'Choque Térmico Diário',
  photo_pollution: 'Foto-Poluição',
  pollution_rigidity: 'Poluição + Rigidez',
  particulate: 'Depósito Particulado',
  photo_lipid: 'Foto-Oleosidade',
  photo_oxidation: 'Foto-Oxidativo',
  hydric: 'Alerta Hídrico (AC)',
  dry_ac: 'Ar Seco / AC',
  saline: 'Alerta Salino',
  chemical_hene: 'Incompatibilidade · Henê',
  chemical_relax_mechas: 'Relaxamento × Madeixas',
  chemical_formol_mechas: 'Formol × Madeixas',
  chemical_mechas_alisamento: 'Madeixas × Alisamento',
  tip_afinamento: 'Pontas extrafinas · corte',
  mapped_default: 'Exposição Mapeada'
};

export const SEMANTIC_LABELS = [
  'Fase 02 • Abertura de dossiê',
  'Objetivo capilar...',
  'Histórico químico...',
  'Comportamento do fio...',
  'Calibre do fio...',
  'Rotina de lavagem...',
  'Ambiente e rotina...',
  '',
  'A preparar resumo...'
];

export const HISTORY_WINDOW_LABELS = {
  '1_mes': 'Há 1 mês',
  '2_meses': 'Há 2 meses',
  '3_meses': 'Há 3 meses',
  '4_meses': 'Há 4 meses',
  acima_4: 'Há mais de 4 meses',
  virgem: 'Fio virgem / sem química'
};

export const HISTORY_WINDOW_SUBLABELS = {
  '1_mes': 'saturação ativa',
  '2_meses': 'muito recente',
  '3_meses': 'influência ainda visível',
  '4_meses': 'saturação em redução',
  acima_4: 'sem química recente'
};

export const HISTORY_WINDOW_RECENCY = {
  '1_mes': 1,
  '2_meses': 2,
  '3_meses': 3,
  '4_meses': 4,
  acima_4: 5
};

export const CROSS_PRELOAD_MS = 3200;
export const CROSS_PRELOAD_COPY_INTERVAL_MS = 800;
export const CROSS_PRELOAD_COPY_LINES = [
  'Mapeando arquitetura natural do fio...',
  'Processando inventário químico...',
  'Calculando compatibilidade de ativos...',
  'Finalizando dossiê de triagem...',
];
export const PROCESSING_MS = 1200;
export const TRANSITION_MS = 600;
export const TRANSITION_FADE_MS = 200;

export const SYMPTOM_LABELS = {
  saudavel: 'Cabelo saudável / sem danos',
  quebra: 'Quebra constante',
  emborrachamento: 'Emborrachamento / fio elástico',
  porosidade: 'Porosidade elevada',
  rigidez: 'Rigidez nas pontas',
  afinamento: 'Pontas ralas / afinamento',
  misto: 'Raiz oleosa e pontas secas'
};

/** Rótulos públicos do objetivo capilar (dor reportada na triagem). */
export const GOAL_PUBLIC_LABELS = {
  Quebra: 'recuperar quebra e elasticidade',
  Brilho: 'devolver brilho e maciez',
  Diagnostico: 'entender por que nada funciona',
  Descobrir: 'diagnóstico antes de investir',
  Mechas: 'design de cor / iluminação',
  Alisamento: 'alisamento estrutural',
  Coloracao: 'coloração ou cobertura de brancos',
  Transicao: 'transição capilar'
};

/** Objetivos focados em tratamento / leitura capilar (Terapias Jo Manto). */
export const TREATMENT_PAIN_GOALS = ['Quebra', 'Brilho', 'Diagnostico', 'Descobrir', 'Tratamento'];

export function isTreatmentFocusedGoal(goal) {
  return TREATMENT_PAIN_GOALS.includes(goal);
}

/** Rótulo do objetivo para exibição em frase (ex.: Transicao → Transição capilar). */
export function formatGoalDisplayLabel(goal) {
  const raw = GOAL_PUBLIC_LABELS[goal] || (goal || '').replace(/_/g, ' ');
  const trimmed = String(raw).trim();
  if (!trimmed) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/** Objetivos cujo procedimento não recupera massa nas pontas extrafinas. */
export const GOALS_NON_CORRECTIVE_FOR_TIP_MASS = ['Mechas', 'Alisamento', 'Coloracao', 'Transicao'];

export const TIP_MASS_LOSS_SYMPTOM = 'afinamento';

/**
 * Sintoma de pontas ralas, desfiadas ou extrafinas reportado no passo 3.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {boolean}
 */
export function hasTipMassLossReport(userData) {
  const symptoms = (userData && userData.symptoms) || [];
  return symptoms.includes(TIP_MASS_LOSS_SYMPTOM);
}

/**
 * Orientação de corte quando a fibra distal já perdeu massa.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {{ active: boolean, title: string, message: string, handoffLabel: string }}
 */
export function computeHaircutOrientation(userData) {
  if (!hasTipMassLossReport(userData)) {
    return { active: false, title: '', message: '', handoffLabel: '' };
  }

  const goal = userData.goal || '';
  const goalBlocksCorrection = GOALS_NON_CORRECTIVE_FOR_TIP_MASS.includes(goal);
  const goalLabel = GOAL_PUBLIC_LABELS[goal] || goal;
  const title = 'Pontas comprometidas · corte indicado';
  const handoffLabel = 'Pontas extrafinas · corte indicado';

  let message =
    'Você reportou <strong class="font-medium underline">pontas ralas, desfiadas ou extrafinas</strong>. ' +
    'Esse quadro não é revertido por protocolos semipermanentes internacionais aplicados só no comprimento — ' +
    'a fibra distal que já perdeu massa precisa de <strong class="font-medium underline">corte de limpeza</strong> ' +
    'antes de novos procedimentos. Na avaliação técnica presencial, a equipe CTR define o nível de corte e o protocolo viável no comprimento saudável.';

  if (goalBlocksCorrection && goalLabel) {
    message =
      'Você reportou <strong class="font-medium underline">pontas ralas, desfiadas ou extrafinas</strong>. ' +
      '<strong class="font-medium underline">' + goalLabel.charAt(0).toUpperCase() + goalLabel.slice(1) + '</strong> ' +
      'não corrige perda de massa nas pontas — protocolos semipermanentes atuam no comprimento viável, não reconstruem o diâmetro distal. ' +
      'A orientação do mapeamento inclui <strong class="font-medium underline">corte de limpeza</strong> quando necessário, ' +
      'combinado aos protocolos internacionais da unidade, com validação técnica presencial.';
  }

  validateLexicalCompliance(title + ' ' + message.replace(/<[^>]+>/g, ' '));
  return { active: true, title, message, handoffLabel };
}

export const HISTORY_PROCEDURE_LABELS = {
  formol: 'Progressiva com Formol',
  organica: 'Progressiva Orgânica / Ácida',
  relaxamento: 'Relaxamento / Tioglicolato',
  hene: 'Henê',
  mechas: 'Descoloração / Mechas / Iluminação',
  coloracao: 'Coloração ou Tonalizante',
  virgem: 'Cabelo Virgem'
};

export const LIFESTYLE_LABELS = {
  ac: 'Ar Condicionado (Ressecamento Contínuo)',
  uv: 'Exposição Solar',
  suor: 'Suor / Atividade Física Intensa (Oxidação)',
  poluicao: 'Poluição / Metais Pesados'
};

export const WASH_SURFACTANT = {
  1: { label: 'Baixa', desc: 'Exposição moderada a surfactantes. Retenção lipídica preservada entre lavagens.', stress: 10 },
  2: { label: 'Moderada', desc: 'Ciclo dia sim/dia não. Remoção progressiva do manto hidrolipídico.', stress: 22 },
  3: { label: 'Elevada', desc: 'Lavagens frequentes aumentam agressão alcalina e desgaste de cutícula.', stress: 36 },
  4: { label: 'Crítica', desc: 'Lavagem diária — máxima lixiviação proteica e drift de pH da rede.', stress: 50 }
};

export const WASH_FREQUENCY_LABELS = {
  1: '1–2 vezes por semana',
  2: '3–4 vezes por semana (dia sim, dia não)',
  3: '5–6 vezes por semana',
  4: 'Lavagem diária'
};

export const REGION_PROFILES = {
  br_oeste_sc: {
    label: 'Brasil · Oeste/Sudoeste SC',
    hemisphere: 'south',
    waterNote: 'Rede do polo Chapecó (Lajeado São José / Rio Uruguai): estiagem eleva cloro e sulfato de alumínio; encanamentos depositam cobre e ferro no chuveiro.',
    aqiBoost: 10,
    phBaseline: 7.1,
    tier4Boost: 14
  },
  br_sudeste: { label: 'Brasil · Sudeste', hemisphere: 'south', waterNote: 'Rede metropolitana: água dura, cloro elevado e cálcio dissolvido.', aqiBoost: 14, phBaseline: 6.9, tier4Boost: 0 },
  br_nordeste: { label: 'Brasil · Nordeste', hemisphere: 'south', waterNote: 'Água alcalina costeira; salinidade e calor amplificam oxidação.', aqiBoost: 8, phBaseline: 7.0, tier4Boost: 0 },
  br_sul: { label: 'Brasil · Sul', hemisphere: 'south', waterNote: 'Água calcária + amplitudes térmicas — choque frio/quente frequente.', aqiBoost: 6, phBaseline: 6.8, tier4Boost: 4 },
  br_norte: { label: 'Brasil · Norte/Centro', hemisphere: 'south', waterNote: 'Alta umidade ou água de poço; frizz por absorção hídrica.', aqiBoost: 5, phBaseline: 6.7, tier4Boost: 0 },
  latam: { label: 'América Latina', hemisphere: 'south', waterNote: 'Padrão urbano latino: cloro da rede + minerais regionais variáveis.', aqiBoost: 10, phBaseline: 6.8, tier4Boost: 0 },
  europe: { label: 'Europa', hemisphere: 'north', waterNote: 'Água frequentemente calcária; baixa umidade indoor no inverno.', aqiBoost: 9, phBaseline: 6.9, tier4Boost: 0 },
  na: { label: 'América do Norte', hemisphere: 'north', waterNote: 'Rede tratada com cloro/cloraminas; dureza varia por estado/província.', aqiBoost: 11, phBaseline: 6.9, tier4Boost: 0 },
  global: { label: 'Perfil Global', hemisphere: null, waterNote: 'Calibração internacional WHO — baseline urbano sem região específica.', aqiBoost: 0, phBaseline: 6.5, tier4Boost: 0 }
};

/** Pilares técnicos da assinatura hídrica Oeste/Sudoeste SC (polo Chapecó). */
export const WEST_SC_WATER_PILLARS = [
  {
    title: 'Carga química flutuante e estiagem',
    body: 'Quando reservatórios baixam, minerais e matéria orgânica concentram-se na água bruta. O processamento da água eleva cloro livre e sulfato de alumínio — oxidante silencioso que desbota cor e acelera ressecamento (choque osmótico).'
  },
  {
    title: 'Saturação metálica e tubulações',
    body: 'Após a estação, a água percorre rede metropolitana e encanamentos prediais (cobre/ferro). Cobre, ferro e alumínio depositam-se na cutícula e no córtex — rigidez, baço e emborrachamento com descolorantes.'
  },
  {
    title: 'Desvio de pH na lavagem diária',
    body: 'Rede levemente alcalina (>7,0) vs cutícula ideal (4,5–5,5). Lavagem frequente dilata escamas por inchaço hídrico — cruzamento crítico com porosidade reportada no mapeamento.'
  }
];

/** Meses de estiagem típica Oeste/Sudoeste SC (outono/inverno austral). */
export const WEST_SC_DROUGHT_MONTHS = [3, 4, 5, 6, 7, 8];

export const WEST_SC_WATER_FOOTNOTE =
  'Calibração orientativa com base na assinatura hídrica regional — não substitui análise laboratorial da concessionária.';

export const MATRIX_COPY = {
  chemical_hene: {
    step1: 'Pré-protocolo de emergência com complexo quelante antes de qualquer nova química — henê incompatível com descoloração/alisamento.',
    step2: 'Infusão reconstrutora de pontes disulfeto (sem oxidação) até estabilizar integridade mínima.',
    step3: 'Selagem de proteção química — bloqueio de novos procedimentos oxidativos até validação técnica.'
  },
  chemical_relax_mechas: {
    step1: 'Shampoo neutro de baixa alcalinidade para remover resíduos sem abrir cutícula antes de avaliar descoloração.',
    step2: 'Máscara proteica de preenchimento intra-cuticular — relaxamento + mechas exige reforço de massa.',
    step3: 'Selagem anti-rutura com proteína de alto peso molecular e termoproteção obrigatória.'
  },
  chemical_formol_mechas: {
    step1: 'Limpeza ácida suave para estabilizar pH e reduzir tensão residual de formol na haste.',
    step2: 'Infusão de ceramidas + aminoácidos para recuperar elasticidade antes de qualquer luz.',
    step3: 'Barreira selante anti-oxidante — formol + madeixas exige bloqueio UV e térmico contínuo.'
  },
  chemical_mechas_alisamento: {
    step1: 'Detergente de baixa carga para não lixiviar massa remanescente pós-descoloração.',
    step2: 'Reposição proteica focalizada nas zonas de afinamento por corrosão química.',
    step3: 'Selagem lipídica densa para evitar corte mecânico pós-alisamento sobre fibra descolorida.'
  },
  triple_thermal: {
    step1: 'Shampoo pH 4,5–5,5 para fechar cutícula antes das transições AC → sol → suor diárias.',
    step2: 'Infusão com ceramidas + pantenol para reparar barreira após choque térmico triplo.',
    step3: 'Selagem termoprotetora e anti-umidade entre ambientes contrastantes.'
  },
  thermal_shock: {
    step1: 'Limpeza ácida preventiva — neutraliza drift alcalino antes do contraste frio/calor.',
    step2: 'Máscara hidratante de penetração para compensar perda hídrica do choque térmico.',
    step3: 'Finalizador com silicones voláteis + termoproteção para transições diárias.'
  },
  photo_pollution: {
    step1: 'Shampoo quelante leve para remover particulados PM2.5 antes da matriz ativa.',
    step2: 'Infusão antioxidante (vitamina E / polifenóis) contra foto-oxidação urbana.',
    step3: 'Selagem UV + anti-poluição com barreira anti-metálica.'
  },
  pollution_rigidity: {
    step1: 'Clarificação mineral — remove depósitos metálicos confirmados pela rigidez reportada.',
    step2: 'Reposição de lipídios após desmineralização para devolver flexibilidade mecânica.',
    step3: 'Selagem anti-redepósito para tráfego urbano contínuo.'
  },
  particulate: {
    step1: 'Limpeza profunda anti-resíduo para transporte público e fuligem urbana.',
    step2: 'Infusão reconstrutora com proteína vegetal para rigidez induzida por metais.',
    step3: 'Barreira selante anti-oxidante contra novos depósitos particulados.'
  },
  photo_lipid: {
    step1: 'Shampoo suave de baixa lixiviação — lavagens frequentes + UV exigem preservar lipídios.',
    step2: 'Máscara rica em óleos leves e ceramidas para repor selagem removida pelo sol.',
    step3: 'Leave-in com filtro UV e selagem especular.'
  },
  photo_oxidation: {
    step1: 'Preparação ácida para compactar cutícula antes da exposição solar direta.',
    step2: 'Infusão anti-UV com aminoácidos fotoprotectores.',
    step3: 'Selagem com filtros UV e anti-desbotamento para cor química.'
  },
  hydric: {
    step1: 'Shampoo hidratante pH balanceado — porosidade + AC exigem limpeza não agressiva.',
    step2: 'Infusão humectante (glicerina, pantenol) para retenção hídrica intra-cuticular.',
    step3: 'Selagem anti-frizz com barreira contra ar seco recirculado.'
  },
  water_oeste_sc: {
    step1: 'Shampoo Detox (Tier 4) — remoção quelante de alumínio, cloro residual e metais da rede Oeste/Sudoeste SC.',
    step2: 'Infusão de suporte após desintoxicação — preparar haste antes do reequilíbrio ácido.',
    step3: 'Vinagre Capilar (Tier 4) — correção de pH alcalino da rede e selagem cuticular pós-lavagem.'
  },
  dry_ac: {
    step1: 'Limpeza com baixo surfactante para preservar manto lipídico em ambiente seco.',
    step2: 'Máscara emoliente para compensar desidratação do ar condicionado.',
    step3: 'Selagem anti-estática e brilho especular.'
  },
  saline: {
    step1: 'Shampoo clarificante suave para dissolver cristais de sal do suor na haste.',
    step2: 'Infusão hidratante pós-atividade para restaurar elasticidade.',
    step3: 'Selagem resistente à fricção mecânica e umidade do suor.'
  },
  baseline: {
    step1: 'Para equilibrar a estimativa de desvio de pH e preparar o fio antes da reposição cosmética.',
    step2: 'Infusão intra-cuticular personalizada com ceramidas e aminoácidos conforme o score de integridade.',
    step3: 'Selagem tecnológica de manutenção — proteção conforme tendência de exposição mapeada.'
  },
  mapped_default: {
    step1: 'Vetor de limpeza calibrado ao perfil ambiental reportado no mapeamento.',
    step2: 'Infusão estrutural alinhada aos fatores de exposição mapeados.',
    step3: 'Selamento de barreira conforme índice de exposição calculado.'
  },
  tip_afinamento: {
    step1: 'Higienização suave — pontas extrafinas não recuperam diâmetro com limpeza agressiva.',
    step2: 'Protocolo semipermanente internacional no comprimento saudável; zona distal com perda de massa fica fora do alcance cosmético.',
    step3: 'Orientação presencial: corte de limpeza nas pontas antes de novo procedimento químico ou térmico.'
  }
};

/** @typedef {{ nome: string, ativos: string }} BancadaProduto */
/** @typedef {{ categoria: string, foco: string, produtos: BancadaProduto[] }} BancadaTier */
/** @typedef {'tier_1'|'tier_2'|'tier_3'|'tier_4'|'tier_5'} BancadaTierId */
/** @typedef {'limpeza'|'infusao'|'selagem'|'protecao'} BancadaStepRole */

/** @type {Record<BancadaTierId, BancadaTier>} */
export const PROTOCOLOS_BANCADA = {
  tier_1: {
    categoria: 'Protocolo e Estruturação Pós-Química',
    foco: 'Devolução de massa, correção de porosidade severa e estabilização de pH.',
    produtos: [
      { nome: 'Shampoo Nutrição e Correção Pós-Química', ativos: 'AZ Protein W (Trigo), Amino Z50, AZ Oil Argan' },
      { nome: 'Máscara Nutrição e Correção Pós-Química', ativos: 'AZ Protein WQ, Amino Z50, AZ Butter Cupuaçu' },
      { nome: 'Condicionador Nutrição e Correção Pós-Química', ativos: 'AZ Protein WQ (Trigo Quaternizado), Amino CRM (Ceramidas), AZ Oil Ojon' },
      { nome: 'Finalizador Nutrição e Correção Pós-Química', ativos: 'Amino Z200, AZ Oil Rosa Mosqueta, AZ Protein S (Seda)' }
    ]
  },
  tier_2: {
    categoria: 'Reconstrução e Reposição Hídrico-Proteica',
    foco: 'Fios com rigidez estrutural, quebra ou afinamento por agressão hídrica extrema.',
    produtos: [
      { nome: 'Shampoo Reconstrução', ativos: 'AZ Protein QRT (Queratina de Creatina), AZ Extract JBD (Jaborandi), D-Pantenol Quaternizado' },
      { nome: 'Máscara Reconstrução', ativos: 'AZ Protein 8K, AZ Oil Marula, AZ Butter Karité' },
      { nome: 'Condicionador Reconstrução', ativos: 'AZ Protein 8K (Vegetal), D-Pantenol Quaternizado, AZ Oil Tutano (Mocotó)' },
      { nome: 'Linha Reconstrução (Frasco Finalizador)', ativos: 'AZ Protein 8K (Vegetal), D-Pantenol, AZ Oil Tutano (Mocotó)' },
      { nome: 'Fluido Reconstrutor', ativos: 'AZ Protein CRT (Queratina), Aminoácidos' }
    ]
  },
  tier_3: {
    categoria: 'Manutenção Diária e Brilho',
    foco: 'Estabilização de rotinas, controle de oxidação e barreira lipídica.',
    produtos: [
      { nome: 'Shampoo Manutenção e Brilho', ativos: 'AZ Extract ALV (Babosa), D-Pantenol, AZ Oil Semente de Uva' },
      { nome: 'Máscara Manutenção e Brilho', ativos: 'AZ Protein S (Seda), D-Pantenol, AZ Oil Macadâmia' },
      { nome: 'Condicionador Manutenção e Brilho', ativos: 'D-Pantenol, AZ Extract MLG (Mel), AZ Oil Algodão' },
      { nome: 'Leave in Manutenção', ativos: 'D-Pantenol, AZ Extract MLG (Mel), AZ Oil Algodão' }
    ]
  },
  tier_4: {
    categoria: 'Protocolos Específicos e Estímulo',
    foco: 'Desintoxicação do couro cabeludo, reequilíbrio ácido.',
    produtos: [
      { nome: 'Shampoo Detox', ativos: 'AZ Extract HTL (Hortelã), AZ Extract ALC (Alecrim), AZ Extract JBD (Jaborandi)' },
      { nome: 'Tônico Capilar', ativos: 'AZ Extract JBD (Jaborandi), Vitamina A Oleosa' },
      { nome: 'Vinagre Capilar', ativos: 'D-Pantenol, AZ Extract MLG (Mel), Protein S (Seda)' }
    ]
  },
  tier_5: {
    categoria: 'Proteção e Finalização Avançada',
    foco: 'Defesa térmica e ambiental (UV, Ar Condicionado).',
    produtos: [
      { nome: 'Sérum Fluido Térmico', ativos: 'Sensoil Plus, Silsoft Ax, Óleo de Monoi, Garden Active' },
      { nome: 'Sérum de Silicone', ativos: 'Silicone' }
    ]
  }
};

export const PROTOCOL_DOSSIER_DISCLAIMER =
  'Este mapeamento reflete a demanda estrutural do seu fio com base no mapeamento digital. A validação do protocolo e o teste de mecha serão executados por nossa equipe técnica durante a sua avaliação presencial.';

/**
 * Digest SHA-256 (hex) do PIN de equipe — validação definitiva via POST /api/validate-pin.
 * O valor em claro não deve existir no bundle cliente.
 */
const STAFF_PIN_SHA256_HEX = '158a323a7ba44870f23d96f1516dd70aa48e9a72db4ebb026b0a89e212a208ab';

/** Ativos visíveis antes da ofuscação estratégica (resto exige PIN). */
export const ATIVOS_PREVIEW_COUNT = 5;

const APPLICATION_STEP_META = {
  limpeza: { order: 1, title: 'Preparação / Limpeza' },
  infusao: { order: 2, title: 'Infusão Estrutural' },
  selagem: { order: 3, title: 'Selagem e Finalização' },
  protecao: { order: 4, title: 'Proteção Ambiental' }
};

const APPLICATION_STEP_INSTRUCTIONS = {
  limpeza: 'Aplicar sobre couro cabeludo umedecido, massagear suavemente e enxaguar. Prepara a haste para absorção dos ativos seguintes.',
  infusao: 'Distribuir da raiz às pontas. Pausa de 10–15 minutos sob touca térmica ou vapor. Enxaguar parcialmente conforme validação técnica.',
  selagem: 'Aplicar nos comprimentos e pontas, desembaraçar com penteado fino. Selar cutícula antes da finalização.',
  protecao: 'Aplicar pequena quantidade antes de fontes térmicas ou exposição solar. Proteção diária conforme rotina reportada.'
};

/** @type {readonly string[]} */
export const LEXICAL_FORBIDDEN = Object.freeze([
  'clínica', 'clinica', 'cura', 'paciente', 'luxo', 'elite', 'diagnóstico médico', 'diagnostico medico'
]);

/**
 * @param {string} text
 * @returns {{ ok: boolean, matches: string[] }}
 */
export function validateLexicalCompliance(text) {
  const lower = (text || '').toLowerCase();
  const matches = LEXICAL_FORBIDDEN.filter(function (term) {
    return lower.includes(term);
  });
  return { ok: matches.length === 0, matches };
}

/**
 * @param {BancadaTierId} tierId
 * @param {string} nameFragment
 * @returns {BancadaProduto|undefined}
 */
export function findBancadaProductByName(tierId, nameFragment) {
  const tier = PROTOCOLOS_BANCADA[tierId];
  if (!tier) return undefined;
  const needle = nameFragment.toLowerCase();
  return tier.produtos.find(function (p) {
    return p.nome.toLowerCase().includes(needle);
  });
}

/**
 * @param {BancadaTierId} tierId
 * @returns {BancadaProduto[]}
 */
export function getFullTierProducts(tierId) {
  const tier = PROTOCOLOS_BANCADA[tierId];
  return tier ? tier.produtos.slice() : [];
}

/**
 * @param {Array<BancadaProduto & { tierId?: BancadaTierId }>} lists
 * @returns {Array<BancadaProduto & { tierId: BancadaTierId }>}
 */
export function mergeProtocolProducts(lists) {
  /** @type {Map<string, BancadaProduto & { tierId: BancadaTierId }>} */
  const seen = new Map();
  lists.forEach(function (batch) {
    batch.forEach(function (item) {
      if (!item || !item.nome) return;
      if (!seen.has(item.nome)) {
        seen.set(item.nome, {
          nome: item.nome,
          ativos: item.ativos,
          tierId: item.tierId || 'tier_3'
        });
      }
    });
  });
  return Array.from(seen.values());
}

/**
 * @param {BancadaProduto} produto
 * @param {BancadaTierId} tierId
 */
function tagProduct(produto, tierId) {
  return { nome: produto.nome, ativos: produto.ativos, tierId };
}

/**
 * @param {string[]} symptoms
 */
function symptomFaltaBrilho(symptoms) {
  return symptoms.includes('porosidade') || symptoms.includes('rigidez');
}

/**
 * @param {string[]} symptoms
 */
function symptomFrizz(symptoms) {
  return symptoms.includes('porosidade');
}

/**
 * @param {string[]} symptoms
 */
function symptomOleosidade(symptoms) {
  return symptoms.includes('misto');
}

/**
 * @param {string[]} symptoms
 */
function symptomSensibilidadeCapilar(symptoms) {
  return symptoms.includes('rigidez') || symptoms.includes('porosidade') || symptoms.includes('emborrachamento');
}

/**
 * @typedef {{
 *   id: 'A'|'B'|'C'|'D',
 *   title: string,
 *   rationale: string,
 *   produtos: Array<BancadaProduto & { tierId: BancadaTierId }>
 * }} TrichologicalDiagnostic
 */

/**
 * Árvore de decisão tricológica — cross-analysis lifestyle × sintomas × lavagem.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {ReturnType<typeof buildEnvironmentProfile>} [envProfile]
 * @returns {{
 *   diagnostics: TrichologicalDiagnostic[],
 *   produtos: Array<BancadaProduto & { tierId: BancadaTierId }>,
 *   activeIds: Array<'A'|'B'|'C'|'D'>
 * }}
 */
export function analyzeTrichologicalProfile(userData, envProfile) {
  const profile = envProfile || buildEnvironmentProfile(userData);
  const lifestyle = userData.lifestyle || [];
  const symptoms = userData.symptoms || [];
  const aqi = profile.air.score;
  const washDaily = userData.wash_frequency === 4;

  /** @type {TrichologicalDiagnostic[]} */
  const diagnostics = [];

  const scenarioA =
    (lifestyle.includes('poluicao') || aqi > 50) &&
    (symptoms.includes('rigidez') || symptomFaltaBrilho(symptoms));

  if (scenarioA) {
    const detox = findBancadaProductByName('tier_4', 'Shampoo Detox');
    const tier1Full = getFullTierProducts('tier_1');
    /** @type {Array<BancadaProduto & { tierId: BancadaTierId }>} */
    const produtosA = [];
    if (detox) produtosA.push(tagProduct(detox, 'tier_4'));
    tier1Full.forEach(function (p) { produtosA.push(tagProduct(p, 'tier_1')); });
    let rationaleA =
      'Depósito de material particulado e metais pesados na cutícula, somado à foto-oxidação, causando enrijecimento da haste.';
    if (profile.regionKey === 'br_oeste_sc') {
      rationaleA +=
        ' Assinatura hídrica Oeste/Sudoeste SC: saturação de alumínio (decantação) e metais da rede predial validam remoção quelante antes da matriz ativa.';
    }
    diagnostics.push({
      id: 'A',
      title: 'Saturação Metálica e Estresse Oxidativo',
      rationale: rationaleA,
      produtos: produtosA
    });
  }

  const scenarioB =
    lifestyle.includes('ac') &&
    (symptoms.includes('porosidade') || symptomFrizz(symptoms));

  if (scenarioB) {
    const tier3Full = getFullTierProducts('tier_3');
    const silicone = findBancadaProductByName('tier_5', 'Sérum de Silicone');
    /** @type {Array<BancadaProduto & { tierId: BancadaTierId }>} */
    const produtosB = tier3Full.map(function (p) { return tagProduct(p, 'tier_3'); });
    if (silicone) produtosB.push(tagProduct(silicone, 'tier_5'));
    diagnostics.push({
      id: 'B',
      title: 'Choque Osmótico e Desidratação Crônica',
      rationale:
        'Exposição constante ao ar condicionado reduz a umidade do córtex (choque osmótico), enquanto porosidade dilatada favorece perda hídrica e frizz.',
      produtos: produtosB
    });
  }

  const scenarioC =
    symptoms.includes('quebra') ||
    symptoms.includes('afinamento') ||
    symptoms.includes('emborrachamento');

  if (scenarioC) {
    const tier2Full = getFullTierProducts('tier_2');
    const termico = findBancadaProductByName('tier_5', 'Sérum Fluido Térmico');
    /** @type {Array<BancadaProduto & { tierId: BancadaTierId }>} */
    const produtosC = tier2Full.map(function (p) { return tagProduct(p, 'tier_2'); });
    if (termico) produtosC.push(tagProduct(termico, 'tier_5'));
    let rationaleC =
      'Perda severa de massa no córtex (queratina e aminoácidos) devido a processos oxidativos ou tração mecânica. O fio apresenta falha estrutural iminente.';
    if (symptoms.includes('afinamento')) {
      rationaleC +=
        ' Pontas ralas ou extrafinas não são corrigidas por protocolo semipermanente no comprimento — incluir corte de limpeza na avaliação técnica presencial.';
    }
    diagnostics.push({
      id: 'C',
      title: 'Falha Estrutural e Degradação Proteica',
      rationale: rationaleC,
      produtos: produtosC
    });
  }

  const scenarioD =
    washDaily &&
    (symptomOleosidade(symptoms) || symptomSensibilidadeCapilar(symptoms));

  if (scenarioD) {
    const detox = findBancadaProductByName('tier_4', 'Shampoo Detox');
    const tonico = findBancadaProductByName('tier_4', 'Tônico Capilar');
    const vinagre = findBancadaProductByName('tier_4', 'Vinagre Capilar');
    const shampooManut = findBancadaProductByName('tier_3', 'Shampoo Manutenção');
    /** @type {Array<BancadaProduto & { tierId: BancadaTierId }>} */
    const produtosD = [];
    if (detox) produtosD.push(tagProduct(detox, 'tier_4'));
    if (vinagre) produtosD.push(tagProduct(vinagre, 'tier_4'));
    if (tonico) produtosD.push(tagProduct(tonico, 'tier_4'));
    if (shampooManut) produtosD.push(tagProduct(shampooManut, 'tier_3'));
    let rationaleD =
      'Agressão hídrica diária e uso excessivo de tensoativos causam efeito rebote no couro cabeludo e alcalinização (inchaço) da cutícula.';
    if (profile.regionKey === 'br_oeste_sc') {
      rationaleD +=
        ' Rede alcalina do Oeste catarinense + lavagem diária: Shampoo Detox remove build-up de alumínio/metal; Vinagre Capilar reequilibra pH e sela cutícula pós-desintoxicação.';
    }
    diagnostics.push({
      id: 'D',
      title: 'Desgaste por Tensoativos e Desvio de pH',
      rationale: rationaleD,
      produtos: produtosD
    });
  }

  const produtos = mergeProtocolProducts(diagnostics.map(function (d) { return d.produtos; }));

  return {
    diagnostics,
    produtos,
    activeIds: diagnostics.map(function (d) { return d.id; })
  };
}

/**
 * Monta HTML do dossiê de protocolos (dark tech) — sem DOM.
 * @param {TrichologicalDiagnostic[]} diagnosticsArray
 * @returns {string}
 */
export function buildProtocolDossierMarkup(diagnosticsArray) {
  if (!diagnosticsArray || diagnosticsArray.length === 0) {
    return (
      '<p class="text-sm font-normal leading-relaxed">Nenhum fator crítico adicional no cruzamento do mapeamento. ' +
      'A linha sugerida considerará manutenção preventiva com base no perfil reportado.</p>' +
      '<p class="text-sm font-normal mt-6 pt-4 border-t border-[#333333] leading-relaxed">' +
      PROTOCOL_DOSSIER_DISCLAIMER + '</p>'
    );
  }

  let html = '<div class="space-y-8">';

  diagnosticsArray.forEach(function (diag) {
    const blockText = diag.title + ' ' + diag.rationale + ' ' + PROTOCOL_DOSSIER_DISCLAIMER;
    diag.produtos.forEach(function (p) {
      validateLexicalCompliance(p.nome + ' ' + p.ativos);
    });
    validateLexicalCompliance(blockText);

    html += '<div class="border-l-2 border-[#D97706] pl-4 md:pl-5">';
    html += '<h4 class="text-base font-medium mb-2 leading-snug"><span class="text-[#D97706]">' + TRICHO_FACTOR_LABEL + ':</span> ' + diag.title + '</h4>';
    html += '<p class="text-sm font-normal leading-relaxed mb-4">' + diag.rationale + '</p>';
    html += '<div class="space-y-3">';

    html += '</div></div>';
  });

  html += '</div>';
  html += '<p class="text-sm font-normal mt-8 pt-4 border-t border-[#333333] leading-relaxed">' +
    PROTOCOL_DOSSIER_DISCLAIMER + '</p>';

  validateLexicalCompliance(html);
  return html;
}

/**
 * Brief técnico da assinatura hídrica regional (Oeste/Sudoeste SC) — dark panel.
 * @param {ReturnType<typeof buildEnvironmentProfile>} envProfile
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {string}
 */
export function buildRegionalWaterBriefMarkup(envProfile, userData) {
  if (!envProfile || envProfile.regionKey !== 'br_oeste_sc') return '';

  const washDaily = userData.wash_frequency >= 4;
  const symptoms = userData.symptoms || [];
  const criticalCross = washDaily && symptoms.includes('porosidade');

  let html = '<div class="regional-water-brief border-l-2 border-[#D97706] pl-4 md:pl-5">';
  html += '<p class="type-kicker type-kicker--amber mb-2">Assinatura hídrica · Oeste/Sudoeste SC</p>';
  html += '<p class="text-sm font-normal leading-relaxed mb-4">';
  html += 'Captação via bacias Lajeado São José e Rio Uruguai. Cruzar rotina reportada × indicadores do fio ';
  html += 'é mais preciso do que índices genéricos de qualidade da água para orientar o protocolo presencial.';
  html += '</p><ul class="space-y-3">';

  WEST_SC_WATER_PILLARS.forEach(function (pillar) {
    validateLexicalCompliance(pillar.title + ' ' + pillar.body);
    html += '<li class="text-sm font-normal leading-relaxed">';
    html += '<span class="font-medium">' + pillar.title + '.</span> ' + pillar.body;
    html += '</li>';
  });

  html += '</ul>';

  if (criticalCross) {
    html += '<p class="mt-4 text-sm font-medium leading-relaxed text-[#D97706]">';
    html += 'Cruzamento crítico no mapeamento: lavagem diária + porosidade na assinatura hídrica regional — ';
    html += 'cutícula dilatada por inchaço hídrico recorrente.';
    html += '</p>';
  }

  if (envProfile.drought && envProfile.drought.active) {
    html += '<p class="mt-4 text-secondary text-xs font-normal leading-relaxed border border-[#333333] rounded-lg px-3 py-2 bg-[#222222]/60">';
    html += '<span class="type-kicker type-kicker--amber block mb-1">' + envProfile.drought.label + '</span>';
    html += envProfile.drought.note;
    html += '</p>';
  }

  html += '<p class="mt-4 type-body type-body--sm type-body--secondary italic">' + WEST_SC_WATER_FOOTNOTE + '</p>';
  html += '</div>';
  validateLexicalCompliance(html);
  return html;
}

/**
 * Extrai lista única de ativos moleculares a partir de produtos da bancada.
 * @param {Array<BancadaProduto>} produtos
 * @returns {string[]}
 */
export function extractUniqueAtivos(produtos) {
  /** @type {Map<string, string>} */
  const map = new Map();
  (produtos || []).forEach(function (prod) {
    if (!prod || !prod.ativos) return;
    prod.ativos.split(',').forEach(function (raw) {
      const trimmed = raw.trim();
      if (trimmed) map.set(trimmed.toLowerCase(), trimmed);
    });
  });
  return Array.from(map.values());
}

/**
 * Monta protocolo de aplicação (ativos visíveis + passos ofuscáveis).
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {ReturnType<typeof buildEnvironmentProfile>} envProfile
 * @returns {{ ativos: string[], steps: Array<{ order: number, title: string, product: string, ativos: string, instruction: string }> }}
 */
export function buildApplicationProtocol(userData, envProfile) {
  const bancada = resolveBancadaProtocol(userData, envProfile);
  /** @type {BancadaProduto[]} */
  const produtos = [];

  Object.keys(bancada.steps).forEach(function (role) {
    const step = bancada.steps[role];
    if (step && step.produto) produtos.push(step.produto);
  });

  if (bancada.tricho && bancada.tricho.produtos) {
    bancada.tricho.produtos.forEach(function (p) {
      produtos.push(p);
    });
  }

  const ativos = extractUniqueAtivos(produtos);
  /** @type {Array<{ order: number, title: string, product: string, ativos: string, instruction: string }>} */
  const steps = [];

  ['limpeza', 'infusao', 'selagem', 'protecao'].forEach(function (role) {
    const step = bancada.steps[role];
    const meta = APPLICATION_STEP_META[role];
    if (!step || !step.produto || !meta) return;
    steps.push({
      order: meta.order,
      title: meta.title,
      product: step.produto.nome,
      ativos: step.produto.ativos,
      instruction: APPLICATION_STEP_INSTRUCTIONS[role] || ''
    });
  });

  steps.sort(function (a, b) { return a.order - b.order; });
  return { ativos, steps };
}

/**
 * HTML da seção Ativos Necessários — primeiros N visíveis; resto ofuscado.
 * @param {string[]} ativos
 * @returns {string}
 */
export function buildAtivosNecessariosMarkup(ativos) {
  if (!ativos || ativos.length === 0) {
    return '<p class="text-sm text-secondary font-normal">Ativos serão definidos na validação presencial com base no mapeamento.</p>';
  }

  const preview = ativos.slice(0, ATIVOS_PREVIEW_COUNT);
  const locked = ativos.slice(ATIVOS_PREVIEW_COUNT);

  function buildList(items) {
    let listHtml = '<ul class="ativos-necessarios-list space-y-3">';
    items.forEach(function (ativo) {
      validateLexicalCompliance(ativo);
      listHtml += '<li class="flex items-start gap-3">';
      listHtml += '<span class="ativos-necessarios-dot mt-2 flex-shrink-0"></span>';
      listHtml += '<span class="text-espresso text-sm md:text-base font-medium leading-relaxed">' + ativo + '</span>';
      listHtml += '</li>';
    });
    listHtml += '</ul>';
    return listHtml;
  }

  let html = buildList(preview);

  if (locked.length > 0) {
    html += '<div id="ativos-necessarios-locked" class="ativos-necessarios-locked protocol-application protocol-application--locked relative mt-5 rounded-xl overflow-hidden">';
    html += '<div class="protocol-application__content bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl p-4 md:p-5">';
    html += buildList(locked);
    html += '</div>';
    html += '<div id="ativos-lock-overlay" class="protocol-lock-overlay" aria-hidden="false">';
    html += '<i data-lucide="lock" class="protocol-lock-overlay__icon w-5 h-5"></i>';
    html += '<span class="protocol-lock-overlay__text">' + PROTOCOL_LOCK_LABEL + '</span>';
    html += '</div></div>';
  }

  return html;
}

/**
 * HTML da seção Protocolo de Aplicação — renderizado porém ofuscável via CSS.
 * @param {Array<{ order: number, title: string, product: string, ativos: string, instruction: string }>} steps
 * @returns {string}
 */
export function buildProtocolApplicationMarkup(steps) {
  if (!steps || steps.length === 0) {
    return '<p class="text-sm text-secondary font-normal">Sequência de aplicação reservada para validação presencial.</p>';
  }

  let html = '<ol class="protocol-application-steps space-y-5">';
  steps.forEach(function (step) {
    validateLexicalCompliance(step.product + ' ' + step.ativos + ' ' + step.instruction);
    html += '<li class="protocol-application-step flex items-start gap-4">';
    html += '<span class="protocol-application-step__num flex-shrink-0">' + step.order + '</span>';
    html += '<div class="flex-1 min-w-0">';
    html += '<p class="type-kicker type-kicker--amber mb-1">' + step.title + '</p>';
    html += '<p class="text-espresso text-sm font-medium mb-1">' + step.product + '</p>';
    html += '<p class="text-secondary text-xs font-normal mb-2">Ativos: ' + step.ativos + '</p>';
    html += '<p class="text-espresso text-sm font-normal leading-relaxed">' + step.instruction + '</p>';
    html += '</div></li>';
  });
  html += '</ol>';
  return html;
}

/**
 * Deriva passos da matriz a partir dos produtos tricológicos mesclados.
 * @param {Array<BancadaProduto & { tierId: BancadaTierId }>} produtos
 */
function buildStepsFromTrichoProducts(produtos) {
  const findRole = function (pattern) {
    return produtos.find(function (p) {
      return pattern.test(p.nome);
    });
  };
  const limpeza = findRole(/shampoo|detox/i);
  const infusao = findRole(/máscara|mascara|fluido reconstrutor|tônico|tonico/i);
  const selagem = findRole(/condicionador|finalizador|leave|vinagre/i);
  const protecao = findRole(/sérum|serum/i);

  return {
    limpeza: limpeza ? { tierId: limpeza.tierId, produto: limpeza } : null,
    infusao: infusao ? { tierId: infusao.tierId, produto: infusao } : null,
    selagem: selagem ? { tierId: selagem.tierId, produto: selagem } : null,
    protecao: protecao ? { tierId: protecao.tierId, produto: protecao } : null
  };
}

const BANCADA_PRIMARY_TIERS = ['tier_1', 'tier_2', 'tier_4', 'tier_3'];
const BANCADA_CHEMICAL_PROCEDURES = ['formol', 'relaxamento', 'hene', 'mechas', 'coloracao', 'organica'];
const BANCADA_HYDric_ALERT_KEYS = ['hydric', 'saline', 'dry_ac'];
const BANCADA_THERMAL_ALERT_KEYS = ['triple_thermal', 'thermal_shock', 'photo_oxidation', 'photo_lipid', 'photo_pollution'];

/**
 * @param {BancadaTierId} tierId
 * @param {BancadaStepRole} role
 * @returns {BancadaProduto|undefined}
 */
export function pickBancadaProduct(tierId, role) {
  const tier = PROTOCOLOS_BANCADA[tierId];
  if (!tier) return undefined;

  const find = function (pattern) {
    return tier.produtos.find(function (p) {
      return p.nome.toLowerCase().includes(pattern);
    });
  };

  if (role === 'limpeza') {
    return find('shampoo') || tier.produtos[0];
  }
  if (role === 'infusao') {
    return find('máscara') || find('mascara') || find('tonico') || find('tônico') || tier.produtos[1] || tier.produtos[0];
  }
  if (role === 'selagem') {
    return find('finalizador') || find('leave') || find('vinagre') || find('condicionador') || find('fluido') || tier.produtos[tier.produtos.length - 1];
  }
  if (role === 'protecao') {
    return find('sérum') || find('serum') || tier.produtos[0];
  }
  return undefined;
}

/**
 * @param {BancadaProduto} produto
 * @param {string} [context]
 * @returns {string}
 */
export function formatBancadaStepCopy(produto, context) {
  if (!produto) return context || '';
  const base = produto.nome + ' · Ativos: ' + produto.ativos + '.';
  return context ? base + ' ' + context : base;
}

/**
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {ReturnType<typeof buildEnvironmentProfile>} envProfile
 * @param {ReturnType<typeof computeIntegrityScore>} integrity
 * @returns {Record<BancadaTierId, number>}
 */
export function scoreBancadaTiers(userData, envProfile, integrity) {
  /** @type {Record<BancadaTierId, number>} */
  const scores = { tier_1: 0, tier_2: 0, tier_3: 0, tier_4: 0, tier_5: 0 };
  const history = userData.history || [];
  const symptoms = userData.symptoms || [];
  const lifestyle = userData.lifestyle || [];
  const chemicalKey = resolveChemicalMatrixKey(userData);

  if (!history.includes('virgem')) {
    BANCADA_CHEMICAL_PROCEDURES.forEach(function (proc) {
      if (history.includes(proc)) scores.tier_1 += 14;
    });
  }
  if (symptoms.includes('porosidade')) scores.tier_1 += 12;
  if (symptoms.includes('emborrachamento')) scores.tier_1 += 16;
  if (chemicalKey) scores.tier_1 += 22;
  if (envProfile.ph.estimated >= 6.8) scores.tier_1 += 6;

  if (symptoms.includes('quebra')) scores.tier_2 += 22;
  if (symptoms.includes('afinamento')) scores.tier_2 += 20;
  if (symptoms.includes('rigidez')) scores.tier_2 += 14;
  if (symptoms.includes('emborrachamento')) scores.tier_2 += 10;
  if (integrity.baseScore < 55) scores.tier_2 += 18;
  else if (integrity.baseScore < 70) scores.tier_2 += 10;
  if (BANCADA_HYDric_ALERT_KEYS.includes(envProfile.mixed.alertKey)) scores.tier_2 += 10;

  if (symptoms.includes('saudavel')) scores.tier_3 += 28;
  if (history.includes('virgem') && symptoms.length <= 1) scores.tier_3 += 14;
  if (integrity.baseScore >= 80 && !chemicalKey) scores.tier_3 += 18;
  if (isTreatmentFocusedGoal(userData.goal)) scores.tier_3 += 8;
  if (envProfile.exposureIndex < 35 && integrity.baseScore >= 75) scores.tier_3 += 10;

  if (symptoms.includes('misto')) scores.tier_4 += 16;
  if (symptoms.includes('rigidez') && lifestyle.includes('poluicao')) scores.tier_4 += 22;
  if (envProfile.mixed.alertKey === 'pollution_rigidity') scores.tier_4 += 20;
  if (envProfile.mixed.alertKey === 'particulate') scores.tier_4 += 12;
  if (envProfile.mixed.alertKey === 'water_oeste_sc') scores.tier_4 += 20;
  if (envProfile.ph.estimated >= 7) scores.tier_4 += 12;
  if (userData.wash_frequency >= 4) scores.tier_4 += 6;

  const regionKey = resolveRegionKey(userData);
  const regionProfile = getRegionProfile(userData);
  if (regionKey === 'br_oeste_sc') {
    scores.tier_4 += regionProfile.tier4Boost || 14;
    if (symptoms.includes('rigidez')) scores.tier_4 += 10;
    if (symptoms.includes('porosidade') && userData.wash_frequency >= 4) scores.tier_4 += 12;
    if (envProfile.drought && envProfile.drought.active) scores.tier_4 += envProfile.drought.tier4Boost || 6;
  }

  if (lifestyle.includes('uv')) scores.tier_5 += 16;
  if (lifestyle.includes('ac')) scores.tier_5 += 12;
  if (lifestyle.includes('suor')) scores.tier_5 += 8;
  if (BANCADA_THERMAL_ALERT_KEYS.includes(envProfile.mixed.alertKey)) scores.tier_5 += 22;
  if (envProfile.exposureIndex >= 55) scores.tier_5 += 14;

  return scores;
}

/**
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {ReturnType<typeof buildEnvironmentProfile>} envProfile
 * @returns {{
 *   primaryTier: BancadaTierId,
 *   adjunctTiers: BancadaTierId[],
 *   scores: Record<BancadaTierId, number>,
 *   protocol: BancadaTier,
 *   steps: Record<BancadaStepRole, { tierId: BancadaTierId, produto: BancadaProduto }|null>,
 *   rationale: string[]
 * }}
 */
export function resolveBancadaProtocol(userData, envProfile) {
  const tricho = analyzeTrichologicalProfile(userData, envProfile);

  if (tricho.diagnostics.length > 0) {
    const primaryTier = tricho.produtos[0]?.tierId || 'tier_3';
    const steps = buildStepsFromTrichoProducts(tricho.produtos);
    const adjunctTiers = [];
    tricho.produtos.forEach(function (p) {
      if (p.tierId === 'tier_5' && !adjunctTiers.includes('tier_5')) adjunctTiers.push('tier_5');
    });

    return {
      primaryTier,
      adjunctTiers,
      scores: { tier_1: 0, tier_2: 0, tier_3: 0, tier_4: 0, tier_5: 0 },
      protocol: PROTOCOLOS_BANCADA[primaryTier],
      steps,
      rationale: tricho.diagnostics.map(function (d) { return TRICHO_FACTOR_LABEL + ': ' + d.title; }),
      tricho
    };
  }

  return resolveBancadaProtocolScored(userData, envProfile);
}

/**
 * Fallback por pontuação quando nenhum cenário tricológico é acionado.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {ReturnType<typeof buildEnvironmentProfile>} envProfile
 */
function resolveBancadaProtocolScored(userData, envProfile) {
  const integrity = computeIntegrityScore(userData);
  const scores = scoreBancadaTiers(userData, envProfile, integrity);

  let primaryTier = 'tier_3';
  let maxScore = -1;
  BANCADA_PRIMARY_TIERS.forEach(function (tierId) {
    if (scores[tierId] > maxScore) {
      maxScore = scores[tierId];
      primaryTier = tierId;
    }
  });

  /** @type {BancadaTierId[]} */
  const adjunctTiers = [];
  if (scores.tier_5 >= 12 && primaryTier !== 'tier_5') adjunctTiers.push('tier_5');
  if (scores.tier_4 >= 18 && primaryTier !== 'tier_4') adjunctTiers.push('tier_4');

  const limpezaTier = scores.tier_4 >= 18 && primaryTier !== 'tier_4' && envProfile.ph.estimated >= 6.9
    ? 'tier_4'
    : primaryTier;

  const limpeza = pickBancadaProduct(limpezaTier, 'limpeza');
  const infusao = pickBancadaProduct(primaryTier, 'infusao');
  const selagem = pickBancadaProduct(primaryTier, 'selagem');
  const protecao = adjunctTiers.includes('tier_5') ? pickBancadaProduct('tier_5', 'protecao') : null;

  /** @type {string[]} */
  const rationale = [];
  if (scores.tier_1 >= 14) rationale.push('Histórico químico ou porosidade severa');
  if (scores.tier_2 >= 14) rationale.push('Indícios de fragilidade ou perda hídrico-proteica');
  if (scores.tier_4 >= 14) rationale.push('Necessidade de desintoxicação ou reequilíbrio ácido');
  if (scores.tier_3 >= 14 && primaryTier === 'tier_3') rationale.push('Perfil de manutenção e barreira lipídica');
  if (scores.tier_5 >= 12) rationale.push('Exposição térmica ou ambiental elevada');
  if (rationale.length === 0) rationale.push('Perfil calibrado com linha de manutenção preventiva');

  return {
    primaryTier,
    adjunctTiers,
    scores,
    protocol: PROTOCOLOS_BANCADA[primaryTier],
    steps: {
      limpeza: limpeza ? { tierId: limpezaTier, produto: limpeza } : null,
      infusao: infusao ? { tierId: primaryTier, produto: infusao } : null,
      selagem: selagem ? { tierId: primaryTier, produto: selagem } : null,
      protecao: protecao ? { tierId: 'tier_5', produto: protecao } : null
    },
    rationale,
    tricho: analyzeTrichologicalProfile(userData, envProfile)
  };
}

/**
 * @param {ReturnType<typeof resolveBancadaProtocol>} bancada
 * @param {{ step1: string, step2: string, step3: string }} narrativeCopy
 * @returns {{ step1: string, step2: string, step3: string }}
 */
export function buildBancadaMatrixCopy(bancada, narrativeCopy) {
  const step1 = bancada.steps.limpeza
    ? formatBancadaStepCopy(bancada.steps.limpeza.produto, narrativeCopy.step1)
    : narrativeCopy.step1;
  const step2 = bancada.steps.infusao
    ? formatBancadaStepCopy(bancada.steps.infusao.produto, narrativeCopy.step2)
    : narrativeCopy.step2;
  let step3 = bancada.steps.selagem
    ? formatBancadaStepCopy(bancada.steps.selagem.produto, narrativeCopy.step3)
    : narrativeCopy.step3;
  if (bancada.steps.protecao) {
    step3 += ' Proteção ambiental: ' + bancada.steps.protecao.produto.nome + ' (' + bancada.steps.protecao.produto.ativos + ').';
  }
  return { step1, step2, step3 };
}

export function createInitialUserData() {
  return {
    name: '',
    phone: '',
    email: '',
    city: 'Não Informada',
    climateData: {},
    history: [],
    historyWindow: '',
    goal: '',
    struct: '',
    caliber: '',
    symptoms: [],
    /** Prioridade alta — alimenta motor de agendamento dinâmico (intervalo de protocolo). */
    wash_frequency: 0,
    lifestyle: [],
    region: 'auto'
  };
}

export function formatSymptomsSummary(userData) {
  if (!userData.symptoms.length) return 'Nenhum indicador do fio selecionado';
  return userData.symptoms.map((key) => SYMPTOM_LABELS[key] || key).join(' · ');
}

export function formatHistorySummary(userData) {
  if (userData.history.includes('virgem')) {
    return 'Fio virgem — sem saturação química registrada.';
  }
  const procedures = userData.history
    .map((key) => HISTORY_PROCEDURE_LABELS[key] || key)
    .join(' · ');
  const windowLabel = HISTORY_WINDOW_LABELS[userData.historyWindow] || 'recência não informada';
  const windowSub = HISTORY_WINDOW_SUBLABELS[userData.historyWindow];
  const recencyPart = windowSub ? `${windowLabel} · ${windowSub}` : windowLabel;
  return `${procedures} · ${recencyPart}`;
}

export function isHistoryStepReady(userData) {
  if (userData.history.includes('virgem')) return true;
  if (userData.history.length === 0) return false;
  return Boolean(userData.historyWindow);
}

/**
 * Campos obrigatórios para concluir o funil ou entrar no processamento final.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {boolean}
 */
export function hasCompleteFunnelUserData(userData) {
  if (!userData || typeof userData !== 'object') return false;
  return Boolean(
    userData.struct &&
    String(userData.name || '').trim() &&
    userData.goal &&
    isHistoryStepReady(userData) &&
    Array.isArray(userData.symptoms) &&
    userData.symptoms.length > 0 &&
    userData.caliber &&
    userData.wash_frequency >= 1 &&
    userData.wash_frequency <= 4
  );
}

/**
 * Maior passo interno coerente com os dados persistidos (antes de avançar).
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {number} -1 = intro (sem struct)
 */
export function resolveMaxCoherentStep(userData) {
  if (!userData || !userData.struct) return -1;
  if (!String(userData.name || '').trim()) return 0;
  if (!userData.goal) return 1;
  if (!isHistoryStepReady(userData)) return 2;
  if (!userData.symptoms || userData.symptoms.length === 0) return 3;
  if (!userData.caliber) return 4;
  if (!(userData.wash_frequency >= 1 && userData.wash_frequency <= 4)) return 5;
  return 6;
}

/**
 * Avalia integridade da sessão persistida para recovery seguro.
 * @param {{ completed?: boolean, currentStep?: number, userData?: object|null }|null} session
 * @returns {{ valid: boolean, resetToIntro: boolean, shouldSimulateProcessing: boolean }}
 */
export function assessTriagemSessionIntegrity(session) {
  if (!session || !session.userData || typeof session.userData !== 'object') {
    return { valid: false, resetToIntro: true, shouldSimulateProcessing: false };
  }

  const userData = session.userData;
  const currentStep = typeof session.currentStep === 'number' ? session.currentStep : -1;
  const completed = Boolean(session.completed);
  const complete = hasCompleteFunnelUserData(userData);

  if (completed) {
    if (!complete) {
      return { valid: false, resetToIntro: true, shouldSimulateProcessing: false };
    }
    return { valid: true, resetToIntro: false, shouldSimulateProcessing: false };
  }

  if (currentStep >= 8) {
    if (!complete) {
      return { valid: false, resetToIntro: true, shouldSimulateProcessing: false };
    }
    return { valid: true, resetToIntro: false, shouldSimulateProcessing: true };
  }

  const maxCoherent = resolveMaxCoherentStep(userData);
  if (maxCoherent < 0 && currentStep > 0) {
    return { valid: false, resetToIntro: true, shouldSimulateProcessing: false };
  }
  if (currentStep > maxCoherent + 1) {
    return { valid: false, resetToIntro: true, shouldSimulateProcessing: false };
  }

  return { valid: true, resetToIntro: false, shouldSimulateProcessing: false };
}

/** Segurar a marca GL PRO (kiosk) para purgar sessão e reiniciar. */
export const KIOSK_BRAND_LOGO_HOLD_MS = 4000;

/** Chave de persistência volátil do funil (sessionStorage — kiosk). */
export const TRIAGEM_SESSION_KEY = 'glpro_triagem_v1';

/** Inatividade no funil antes de purga silenciosa (3 min). */
export const KIOSK_IDLE_TIMEOUT_MS = 180000;

/** Inatividade no dossiê / processamento final (5 min). */
export const KIOSK_IDLE_DOSSIER_TIMEOUT_MS = 300000;

/** Atraso pós-handoff WhatsApp antes de purgar para a próxima cliente. */
export const KIOSK_HANDOFF_PURGE_DELAY_MS = 2000;

/** @typedef {(defaults: ReturnType<typeof createKioskMemoryDefaults>) => void} KioskPurgeUiHook */

let kioskPurgeUiHook = null;

/**
 * Registra callback do app para reset de memória + UI após purga kiosk.
 * @param {KioskPurgeUiHook|null} fn
 */
export function registerKioskPurgeUiHook(fn) {
  kioskPurgeUiHook = typeof fn === 'function' ? fn : null;
}

/**
 * Remove persistência volátil e legado localStorage do funil.
 */
export function purgeKioskPersistentState() {
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(TRIAGEM_SESSION_KEY);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(TRIAGEM_SESSION_KEY);
    }
  } catch (_) {
    /* quota / modo privado */
  }
}

/**
 * Snapshot de estado em memória após purga kiosk.
 * @returns {{
 *   currentStep: number,
 *   friendsInvited: number,
 *   crossPreloadReady: boolean,
 *   userData: ReturnType<typeof createInitialUserData>,
 *   protocolUnlocked: boolean,
 *   processingStarted: boolean
 * }}
 */
export function createKioskMemoryDefaults() {
  return {
    currentStep: -1,
    friendsInvited: 0,
    crossPreloadReady: false,
    userData: createInitialUserData(),
    protocolUnlocked: false,
    processingStarted: false,
  };
}

/**
 * Purga sessão kiosk: storage volátil + reset em memória/UI via hook registrado no app.
 * @returns {ReturnType<typeof createKioskMemoryDefaults>}
 */
export function purgeKioskSession() {
  purgeKioskPersistentState();
  const defaults = createKioskMemoryDefaults();
  if (typeof kioskPurgeUiHook === 'function') {
    kioskPurgeUiHook(defaults);
  }
  return defaults;
}

/**
 * @param {string} value
 * @returns {Promise<string>}
 */
async function sha256Hex(value) {
  if (typeof crypto === 'undefined' || !crypto.subtle) return '';
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(digest))
    .map(function (byte) { return byte.toString(16).padStart(2, '0'); })
    .join('');
}

/**
 * Valida PIN de equipe — POST /api/validate-pin; fallback local por digest até o backend existir.
 * @param {string} pin
 * @returns {Promise<boolean>}
 */
export async function validateStaffPin(pin) {
  const normalized = String(pin || '').trim();
  if (!normalized) return false;

  try {
    const response = await fetch('/api/validate-pin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: normalized }),
    });
    if (response.ok) {
      const payload = await response.json();
      if (payload && typeof payload.valid === 'boolean') {
        return payload.valid;
      }
    }
  } catch (_) {
    /* API indisponível — fallback digest provisório (remover quando backend estiver ativo) */
  }

  const digest = await sha256Hex(normalized);
  return digest === STAFF_PIN_SHA256_HEX;
}

export function formatWashSummary(userData) {
  return WASH_FREQUENCY_LABELS[userData.wash_frequency] || 'Frequência não informada';
}

export function detectDefaultRegion() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/Sao_Paulo|Campinas|Rio|Belo_Horizonte|Vitoria|Bahia/.test(tz)) return 'br_sudeste';
    if (/Fortaleza|Recife|Salvador|Belem|Manaus|Cuiaba|Porto_Velho|Rio_Branco/.test(tz)) return 'br_nordeste';
    if (/Porto_Alegre|Curitiba|Florianopolis|Cuiaba/.test(tz)) return 'br_sul';
    if (/America\/(Argentina|Chile|Colombia|Mexico|Lima|Bogota|Montevideo|Santiago)/.test(tz)) return 'latam';
    if (/Europe\//.test(tz)) return 'europe';
    if (/America\/(New_York|Chicago|Denver|Los_Angeles|Toronto|Vancouver|Phoenix)/.test(tz)) return 'na';
  } catch (e) { /* global fallback */ }
  return 'global';
}

export function resolveRegionKey(userData) {
  if (userData.region && userData.region !== 'auto') return userData.region;
  return detectDefaultRegion();
}

export function getRegionProfile(userData) {
  const key = resolveRegionKey(userData);
  return REGION_PROFILES[key] || REGION_PROFILES.global;
}

export function detectHemisphere(userData) {
  const region = getRegionProfile(userData);
  if (region.hemisphere) return region.hemisphere;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/^(Africa\/Johannesburg|America\/(Argentina|Asuncion|Buenos_Aires|Cordoba|Montevideo|Santiago|Sao_Paulo|Campo_Grande|Cuiaba|Manaus|Recife|Fortaleza|Belem|Porto_Velho|Rio_Branco)|Australia\/|Antarctica\/|Pacific\/(Auckland|Fiji|Guadalcanal|Port_Moresby))/.test(tz)) {
      return 'south';
    }
    if (/^(America\/(New_York|Chicago|Denver|Los_Angeles|Toronto|Mexico_City|Vancouver)|Europe\/|Asia\/(Tokyo|Seoul|Shanghai|Hong_Kong|Singapore|Dubai|Kolkata))/.test(tz)) {
      return 'north';
    }
  } catch (e) { /* default south */ }
  return 'south';
}

export function getCurrentSeason(userData) {
  const month = new Date().getMonth() + 1;
  const north = detectHemisphere(userData) === 'north';

  if (month >= 12 || month <= 2) {
    return north
      ? { name: 'Inverno Boreal', risk: 'Ar frio indoor e água quente. Perda acelerada de humidade intra-cuticular e eletricidade estática.' }
      : { name: 'Verão Austral', risk: 'Radiação UV extrema. Degradação de aminoácidos e oxidação precoce da melanina capilar.' };
  }
  if (month >= 3 && month <= 5) {
    return north
      ? { name: 'Primavera Boreal', risk: 'Amplitudes térmicas. Cutícula expande e retrai ao longo do dia, perdendo selagem natural.' }
      : { name: 'Outono Austral', risk: 'Transição climática. Queda de humidade provoca retração do córtex e frizz lateral.' };
  }
  if (month >= 6 && month <= 8) {
    return north
      ? { name: 'Verão Boreal', risk: 'Calor e humidade variável. Sudorese e exposição solar intensificam deposição salina no fio.' }
      : { name: 'Inverno Austral', risk: 'Ar frio e banhos quentes. Risco grave de desidratação da barreira lipídica.' };
  }
  return north
    ? { name: 'Outono Boreal', risk: 'Queda de humidade relativa. Friz e rigidez mecânica por perda de plasticidade cuticular.' }
    : { name: 'Primavera Austral', risk: 'Amplitudes térmicas diárias. O cabelo expande e retrai, acelerando perda hídrica.' };
}

/**
 * Contexto sazonal de estiagem Oeste/Sudoeste SC (outono/inverno austral).
 * @param {string} regionKey
 * @returns {{ active: boolean, label: string, note: string, phBoost: number, exposureBoost: number, tier4Boost: number }}
 */
export function computeWestScDroughtContext(regionKey) {
  const month = new Date().getMonth() + 1;
  if (regionKey !== 'br_oeste_sc' || !WEST_SC_DROUGHT_MONTHS.includes(month)) {
    return { active: false, label: '', note: '', phBoost: 0, exposureBoost: 0, tier4Boost: 0 };
  }

  return {
    active: true,
    label: 'Estiagem regional · outono/inverno',
    note: 'Período seco Oeste/Sudoeste SC: reservatórios tendem a baixar — concentração de cloro livre e sulfato de alumínio na água tratada.',
    phBoost: 0.15,
    exposureBoost: 8,
    tier4Boost: 6
  };
}

/** Remove tags HTML para mensagens WhatsApp. */
export function stripHtmlForPlainText(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export function computeExposureIndex(lifestyle, wash) {
  let score = 0;
  lifestyle.forEach(function (k) {
    if (k === 'poluicao') score += 28;
    else if (k === 'uv') score += 22;
    else if (k === 'suor') score += 18;
    else if (k === 'ac') score += 12;
  });
  score += (WASH_SURFACTANT[wash] && WASH_SURFACTANT[wash].stress) || 12;
  return Math.min(100, score);
}

export function computeWaterProfile(wash, lifestyle, symptoms, region, regionKey, drought) {
  const washData = WASH_SURFACTANT[wash] || { label: 'Não informado', desc: 'Frequência de lavagem não registada na análise.', stress: 12 };
  let headline;
  let subtitle = (region ? region.label + ' · ' : '') + 'Stress surfactante: ' + washData.label;

  if (regionKey === 'br_oeste_sc') {
    headline = 'Agressão hídrica regional (Oeste/Sudoeste SC): cloro, alumínio pós-estiagem e metais da rede até o chuveiro.';
    subtitle = 'Assinatura Lajeado São José / Rio Uruguai · ' + washData.label;
    if (drought && drought.active) {
      headline += ' Estiagem sazonal: carga de cloro e alumínio tende a elevar-se neste período.';
      subtitle = drought.label + ' · ' + subtitle;
    }
  } else {
    const regionNote = (region && region.waterNote) ? region.waterNote + ' ' : '';
    headline = regionNote + washData.desc;
  }

  if (symptoms.includes('rigidez')) {
    if (regionKey === 'br_oeste_sc') {
      headline = 'Rigidez reportada + rede Oeste SC: saturação de cobre, ferro e alumínio sobre cutícula tensionada.';
    } else {
      headline = 'Rigidez reportada + rede urbana: provável acumulação mineral sobre cutícula já tensionada.';
    }
    subtitle = 'Depósito mineral · ' + subtitle;
  }
  if (symptoms.includes('porosidade')) {
    headline += regionKey === 'br_oeste_sc'
      ? ' Porosidade amplifica absorção de cloro oxidante e metais da água tratada local.'
      : ' Porosidade elevada amplifica absorção de cloro e metais da água tratada.';
  }
  if (symptoms.includes('emborrachamento') && regionKey === 'br_oeste_sc') {
    headline += ' Cobre residual da rede pode interagir com descolorantes prévios — risco de elasticidade comprometida.';
  }
  if (lifestyle.includes('ac')) {
    headline += ' Ambiente climatizado reduz humidade — acelera desidratação entre lavagens.';
  }
  if (lifestyle.includes('suor')) {
    headline += ' Resíduos salinos do suor alteram condutividade e rigidez mecânica do fio.';
  }

  return { headline, subtitle };
}

export function computeAirProfile(lifestyle, symptoms, region) {
  let score = lifestyle.length === 0 ? 20 : 18;
  if (lifestyle.includes('poluicao')) score += 32;
  if (lifestyle.includes('uv')) score += 22;
  if (lifestyle.includes('suor')) score += 14;
  if (lifestyle.includes('ac')) score += 8;
  if (symptoms.includes('rigidez')) score += 10;
  if (symptoms.includes('porosidade') && lifestyle.includes('ac')) score += 8;
  if (region && region.aqiBoost) score += region.aqiBoost;
  score = Math.min(100, score);

  let band, level, risk;
  if (score >= 72) {
    band = 'Alta';
    level = 'Tendência de exposição: ' + score + '/100 (' + band + ')';
    risk = 'Indício de exposição cumulativa a oxidantes e particulados. Selagem preventiva sugerida na matriz.';
  } else if (score >= 48) {
    band = 'Moderada';
    level = 'Tendência de exposição: ' + score + '/100 (' + band + ')';
    risk = 'Pressão ambiental indicada na rotina reportada. Barreira anti-UV e anti-poluição sugerida.';
  } else if (score >= 28) {
    band = 'Baixa';
    level = 'Tendência de exposição: ' + score + '/100 (' + band + ')';
    risk = 'Ambiente relativamente controlado. Foco em prevenção sazonal e equilíbrio de pH estimado.';
  } else {
    band = 'Mínima';
    level = 'Tendência de exposição: ' + score + '/100 (' + band + ')';
    risk = 'Baixa agressão atmosférica reportada. Recomendação de protocolo preventivo padrão.';
  }

  if (lifestyle.length === 0) {
    level = 'Tendência baseline: 20/100 (sem fatores reportados)';
    risk = 'Nenhum ambiente de risco selecionado — perfil calibrado com padrão médio de exposição urbana.';
  }

  return { level, risk, score, band };
}

export function computePhEstimate(wash, lifestyle, symptoms, region, drought) {
  const phBaseline = (region && region.phBaseline) ? region.phBaseline : 6.5;
  let estimatedPh = phBaseline;
  if (wash >= 2) estimatedPh += 0.15;
  if (wash >= 3) estimatedPh += 0.2;
  if (wash >= 4) estimatedPh += 0.3;
  if (lifestyle.includes('poluicao')) estimatedPh += 0.12;
  if (symptoms.includes('porosidade')) estimatedPh += 0.1;
  if (symptoms.includes('rigidez')) estimatedPh += 0.18;
  if (drought && drought.active) estimatedPh += drought.phBoost;
  estimatedPh = Math.min(8.2, Math.round(estimatedPh * 10) / 10);

  const position = Math.min(94, Math.max(6, ((estimatedPh - 4.5) / 3.5) * 100));
  let note = 'Estimativa: água de rede + surfactantes tendem a elevar o pH cuticular acima do ideal (4,5).';
  if (region && region.phBaseline >= 7) {
    note = 'Estimativa: rede Oeste/Sudoeste SC tende a pH alcalino (>7) — cutícula ideal entre 4,5 e 5,5.';
  }
  if (drought && drought.active) {
    note += ' Estiagem regional pode intensificar drift alcalino na água tratada.';
  }
  if (wash >= 4) {
    note = region && region.phBaseline >= 7
      ? 'Estimativa: lavagem diária em água alcalina regional dilata cutícula por inchaço hídrico entre ciclos.'
      : 'Estimativa: lavagem diária intensifica drift alcalino — cutícula pode permanecer dilatada entre ciclos.';
  } else if (wash <= 1 && !symptoms.includes('porosidade')) {
    note = 'Estimativa: exposição hídrica moderada. Manutenção ácida preventiva pode ser suficiente.';
  }

  return { ideal: 4.5, estimated: estimatedPh, position, note };
}

export function computeMixedAlert(lifestyle, wash, symptoms, regionKey) {
  const labels = lifestyle.map(function (k) { return LIFESTYLE_LABELS[k] || k; });

  if (lifestyle.length === 0) {
    return {
      profile: 'Rotina equilibrada (sem fatores reportados)',
      alert: 'Não selecionou ambientes de exposição. A matriz aplicará proteção preventiva conforme baseline urbano de referência.',
      severity: 'low',
      alertKey: 'baseline'
    };
  }

  const profile = labels.join(' · ');

  if (regionKey === 'br_oeste_sc' && wash >= 4 && symptoms.includes('porosidade')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Agressão Hídrica Regional:</strong> Lavagem diária em água alcalina da rede Oeste/Sudoeste SC + porosidade reportada. Estimativa de inchaço cuticular recorrente — validação presencial recomendada.',
      severity: 'high',
      alertKey: 'water_oeste_sc'
    };
  }

  if (lifestyle.includes('ac') && lifestyle.includes('uv') && lifestyle.includes('suor')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Indício — Rotina Tripla:</strong> Transita entre ar seco, sol direto e sudorese intensa. Choque térmico + deposição salina + desidratação simultâneos (estimativa).',
      severity: 'high',
      alertKey: 'triple_thermal'
    };
  }
  if (lifestyle.includes('ac') && (lifestyle.includes('uv') || lifestyle.includes('suor'))) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Indício — Choque Térmico Diário:</strong> Ambiente frio controlado alternado com calor externo. Estimativa de dilatação cuticular e perda hídrica.',
      severity: 'high',
      alertKey: 'thermal_shock'
    };
  }
  if (lifestyle.includes('poluicao') && lifestyle.includes('uv')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta Foto-Poluição:</strong> Particulados urbanos + radiação UV catalisam oxidação da cor e rigidez mecânica. Proteção antioxidante obrigatória.',
      severity: 'high',
      alertKey: 'photo_pollution'
    };
  }
  if (lifestyle.includes('poluicao') && symptoms.includes('rigidez')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Correlação Confirmada:</strong> Poluição reportada + rigidez detectada indicam deposição metálica sobre cutícula já tensionada.',
      severity: 'high',
      alertKey: 'pollution_rigidity'
    };
  }
  if (lifestyle.includes('poluicao')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta de Depósito Particulado:</strong> Exposição a tráfego/transporte público deposita metais que oxidam a cor e criam rigidez mecânica.',
      severity: 'medium',
      alertKey: 'particulate'
    };
  }
  if (lifestyle.includes('uv') && wash >= 3) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta Foto-Oleosidade:</strong> UV direto combinado com lavagens frequentes remove selagem lipídica antes da regeneração natural.',
      severity: 'medium',
      alertKey: 'photo_lipid'
    };
  }
  if (lifestyle.includes('uv')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta Foto-Oxidativo:</strong> Exposição solar direta degrada ligações disulfeto e acelera desbotamento de cor química.',
      severity: 'medium',
      alertKey: 'photo_oxidation'
    };
  }
  if (lifestyle.includes('ac') && symptoms.includes('porosidade')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta Hídrico:</strong> Ar condicionado desidrata o ambiente; porosidade aberta amplifica perda de água intra-cuticular.',
      severity: 'medium',
      alertKey: 'hydric'
    };
  }
  if (lifestyle.includes('ac')) {
    return {
      profile,
      alert: 'Ar recirculado e seco reduz humidade ambiental. Risco de frizz estático e perda de brilho especular.',
      severity: 'low',
      alertKey: 'dry_ac'
    };
  }
  if (lifestyle.includes('suor')) {
    return {
      profile,
      alert: '<strong class="text-[#D97706]">Alerta Salino:</strong> Sudorese frequente cristaliza sais na haste, aumentando fricção mecânica e rigidez localizada.',
      severity: 'medium',
      alertKey: 'saline'
    };
  }

  return {
    profile,
    alert: 'Exposição mapeada com coerência técnica. Recomendação de protocolo de barreira sugerida na matriz de ativos.',
    severity: 'low',
    alertKey: 'mapped_default'
  };
}

export function resolveChemicalMatrixKey(userData) {
  if (userData.history.includes('hene') && !isTreatmentFocusedGoal(userData.goal)) return 'chemical_hene';
  if (userData.history.includes('relaxamento') && userData.goal === 'Mechas') return 'chemical_relax_mechas';
  if (userData.history.includes('formol') && userData.goal === 'Mechas') return 'chemical_formol_mechas';
  if (userData.history.includes('mechas') && userData.goal === 'Alisamento') return 'chemical_mechas_alisamento';
  return null;
}

export function buildEnvironmentProfile(userData) {
  const lifestyle = userData.lifestyle || [];
  const wash = userData.wash_frequency || 0;
  const symptoms = userData.symptoms || [];
  const region = getRegionProfile(userData);
  const regionKey = resolveRegionKey(userData);
  const drought = computeWestScDroughtContext(regionKey);

  const water = computeWaterProfile(wash, lifestyle, symptoms, region, regionKey, drought);
  const air = computeAirProfile(lifestyle, symptoms, region);
  let season = getCurrentSeason(userData);
  if (drought.active) {
    season = {
      name: season.name + ' · ' + drought.label,
      risk: season.risk + ' ' + drought.note
    };
  }
  const mixed = computeMixedAlert(lifestyle, wash, symptoms, regionKey);
  const ph = computePhEstimate(wash, lifestyle, symptoms, region, drought);
  let exposureIndex = computeExposureIndex(lifestyle, wash) + Math.round((region.aqiBoost || 0) / 2);
  if (drought.active) exposureIndex += drought.exposureBoost;

  return {
    water,
    air,
    season,
    mixed,
    ph,
    drought,
    exposureIndex: Math.min(100, exposureIndex),
    region,
    regionKey
  };
}

export function computeIntegrityScore(userData) {
  let baseScore = 100;
  if (userData.history.includes('hene')) baseScore -= 40;
  if (userData.history.includes('relaxamento')) baseScore -= 30;
  if (userData.history.includes('formol')) baseScore -= 25;
  if (userData.history.includes('mechas')) baseScore -= 20;
  if (userData.history.includes('coloracao')) baseScore -= 10;

  if (userData.symptoms.includes('saudavel')) {
    baseScore = 98;
  } else {
    if (userData.symptoms.includes('quebra')) baseScore -= 15;
    if (userData.symptoms.includes('emborrachamento')) baseScore -= 20;
    if (userData.symptoms.includes('porosidade')) baseScore -= 10;
    if (userData.symptoms.includes('rigidez')) baseScore -= 10;
    if (userData.symptoms.includes('afinamento')) baseScore -= 15;
  }

  if (userData.history.includes('virgem') && !userData.symptoms.includes('saudavel')) {
    baseScore = 95 - (userData.symptoms.length * 5);
  }

  const recencyMonths = HISTORY_WINDOW_RECENCY[userData.historyWindow];
  if (recencyMonths && !userData.history.includes('virgem')) {
    const aggressive = userData.history.includes('hene') || userData.history.includes('formol') || userData.history.includes('relaxamento');
    if (aggressive) {
      if (recencyMonths === 1) baseScore -= 10;
      else if (recencyMonths === 2) baseScore -= 7;
      else if (recencyMonths === 3) baseScore -= 4;
      else if (recencyMonths === 4) baseScore -= 2;
    } else if (recencyMonths <= 2) {
      baseScore -= 3;
    } else if (recencyMonths >= 5) {
      baseScore += 2;
    }
  }

  if (baseScore < 15) baseScore = 15;
  if (baseScore > 98) baseScore = 98;
  let projection = baseScore + 32;
  if (projection > 98) projection = 98;

  let statusText = 'Atenção ao perfil do fio';
  let statusClass = 'text-2xl text-[#D97706] font-medium';
  if (baseScore >= 80) {
    statusText = 'Perfil equilibrado';
    statusClass = 'text-2xl text-[#10B981] font-medium';
  } else if (baseScore < 55) {
    statusText = 'Indício de fragilidade';
    statusClass = 'text-2xl text-[#E53E3E] font-medium';
  }

  return { baseScore, projection, statusText, statusClass, ringOffset: 464.95 - (464.95 * (baseScore / 100)) };
}

export function computeHydricBars(userData, envProfile) {
  let water = 80;
  let lipids = 70;
  let protein = 85;
  if (userData.symptoms.includes('porosidade') || userData.symptoms.includes('rigidez')) water -= 40;
  if (userData.symptoms.includes('afinamento') || userData.symptoms.includes('quebra')) protein -= 35;
  if (userData.symptoms.includes('misto') || userData.wash_frequency >= 3) lipids -= 30;
  if (envProfile.exposureIndex >= 50) lipids -= 8;
  if (envProfile.air.score >= 60) water -= 6;
  return { water, lipids, protein };
}

export function computeConflictAlert(userData) {
  let hasAlert = false;
  let title = '';
  let message = '';
  const recentChemical = (userData.historyWindow === '1_mes' || userData.historyWindow === '2_meses') && !userData.history.includes('virgem');
  const recencyNote = recentChemical
    ? ` A saturação é <strong class="font-medium underline">recente (${HISTORY_WINDOW_LABELS[userData.historyWindow]})</strong>, o que eleva a criticidade do cruzamento.`
    : '';

  if (userData.history.includes('hene') && !isTreatmentFocusedGoal(userData.goal)) {
    hasAlert = true;
    title = 'Indício de Incompatibilidade Química';
    message = `O uso de <strong class="font-medium underline">henê</strong> tende a ser incompatível com descoloração ou alisamento alternativo. O cruzamento com a intenção de <strong class="font-medium underline">${userData.goal}</strong> sugere cautela extrema na escolha de novos procedimentos.${recencyNote}${PHASE2_MECHA_NOTE}`;
  } else if (userData.history.includes('relaxamento') && userData.goal === 'Mechas') {
    hasAlert = true;
    title = 'Indício de Incompatibilidade Estrutural';
    message = `Relaxamentos à base de hidróxidos ou tioglicolato tendem a ser incompatíveis com descoloração. A intenção de realizar <strong class="font-medium underline">madeixas iluminadas</strong> sugere fragilidade elevada na fibra.${recencyNote}${PHASE2_MECHA_NOTE}`;
  } else if (userData.history.includes('formol') && userData.goal === 'Mechas') {
    hasAlert = true;
    title = 'Indício de Incompatibilidade Estrutural';
    message = `O mapeamento indica possível tensão na ponte de dissulfeto. O cruzamento do histórico de <strong class="font-medium underline">formol</strong> com a intenção de <strong class="font-medium underline">madeixas</strong> exige validação técnica antes de novo procedimento.${recencyNote}${PHASE2_MECHA_NOTE}`;
  } else if (userData.history.includes('mechas') && userData.goal === 'Alisamento') {
    hasAlert = true;
    title = 'Indício de Incompatibilidade Estrutural';
    message = `Aplicar <strong class="font-medium underline">alisamento estrutural</strong> sobre fios com histórico de <strong class="font-medium underline">descoloração</strong> pode afinar a haste. A matriz de proteção abaixo orienta a preparação.${recencyNote}`;
  } else if (hasTipMassLossReport(userData)) {
    const haircut = computeHaircutOrientation(userData);
    hasAlert = true;
    title = haircut.title;
    message = haircut.message;
  }
  return { hasAlert, title, message };
}

/** Capitalização humana para exibição do nome (ex.: MARIA → Maria, maria silva → Maria Silva). */
export function formatDisplayName(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return '';
  return trimmed
    .toLowerCase()
    .split(/\s+/)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function getDisplayStep(currentStep) {
  if (currentStep < 0) return 1;
  if (currentStep >= 8) return TOTAL_STEPS;
  return Math.min(currentStep + 2, TOTAL_STEPS);
}

export function resolveMatrixCopy(userData, envProfile) {
  const chemicalKey = resolveChemicalMatrixKey(userData);
  const haircutKey = hasTipMassLossReport(userData) ? 'tip_afinamento' : null;
  const alertKey = chemicalKey || haircutKey || (envProfile.mixed && envProfile.mixed.alertKey) || 'baseline';
  const narrativeCopy = MATRIX_COPY[alertKey] || MATRIX_COPY.baseline;
  const bancada = resolveBancadaProtocol(userData, envProfile);
  const copy = buildBancadaMatrixCopy(bancada, narrativeCopy);
  let lockLabel = TRIAGEM_NOMENCLATURE.matrixLockDefault;
  if (chemicalKey) {
    lockLabel = 'Prioridade química · avaliação presencial';
  } else if (haircutKey) {
    lockLabel = 'Pontas extrafinas · avaliação presencial';
  } else if (envProfile.mixed && envProfile.mixed.severity === 'high') {
    lockLabel = 'Exposição elevada · avaliação presencial';
  }
  return { copy, bancada, chemicalKey, alertKey, lockLabel, haircutKey };
}

/**
 * Gera ID curto de sessão do dossiê (Essência de Romã): ER-7821.
 * @returns {string}
 */
export function generateHandoffSessionId() {
  return 'ER-' + String(Math.floor(Math.random() * 9000) + 1000);
}

/**
 * Formata ID de prontuário curto para handoff (ex: ER-8392).
 * @param {string|number|undefined|null} rawId
 * @returns {string}
 */
export function formatHandoffDossierId(rawId) {
  const str = String(rawId || '').trim();
  if (/^ER-\d{4}$/i.test(str)) {
    return str.toUpperCase();
  }
  const digits = str.replace(/\D/g, '');
  const n = parseInt(digits, 10);
  if (Number.isFinite(n) && digits.length > 0) {
    return 'ER-' + String(n % 10000).padStart(4, '0');
  }
  return generateHandoffSessionId();
}

/**
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {TrichologicalDiagnostic[]}
 */
function resolveHandoffDiagnostics(userData) {
  const envProfile = buildEnvironmentProfile(userData);
  return analyzeTrichologicalProfile(userData, envProfile).diagnostics;
}

/**
 * Extrai alertas climáticos, químicos e tricológicos para o handoff.
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {TrichologicalDiagnostic[]} [diagnosticsArray]
 * @returns {string}
 */
export function extractHandoffAlerts(userData, diagnosticsArray) {
  const envProfile = buildEnvironmentProfile(userData);
  const conflict = computeConflictAlert(userData);
  const chemicalKey = resolveChemicalMatrixKey(userData);
  const mixedKey = envProfile.mixed && envProfile.mixed.alertKey;
  /** @type {string[]} */
  const alerts = [];
  /** @type {Set<string>} */
  const seen = new Set();

  function push(label) {
    const clean = stripHtmlForPlainText(label);
    if (!clean || seen.has(clean)) return;
    seen.add(clean);
    alerts.push(clean);
  }

  if (conflict.hasAlert) {
    push(conflict.title);
  }

  const haircut = computeHaircutOrientation(userData);
  if (haircut.active && (!conflict.hasAlert || conflict.title !== haircut.title)) {
    push(haircut.handoffLabel);
  }

  if (chemicalKey && HANDOFF_ALERT_SHORT_LABELS[chemicalKey]) {
    push(HANDOFF_ALERT_SHORT_LABELS[chemicalKey]);
  } else if (mixedKey && HANDOFF_ALERT_SHORT_LABELS[mixedKey]) {
    push(HANDOFF_ALERT_SHORT_LABELS[mixedKey]);
  } else if (mixedKey && mixedKey !== 'baseline' && mixedKey !== 'mapped_default') {
    push(stripHtmlForPlainText(envProfile.mixed.alert));
  }

  if (envProfile.drought && envProfile.drought.active) {
    push('Estiagem Regional · Outono/Inverno');
  }

  const diagnostics = diagnosticsArray || resolveHandoffDiagnostics(userData);
  diagnostics.forEach(function (diag) {
    push(diag.title);
  });

  if (alerts.length === 0) {
    return '';
  }
  return alerts.join(', ');
}

/**
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {string}
 */
export function extractHandoffSymptoms(userData) {
  try {
    const symptoms = (userData && userData.symptoms) || [];
    if (!Array.isArray(symptoms) || symptoms.length === 0) return '';

    const filtered = symptoms.filter(function (key) {
      return key !== 'saudavel' || symptoms.length === 1;
    });

    const labels = filtered.map(function (key) {
      return SYMPTOM_LABELS[key] || key;
    });

    return labels.length > 0 ? labels.join(', ') : '';
  } catch {
    return '';
  }
}

/**
 * Extrai 3–5 primeiros ativos recomendados (foco do tratamento; evita lista completa).
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {string}
 */
export function extractHandoffTopAtivos(userData) {
  try {
    const envProfile = buildEnvironmentProfile(userData || {});
    const protocol = buildApplicationProtocol(userData || {}, envProfile);
    const ativos = (protocol.ativos || []).slice(0, 5);
    if (ativos.length === 0) return '';
    return ativos.join(', ');
  } catch {
    return '';
  }
}

/**
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @returns {string}
 * @deprecated Alias de extractHandoffTopAtivos — mantido para compatibilidade.
 */
export function extractHandoffAtivos(userData) {
  return extractHandoffTopAtivos(userData);
}

/**
 * Monta mensagem estruturada de handoff WhatsApp (Mapeamento → Presencial).
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {TrichologicalDiagnostic[]} [diagnosticsArray]
 * @param {{ dossierId?: string|number }} [opts]
 * @returns {string}
 */
export function buildWhatsAppHandoffMessage(userData, diagnosticsArray, opts) {
  try {
    const safeUser = userData && typeof userData === 'object' ? userData : {};
    const rawId = (opts && opts.dossierId != null)
      ? opts.dossierId
      : (safeUser._handoffSessionId || safeUser._lastDossierId);
    const dossierId = formatHandoffDossierId(rawId);
    const alertas = extractHandoffAlerts(safeUser, diagnosticsArray) || '';
    const topAtivos = extractHandoffTopAtivos(safeUser) || '';

    return (
      'Olá! Finalizei meu Mapeamento Capilar Digital e gostaria de agendar minha Avaliação Presencial.\n\n' +
      '*Resumo do Meu Dossiê:*\n' +
      '• ID: #' + dossierId + '\n' +
      '• Alertas Identificados: ' + alertas + '\n' +
      '• Foco do protocolo: ' + topAtivos + '\n\n' +
      'Aguardando o retorno para agendamento do teste de mecha.'
    );
  } catch {
    const fallbackId = generateHandoffSessionId();
    return (
      'Olá! Finalizei meu Mapeamento Capilar Digital e gostaria de agendar minha Avaliação Presencial.\n\n' +
      '*Resumo do Meu Dossiê:*\n' +
      '• ID: #' + fallbackId + '\n' +
      '• Alertas Identificados: \n' +
      '• Foco do protocolo: \n\n' +
      'Aguardando o retorno para agendamento do teste de mecha.'
    );
  }
}

/**
 * Gera URL WhatsApp com handoff estruturado (encodeURIComponent).
 * @param {ReturnType<typeof createInitialUserData>} userData
 * @param {TrichologicalDiagnostic[]} [diagnosticsArray]
 * @param {{ dossierId?: string|number }} [opts]
 * @returns {string}
 */
export function generateWhatsAppHandoffURL(userData, diagnosticsArray, opts) {
  const safeUser = userData && typeof userData === 'object' ? userData : {};
  const diagnostics = Array.isArray(diagnosticsArray) && diagnosticsArray.length > 0
    ? diagnosticsArray
    : resolveHandoffDiagnostics(safeUser);
  const message = buildWhatsAppHandoffMessage(safeUser, diagnostics, opts || {});
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
}

/**
 * @deprecated Use buildWhatsAppHandoffMessage — mantido para compatibilidade interna.
 */
export function buildScheduleWhatsAppMessage(userData, opts) {
  return buildWhatsAppHandoffMessage(userData, resolveHandoffDiagnostics(userData), opts);
}

/**
 * @deprecated Use generateWhatsAppHandoffURL — mantido para compatibilidade interna.
 */
export function buildScheduleWhatsAppUrl(userData, opts) {
  return generateWhatsAppHandoffURL(userData, resolveHandoffDiagnostics(userData), opts);
}

/** @type {AudioContext | null} */
let sensoryAudioCtx = null;

/**
 * Resume or create a shared AudioContext (lazy, zero file I/O).
 * @returns {AudioContext | null}
 */
function getSensoryAudioContext() {
  if (sensoryAudioCtx) return sensoryAudioCtx;
  const Ctx = typeof AudioContext !== 'undefined'
    ? AudioContext
    : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null);
  if (!Ctx) return null;
  try {
    sensoryAudioCtx = new Ctx();
    return sensoryAudioCtx;
  } catch {
    return null;
  }
}

/**
 * Toque tátil sutil (estilo UI premium) + haptic leve — apenas mapeamento.
 */
export function sensoryFeedback() {
  try {
    const ctx = getSensoryAudioContext();
    if (ctx) {
      if (ctx.state === 'suspended') {
        ctx.resume().catch(function () {});
      }
      const t0 = ctx.currentTime;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.13, t0 + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.048);

      const tone = ctx.createOscillator();
      tone.type = 'sine';
      tone.frequency.setValueAtTime(1580, t0);
      tone.frequency.exponentialRampToValueAtTime(980, t0 + 0.022);
      tone.connect(gain);
      tone.start(t0);
      tone.stop(t0 + 0.05);

      const click = ctx.createOscillator();
      click.type = 'sine';
      click.frequency.setValueAtTime(2200, t0);
      const clickGain = ctx.createGain();
      clickGain.gain.setValueAtTime(0.0001, t0);
      clickGain.gain.exponentialRampToValueAtTime(0.04, t0 + 0.001);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.018);
      click.connect(clickGain);
      clickGain.connect(ctx.destination);
      click.start(t0);
      click.stop(t0 + 0.02);
    }
  } catch {
    /* audio indisponível */
  }

  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(10);
    }
  } catch {
    /* vibration indisponível */
  }
}

const SENSORY_FEEDBACK_SELECTOR = [
  '#view-funnel .option-card',
  '#view-funnel .checkbox-item',
  '#view-funnel .history-segment-opt',
  '#view-funnel button[type="button"]',
  '#view-funnel select',
  '#btn-footer-next',
  '#footer-controls button',
  '#view-dossier .dossier-cta-bar__btn',
  '#view-dossier #btn-staff-access',
  '#view-dossier button[type="button"]',
  '#staff-access-modal button'
].join(', ');

/**
 * Delega feedback sensorial a botões de avanço, opções e CTAs do funil/dossiê.
 * @param {Document} [rootDocument]
 */
export function bindSensoryFeedback(rootDocument) {
  const doc = rootDocument || (typeof document !== 'undefined' ? document : null);
  if (!doc || doc.__glproSensoryBound) return;
  doc.__glproSensoryBound = true;

  doc.addEventListener('pointerdown', function (event) {
    const target = event.target;
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('#mapeamento-brand-logo')) return;
    const control = target.closest(SENSORY_FEEDBACK_SELECTOR);
    if (!control) return;
    if (control.disabled || control.getAttribute('aria-disabled') === 'true') return;
    if (control.classList.contains('view-hidden')) return;
    const hiddenHost = control.closest('.view-hidden');
    if (hiddenHost && hiddenHost !== control) return;
    sensoryFeedback();
  }, { passive: true, capture: true });
}

/**
 * Segurar a marca GL PRO por 4s reinicia o mapeamento (gesto kiosk / equipe).
 * @param {Document} doc
 * @param {() => void} onReset
 * @param {number} [holdMs]
 */
export function bindBrandLogoLongPressReset(doc, onReset, holdMs) {
  const documentRef = doc || (typeof document !== 'undefined' ? document : null);
  if (!documentRef || documentRef.__glproLogoHoldBound) return;
  const logo = documentRef.getElementById('mapeamento-brand-logo');
  if (!logo || typeof onReset !== 'function') return;

  documentRef.__glproLogoHoldBound = true;
  const duration = typeof holdMs === 'number' ? holdMs : KIOSK_BRAND_LOGO_HOLD_MS;
  let holdTimerId = null;
  let activePointerId = null;

  function clearHold() {
    if (holdTimerId) {
      clearTimeout(holdTimerId);
      holdTimerId = null;
    }
    activePointerId = null;
    logo.classList.remove('mapeamento-brand-logo--holding');
  }

  function startHold(pointerId) {
    clearHold();
    activePointerId = pointerId;
    logo.classList.add('mapeamento-brand-logo--holding');
    holdTimerId = setTimeout(function () {
      clearHold();
      onReset();
    }, duration);
  }

  logo.addEventListener('pointerdown', function (event) {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    event.preventDefault();
    if (logo.setPointerCapture) {
      try { logo.setPointerCapture(event.pointerId); } catch { /* noop */ }
    }
    startHold(event.pointerId);
  });

  logo.addEventListener('pointerup', clearHold);
  logo.addEventListener('pointercancel', clearHold);
  logo.addEventListener('lostpointercapture', clearHold);
}

/**
 * Marca hardware fraco (ex.: SM-T585) para desativar backdrop-filter pesado.
 * @param {Window} [win]
 */
export function initPerfLiteMode(win) {
  const w = win || (typeof window !== 'undefined' ? window : null);
  if (!w || !w.document) return;
  const mem = w.navigator && w.navigator.deviceMemory;
  if (typeof mem === 'number' && mem <= 2) {
    w.document.documentElement.classList.add('perf-lite');
  }
}
