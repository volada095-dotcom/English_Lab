const Utils = {
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    },

    normalizeText(text) {
        return text.trim().toLowerCase().replace(/\s+/g, ' ');
    }
};
