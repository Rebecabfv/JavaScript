// tipos primitivos 
// typeof --> é para ver o tipo da variável

// Boolean
var TrueOrFalse = false;
console.log (typeof (TrueOrFalse));

// Number
var numero = 1;
console.log (typeof (numero));

// String
var nome = "Rebeca";
console.log (typeof (nome));

// Declaração de variáveis 

// Var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
var variavel = "nome";
variavel = "Rebeca";
console.log (variavel);

// Let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
let variavel2 = "nome";
variavel2 = "Rebeca";
console.log (variavel);

// Const - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado;
const constante = 1;
console.log (constante);

// Escopo global - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

// Escopo local - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não

var escopoGlobal = "global";
console.log (escopoGlobal);

function escopoLocal(){
    // variavel let não fica visivel fora da função
    let escopoLocal = "local";
    console.log (escopoLocal);
}

escopoLocal();

// Comparação
var compara = '0' == 0;
console.log (compara);

// Comparação identica (o valor e o tipo da var são iguais)
var comparaIndentica = '0' === 0;
console.log (comparaIndentica);

// Operadores aritméticos (+ adição, - subtração, * multiplicação, / divisão real, % divisão inteira, ** potenciação)

// Adição
var adicao = 1 + 1;
console.log (adicao);

// Subtração
var subtracao = 2 - 1;
console.log (subtracao);

// Multiplicação 
var multiplicacao = 2 * 2;
console.log (multiplicacao);

// Divisão real
var divReal = 6 / 2;
console.log (divReal);

// Divisão inteira (resto da divisao)
var divInt = 5 % 2;
console.log (divInt);

// Potenciação
var potenciacao = 10 ** 2;
console.log (potenciacao);

// Operadores relacionais (> maior que; < menor que; >= maior ou igual a; <= menor ou igual a)

// Operadores lógicos: && - "e" (considera que todos os valores sejam true); || - "ou" (considera que qualquer valor seja true); ! - "não" (inverte o valor de true para false ou vice-versa)