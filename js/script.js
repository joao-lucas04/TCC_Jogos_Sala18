function verificarVisibilidade(classe) {
    var elementos = document.querySelectorAll('.' + classe);
    var windowHeight = window.innerHeight;

    elementos.forEach(function(elemento) {
        var posicao = elemento.getBoundingClientRect().top;
        if (posicao < windowHeight * 0.75) {
            elemento.classList.add('aparecer');
        } else {
            elemento.classList.remove('aparecer'); // Remover a classe se o elemento não estiver mais visível
        }
    });
}

// Adicionar um event listener para verificar a visibilidade sempre que a página é rolada
window.addEventListener('scroll', function() {
    verificarVisibilidade('msv');
    verificarVisibilidade('sobre');
});

// Chamar a função para verificar a visibilidade quando a página é carregada
verificarVisibilidade('msv');
verificarVisibilidade('sobre');


