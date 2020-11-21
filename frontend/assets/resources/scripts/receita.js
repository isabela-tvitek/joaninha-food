'use strict';

(function restoreArrayDados() {
    console.log('Restaurando um vetor de objetos do local storage.');
    let myArrayReceita = JSON.parse(localStorage.getItem('dados'));
    console.log(myArrayReceita);

    let receitas = document.querySelector('div.geral');

     for (let i = 0; i < myArrayReceita.length; i++){
        let dados = myArrayReceita[i];
        
        console.log('receita: ' + dados.nomeReceita,  'descrição: ' + dados.descricao);
        
        receitas.innerHTML += `<article>
            <h1>${dados.nomeReceita}</h1>
            <p>${dados.descricao}</p>
            </article> `;
    }

})();


let leNome=(pessoa) => {
    let myArrayReceita = JSON.parse(localStorage.getItem('dados'));

    for (let i in myArrayReceita) {
        let dados = myArrayReceita[i];
        
        window.alert(dados.pessoa + ' postou a receita');
        console.log(pessoa);
    }

};

function mostraNome (leNome) {
    let pessoa = document.getElementById('pessoa');
    leNome(pessoa);
}