export function initializeNavbar() {
    const navbarItems = document.querySelectorAll('.navbar-item')
    const sections = document.querySelectorAll(
        '#welcome, #projects, #technology'
    );

    function updateActiveSection() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect()
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                navbarItems.forEach((item) => item.classList.remove('active'))
                navbarItems[index].classList.add('active')
            };
        });
    };

    window.addEventListener('scroll', updateActiveSection)

    navbarItems.forEach((item) => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section')
            const targetSection = document.getElementById(sectionId)
            targetSection.scrollIntoView({ behavior: 'smooth' })
        });
    });

    navbarItems.forEach((item) => {
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

    updateActiveSection()
}
