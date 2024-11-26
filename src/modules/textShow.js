function toggleVis() {
    const btns = document.querySelectorAll('.btn')
    const textBox = document.querySelector('.txt-box')

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            textBox.classList.remove('hidden')
        })
    })
}

function showText() {
    const gitBtn = document.querySelector('.git-btn')
    const gitBox = document.querySelector('.git-txt')
    const gitTxt = 'This is my Github page'

    const clearAllBoxes = () => {
        gitBox.textContent = ''
    }

    gitBtn.addEventListener('click', () => {
        clearAllBoxes()
        gitBox.textContent = gitTxt
    })
}

export { toggleVis, showText }
