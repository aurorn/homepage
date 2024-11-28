import './modules/styles/styles.css'
import './modules/styles/navbar.css'

function initialize() {
    import('./modules/carousel.js').then((module) => {
        const { initializeCarousel } = module
        initializeCarousel()
    })

    import('./modules/about.js').then((module) => {
        const { initializeAbout, initializeAnimation } = module
        initializeAbout()
        initializeAnimation()
    })

    import('./modules/navbar.js').then((module) => {
        const { initializeNavbar } = module
        initializeNavbar()
    })

    import('./modules/icons.js').then((module) => {
        const { addIcons } = module
        addIcons()
    })
}

document.addEventListener('DOMContentLoaded', initialize)
