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

let numeros = [1, 2, 3, 4, 5, 6];

// Primeiro filtra apenas números pares
// Depois eleva esses números ao quadrado

let resultado = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * numero);

console.log(resultado);