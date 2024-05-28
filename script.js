// Array con i percorsi delle immagini (assicurati che le immagini siano nella stessa cartella del file HTML)
const images = [
    'ciao.png',
    'image/1.png',
    'image/2.png',
    'image/3.png',
    'image/4.png',
    'image/5.png',
    'image/6.png',
    'image/7.png',
    'image/8.png',
    'image/9.png',
    'image/10.png',
    'image/11.png',
    'image/12.png',
    'image/13.png',
    'image/14.png',
];

let currentIndex = 0;

function changeBackground() {
    // Cambia l'immagine di sfondo
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    
    // Incrementa l'indice per la prossima immagine
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambia l'immagine di sfondo ogni 5 secondi (5000 millisecondi)
setInterval(changeBackground, 5000);

// Imposta la prima immagine di sfondo quando la pagina viene caricata
window.onload = changeBackground;
