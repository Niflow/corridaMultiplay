class Form {
  constructor() {
    this.entrada = createInput("").attribute("placeholder", "Digite seu nome");
    this.botaoJogar = createButton("Jogar");
    this.imagemTitulo = createImg("./assets/TITULO.png", "nome do jogo");
    this.mensagem = createElement("h2");
  }

  esconder() 
  {
    this.mensagem.esconder();
    this.botaoJogar.esconder();
    this.input.esconder();
  }

  mostrar(){
    this.addPosicaoElementos()
    this.addEstiloElementos()
    this.gerenciarClickBotao()
    
  }

  addEstiloElementos()
  {
    this.imagemTitulo.class('gameTitle')
    this.entrada.class('customInput')
    this.botaoJogar.class('customButton')
    this.mensagem.class('greeting')
  }

  gerenciarClickBotao(){
    this.botaoJogar.mousePressed(() => {
      this.entrada.hide()
      this.botaoJogar.hide()
      var mensagem = `Olá, ${this.entrada.value()} </br>espere o outro jogador entrar...`;
      this.mensagem.html(mensagem)
    });

  
  }

  addPosicaoElementos()
  {
    this.imagemTitulo.position(120, 50);
    this.entrada.position(width / 2 - 110, height / 2 - 80);
    this.botaoJogar.position(width / 2 - 90, height / 2 - 20);
    this.mensagem.position(width / 2 - 300, height / 2 - 100);
  }

  

}
