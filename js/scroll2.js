const sections = document.querySelectorAll('.sectionProjet');

function handleScroll() {
    sections.forEach(sectionProjet => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            sectionProjet.classList.add('active');
        } else {
            sectionProjet.classList.remove('active');
        }
    });
}

window.addEventListener("scroll", handleScroll);

