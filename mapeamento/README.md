# Mapeamento Capilar — Jo Manto

Motor do funil GL PRO V16 (`mapeamento-isolado`), integrado ao site Jo Manto — wizard lateral fase a fase, sem scroll vertical no card, nomenclatura e skin champagne/clay. Sem Firebase, GTM ou tracking.

## Uso no site

Embutido em `terapias.html` via iframe (`#mapeamento`). No embed, o dossiê usa wizard compacto de 3 telas; standalone exibe o relatório completo.

## Servidor local

Na raiz do projeto:

```bash
npm start
```

| URL |
|---|
| http://localhost:3456/terapias.html#mapeamento |
| http://localhost:3456/mapeamento/index.html |

## Ficheiros principais

- `index.html` — funil + dossiê diagnóstico
- `script.js` — bootstrap ES module
- `mapeamento-app.js` — navegação e estado
- `mapeamento-logic.js` — motor de scoring
- `mapeamento-ui.js` — render do dossiê (+ wizard embed 3 telas)
- `../css/tokens.css` — design tokens Jo Manto (site + mapeamento, fonte única)
- `tokens.css` — reexporta `../css/tokens.css`
- `jm-premium.css` — dots de progresso, botões, validação inline
- `wizard-layout.css` — altura fixa e overflow lateral (sem scroll no card)
- `tracking-stub.js` — substituto vazio (sem analytics)
