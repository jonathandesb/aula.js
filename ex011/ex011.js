//Peça ao usuario para digitar 1 numero
// exiba 4 botões na tela com soma, subtração, vezes, divisão 
var numero = prompt('Digite um número')
numero = parseFloat(numero)
escreve()

function escreve () {
   var output = document.querySelector("#output");
   output.innerHTML = numero
}

function soma(){ // função 
   var soma = prompt("Digite um número para soma ser aplicada")
   soma = parseFloat(soma)
   numero = numero + soma
   escreve()
}

function subtracao(){ // função 
   var subtracao = prompt("Digite um numero para subtração ser aplicada")
   subtracao = parseFloat(subtracao)
   numero = numero - subtracao
   escreve()
}

function multiplicacao(){ // função 
   var multiplicacao = prompt("Digite um numero para multiplicação ser aplicada")
   multiplicacao = parseFloat(multiplicacao)
   numero = numero * multiplicacao
   escreve()
}


function divisao(){ // função 
   var divisao = prompt("Digite um numero para divisão ser aplicada")
   divisao = parseFloat(divisao)
   numero  = numero / divisao
   escreve()
}








/*
   limparTabuada() // chamar função "Limpar tabuada"

   numero = parseFloat(numero) // converter o número em float
   var indice = 1
   while( indice <= 1000) { // enquanto indice for menor ou igual a 1000
    mensagem += numero + " x " + indice + " = " + ( numero * indice) + "<br>"; // numero X indice = ( numero * indice) <quebra a linha>
    indice++ // indice = indice + 1
      }

   output.innerHTML = mensagem; // div com id "output" vai receber a variavel mensagem 
   
   

   function limparTabuada () { // função limpartabauda, ao ser clicada ela limpa a tabuada
      mensagem = ""; // mensagem vazia
      output.innerHTML = mensagem; // div com id *output* recebe a variavel vazia
   }

   var output = document.querySelector("#output");
   var mensagem = "";
 */