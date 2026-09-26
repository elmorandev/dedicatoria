// Variables para las páginas
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const heartClick = document.getElementById('heartClick');
const backBtnTop = document.getElementById('backBtnTop');
const typedText = document.getElementById('typed-text');
const signature = document.getElementById('signature');
const fadeTransitionContainer = document.querySelector('.fade-transition-container');

// Mensaje dedicatoria
const dedicatoryMessage = `Este es un mensaje de prueba para mencionar que Lizbeth Tutillo 
es una persona increíble, simpatica y maravillosa. Su dedicación y pasión por lo que hace son inspiradoras. 
Que este mensaje sea un recordatorio de lo especial que eres y de la huella positiva que dejas en quienes te rodean. ¡Sigue brillando y alcanzando tus sueños!     🌟`;

const authorName = '- Anónimo seguidor suyo ❤️';

// Función para pasar a la página 2 (transición)
heartClick.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');

    // Después de 2.5 segundos, ir a la página 3
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingAnimation();
    }, 2500);
});

// Click en la transición también lleva a página 3
fadeTransitionContainer.addEventListener('click', () => {
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
    startTypingAnimation();
});

// Función para volver a la página 1
backBtnTop.addEventListener('click', () => {
    page3.classList.add('hidden');
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    typedText.textContent = '';
    typedText.classList.remove('typing');
    signature.textContent = '';
    signature.classList.remove('visible');
});

// Función para animar la escritura del mensaje
function startTypingAnimation() {
    typedText.classList.add('typing');
    typedText.textContent = '';

    let index = 0;
    const speed = 40; // velocidad en ms

    function typeCharacter() {
        if (index < dedicatoryMessage.length) {
            const char = dedicatoryMessage.charAt(index);
            typedText.textContent += char;
            index++;
            setTimeout(typeCharacter, speed);
        } else {
            // Terminar escritura
            typedText.classList.remove('typing'); // (Opcional si usas mi CSS nuevo)
            typedText.classList.add('finished');  // <--- AGREGA ESTO para ocultar el cursor

            // Mostrar firma
            signature.textContent = authorName;
            signature.classList.add('visible');
        }
    }

    typeCharacter();
}

// Efecto de interacción con los girasoles (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const sunflowers = document.querySelectorAll('.sunflower-svg');

    sunflowers.forEach((sunflower, index) => {
        sunflower.addEventListener('click', () => {
            // Pequeña animación al hacer click
            sunflower.style.transform = 'scale(1.1)';
            setTimeout(() => {
                sunflower.style.transform = '';
            }, 300);
        });
    });
});
