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

// Função que recebe um array de números

function somaArray(numeros) {

    let soma = 0;

    // Percorre o array somando todos os valores

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}

// Exibe a soma dos elementos do array

console.log(somaArray([1, 2, 3, 4, 5]));