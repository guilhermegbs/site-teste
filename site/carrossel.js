let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-image');
    
    // Se o índice do slide for maior ou igual ao número de imagens, reinicia o índice
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Ajusta a posição do carrossel (move o carrossel para o slide correto)
    document.querySelector('.carousel').style.transform = `translateX(${-slideIndex * 100}%)`;

    // Avança o índice para o próximo slide
    slideIndex++;

    // Chama a função novamente após 3 segundos (3000ms)
    setTimeout(showSlides, 2000);
}

// Inicia o carrossel assim que a página carregar
window.onload = showSlides;
