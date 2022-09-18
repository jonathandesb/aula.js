
  

   //Faça o jogador1 digitar um número
   var jogador1 = prompt("Número do jogador 1");
   jogador1 = parseInt(jogador1)

   //faça o jogador2 digitar outro numero
   var jogador2 = prompt("Número do jogador 2");
   jogador2 = parseInt(jogador2)

   //se os números forem iguais, mostrar uma mensagem de "empate"
   if ( jogador1 == jogador2){
    alert("VOCÊS EMPATARAM!!")
   } else {

         //sortear um número entre 0 e 1
        var nSorteado = parseInt(Math.random() *2);

        //se o núymero sorteado for 0, ganha quem escolher o numero MENOR
        if (nSorteado === 0) {
            if(jogador1 < jogador2) {
                alert("Ganhou o jogador1")
            } else {
                if(jogador2 < jogador1) {
                    alert("Ganhou o jogador2")
                }
            }

        //se o numero for 1, ganha o que escolher o numero MAIOR
        } else {
            if (jogador1 > jogador2){
                alert("Ganhou o jogador 1");
            } else {
                alert("Ganhou o jogador2")
            }
        }
   }
