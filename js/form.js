
var botaoAdicionar = document.querySelector("#adicionar-paciente"); //Busca o botão do mundo HTML para o JavaScript através do seu ID.

botaoAdicionar.addEventListener("click", function (event) { //Adiciona um escutador de evento ao botão passando como parâmetro(evento, o que vai fazer quando o evento ocorrer).
  event.preventDefault(); //previne o comportamento padrão(no caso o comportamento padrão do botão é atualizar a pagina ao ser clicado e não queremos isso).

  var form = document.querySelector("#form-adiciona"); // pega o formulário e joga na variavel form.
  var paciente = obtemPacienteDoForm(form); //extrai info do paciente do form.

  var erros = validaPaciente(paciente); //Caso tenha algum erro na validação, atribui a quantidade de erros a variavel erros.
  //nome em branco[1]
  if (erros.length > 0) { //se o tamanho do erro foi maior que zero.
    exibeMensagensDeErro(erros);
    return;
  }
  adicionaPacienteNaTabela(paciente);
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente); //cria a td e a tr do paciente.
  var tabela = document.querySelector("#tabela-pacientes"); //Puxa o a tag "tbody"(que é pai da tag tr).
  tabela.appendChild(pacienteTr); //A variavel tabela está armazenando a tag tbody.
  //e no caso a tag TR está virando filha da tag tbody.
}

