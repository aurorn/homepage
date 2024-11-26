export function initializeAbout() {
    const aboutButton = document.querySelector('.about')
    const homeButton = document.querySelector('.home')
    const introHeader = document.querySelector('.intro-header')
    const hiddenContent = document.querySelector('.hidden-content')

    if (!aboutButton || !homeButton || !introHeader || !hiddenContent) {
        console.error('Required elements for the about are missing.')
        return
    }

    aboutButton.addEventListener('click', () => {
        introHeader.style.transform = 'translateX(-100%)'
        hiddenContent.style.transform = 'translateX(0)'
    })

    homeButton.addEventListener('click', () => {
        introHeader.style.transform = 'translateX(0)'
        hiddenContent.style.transform = 'translateX(100%)'
    })
}

export function initializeAnimation() {
    const aboutTitleWrapper = document.querySelector('.about-title-wrapper')
    const aboutTitle = document.querySelector('.about-title')
    const aboutText = document.querySelector('.about-text')
    const actionButton = document.querySelector('.action-button')

    actionButton.addEventListener('click', () => {
        aboutTitleWrapper.classList.remove('reverse')
        aboutTitle.classList.remove('reverse')
        aboutText.classList.remove('reverse')

        aboutTitleWrapper.classList.add('active')
        aboutTitle.classList.add('animated')
        aboutText.classList.add('animated')
    })

    const homeButton = document.querySelector(
        '.action-button-wrapper.home .action-button'
    )
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            aboutTitleWrapper.classList.remove('active')
            aboutTitle.classList.remove('animated')
            aboutText.classList.remove('animated')

            aboutTitleWrapper.classList.add('reverse')
            aboutTitle.classList.add('reverse')
            aboutText.classList.add('reverse')
        })
    }
}
