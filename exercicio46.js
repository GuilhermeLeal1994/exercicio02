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

// Função que recebe outra função como parâmetro

function executarDuasVezes(funcao) {

    // Retorna uma nova função
    
    return function() {

        // Executa a função recebida duas vezes

        funcao();
        funcao();
    };
}

// Função exemplo
function dizerOi() {
    console.log("Oi");
}

let novaFuncao = executarDuasVezes(dizerOi);

novaFuncao();