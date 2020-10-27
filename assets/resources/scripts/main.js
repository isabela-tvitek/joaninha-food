'use strict';

window.onload = function () {
      setTimeout(function () {
            window.alert('Bem Vindo ao site');
      }, 100);
};

// let confirmar;

// confirmar.onclick = function(){
      
//       if (window.confirm('Deseja cadastrar nova receita?') === true) {
//                   window.location = './cadastro.html';
//             }
//             window.location = '#';
// };


function confirmar() {
      if (window.confirm('Deseja cadastrar nova receita?') === true) {
            window.location = './cadastro.html';
      }
      window.location = '#';
}

let id = function (id) {
      return document.getElementById(id);
};

let validaCampo = function () {

      let valor = id('buscar').value;

      if ((valor === undefined) || (valor === '')) {
           window.alert('O campo não foi preenchido');
      }

      let myArrayReceita = JSON.parse(localStorage.getItem('dados'));
      let index = [];      
      let i;

      for (let receita of myArrayReceita) {
            // console.log(receita.indexOf(receita));
            if (valor === receita.nomeReceita) {
                  index[i] = receita.indexOf(receita);
            }
      }
      console.log(index);

      /**  for(let i = 0; i < index.length; i++){
             console.log(myArrayReceita[i])
             console.log(index[i])
       
      */
};