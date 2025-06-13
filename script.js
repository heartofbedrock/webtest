// Simple scroll animation for the comparison section
window.addEventListener('scroll', () => {
    const comparison = document.querySelector('.comparison');
    const rect = comparison.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
        comparison.classList.add('visible');
    }
});
