// Array con i percorsi delle immagini (assicurati che le immagini siano nella stessa cartella del file HTML)
const images = [
    'ciao.jpg',
    'immagine2.jpg',
    'immagine3.jpg',
    'immagine4.jpg'
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
