/* Peça para o usuario digitar seu nome
   As notas de cada bimestre
   se a sua media for maior ou igual a 7 exiba na tela uma mensagem de aprovado caso contrario exiba uma mensagem de reprovado*/

alert("Bem vindo!! Vamos calcular sua media.")
nome = prompt("Digite seu nome")
var n1 = prompt("Digite sua nota do 1°Bimestre");
n1 = parseFloat (n1)

var n2 = prompt("Digite sua nota do 2°Bimestre");
n2 = parseFloat (n2)

var n3 = prompt("Digite sua nota do 3°Bimestre");
n3 = parseFloat (n3)

var n4 = prompt("Digite sua nota do 4°Bimestre");
n4 = parseFloat (n4)

var res = (n1 + n2 + n3 + n4) / 4
if (res >= 7){
    alert(`PARABÉNS ${nome} VOCÊ FOI APROVADO!!`)
} else {
    alert(`${nome} VOCÊ FOI REPROVADO`)
}
