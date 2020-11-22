'use strict';

(function buscarInformacoes() {
  $.get('http://localhost:3000/', function (data) {
        renderizarInformacoes(data);
  });
})();


function atualizarInformacoes(event) {
    event.preventDefault();
    let dados = event.target;
  
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(
        {
          nome: dados.nome.value,
          imagem: dados.imagem.value,
          cidade: dados.cidade.value
        }
      ),
      dataType: 'json',
      success: function () {
        alert('Dados atualizados');
      },
      error: function () {
        alert('Não deu certo');
      },
      type: 'POST',
      url: 'http://localhost:3000/alterar-info'
    });
  }