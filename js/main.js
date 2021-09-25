function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>'
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function trocar() {
  document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse'
  //alert('trocar o texto');
}

function voltar() {
  document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
}
