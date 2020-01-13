
var titulo = document.querySelector(".titulo"); /*Seleciona do mundo HTML a TAG e o CONTEÚDO que possui a classe "".titulo", e joga este conteúdo dentro da var "titulo".*/
titulo.textContent = "Aparecida Nutricionista"; /* Pega o texto que está entre a tag e atribui um novo valor a ela. */

var pacientes = document.querySelectorAll(".paciente"); /* Como aqui é "SELECTORALL, é selecionado TODOS os elementos que possuem a classe "paciente".  */

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso"); //Primeiro você pega o elemento "cheio" com a sua classe. (ex: <h1 classe="classe"> oi</h1>).
  var peso = tdPeso.textContent; //Depois você busca o conteúdo de texto que está dentro deste elemento(ex: oi).

  var tdAltura = paciente.querySelector(".info-altura"); //igual de cima
  var altura = tdAltura.textContent; //igual de cima

  var tdImc = paciente.querySelector(".info-imc"); // igual

  var pesoValido = validaPeso(peso);//Cria uma váriavel pesoValido e joga dentro dela uma função que verifica se o peso informado é válido. 
  var alturaValida = validaAltura(altura); //igual

  if (!pesoValido) { //Verifica se o peso NÃO é valido, caso não for executo o bloco abaixo. A ação só é executada caso a condição seja verdadeira.
    console.log("Peso Inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido"; // campo do IMC no formulário recebe esse texto.
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaValida) { //igual
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValido) { //Caso as duas condições sejam atendidas, ele calcula o imc, afinal não dá pra calcular com valores inválidos.
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
























/*titulo.addEventListener("click", mostraMensagem) /*adiciona um escutador de
//evento que no caso é o click, dps avisa oq quer fazer(chama a função "mostraMensagem")
tudo depois da vírugla deve ser uma função, podendo ser uma função nomeada
que foi criada ou uma função anonima que você cria ela dentro do segund
parâmetro

function mostraMensagem() {
  console.log("Olá, eu fui clicado!");
}
*/