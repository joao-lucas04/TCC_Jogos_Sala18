let tema = false; //variavel do tipo boolean para ver se esta ligado ou desligado o tema de cores
let img_logo = document.getElementById("logo"); //variavel para a logo da empresa

let cor_letras = document.getElementsByClassName("palavras"); //variavel para identificar a classe do elemento
let background = document.body; //variavel para identificar o body

function logo(){ //caso o usuario clique na logo, mudará o tema de cores do site
    if(tema) {
        tema_claro();
        tema = false;
    } else {
        tema_escuro();
        tema = true;
    }
}

function tema_claro(){
    background.style.backgroundColor="#ffffff";

    img_logo.src = 'img/logo.png';

    for (let i = 0; i < cor_letras.length; i++) {
        cor_letras[i].style.color="#000000"; 
    }
}
function tema_escuro(){
    background.style.backgroundColor="#000000";

    img_logo.src = 'img/logo_claro.png';

    for (let i = 0; i < cor_letras.length; i++) {
        cor_letras[i].style.color="#ffffff"; 
    }
}