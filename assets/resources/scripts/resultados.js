'use strict';

function restoreArrayDados() {
  console.log('Restaurando um vetor de objetos do local storage.');
  // console.log(JSON.parse(localStorage.getItem('dados')) +"aqui");

  let myArrayReceita = JSON.parse(localStorage.getItem('dados-basicos'));

  // console.log(myArrayReceita);

  let receitas = document.querySelector('div.receitas');

  for (let i = 0; i < myArrayReceita.length; i++) {
    let dados = myArrayReceita[i];
    /**  console.log("receita: " + dados.nomeReceita, "img: " + dados.img,
         "pessoa: " + dados.pessoa, "email: " + dados.email); */

    receitas.innerHTML += `<article>
            <img src="${dados.img}"> </img>
            <h3>${dados.nomeReceita}</h3>
            <p>${dados.pessoa}</p>
            <p>${dados.email}</p>
            <a href="./receitas.html">ver receita</a>
            </article> `;
  }
}

window.onload = function () {
  document.addEventListener(function () {
    window.alert('Aqui estão as receitas encontadas');
  });

  restoreArrayDados();
};
//verifica onload

setInterval(function () {
  window.location.reload();
  window.alert('a pagina foi recarregada');
}, 600000);
