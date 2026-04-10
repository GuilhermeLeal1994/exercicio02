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

// Função recursiva que calcula o fatorial de um número

function fatorial(n) {

    // Caso base da recursão

    if (n === 0 || n === 1) {
        return 1;
    }

    // Chama a própria função multiplicando pelo número atual

    return n * fatorial(n - 1);
}

// Exibe o resultado do fatorial

console.log(fatorial(5));