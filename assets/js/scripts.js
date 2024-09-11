document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    document.getElementById('contact-form').reset();
});

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automático (opcional)
setInterval(() => {
    moveSlide(1);
}, 3000); // Cambia de imagen cada 3 segundos


function mostrarTexto(elemento) {
    const figcaption = elemento.nextElementSibling; // Selecciona el figcaption hermano del img
    figcaption.style.opacity = '1';
}

function ocultarTexto(elemento) {
    const figcaption = elemento.nextElementSibling;
    figcaption.style.opacity = '0';
}