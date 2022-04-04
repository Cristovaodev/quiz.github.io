function regras(){
  alert("Regras do quiz\n\n1️⃣Preencha o seu nome.\n2️⃣Cada alternativa correcta equivale a +10 pontos\n3️⃣São no total 10 perguntas e 100 pontos.");
}
fun



function verificar() {
  var ponto = 0
  var result1 = document.getElementById('resposta02');
  if (result1.checked) {
    ponto += 10
  }

  var result2 = document.getElementById('resposta13');
  if (result2.checked) {
    ponto += 10
  }

  var result3 = document.getElementById('resposta24');
  if (result3.checked) {
    ponto += 10
  }

  var result4 = document.getElementById('resposta34');
  if (result4.checked) {
    ponto += 10
  }

  var result5 = document.getElementById('resposta41');
  if (result5.checked) {
    ponto += 10
  }

  var result6 = document.getElementById('resposta54');
  if (result6.checked) {
    ponto += 10
  }

  var result7 = document.getElementById('resposta63');
  if (result7.checked) {
    ponto += 10
  }

  var result8 = document.getElementById('resposta73');
  if (result8.checked) {
    ponto += 10
  }

  var result9 = document.getElementById('resposta82');
  if (result9.checked) {
    ponto += 10
  }

  var result10 = document.getElementById('resposta94');
  if (result10.checked) {
    ponto += 10
  }

  var nome = document.getElementById('nome').value;
  if (nome == "") {
    alert ("Preencha O Seu Nome⚠️⚠️⚠️");
    document.getElementById("nome").focus();
    
    return false;
  }

  if (ponto <= 30) {
    alert ("Lamentamos por seu desempenho "+nome+"!\nTens: "+ponto+"pontos\n\nComp: Máu.");
  } else if ((ponto >= 31) && (ponto <= 50)) {
    alert ("parabéns "+nome+"!\nTens: "+ponto+"pontos\n\nComp: Medíocre.");
  } else if ((ponto >= 51) && (ponto <= 80)) {
    alert ("Parabéns "+nome+"!\nTens: "+ponto+"pontos\n\nComp: Bom.");
  } else if ((ponto >= 81) && (ponto <= 100)) {
    alert ("Parabéns "+nome+"!\nTens: "+ponto+"pontos\n\nComp: Muito Bom.");
  } else {
    document.write("Há algum erro");
  }

}