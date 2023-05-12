import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

var i = 0;
var j = 0;
var currentPhrase = [];
var isDeleting = false;
var isEnd = false;
var txt = ['Unlike the odyssey there are no cyclops here - just some cool projects.', 'No sirens or mythical beasts included...unless you count the occasional coding bug.', 'No more Ulysses-Odyssey jokes. A Joyce-ful journey awaits.', 'Did you get that? James Joyce, lol.'];

function loop() {
    isEnd = false;
    document.getElementById('animated-text').innerHTML = currentPhrase.join('');

    if (i < txt.length) {

        if (!isDeleting && j <= txt[i].length) {
            currentPhrase.push(txt[i][j]);
            j++;
            document.getElementById('animated-text').innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j >= 0) {
            currentPhrase.pop(txt[i][j]);
            document.getElementById('animated-text').innerHTML = currentPhrase.join('');
            j--;
        }

        if (j == txt[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == txt.length) {
                i = 0;
            }
        }

    }
    const spedUp = Math.random() * (40 - 20) + 20;
    const normalSpeed = Math.random() * (150 - 75) + 75;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();


