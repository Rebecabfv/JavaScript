// ARRAYS: são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

let array = ['string', 1, true, ['array1', 2], ['array2'], ['array3']];
console.log (array);
console.log (array[0]);

// Manipulando Arrays

// forEach () - itera um array;
array.forEach(function(item, index){
    console.log (item, index)
});

// push() - add item no final do array;
array.push ('novo item no final do array');
console.log (array);

// pop () - remove item no final do array;
array.pop ();
console.log (array);

// shift () - remove item no início do array;
array.shift ();
console.log (array);

// unshift () - add item no início do array
array.unshift ('Adc item');
console.log (array);

// indexOf() - retorna o índice de um valor
console.log (array.indexOf (true));

// splice () - remove ou substitui um item pelo índice
array.splice (0,3);
console.log (array);

// slice () - retorna uma parte de um array existente
let novaArray = array.slice(0, 1);
console.log (novaArray);

// OBJETOS: são dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}"

let object = {string: 'nome', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeti interno'}};

console.log (object);
// Para acessar um objeto em específico:
console.log (object.array);

// Manipulando objetos, fazendo desestruturação:

var string = object.string;
var number = object.number;
var boolean = object.boolean;
var arrayInterno = object.array;
var objectInterno = object.objectInterno;
console.log (string, number, boolean, arrayInterno, objectInterno);

var {string, boolean} = object;
console.log(string, boolean);