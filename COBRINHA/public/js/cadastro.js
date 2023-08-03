
document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o Swiper quando o conteúdo da página estiver totalmente carregado
    const swiper = new Swiper('.swiper-container', {
        // Opções do Swiper (consulte a documentação do Swiper para mais opções)
        slidesPerView: 3, // Quantidade de slides visíveis na tela ao mesmo tempo
        spaceBetween: 30, // Espaço entre os slides
        loop: true, // Repetir o carrossel em loop
        autoplay: {
            delay: 3000, // Tempo de exibição de cada slide (em milissegundos)
        },
    });
});









console.log(nome.value)
console.log(senha.value);

// MUSICA




const audio = new Audio("./assets/cadastro.mp3")

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.querySelector('.audiocadastro');
    var playButton = document.getElementById('playButton');
    var isPlaying = false; // Variável para controlar o estado da música

    playButton.addEventListener('click', function () {
        if (isPlaying) {
            playButton.innerText = "Startar musiquinha"
            audio.pause();
        } else {
            playButton.innerText = "Pausar musiquinha"
            audio.play();
        }
        isPlaying = !isPlaying; // Inverte o estado (de true para false e vice-versa)
    });
    var playButton2 = document.getElementById('playButton2');
    var isPlaying2 = false; // Variável para controlar o estado da música

    playButton2.addEventListener('click', function () {
        if (isPlaying2) {
            playButton.innerText = "Startar musiquinha"
            audio.pause();
        } else {
            playButton.innerText = "Pausar musiquinha"
            audio.play();
        }
        isPlaying2 = !isPlaying2; // Inverte o estado (de true para false e vice-versa)
    });
});




