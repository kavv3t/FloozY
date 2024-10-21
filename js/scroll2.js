const sections = document.querySelectorAll('.section');

function handleScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener("scroll", handleScroll);

