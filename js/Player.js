class Player {
  constructor() {

  }

  pegarNumeroJogadores()
  {
    var numeroJogadoresRef = bancoDeDados.ref("numeroJogadores");
    numeroJogadoresRef.on("value", dados => {
      numeroJogadores = dados.val();
    });
  }
}
