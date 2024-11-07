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
}

document.addEventListener('DOMContentLoaded', initialize)
