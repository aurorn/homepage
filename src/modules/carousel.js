const carousel = document.querySelector('.carousel')
const slides = document.querySelectorAll('.carousel-slide')
const indicatorsContainer = document.createElement('div')
indicatorsContainer.classList.add('indicators')
carousel.parentElement.appendChild(indicatorsContainer)

let currentIndex = 0
let autoSlideInterval

export function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`
    updateIndicators(index)
}

function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator')
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index)
    })
}

function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div')
        indicator.classList.add('indicator')
        if (index === 0) indicator.classList.add('active')
        indicator.addEventListener('click', () => {
            currentIndex = index
            showSlide(currentIndex)
        })
        indicatorsContainer.appendChild(indicator)
    })
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length
        showSlide(currentIndex)
    }, 3000)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval)
}

export function initializeCarousel() {
    carousel.addEventListener('mouseover', stopAutoSlide)
    carousel.addEventListener('mouseout', startAutoSlide)

    createIndicators()
    showSlide(currentIndex)
    startAutoSlide()
}
