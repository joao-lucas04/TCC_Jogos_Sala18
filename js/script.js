const btn = document.getElementById('volta_inicio');
window.onscroll = function() {
    if (window.scrollY < 200 || window.scrollY == 0) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
};

function transicao(secao){
    switch (secao) {
        case 'menu':
            window.scrollTo({
                top: 0, 
                behavior: 'smooth', 
            });
            break;
            
        case 'jogos':
            window.scrollTo({
                top: 950, 
                behavior: 'smooth' 
            });

            break;
        case 'sobre':
            window.scrollTo({
                top: 3000,
                behavior: 'smooth' 
            });
            break;

        case 'quem':
            window.scrollTo({
                top: 4400,
                behavior: 'smooth' 
            });
            break;

        case 'local':
            window.scrollTo({
                top: 10000, 
                behavior: 'smooth' 
            });
            break;

        case 'app':
            window.scrollTo({
                top: 2400, 
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


