function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);// tofixed para limitar o número de casa decimais.
}
function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}
function obtemPacienteDoForm(form) {
  var paciente = { //cria um objeto paciente
    nome: form.nome.value, //Pega o nome digitado no campo do formulário e joga na variavel nome.
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr"); //cria um elemento, no caso a tag <tr></tr> e joga na várivavel pacienteTr.
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //nomeTd vira filha da pacienteTr, ou seja a tag td, vira filha da tag tr.
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("O peso não pode estar em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode estar em branco");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  return erros;
}
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}