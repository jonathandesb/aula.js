//Pedir para o usuário digitar um número de 1 a 6. Mostrar na tela
//uma mensagem diferente para cada número

var n = prompt("Escolha um número de 1 a 6")
n = parseInt(n)

switch(n){ // para cada decisão tomada será exibido uma mensagem caso nenhuma seja escolhida será exibido uma mensagem de erro.
    case 1:
        alert("Boa escolha!");
        break
    case 2:
        alert("Excelente escolha");
        break
    case 3:
        alert("Muito bom!!")
        break
    case 4:
        alert("Por essa eu não esperava!!")
        break
    case 5:
        alert("Uma das melhores escolhas!")
        break
    default:
        alert("[ERRO] Escolha apenas número de 1 a 6.")
}
