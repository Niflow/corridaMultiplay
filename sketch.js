// variaveis
var bancoDeDados, jogo, estadoDoJogo, numeroJogadores;
var backgroundImg;

function preload() {
    // carregar as imagens
    backgroundImg = loadImage("./assets/planodefundo.png");
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    
    // iniciar o banco de dados
    bancoDeDados = firebase.database();
    jogo = new Game();
    jogo.comecar();
}

function draw() {
    // desenhar na tela
    background(backgroundImg);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// continuar com as classes