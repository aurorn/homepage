export function initializeSideBar() {
    const actionButton = document.querySelector('.action-button');
    const introHeader = document.querySelector('.intro-header');
    const hiddenContent = document.querySelector('.hidden-content');

    if (!actionButton || !introHeader || !hiddenContent) {
        console.error('Required elements for the sidebar are missing.');
        return;
    }

    let isExplored = false;

    actionButton.addEventListener('click', () => {
        if (!isExplored) {
            introHeader.style.transform = 'translateX(-100%)';
            hiddenContent.style.transform = 'translateX(0)';
            actionButton.textContent = '◀ Home';
        } else {
            introHeader.style.transform = 'translateX(0)';
            hiddenContent.style.transform = 'translateX(100%)';
            actionButton.textContent = 'About ▶';
        }

        isExplored = !isExplored;
    });
}
