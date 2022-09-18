// Pedir para o usuario digitar dois números e mostrar a média
var nome = prompt("Digite seu nome")
var turma = prompt("Digite sua turma")

var primeiroBimestre = prompt("Digita sua nota do 1°Bimestre")
primeiroBimestre = parseFloat(primeiroBimestre)

var segundoBimestre = prompt("Digita sua nota do 2°Bimestre")
segundoBimestre = parseFloat(segundoBimestre)

var terceiroBimestre = prompt("Digita sua nota do 3°Bimestre")
terceiroBimestre = parseFloat(terceiroBimestre)

var quartoBimestre = prompt("Digita sua nota do 4°Bimestre")
quartoBimestre = parseFloat(quartoBimestre)

var res = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4

alert(`Parabéns ${nome}! sua nota media é ${res}`);
