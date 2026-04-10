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

// Loop que vai de 0 até 20

for (let i = 0; i <= 20; i++) {

    // Se o número for ímpar, o loop pula para a próxima repetição

    if (i % 2 !== 0) {
        continue;
    }

    // Mostra apenas os números pares
    
    console.log(i);
}