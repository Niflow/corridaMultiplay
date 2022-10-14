class Game {
  constructor() {}

  comecar() {
    var jogador = new Player(); // novo jogador
    numeroJogadores = jogador.pegarNumeroJogadores();


    var formulario = new Form();
    formulario.mostrar();
  }

  pegarEstadoDoJogo()
  {
    var estadoDoJogoRef = bancoDeDados.ref("estadoDoJogo");
    estadoDoJogoRef.on("value", function(dados) {
      estadoDoJogo = dados.val();
    });
  }
}
