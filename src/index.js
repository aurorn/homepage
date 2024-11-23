import './modules/styles/styles.css'

function initialize() {
    import('./modules/reveal.js').then((module) => {
        const { reveal } = module
        window.addEventListener('scroll', reveal, { passive: true })
    })

    import('./modules/textShow.js').then((module) => {
        const { toggleVis, showText } = module
        toggleVis()
        showText()
    })
    import('./modules/carousel.js').then((module) => {
        const { initializeCarousel } = module
        initializeCarousel()
    })
    import('./modules/sideBar.js').then((module) => {
        const { initializeSideBar } = module
        initializeSideBar()
    })
}

document.addEventListener('DOMContentLoaded', initialize)
