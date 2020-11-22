'use strict';



window.onload = function () {
      setTimeout(function () {
            window.alert('Bem Vindo ao site');
      }, 100);
};

function confirmar() {
      if (window.confirm('Deseja cadastrar nova receita?') === true) {
            window.location = './cadastro.html';
      }
      window.location = '#';
}

let id = function (id) {
      return document.getElementById(id);
};


$(document).ready(function () {
      $('#adiciona').click(function () {
            // console.log('texte');
            $('p').addClass('color');
      });
});

$(document).ready(function () {
      $('#remove').click(function () {
            // console.log('texte2');
            $('p').removeClass('color');
      });
});

(function statusInicialDaMensagem() {
      $('body>h2').slideDown('slow').delay(1000).slideUp('slow');
})()

$('span').click(function () {
      $('body>h2').slideDown('slow').delay(1000).slideUp('slow');
});

function renderizarInformacoes(data){
      document.getElementById('nomeDoSite').innerText = data.nome;
      document.getElementById('cidade').innerText = data.cidade;
      document.getElementById('logo').setAttribute('src', data.imagem);
}

(function buscarInformacoes() {
      $.get('http://localhost:3000/', function (data) {
            renderizarInformacoes(data);
      });
})();


// let add = id('add'); 

// add.addEventListener('onclic', (event) => {
      //       css(, “valor”) –
      // });
      
      // let validaCampo = function () {
      
            //       let valor = id('buscar').value;
      
      //       if ((valor === undefined) || (valor === '')) {
            //             window.alert('O campo não foi preenchido');
      //       }
      
      //       let myArrayReceita = JSON.parse(localStorage.getItem('dados'));
      //       let index = [];
      //       let i;
      
      //       for (let receita of myArrayReceita) {
            //             // console.log(receita.indexOf(receita));
            //             if (valor === receita.nomeReceita) {
                  //                   index[i] = receita.indexOf(receita);
                  //             }
                  //       }
      //       console.log(index);
      
      //       /**  for(let i = 0; i < index.length; i++){
      //              console.log(myArrayReceita[i])
      //              console.log(index[i])
             
      //       */
      // };
      