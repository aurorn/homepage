export function initializeCarousel() {
    const carousel = document.querySelector('.carousel')
    const cards = Array.from(carousel.children)

    let isDragging = false
    let startX = 0
    let currentX = 0
    let dragDistance = 0
    const dragThreshold = 100
    let lastShiftTime = 0

    function updatePositions() {
        cards.forEach((card) => {
            const position = parseInt(card.getAttribute('data-position'), 10)
            card.setAttribute('data-position', position)
        })
    }

    function shiftCards(direction) {
        const now = Date.now()

        if (now - lastShiftTime < 300) return
        lastShiftTime = now

        cards.forEach((card) => {
            const position = parseInt(card.getAttribute('data-position'), 10)

            if (direction === 'left') {
                card.setAttribute(
                    'data-position',
                    position === 1 ? -1 : position + 1
                )
            } else if (direction === 'right') {
                card.setAttribute(
                    'data-position',
                    position === -1 ? 1 : position - 1
                )
            }
        })

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
            shiftCards('left')
            startX = currentX
        } else if (dragDistance < -dragThreshold) {
            shiftCards('right')
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

    function createNavigationButtons() {
        const leftButton = document.createElement('button')
        leftButton.textContent = '◀'
        leftButton.classList.add('carousel-button', 'carousel-button-left')
        leftButton.addEventListener('click', () => shiftCards('left'))

        const rightButton = document.createElement('button')
        rightButton.textContent = '▶'
        rightButton.classList.add('carousel-button', 'carousel-button-right')
        rightButton.addEventListener('click', () => shiftCards('right'))

        carousel.parentElement.appendChild(leftButton)
        carousel.parentElement.appendChild(rightButton)
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

    cards.forEach((card, index) => {
        card.setAttribute('data-position', index - Math.floor(cards.length / 2))
    })

    updatePositions()
    createNavigationButtons()
}
