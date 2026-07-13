const STORAGE_KEY = 'jm-dossier-reading-comfort';

function applyReadingComfort(view, button, enabled) {
    if (!view) return;
    view.classList.toggle('dossier-reading-comfort', enabled);
    if (button) {
        button.setAttribute('aria-pressed', String(enabled));
        const label = button.querySelector('.dossier-reading-toggle__label');
        if (label) {
            label.textContent = enabled ? 'Texto padrão' : 'Texto maior';
        }
    }
}

function readStoredPreference() {
    try {
        return localStorage.getItem(STORAGE_KEY) === '1';
    } catch (_) {
        return false;
    }
}

function storePreference(enabled) {
    try {
        localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
    } catch (_) {
        /* ignore quota / private mode */
    }
}

export function initReadingComfortToggle(document) {
    const view = document.getElementById('view-dossier');
    const button = document.getElementById('dossier-reading-toggle');
    if (!view || !button) return;

    applyReadingComfort(view, button, readStoredPreference());

    button.addEventListener('click', function () {
        const enabled = !view.classList.contains('dossier-reading-comfort');
        applyReadingComfort(view, button, enabled);
        storePreference(enabled);
    });
}
