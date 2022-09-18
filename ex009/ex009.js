// Peça ao usuario para digitar um número e exiba na tela  tabauda desse numero de 1 a 1000

var numero = prompt("Digite um número");
numero = parseFloat(numero);

var indice = 1;


while(indice <=1000){ // enquanto Numero for menor ou igual a 1000 
   document.write(numero + " x "+ indice +" = "+ (numero * indice) + " <br>"); // numero x indice = (numero * indice)
  
   if (indice % 10 === 0 && indice > 0) {
    document.write("<hr>");
   }
   indice = indice + 1;
}