Aula 1 - JavaScript
alert(""); -> //Faz aparecer um pop-up com a menssagem entre os parenteses.
  console.log(""); -- //Faz aparecer a menssagem no console do navegador. //
    documento.querySelector(""); -- /*Ajuda a buscar pequenos pedaços do documento
 para poder manipular pequenos pedaços da página. */


var titulo = document.querySelector("h1"); //1 - Armazena o h1 na váriavel título.
/* não é uma boa prática colocar a tag em si, mas sim a sua classe, pois a tag pode
ser alterada, mas a sua classe dificilmente será */
//QUERYSELECTOR - APENAS PASSA UM ÚNICO ELEMENTO.

console.log(titulo); // Mostra todo o conteúdo "<h1> Aparecida Nutrição</h1>".

console.log(titulo.textContent); // Mostra o conteúdo de TEXTO que está dentro
//da tag <h1>.

titulo.textContent = "Aparecida Nutricionista"; /* aqui é alterado o valor da
variavel "título" sendo trocada também dentro do navegaddr */
/*O document é uma variável muito importante do Javascript. Ela contém o DOM
ou Document Object Model, que é como o navegador enxerga o HTML utilizado por
ele para renderizar a página.

O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML
e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e
aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em
memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e
a variável document é quem contêm o DOM.

Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM,
estamos manipulando o que o navegador renderizou. Então ao trocar algum texto
do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM
é o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, é que como manipulamos o DOM , quando
trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos
alterando a representação em memória , o que faz com que o arquivo fonte que
contêm seu HTML fique intacto! */

paciente.classList.add("paciente-invalido");  /* Não é uma boa prática ficar editando
o visual do seu site pelo JavaScript, mas sim pelo CSS. Para que evitar isso, nós
criamos uma classe no css chamada "paciente-invalido" e adicionamos ela pelo
JavaScript com esta propriedade(SEM O PONTO, APENAS O NOME DA CLASSE). Assim
é adicionada apenas a classe no elemento setado não alterando o visual pelo JavaScript
e caso o designer queira alterar a cor, ele apenas altera o css */

paragrafo.style.color = "blue"; /*Se queremos modificar um estilo de um elemento
 selecionado com o Javascript,
devemos primeiro acessar a propriedade style , que contêm todos os estilos
daquele elemento. Depois que temos a propriedade .style em mãos, devemos
 especificar qual estilo desejamos alterar , que neste caso é a cor do texto
 ou seja o estilo color. */

/* FUNÇÕES - Quando não for preciso declarar a função mais de uma vez
 fazer-la como anônima.*/