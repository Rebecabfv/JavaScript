// if, else e else if

var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 != -1){
   if (jogador1 > 0){
    console.log('Jogador 1 marcou um ponto!');
    placar = jogador1 > jogador2;
    } else if (jogador2 > 0){
        console.log ('Jogador 2 marcou um ponto!');
        placar = jogador2 > jogador1;
    } else {
        console.log ('Niguém marcou ponto');
    } 
}

// if ternário : verificação em uma única linha usando "if" -> [condição] ? [instrução1] : [instrução2];
jogador1 != -1 && jogador2 != -1 ? console.log ('Os jogadores são válidos') : console.log ('Os jogadores são inválidos');

/* switch/case - estrutura condicional 
switch (${expressao}){
    case 1: 
        ${intrucao};
        break;
    case 2:
        ${intrucao};
        break;
} */

switch (placar){
    case placar = jogador1 > jogador2:
        console.log ('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log ('Jogador 2 ganhou');
        break;
    default:
        console.log ('Niguém ganhou');
}

/* Laços de repetição
For; for ([expressaoInicial]; [condicao]; [incremento]) {
    declaracao
}
For/in - repeticao a partir de uma propriedade; 
    for ([indice] in [objeto ou array]){
        declaracao;
    }
For/of - repeticao a partir de um valor;
    for ([indice] of [array]){
        declaracao;
    }
While - executa uma instrução "enquanto" determinada condicao for verdadeira;
    while (a < 10){
        a++;
        console.log(a);
    }
Do/while - executa uma instrução "até que" determinada condicao seja falsa, a verificação é feita depois da execução;
    do {
        a++;
        console.log (a);
    } while (a <10);
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for
for (let indice = 0; indice < array.length; indice ++){
    console.log (array[indice]);
}

// for in
// com array
for (let i in array){
    console.log(i);
}
// com objeto
for (i in object){
    console.log(i);
}

//for of
// com array
for (i of array){
    console.log(i);
}

/* com object
for/of não funciona com objetos pois as propriedaes variam, diferentes do índica em um arraya que sempre serão números inteiros. Mas da para pegar o valor mesmo assim
    for (i of object.propriedade){
        console.log (i);
    }
Porém cada caractere dentro do valor será impresso em linhas separadas
*/
for (i of object.propriedade1){
    console.log(i);
}
