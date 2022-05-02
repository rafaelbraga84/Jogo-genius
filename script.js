let ordem = [];
let clickOrdem = [];
let placar = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const verde = document.querySelector(".verde");
const vermelho = document.querySelector(".vermelho");
const amarelo = document.querySelector(".amarelo");
const azul = document.querySelector(".azul");

// cria ordem aleatoria de cores
let ordemAleatoria = () => {
    let ordemCor = Math.floor(Math.random()*4);
    ordem[ordem.length] = ordemCor;
    clickOrdem = [];

    for(let i in ordem){
        let corElemento = criarCorElemento(ordem[i]);
        lightColor(corElemento, Number(i) + 1);
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selecionada");

    }, number - 250);

    setTimeout(() => {
        element.classList.remove("selecionada");
    });

}

// verifica se botoes clicados sao os mesmos da ordem gerada no jogo
let verificarOrdem = () => {
    for(let i in clickOrdem) {
        if(clickOrdem[i] !== ordem[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrdem.length === ordem.length) {
        alert("Você acertou! Iniciando próximo nível! \n Pontuação:"+ placar);
        proximoNivel();
    }
}

// clique do usuario
let click = (color) => {
    clickOrdem[clickOrdem.length] = color;
    criarCorElemento(color).classList.add("selecionada");

    setTimeout(() =>{
        criarCorElemento(color).classList.remove("selecionada");
        verificarOrdem();
    },250);

    
}

// retorna a cor
let criarCorElemento = (color) => {
    if(color === 0){
        return verde;
    }else if(color === 1){
        return vermelho;
    }else if(color === 2){
        return amarelo;
    }else if(color === 3){
        return azul;
    }
}

// proximo nivel do jogo
let proximoNivel = () => {
    placar++;
    ordemAleatoria();
}

// game over
let gameOver = () => {
    alert("Você perdeu!\n Clique em OK para iniciar novo jogo\n Sua pontuação foi:" + placar);
    ordem= [];
    clickOrdem = [];

    iniciarJogo();

}

// inicio do jogo
let iniciarJogo = () => {
    alert("Bem-vindo ao GENESIS! Iniciando novo jogo!");    
    placar = 0;
    proximoNivel();
}

// eventos de click para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

iniciarJogo();