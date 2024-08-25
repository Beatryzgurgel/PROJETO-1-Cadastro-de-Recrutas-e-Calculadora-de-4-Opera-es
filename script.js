let primeiroNome = prompt('Digite seu primeiro nome:')
let sobrenome = prompt('Digite seu sobrenome:')
let curso = prompt('Digite seu curso da base técnica:')
const anoNascimento = parseInt(prompt('Digite seu ano de nascimento:'))

let idade = 2024 - anoNascimento

alert(`
    Olá ${primeiroNome} ${sobrenome}
    Então você estuda ${curso} e tem ${idade} anos. Legal!
`)
let num1 = parseInt(prompt('Digite um número:'))
let num2 = parseInt(prompt('Digite outro número:'))

let soma = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2

alert(`
    Resultado:
    ${num1} + ${num2} = ${soma}
    ${num1} - ${num2} = ${sub}
    ${num1} * ${num2} = ${multi}
    ${num1} / ${num2} = ${div}
`)