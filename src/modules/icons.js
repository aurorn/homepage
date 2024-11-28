import htmlIcon from '../images/icons-html.svg'
import cssIcon from '../images/icons-css3.svg'
import jsIcon from '../images/icons-javascript.svg'
import tsIcon from '../images/icons-typescript.svg'
import reactIcon from '../images/icons-react.svg'
import sassIcon from '../images/icons-sass.svg'
import bootstrapIcon from '../images/icons-bootstrap.svg'
import nodejsIcon from '../images/icons-nodejs.svg'

const techs = [
    { name: 'HTML', file: htmlIcon },
    { name: 'CSS', file: cssIcon },
    { name: 'JavaScript', file: jsIcon },
    { name: 'TypeScript', file: tsIcon },
    { name: 'React', file: reactIcon },
    { name: 'SASS', file: sassIcon },
    { name: 'Bootstrap', file: bootstrapIcon },
    { name: 'NodeJS', file: nodejsIcon },
]

export function addIcons() {
    const container = document.querySelector('.tech-list-1')

    if (!container) {
        console.error('Container element not found.')
        return
    }

    techs.forEach((tech) => {
        const techWrapper = document.createElement('div')
        techWrapper.classList.add('tech-item')
        techWrapper.style.textAlign = 'center'

        const svg = document.createElement('img')
        svg.src = tech.file
        svg.alt = `${tech.name} Icon`
        svg.className = 'svg'

        const title = document.createElement('p')
        title.className = 'tech-name'
        title.textContent = tech.name

        techWrapper.appendChild(svg)
        techWrapper.appendChild(title)

        container.appendChild(techWrapper)
    })
}
