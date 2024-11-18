import './modules/styles/styles.css'

function initialize() {
    import('./modules/reveal.js').then((module) => {
        const { reveal } = module
        window.addEventListener('scroll', reveal, { passive: true })
    })

    import('./modules/carousel.js').then((module) => {
        const { initializeCarousel } = module
        initializeCarousel()
    })

    import('./modules/textShow.js').then((module) => {
        const { toggleVis, showText } = module
        toggleVis()
        showText()
    })
}

document.addEventListener('DOMContentLoaded', initialize)
