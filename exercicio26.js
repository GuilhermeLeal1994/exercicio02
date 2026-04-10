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

// Função com parâmetro padrão "Visitante"

function digaOla(nome = "Visitante") {

    // Retorna uma saudação usando o nome recebido

    return "Olá, " + nome + "!";
}

// Chamando a função sem passar parâmetro

console.log(digaOla());