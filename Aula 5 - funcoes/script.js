/* Funções: sao blocos de comandos e instruções para a execução de determinadas tarefas
    function nomeDaFuncao (){
        intrução
    }

    nomeDaFuncao ();
*/

// funcao declarativa
function mensagem (primeiro, segundo){
    console.log (primeiro, segundo);
}

mensagem ('Olá', 'mundo');

// Expressao de funções - funções atribuidas à expressões. A nomeação das funções por expressão é opcional

// funcao pega o nome da variavel
var funcao = function (){
    console.log ('Hello');
}

funcao();

// Arrox Function: funções de expressao de sintaxe curta. Serão anonimas, e não podem ser nomeadas

var funcao = () => {
    console.log ('Arrox Function');
}

funcao();