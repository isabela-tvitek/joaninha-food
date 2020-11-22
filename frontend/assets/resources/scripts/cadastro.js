'use strict';

let id = (id) => document.getElementById(id);
let botao = id('button');
let form = id('form');
let todosOsInputs = document.getElementsByClassName('dados-basicos');
let nomeReceita = id('nome-receita');
let img = id('img');


(function () {
  let localstorage = JSON.parse(localStorage.getItem('dados'));

  let myArrayReceitas = [];

  if (localstorage !== null) myArrayReceitas = localstorage;

  let inputs = [...todosOsInputs];

  function Receita(nomeReceita, img, pessoa, email, descricao) {
    return {
      nomeReceita,
      img,
      pessoa,
      email,
      descricao,
    };
  }

  function saveArrayDados(dados) {
    console.log('Salvando um vetor de objetos no local storage.');

    let receita = new Receita(
      dados.nomeReceita.value,
      dados.img.value,
      dados.pessoa.value,
      dados.email.value,
      dados.descricao.value
    );

    myArrayReceitas.push(receita);
    
    localStorage.setItem('dados', JSON.stringify(myArrayReceitas));
  }

  nomeReceita.addEventListener('invalid', function(event) {
    console.log(event);
    if(nomeReceita.validity.valueMissing){
      nomeReceita.setCustomValidity('O campo deve ser preenchido');
    }else {
      nomeReceita.setCustomValidity('');
    }
   });

  img.addEventListener('invalid', function(event) {
    console.log(event);
    if(img.validity.valueMissing){
      img.setCustomValidity('O campo deve ser preenchido com uma url');
    }else {
      img.setCustomValidity('');
    }
  });


  let confirmarEmail = () => {
    let confirma = window.prompt('confirme seu email para continuar');
    let email = document.getElementById('email').value;
    
    if (confirma !== email) {
      window.alert('falha ao realizar o cadastro: emails diferentes');
    }else {
      window.alert('cadastro realizado com sucesso');
    }
  };
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let dados = event.target;
    confirmarEmail();
    saveArrayDados(dados);
    console.log(this);
  });

  function entrada(event) {
    event.target.style.backgroundColor = '#ff4e8a63';
  }

  function saida(event) {
    event.target.style.backgroundColor = '#ff56b43d';
  }

  inputs.forEach((element) => {
    element.addEventListener('blur', (event) => saida(event));
    element.addEventListener('focus', (event) => entrada(event));
  });

  function mouseEnter() {
    botao.textContent = 'clique para finalizar cadastro';
  }

  function mouseOver() {
    botao.textContent = 'Cadastro';
  }

  botao.addEventListener('mouseenter', () => mouseEnter());
  botao.addEventListener('mouseout', () => mouseOver());

  $('#campoData').mask('00/00/0000');

  $('#descricao').text('A receita de ...');
  

})();


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