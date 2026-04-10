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

let valorCompra = 150;

// Verifica se o valor da compra é maior que 100

if (valorCompra > 100) {

    // Calcula o desconto de 10%
    
    let desconto = valorCompra * 0.10;
    let valorFinal = valorCompra - desconto;

    console.log("Desconto aplicado.");
    console.log("Valor final: R$ " + valorFinal.toFixed(2));

} else {

    console.log("Sem desconto.");
    console.log("Valor final: R$ " + valorCompra.toFixed(2));
}