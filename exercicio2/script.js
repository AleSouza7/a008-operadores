//# Exercício 2

//Faça um programa que pergunte ao usuário dois números.

let numero1 =Number(prompt("Digite um numero:"))
let numero2 =Number(prompt("Digite outro numero:"))
console.log("Numero 1 digitado:",numero1)
console.log("Numero 2 digitado:",numero2)

//Em seguida,faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

//O primeiro numero é maior que segundo? true
typeof console.log("O primeiro numero é maior que segundo?",numero1>numero2)

//O primeiro numero é igual ao segundo? false
typeof console.log("O primeiro numero é igual ao segundo?",numero1==numero2)

//O primeiro numero é divisível pelo segundo? true
let resultado=Number(numero1%numero2)
typeof console.log("O primeiro numero é divisível pelo segundo?",resultado===0)