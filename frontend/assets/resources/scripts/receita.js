'use strict';

(function restoreArrayDados() {
    let myArrayReceita = JSON.parse(localStorage.getItem('dados'));

    let receitas = document.querySelector('div.geral');

     for (let i = 0; i < myArrayReceita.length; i++){
        let dados = myArrayReceita[i];
        
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
    let pessoa = document.getElementsByName('pessoa');
    leNome(pessoa);
}


function renderizarInformacoes(data){
    document.getElementById('logo').setAttribute('src', data.imagem);
}
  
(function buscarInformacoes() {
    $.get('http://localhost:3000/', function (data) {
          renderizarInformacoes(data);
    });
})();
