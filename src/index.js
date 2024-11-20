import './modules/styles/styles.css'
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';


const deck = new Reveal({
    embedded: true,
    scroll: true,
});
deck.initialize({view: 'scroll', scrollProgress: true,});


