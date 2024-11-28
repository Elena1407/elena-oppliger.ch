const typeEffect = document.querySelector('#home h1');
let text = typeEffect.textContent;
let index = 0;
typeEffect.textContent = '';

function typeWriter() {
    if (index < text.length) {
        typeEffect.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 90);  // Délai réduit à 50ms
    }
}

typeWriter();


window.onload = typeWriter;  // Lance l'animation de texte dès que la page est chargée

// Animation au défilement des éléments du portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
// Fonction pour animer les éléments lorsque l'utilisateur les fait défiler dans la vue
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null,  // Observe l'écran (viewport)
    threshold: 0.1 // L'élément doit être à 10% dans la vue pour être activé
};

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');  // Ajoute la classe d'animation
        } else {
            entry.target.classList.remove('animate-in');  // Retire l'animation si l'élément sort de la vue
        }
    });
};

// Crée un observer pour chaque élément
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Applique l'observer à chaque élément à animer
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
const button = document.querySelector('.btn');
.project-item img:hover {
    transform: scale(1.05);
}