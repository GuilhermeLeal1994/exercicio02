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

// Função que recebe dois números e uma função callback

function operacao(a, b, callback) {

    // Executa o callback passando os dois números
    
    return callback(a, b);
}

// Exemplo de callback
function soma(a, b) {
    return a + b;
}

// Chamando a função
console.log(operacao(5, 3, soma));