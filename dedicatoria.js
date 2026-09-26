// 2026-08-25: Variables para las páginas
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const heartClick = document.getElementById('heartClick');
const backBtnTop = document.getElementById('backBtnTop');
const typedText = document.getElementById('typed-text');
const signature = document.getElementById('signature');
const fadeTransitionContainer = document.querySelector('.fade-transition-container');

// 26-09-2026:Mensaje dedicatoria
const dedicatoryMessage = `Este es un mensaje de prueba para mencionar que Lizbeth Tutillo 
es una persona increíble, simpatica y maravillosa. Su dedicación y pasión por lo que hace son inspiradoras. 
Que este mensaje sea un recordatorio de lo especial que eres y de la huella positiva que dejas en quienes te rodean. ¡Sigue brillando y alcanzando tus sueños!     🌟`;

const authorName = '- Anónimo seguidor suyo ❤️';

heartClick.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');

    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingAnimation();
    }, 2500);
});

fadeTransitionContainer.addEventListener('click', () => {
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
    startTypingAnimation();
});

// Página1
backBtnTop.addEventListener('click', () => {
    page3.classList.add('hidden');
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    typedText.textContent = '';
    typedText.classList.remove('typing');
    signature.textContent = '';
    signature.classList.remove('visible');
});

// Animcación escrtura
function startTypingAnimation() {
    typedText.classList.add('typing');
    typedText.textContent = '';

    let index = 0;
    const speed = 40; // ms

    function typeCharacter() {
        if (index < dedicatoryMessage.length) {
            const char = dedicatoryMessage.charAt(index);
            typedText.textContent += char;
            index++;
            setTimeout(typeCharacter, speed);
        } else {
            // Terminar escritura
            typedText.classList.remove('typing');
            typedText.classList.add('finished');

            // Firma
            signature.textContent = authorName;
            signature.classList.add('visible');
        }
    }

    typeCharacter();
}

document.addEventListener('DOMContentLoaded', () => {
    const sunflowers = document.querySelectorAll('.sunflower-svg');

    sunflowers.forEach((sunflower, index) => {
        sunflower.addEventListener('click', () => {
            // Animacion CLick
            sunflower.style.transform = 'scale(1.1)';
            setTimeout(() => {
                sunflower.style.transform = '';
            }, 300);
        });
    });
});
