function transicao(secao){
    switch (secao) {
        case 'menu':
            window.scrollTo({
                top: 0, 
                behavior: 'smooth' 
            });
            break;
            
        case 'jogos':
            window.scrollTo({
                top: 700, 
                behavior: 'smooth' 
            });

            break;
        case 'sobre':
            window.scrollTo({
                top: 1700,
                behavior: 'smooth' 
            });
            break;

        case 'quem':
            window.scrollTo({
                top: 3045,
                behavior: 'smooth' 
            });
            break;

        case 'local':
            window.scrollTo({
                top: 0, 
                behavior: 'smooth' 
            });
            break;
    }
}

function verificarVisibilidade(classe) {
    var elementos = document.querySelectorAll('.' + classe);
    var windowHeight = window.innerHeight;

    elementos.forEach(function(elemento) {
        var posicao = elemento.getBoundingClientRect().top;
        if (posicao < windowHeight * 0.75) {
            elemento.classList.add('aparecer');
        } else {
            elemento.classList.remove('aparecer');
        }
    });
}

window.addEventListener('scroll', function() {
    verificarVisibilidade('msv');
    verificarVisibilidade('sobre');
    verificarVisibilidade('quem_container');
});
verificarVisibilidade('msv');
verificarVisibilidade('sobre');
verificarVisibilidade('quem_container');


