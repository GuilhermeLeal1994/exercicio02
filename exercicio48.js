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

let funcionarios = [
    { nome: "Ana", salario: 2000 },
    { nome: "Carlos", salario: 3000 },
    { nome: "Maria", salario: 2500 }
];

// O reduce percorre o array acumulando os salários

let totalSalarios = funcionarios.reduce((total, funcionario) => {

    return total + funcionario.salario;

}, 0);

console.log(totalSalarios);