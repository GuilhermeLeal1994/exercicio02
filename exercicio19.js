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

let numeros = [10, 45, 3, 99, 23];

// Assume inicialmente que o primeiro número é o maior

let maior = numeros[0];

// Percorre todo o array

for (let i = 0; i < numeros.length; i++) {

    // Se encontrar um número maior, atualiza a variável
    
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

// Mostra o maior valor encontrado
console.log("Maior número:", maior);