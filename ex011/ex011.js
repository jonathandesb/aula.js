//Peça ao usuario para digitar 1 numero
// exiba 4 botões na tela com soma, subtração, vezes, divisão 
var numero = prompt('Digite um número') // Pedir par ao usuario digitar 1 numero
numero = parseFloat(numero)
escreve() // função escrever 

function escreve () {
   var output = document.querySelector("#output"); // selecionar o id de saida
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



