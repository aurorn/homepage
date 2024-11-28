export function initializeCarousel() {
    const carousel = document.querySelector('.carousel')
    if (!carousel) {
        console.error('Carousel element not found.')
        return
    }

    const cards = Array.from(carousel.children)
    if (cards.length < 3) {
        console.warn('Carousel requires at least 3 cards to function properly.')
        return
    }

    let isDragging = false
    let startX = 0
    let currentX = 0
    let dragDistance = 0
    const dragThreshold = 100
    let lastShiftTime = 0
    let centerIndex = Math.floor(cards.length / 2)

    function updatePositions() {
        cards.forEach((card, index) => {
            let position
            if (index === (centerIndex + cards.length - 1) % cards.length) {
                position = -1 // Left card
            } else if (index === centerIndex) {
                position = 0 // Center card
            } else if (index === (centerIndex + 1) % cards.length) {
                position = 1 // Right card
            } else {
                position = 2 // Off-screen cards
            }
            card.setAttribute('data-position', position)
        })
    }

    function shiftCards(direction) {
        const now = Date.now()

        if (now - lastShiftTime < 300) return
        lastShiftTime = now

        if (direction === 'left') {
            centerIndex = (centerIndex + 1) % cards.length
        } else if (direction === 'right') {
            centerIndex = (centerIndex - 1 + cards.length) % cards.length
        }
        updatePositions()
    }

    function onMouseDown(e) {
        isDragging = true
        startX = e.clientX || e.touches[0].clientX
    }

    function onMouseMove(e) {
        if (!isDragging) return
        currentX = e.clientX || e.touches[0].clientX
        dragDistance = currentX - startX
        if (dragDistance > dragThreshold) {
            shiftCards('right')
            startX = currentX
        } else if (dragDistance < -dragThreshold) {
            shiftCards('left')
            startX = currentX
        }
    }

    function onMouseUp() {
        if (!isDragging) return
        isDragging = false
        dragDistance = 0
    }

    function handleKeyNavigation(e) {
        if (e.key === 'ArrowLeft') {
            shiftCards('left')
        } else if (e.key === 'ArrowRight') {
            shiftCards('right')
        }
    }

    carousel.addEventListener('mousedown', onMouseDown)
    carousel.addEventListener('mousemove', onMouseMove)
    carousel.addEventListener('mouseup', onMouseUp)
    carousel.addEventListener('mouseleave', onMouseUp)

    document.addEventListener('mouseup', () => {
        isDragging = false
        dragDistance = 0
    })

    document.addEventListener('keydown', handleKeyNavigation)
    carousel.addEventListener('touchstart', onMouseDown)
    carousel.addEventListener('touchmove', onMouseMove)
    carousel.addEventListener('touchend', onMouseUp)

    // Initialize positions and buttons
    updatePositions()
}
