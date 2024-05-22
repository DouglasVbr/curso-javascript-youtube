alert('olá mundo');// um alerta na pagina aparece 

// 4 tipos de saidas  no js o (alert, innerHTML, console.log, write)

//document.getElementById("texto").innerHTML = "meu primeiro texto <b>js</b>!"; //chamou o paragrafo do html pelo id que no caso é o (texto) e escreveu na pagina sem precisar entrar no html 



alert(10 + 5);

console.log("oi isso é um console.log"); //aparece no console do site a mensagem!


// DECLARAÇÕES JS

let a, b, c; //aqui temos 4 declarações como saber pelo (;) que divide elas  
a = 5;
b = 6;
c = 7;


//exemplo de que espaços em branco não faz diferença
let pessoa = // o  js tbm aceita quebras de linhas obj para isso precisa ter o (;)  no final da declaração
    " Douglas ";
let sobrenome = "Vieira";

//exemplo de um bloco de codigo 
function minhafuncao() {
    document.write('<u> oi </u> ', 56 + 4);
}


// SINTAXE
console.log(5 + 5); // aqui vai dar o valor da soma 
console.log("5+5"); //  aqui vai dar 5+5 as aspas simples e duplas servem para textos 


// variaveis (var, let, const)

var u, i, o; // variaveis

// atribuição dos valores das variaveis
u = 2;
i = 3;
o = u + i;


var pote = "bombom"; // variavel com atribuição

alert(pote); // no pote tem ? (bombom)


// variaveis com atribuição
var u = 2;
var i = 3;
var o = u + i;

alert(o); // soma


// concatenação de palavras
var girafa, crocodilo, animal, peso;

girafa = "mamifero";
crocodilo = "reptil";
peso = 80;
animal = girafa + " " + crocodilo;

pessoa = peso + girafa;

//document.getElementById("texto").innerHTML = animal + pessoa;

// o let nao aceita  redeclaração  somente dentro de um bloco já o var sim ele aceita todos tipos
//let peso ="douglas";
//let animal = "vieira";

const t = 10;
{                 // o const seria o private do java ele nao muda nunca 
    const t = 5;
}


// operadores: + - / * = ++ -- += -= && || etc...

// aritméticos 

// mais
var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
alert(total);

// menos
var um, dois, total1;

um = 5;
dois = 2;

total1 = um - dois;
alert("O resultado é " + total1);

// vezes
var vezes, vezes1, total2;
vezes = 5;
vezes1 = 2;

total2 = vezes * vezes1;
alert(total2);

// dividir
var dividir, dividir1, total3;

dividir = 5;
dividir1 = 2;
total3 = dividir / dividir1
alert(total3);

// incremento
++valor1;// adiciona mais 1! en vez de aparecer 5 vai aparecer 6
alert('o valor1 ficou ' + valor1);

//decremento
--valor2;//tira 1
alert('o valor2 ficou ' + valor2);

// atribuição
valor1 += valor2;
valor1 -= valor2;
valor1 *= valor2;
valor1 /= valor2;

valor1 = valor1 + valor2;
valor1 = valor1 - valor2;
valor1 = valor1 * valor2;
valor1 = valor1 / valor2;

// concatenação

var valor3, valor4, total4;

valor3 = " Douglas";
valor4 = " Vieira";
total4 = valor3 + valor4;
alert(total4);

// comparação 

var oito, dez, soma1;
oito = 8;
dez = 10;

soma1 = (oito == dez); // verdadeiro ou falso true ou false se tiver === ele pega o tipo da variavel tbm se for == nao pega 
alert(soma1);


var oito, dez, soma1;
oito = 8;
dez = 12;

soma1 = (oito !== "8"); // verifica se é diferente ou não igual para verificar se é diferente o valor eo tipo tem que ser assim !==
alert(soma1);

var oito, dez, soma1;
oito = 8;
dez = 10;

soma1 = (oito < dez); // verifica se o valor é menor  que 
alert(soma1);

var oito, dez, soma1;
oito = 8;
dez = 10;

soma1 = (oito > dez); // verifica se o valor é maior que
alert(soma1);


var oito, dez, soma1;
oito = 8;
dez = 10;

soma1 = (oito >= dez); // maior ou igual a
alert(soma1);

var oito, dez, soma1;
oito = 8;
dez = 10;

soma1 = (oito <= dez); // verifica se é menor ou igual a 
alert(soma1);

// operador ternario

var idade, eleitor
idade = 18;
eleitor = (idade < 18) ? "NÃO ELEITOR " : " SIM , ELEITOR"; // verifica se  a idade é menor que 18 e retorna um texto de acordo com as alternativa se tiver 18 ou mais ele mostra uma mensagem se nao tiver isso ele mostra outra mensagem


alert('a resporta é:' + eleitor + 'a idade dele é de:' + idade);


// operadores logicos 

var idade, eleitor, resultado;
idade = 25;
eleitor = (idade < 18) ? "NÃO ELEITOR " : " SIM , ELEITOR";

resultado = (idade > 60 && idade < 70); // se idade for maior que 60 e idade menor que 70 ele mostra true ou false ESSE ELEMENTO É O E &&
alert(resultado);

var idade, eleitor, resultado;
idade = 25;
eleitor = (idade < 18) ? "NÃO ELEITOR " : " SIM , ELEITOR";

resultado = (idade === 65 || idade === 72); // se idade for 65 OU idade for 72 retorna false ou true // esse elemento é o OU ||
alert(resultado);


//  
var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 18) ? "NÃO ELEITOR " : " SIM , ELEITOR";

resultado = !(idade === 65); // esse é o exemplo de negação ! (idade === 65 ) idade igual a 65 não não é aqui é 71
alert(resultado);


//funções 

// funcao de soma
function teste(valor1, valor2) {

    return valor1 + valor2;
}

//document.getElementById("texto").innerHTML = teste(10, 23);

//var total = soma (10,23);
alert(total);

// funcao cotacao do dolar
function realParaDolar(real, cotacaoDolar) {

    return real * cotacaoDolar;


}
var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert(" valor em real é R$ " + valorReal + "o valor em dolar é U$" + total);


function alertahellow() {

    alert("olá pessoal");
}

alertahellow();

function paraCelcius(valorfahrenheit) {

    return (5 / 9) * (valorfahrenheit - 32);

}

var x = paraCelcius(77);

alert("a temperatura é de " + x + "graus celcius");


// objetos 

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    busina: function () { alert('biiiiiiiiiiiiiiiiiii') },
    completo: function () {
        return "a marca é " + this.marca + "e o modelo é" + this.modelo;
    }
};

console.log(carro.busina); // no console da pra chamar a função com o . e com os []
carro.busina(); // ou assim

console.log(carro.completo());

// eventos 

// onclick 

function eventoclick() {
    //alert('acionou um evento de click');
    document.body.style.backgroundColor = "yellow";  // ao clicar no botao a pagina fica amarela
}

// ondblclick

function eventoDbClick() { // tem que apertar duas vezes no botao bem rapido
    alert('evento de click duplo');

}

// onmouseover

function viraVermelho() {
    var div = document.getElementById("teste");
    div.style.backgroundColor = "red";

}

// onmouseout

function viraAzul() {
    var div = document.getElementById("teste");
    div.style.backgroundColor = "blue"; // quando o mouse sair  fica azul 

}


// onmousemove

function adicionaTexto() { // quando o mouse mover dentro do paragrafo vai adicionando a mensagem desejada 
    let p = document.getElementById("texto");
    p.append('O mouse moveu  <br>');

}

// onfocus

function limpaTexto() {
    document.getElementById("campoTexto").value = "";

}

// onchange

function mudou() {

    console.log('mudou');
}

// onkeypress

function teclaPrecionada() {

    let input = document.getElementById("campoTexto").value;
    console.log(input);

    console.log('teclaPrecionada');
}

// arrays

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";
//0        //1      //2         //3
const lista = ["arroz", "feijão", "macarrão", "leite"];

alert(lista[0]); //vai mostrar o arroz!

lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";

//const lista = new Array("arroz", "feijão", "macarrão", "leite");

//let x = lista[3];
alert(x);// vai mostrar leite

lista[0] = "Café";
alert(lista[0]); // o  arroz virou café 

console.log(lista); // mostra a lista no console

const pessoa1 = ["douglas", "vieira", 25, "Nacionalidade"]; //array

const Pessoa1 = { nome: "douglas", sobrenome: "vieira", idade: 30 }; // isso é um objeto

pessoa1.nome; // objeto
pessoa1[0]; // array

alert(pessoa1.length); // retorna 3

alert(pessoa1[pessoa1.length - 1]);

pessoa1.push("Brasileiro"); //adiciona mais um item na lista no final

console.log(pessoa1)

pessoa1[pessoa1.length] = "casado"; // outro metodo de adicionar algo na lista 
console.log(pessoa1)

alert(Array.isArray(pessoa1)); // verifica se é array msm nesse caso esta verificando a lista pessoa1



// metodos para array (matrizes)

document.getElementById("teste").innerHTML = pessoa1.join(" - ");// troca os separadores do array 

pessoa1.pop();// remove o ultimo item da lista

pessoa1.push("qualquer coisa");// adiciona um item alista 

pessoa1.shift();// remove o 1 item da lista

pessoa1.unshift("bonitão");

delete pessoa1[0];

pessoa1.splice(1, 0, "item adicionado 1", "item adicionado 2");

//junção das matrizes

const lista1 = ["arroz", "feijão", "leite", "macarrão"];
const lista2 = ["suco", "refrigerante", "carne"];
const lista3 = ["salgadinho"];


const superLista = lista1.concat(lista2, lista3);

document.getElementById("teste").innerHTML = superLista;

//fatiar uma matriz 

const jogadores = ["biru biru", "ribamar", "pele", "maradona", "neymar", "messi", "vampeta", "douglas"];
const craques = jogadores.splice(2, 4);
document.getElementById("teste").innerHTML = craques;

jogOrdem = jogadores.sort();// mostra em ordem alfabetica
document.getElementById("teste").innerHTML = jogOrdem;

jogadores.reverse();
document.getElementById("teste").innerHTML = jogadores; // mostra em ordem inversa

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function (a, b) { return a - b });//função comparativa assim deixa os numeros na ordem correta
document.getElementById("teste").innerHTML = numeros; // mostra em ordem alfabetica

// para pegar o maior numero da lista 

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
document.getElementById("teste").innerHTML = MaiorNumero(numeros); // mostra o maior numero

function MenorNumero(array) {
    return Math.min.apply(null, array);
}
document.getElementById("teste").innerHTML = MenorNumero(numeros); // mostra o menor numero

//filtragem 

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 20;
}
document.getElementById("teste").innerHTML = maior20; //mostra os  maiore que 20 



// if e else  if quer dizer se  eo else  quer dizer se não 
var interruptor = "off";
if (interruptor == "on") {
    alert('a lampada está ligada');
} else {
    alert('a lampada está desligada');
}

var hora = new Date().getHours();
alert(hora);

if (hora < 12) {
    alert('Bom dia');
} else if (hora < 18) {
    alert('Boa tarde');
} else {
    alert('Boa noite');
}

function verificar() {
    let nome = document.getElementById("nome").Value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "o campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "parabéns tudo certinho";
        p.style.color = "green";
    }
}

// switch

function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();


    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;


        case "vermelho":
            document.body.style.backgroundColor = "red";

            break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";

            break;

        default:
            document.getElementById("teste").innerHTML = "nenhuma cor disponivel para " + cor;

    }

}

function diadasemana() {
    var dia = new Date().getDay();
    console.log(dia);
    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "hoje é domingo";
            break;


        case 1:
            document.getElementById("teste").innerHTML = "hoje é segunda-feira";

            break;

        case 2:
            document.getElementById("teste").innerHTML = "hoje é terça-feira";

            break;

        case 3:
            document.getElementById("teste").innerHTML = "hoje é quarta-feira";


        case 4:
            document.getElementById("teste").innerHTML = "hoje é quinta-feira";


        case 5:
            document.getElementById("teste").innerHTML = "hoje é sexta-feira";


        case 6:
            document.getElementById("teste").innerHTML = "hoje é sábado";

        default:
            document.getElementById("teste").innerHTML = "não sei que dia é";

    }


}

// laços de repetição for
//for (let i = 0; i < 10001; i++) {
    //document.getElementById("teste").innerHTML += i + ", ";
//}

var ano = new Date().getFullYear(); // isso pega o ano corrente não precisa mudar depois
for (let i = ano; i >= 1900; i--) {

    //document.getElementById("ano").innerHTML += "<option value= '" + i + "'>" + i + "</option>";
}

const carros = ["gol", "fusca", "brasília", "del rey", "chevette"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}

// settimeout e setinterval eventos de tempo
function ativarcontagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    tempo = setTimeout(function () { //ativa a função apenas 1 vez quando der o tempo especificado
        document.getElementById('tempo').innerHTML = "Execultou o setTimeout";
    }, 5000);

    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma2 = parseInt(cronometro) - 1;


        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "tempo esgotado";
            desativarcontagem();
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);

}


function desativarcontagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "contagem parada com sucesso!";
}

//classes

class Carro1 {
    constructor(preço1, preço2, preço3) {
        this.marcac = preço1;
        this.modeloc = preço2;
        this.anoc = preço3;

    }

    buzina() {
        return this.modeloc + " buzinou: biiiiiiiiiiiiii";

    }

}
const Uno = new Carro1("Fiat", "Uno", 2001);
const Gol = new Carro1("volkswagen", "Gol", 2013);

console.log(Uno.buzina);
console.log(Gol.buzina);
Gol.anoc = 2014;
console.log(Gol);

// manipulação de datas
let data = new Date();//comando base para pegar a data
console.log(data);

let Ano = data.getFullYear(); //PEGAR O ANO ATUAL COM 4 DIGITOS
console.log(Ano);


let Mes = data.getMonth();//PEGAR O MES ATUAL - de 0 até 11 sendo 0 janeiro  e dezembro mes 11
console.log(Mes);

//mostra o mes no formato escrito
const messesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = messesDoAno[data.getMonth()];
console.log(mesEscrito);


// pegar o dia do mes -1 até 31
let DiaMes = data.getDate();
console.log(DiaMes);

// pegar o dia da semana - 0 até o 6
let diaSemana = data.getDay();
console.log(diaSemana);

// mostra o dia da semana escrito
const DiasDaSemana = ["Domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado",];
let diaSemanaEscrito = DiasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

// pegar a hora - de 0 até 23
let horas = data.getHours();
console.log(horas);

// pegar os minutos - de 0 até 59
let Minutos = data.getMinutes();
console.log(Minutos);

// pegar segundos - de 0 até 23
let Segundos = data.getSeconds();
console.log(Segundos);

// pegar milisegundos - de 0 até 999
let MiliSegundos = data.getMilliseconds();
console.log(MiliSegundos);

// pegar a data no padrão brasileiro - dia / mes / ano ele tbm pega as horas tendo - H / M / S junto ao dia mes e ano 
let DataBR = data.toLocaleString('pt-br', { dateStyle: 'short' });// esse metodo no final é para mostrar só a data ! para pegar so a horas inteira é so substituir o datestyle por timestyle
console.log(DataBR);


// pegar os valores separados 
d = new Date();
DiaMes = d.getDate();
Mes = d.getMonth() + 1;
Ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : '' + x
};

let datapadraoBR = addZero(DiaMes) + "/" + addZero(Mes) + "/" + Ano;
console.log(datapadraoBR);


// comparar datas maior ou menor. EX: vencimentos
var Hoje = new Date();
var vencimento = new Date(2010, 0, 15);

if (vencimento > Hoje) {
    console.log("sua conta está vencida!");
} else {
    console.log("ainda não venceu,  tudo certo!");
}

// diferença entre duas datas em dias 
var datainicial = new Date();
var datafinal = new Date(2022, 11, 31);


var diferencaTempo = datafinal.getTime() - datainicial.getTime();
var diferencaemdias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaemdias + "dias");


// JSON

const car = { //objeto car
    marcacar: "audi",
    modelocar: "c3",
    motor: ["1.6", "1.4", "1.0"]
}

let Texto = JSON.stringify(car); // converteu para texto json 

document.getElementById('area').innerHTML = Texto; // colou o texto no nosso html

let obj = JSON.parse(Texto);// convertemos texto  em obj


console.log(obj.motor[2]); // pegamos um valor desse obj

function buscarCEP(){
let input = document.getElementById('CEP').Value;



const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/' + input +'/json');
ajax.send();


  ajax.onload = function(){
    //document.getElementById('area').innerHTML = this.responseText;
    //let obj = JSON.parse(this.responseText);
    //alert(obj.ddd);
    document.getElementById('sl').innerHTML = this.responseText;

    //transformei o texto em obj 
    let obj = JSON.parse(this.responseText);
    //peguei o valor do obj
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;

    document.getElementById('sl').innerHTML = "logradouro:" + logradouro + "<br> cidade:" + cidade + "<br> estado:" + estado;
}

}







