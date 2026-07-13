/*
 * Legado: tema Tailwind agora vive em css/tailwind-theme.css (@theme v4).
 * Mantido apenas para referência de cores — não carregar nas páginas HTML.
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                canvas: '#FAF8F5',
                linen: '#F3EFE8',
                parchment: '#EAE4DA',
                blush: '#E8DDD4',
                espresso: '#3D3835',
                taupe: '#7A7268',
                champagne: '#C9B99A',
                clay: '#8B6658',
                mist: '#D8D2C8'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif']
            }
        }
    }
};
