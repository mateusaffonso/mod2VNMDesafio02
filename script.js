
//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let age = 21

if(age > 18){
    console.log("Você é maior de idade")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let condicaoHumana = true

if(age > 18 && condicaoHumana == true){
    console.log("Você é maior de idade")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let monthBirthday = "Janeiro"
//let monthBirthday = "Dezembro"

if(monthBirthday == "Janeiro" || monthBirthday == "Dezembro" ){
    console.log("success")
}


//*** Exercícios bônus

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Ronaldo"

if(nome[0] == "R"){
    console.log("Seu nome começa com a letra R")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Nascimento"
let nome2 = "Eduardo"

if(sobrenome.length > 6 || nome2[0] == "E"){
    console.log("Ou seu sobrenome possui mais de 6 letras, ou seu nome começa com a letra E. Certo?")
}else{
    console.log("Infelizmente não consigo adivinhar..")
}
