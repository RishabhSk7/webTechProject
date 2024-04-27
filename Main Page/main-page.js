const sections = document.querySelectorAll('.highlightable');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.classList.add('highlighted');
    });

    section.addEventListener('mouseleave', () => {
        section.classList.remove('highlighted');
    });
});
