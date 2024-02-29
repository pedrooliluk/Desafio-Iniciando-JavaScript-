

//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
//alert('hello word')

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
//let numberOne = Number(prompt("Digite o primeiro numero:"));
//let numberTwo = Number(prompt("Digite o segundo numero:"));
//let soma = numberOne + numberTwo
//alert('A soma é : '+soma)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//let number = prompt("Digite algo para validar se é numero:");
//let isNumber = (typeof number === 'number' ) ? true : false
//if (isNumber){
//    alert('O valor digitado é um numero '+number)
//}else{
//  alert('O valor digitado NÃO é um numero '+number)
//}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
//let number = prompt("Digite algo para validar se é string:");
//let isNumber = (typeof number === 'string' ) ? true : false
//if (isNumber){
//    alert('O valor digitado é uma string '+number)
//}else{
//  alert('O valor digitado NÃO é uma string '+number)
//}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
//let numberOne = Number(prompt("Digite o primeiro numero:"));
//let numberTwo = Number(prompt("Digite o segundo numero:"));
//let subtraction = numberOne - numberTwo
//alert('A subtração é : '+subtraction)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".


let numberOne = Number(prompt("Digite o primeiro numero:"));
let numberTwo = Number(prompt("Digite o segundo numero:"));

let sum = numberOne + numberTwo;
let division = (numberOne / numberTwo).toFixed(2);
let subtraction = numberOne - numberTwo ;
let multiplication = numberOne * numberTwo;
let remainder = numberOne % numberTwo ;

let cParImpar = ( (sum % 2) === 0 ) ? 'Par' : 'Impar'
let theSame = ( numberOne === numberTwo ) ? 'Sim' : 'Não'

alert(`
    Resultado soma: ${sum} \n 
    Resultado subtração: ${subtraction} \n 
    Resultado divisão: ${division} \n 
    Resultado multiplicação: ${multiplication} \n 
    Resultado resto: ${remainder} \n 
    Resultado Par ou impar: ${cParImpar} \n 
    Resultado digitos iguais: ${theSame} \n 
    `);

