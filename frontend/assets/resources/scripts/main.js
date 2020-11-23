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

