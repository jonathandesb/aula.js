// Peça para o usuário digiatar um número e mostrar a tabuada desse numero de 1 a 1000
// Deve ter a possobilidade do usuario digitar outro numero e também limpar a tabauda gerada previamente

function mostrarTabuada(){ // função 
   var numero = prompt('Digite um número')

   limparTabuada() // chamar função "Limpar tabuada"

   numero = parseFloat(numero) // converter o número em float
   var indice = 1
   while( indice <= 1000) { // enquanto indice for menor ou igual a 1000
    mensagem += numero + " x " + indice + " = " + ( numero * indice) + "<br>"; // numero X indice = ( numero * indice) <quebra a linha>
    indice++ // indice = indice + 1
      }

   output.innerHTML = mensagem; // div com id "output" vai receber a variavel mensagem 
   
   }

   function limparTabuada () { // função limpartabauda, ao ser clicada ela limpa a tabuada
      mensagem = ""; // mensagem vazia
      output.innerHTML = mensagem; // div com id *output* recebe a variavel vazia
   }

   var output = document.querySelector("#output");
   var mensagem = "";
 