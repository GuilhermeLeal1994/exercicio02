// Curso: Tecnologia em Analise e Desenvolvimento de Sistemas
// Disciplina: Programação Front-End
// Professor: José Carlos Flores
// Turma: ADS3A
// Componentes:
//              RA: 25142866-2 - Eduardo Reis Marcondes
//              RA: 25216067-2 - Guilherme Leal de Deus
//              RA: 25340355-2 - João Vitor Melo Figueiredo
//              RA: 25294208-2 - Matheus Henrique Montagnini de Almeida
//              RA: 26004961-2 - Rebeca Ferreira de Almeida

let peso = 70;
let altura = 1.75;

// Calcula o IMC usando a fórmula peso / altura²

let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

// Classifica o IMC de acordo com os valores

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}