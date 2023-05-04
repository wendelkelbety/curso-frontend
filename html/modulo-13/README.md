## Comparadores logicos: teste logico, retorno booleano (treu / false)
==   igualdade entre sentenças (valor)
!=   diferença entre sentenças (valor)
===  igualdade entre sentenças (valor / tipo)
!==  diferença entre sentenças (valor / tipo)

a == b = true
a != b = false

* Atribuição
a = b
a = 4

## Operadores de logica e junção logica
!   não (not)
&&  e (and)
||  ou (or)

O sinal de exclamação (!) é o operador not (não), utilizado para negar a sentença que vem na sequencia.

#### Exemplos
a != b   //o valor de a é diferente de b
x !=== y //o valor e o tipo de x são diferentes de y
!a == b  //o valor de a não é igual ao valor de b

#### As condições logicas são convertidas em numeros binarios:
true é equivalente a 1
false é equivalente a 0

#### Operador logico de atribuição
Tem capacidade de atribuir valor a uma variavel a partir de uma condição logica, economiza IFs

Exemplo:
var meucarro = cor == "preto" ? "preto" : "branco";

## IF
if (...){

}

## ELSE
else {

}

if (cor == "preto"){
    meucarro = "preto";
}else {
    meucarro = "cinza"
}

## ELSE IF
else if (...){

}

if (cor == "preto"){
    meucarro = "preto";
}else if (cor == "vermelho") {
    meucarro = "cinza";
}else if (cor == "amarelo") {
    meucarro = "marron";
}else {
    meucarro = "verde";
}

## SWITCH

switch (cor){
    case 'branco':
        meucarro = "branco";
        breack;
    case 'preto':
        meucarro = "vermelho";
        breack;
    case 'verde':
        meucarro = "amarelo";
        breack;
    default:
        console.log("não temos a cor desejada");
}

## Media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7.5;
var media = (nota1 + nota2 + nota3 + nota4) / 4
if (media > 8){
    console.log("aluno aprovado");
}else {
    console.log("aluno em recuperação");
}

