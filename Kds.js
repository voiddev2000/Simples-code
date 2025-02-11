// KDS (Kit de Desenvolvimento Simples Code)
/*
a KDS OU SIMPLES CODE CORE É O ARQUIVO VIRTAL DA SIMPLES CODE

by void dev


*/
const body = document.body;
let objetos = {};
let variaveis = {};
let sons = {};

function escrever(texto, x, y) {
  const txt = document.createElement("div");
  txt.innerText = texto;
  txt.style.position = "absolute";
  txt.style.left = `${x}px`;
  txt.style.top = `${y}px`;
  body.appendChild(txt);
}
function criarObjeto(nome, x, y, largura = 50, altura = 50, cor = "gray") {
  const obj = document.createElement("div");
  obj.id = nome;
  obj.style.position = "absolute";
  obj.style.left = `${x}px`;
  obj.style.top = `${y}px`;
  obj.style.width = `${largura}px`;
  obj.style.height = `${altura}px`;
  obj.style.background = cor;
  body.appendChild(obj);
  objetos[nome] = obj;
}
function tamanho(obj, largura, altura) {
  if (objetos[obj]) {
    objetos[obj].style.width = `${largura}px`;
    objetos[obj].style.height = `${altura}px`;
  }
}
function cor(obj, novaCor) {
  if (objetos[obj]) {
    objetos[obj].style.background = novaCor;
  }
}
function mover(obj, x, y) {
  if (objetos[obj]) {
    objetos[obj].style.left = `${x}px`;
    objetos[obj].style.top = `${y}px`;
  }
}
function esperar(segundos, callback) {
  setTimeout(callback, segundos * 1000);
}
function clicar(obj, callback) {
  if (objetos[obj]) {
    objetos[obj].addEventListener("click", callback);
  }
}
function corDoFundo(novaCor) {
  body.style.backgroundColor = novaCor;
}
function alterarVariavel(nome, valor) {
  variaveis[nome] = valor;
}
function obterVariavel(nome) {
  return variaveis[nome];
}
function se(condicao, entao, senao) {
  if (condicao) {
    entao();
  } else if (senao) {
    senao();
  }
}
function criarImagem(container, id, url, largura, altura) {
    const elementoContainer = document.querySelector(container);
    if (!elementoContainer) {
        exibir(`Container "${container}" não encontrado.`);
        return;
    }
    const img = document.createElement("img");
    img.id = id;
    img.src = url;
    img.width = largura;
    img.height = altura;
    elementoContainer.appendChild(img);
}

function alterarImagem(id, novaUrl) {
    const img = document.getElementById(id);
    if (img) img.src = novaUrl;
    else exibir(`Imagem "${id}" não encontrada.`);
}

function repetir(vezes, acao) {
  for (let i = 0; i < vezes; i++) {
    acao();
  }
}
function enquanto(condicao, acao) {
  while (condicao()) {
    acao();
}
}
function ler(promptTexto) {
  return window.prompt(promptTexto);
}
function mostrar(mensagem) {
  console.log(mensagem);
}
function mostra_erro(texto) {
  console.error(texto);
}
function mostra(id) {
id.style.opacity ="100%"
}
function  esconder (id) {
id.style.opacity ="0%"
}
function perguntar(input) {
let pergunta = prompt(input)
}
function abrir(url) {
window.location.href = url;
}

function tocarSom(nome, url) {
  if (!sons[nome]) {
    sons[nome] = new Audio(url);
  }
  sons[nome].play();
}

function pararSom(nome) {
  if (sons[nome]) {
    sons[nome].pause();
    sons[nome].currentTime = 0;
  }
}
function alterarop(id,valor) {
let d =document.getElementById(id)
  d.style.opacity= valor
}

function obterLocalizacao(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Sucesso, passando latitude e longitude
        const { latitude, longitude } = position.coords;
        callback(latitude, longitude);
      },
      (error) => {
        // Caso ocorra algum erro
        alert("Erro ao obter localização: " + error.message);
      }
    );
  } else {
    alert("Geolocalização não é suportada por este navegador.");
  }
}
function exibirLocalizacao() {
  obterLocalizacao((latitude, longitude) => {
    // Exibindo as coordenadas na tela
    escrever(`Sua localização: Latitude: ${latitude}, Longitude: ${longitude}`, 10, 10);
  });

}
// Função para somar
function somar(a, b) {
  return a + b;
}

// Função para subtrair
function subtrair(a, b) {
  return a - b;
}

// Função para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Função para dividir
function dividir(a, b) {
  if (b === 0) {
    alert("Não é possível dividir por zero.");
    return null;
  }
  return a / b;
}


// Função para potência
function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

// Função para raiz quadrada
function raizQuadrada(numero) {
  if (numero < 0) {
    alert("Não é possível calcular a raiz quadrada de um número negativo.");
    return null;
  }
  return Math.sqrt(numero);
}

// Função para logaritmo (logaritmo na base 10)
function logaritmo(numero) {
  if (numero <= 0) {
    alert("O número deve ser maior que zero para calcular o logaritmo.");
    return null;
  }
  return Math.log10(numero);
}

// Função para logaritmo natural (base e)
function logaritmoNatural(numero) {
  if (numero <= 0) {
    alert("O número deve ser maior que zero para calcular o logaritmo natural.");
    return null;
  }
  return Math.log(numero);
}

// Funções trigonométricas
function seno(angulo) {
  return Math.sin(angulo);
}

function cosseno(angulo) {
  return Math.cos(angulo);
}

function tangente(angulo) {
  return Math.tan(angulo);
}

// Funções hiperbólicas
function senoHiperbolico(angulo) {
  return Math.sinh(angulo);
}

function cossenoHiperbolico(angulo) {
  return Math.cosh(angulo);
}

function tangenteHiperbolica(angulo) {
  return Math.tanh(angulo);
}
class Gravidade {
  constructor(velocidadeInicial = 1, gravidade = 0.5) {
    this.velocidade = velocidadeInicial;
    this.gravidade = gravidade;
    this.tempo = 0;
  }

  aplicarGravidade(objetos) {
    for (let i = 0; i < objetos.length; i++) {
      let obj = objetos[i];
      this.tempo += this.gravidade;
      
      obj.style.top = (this.velocidade * this.tempo) + "px";
      
      if (parseInt(obj.style.top) >= window.innerHeight - obj.offsetHeight) {
        obj.style.top = window.innerHeight - obj.offsetHeight + "px";
      }
    }
  }

  iniciarAnimação(objetos, intervalo = 16) {
    setInterval(() => this.aplicarGravidade(objetos), intervalo);
  }
}
// Importando a biblioteca de criptografia do navegador
const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Função para gerar uma chave de criptografia
async function gerarChave() {
    return await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256
        },
        true,
        ["encrypt", "decrypt"]
    );
}

// Função para criptografar um texto
async function criptografar(texto, chave) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Vetor de inicialização
    const dados = encoder.encode(texto);
    const cifra = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        chave,
        dados
    );

    return {
        iv: btoa(String.fromCharCode(...iv)), 
        cifra: btoa(String.fromCharCode(...new Uint8Array(cifra))) 
    };
}

// Função para descriptografar um texto
async function descriptografar(cifra, iv, chave) {
    const ivBuffer = new Uint8Array(atob(iv).split("").map(c => c.charCodeAt(0)));
    const dadosCifrados = new Uint8Array(atob(cifra).split("").map(c => c.charCodeAt(0)));

    try {
        const dadosDecifrados = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: ivBuffer
            },
            chave,
            dadosCifrados
        );

        return decoder.decode(dadosDecifrados);
    } catch (e) {
        return "Erro ao descriptografar!";
    }
}

// Exemplo de uso:

// intrepetaodor 
function interpretarSimplesCode() {
  const simplescodeElements = document.querySelectorAll("simplescode");
  
  simplescodeElements.forEach(element => {
    const codigo = element.textContent.trim();

    try {
      new Function(codigo)(); 
      element.style.display = "none";
    } catch (error) {
      console.error("Erro ao executar Simples Code:", error);
    }
  });
}

window.addEventListener("load", interpretarSimplesCode);
  // KDS (Kit de Desenvolvimento Simples Code)
/*
a KDS OU SIMPLES CODE CORE É O ARQUIVO VIRTAL DA SIMPLES CODE

by void dev


*/
const body = document.body;
let objetos = {};
let variaveis = {};
let sons = {};

function escrever(texto, x, y) {
  const txt = document.createElement("div");
  txt.innerText = texto;
  txt.style.position = "absolute";
  txt.style.left = `${x}px`;
  txt.style.top = `${y}px`;
  body.appendChild(txt);
}
function criarObjeto(nome, x, y, largura = 50, altura = 50, cor = "gray") {
  const obj = document.createElement("div");
  obj.id = nome;
  obj.style.position = "absolute";
  obj.style.left = `${x}px`;
  obj.style.top = `${y}px`;
  obj.style.width = `${largura}px`;
  obj.style.height = `${altura}px`;
  obj.style.background = cor;
  body.appendChild(obj);
  objetos[nome] = obj;
}
function tamanho(obj, largura, altura) {
  if (objetos[obj]) {
    objetos[obj].style.width = `${largura}px`;
    objetos[obj].style.height = `${altura}px`;
  }
}
function cor(obj, novaCor) {
  if (objetos[obj]) {
    objetos[obj].style.background = novaCor;
  }
}
function mover(obj, x, y) {
  if (objetos[obj]) {
    objetos[obj].style.left = `${x}px`;
    objetos[obj].style.top = `${y}px`;
  }
}
function esperar(segundos, callback) {
  setTimeout(callback, segundos * 1000);
}
function clicar(obj, callback) {
  if (objetos[obj]) {
    objetos[obj].addEventListener("click", callback);
  }
}
function corDoFundo(novaCor) {
  body.style.backgroundColor = novaCor;
}
function alterarVariavel(nome, valor) {
  variaveis[nome] = valor;
}
function obterVariavel(nome) {
  return variaveis[nome];
}
function se(condicao, entao, senao) {
  if (condicao) {
    entao();
  } else if (senao) {
    senao();
  }
}
function criarImagem(container, id, url, largura, altura) {
    const elementoContainer = document.querySelector(container);
    if (!elementoContainer) {
        exibir(`Container "${container}" não encontrado.`);
        return;
    }
    const img = document.createElement("img");
    img.id = id;
    img.src = url;
    img.width = largura;
    img.height = altura;
    elementoContainer.appendChild(img);
}

function alterarImagem(id, novaUrl) {
    const img = document.getElementById(id);
    if (img) img.src = novaUrl;
    else exibir(`Imagem "${id}" não encontrada.`);
}

function repetir(vezes, acao) {
  for (let i = 0; i < vezes; i++) {
    acao();
  }
}
function enquanto(condicao, acao) {
  while (condicao()) {
    acao();
}
}
function ler(promptTexto) {
  return window.prompt(promptTexto);
}
function mostrar(mensagem) {
  console.log(mensagem);
}
function mostra_erro(texto) {
  console.error(texto);
}
function mostra(id) {
id.style.opacity ="100%"
}
function  esconder (id) {
id.style.opacity ="0%"
}
function perguntar(input) {
let pergunta = prompt(input)
}
function abrir(url) {
window.location.href = url;
}

function tocarSom(nome, url) {
  if (!sons[nome]) {
    sons[nome] = new Audio(url);
  }
  sons[nome].play();
}

function pararSom(nome) {
  if (sons[nome]) {
    sons[nome].pause();
    sons[nome].currentTime = 0;
  }
}
function alterarop(id,valor) {
let d =document.getElementById(id)
  d.style.opacity= valor
}

function obterLocalizacao(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Sucesso, passando latitude e longitude
        const { latitude, longitude } = position.coords;
        callback(latitude, longitude);
      },
      (error) => {
        // Caso ocorra algum erro
        alert("Erro ao obter localização: " + error.message);
      }
    );
  } else {
    alert("Geolocalização não é suportada por este navegador.");
  }
}
function exibirLocalizacao() {
  obterLocalizacao((latitude, longitude) => {
    // Exibindo as coordenadas na tela
    escrever(`Sua localização: Latitude: ${latitude}, Longitude: ${longitude}`, 10, 10);
  });

}
// Função para somar
function somar(a, b) {
  return a + b;
}

// Função para subtrair
function subtrair(a, b) {
  return a - b;
}

// Função para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Função para dividir
function dividir(a, b) {
  if (b === 0) {
    alert("Não é possível dividir por zero.");
    return null;
  }
  return a / b;
}


// Função para potência
function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

// Função para raiz quadrada
function raizQuadrada(numero) {
  if (numero < 0) {
    alert("Não é possível calcular a raiz quadrada de um número negativo.");
    return null;
  }
  return Math.sqrt(numero);
}

// Função para logaritmo (logaritmo na base 10)
function logaritmo(numero) {
  if (numero <= 0) {
    alert("O número deve ser maior que zero para calcular o logaritmo.");
    return null;
  }
  return Math.log10(numero);
}

// Função para logaritmo natural (base e)
function logaritmoNatural(numero) {
  if (numero <= 0) {
    alert("O número deve ser maior que zero para calcular o logaritmo natural.");
    return null;
  }
  return Math.log(numero);
}

// Funções trigonométricas
function seno(angulo) {
  return Math.sin(angulo);
}

function cosseno(angulo) {
  return Math.cos(angulo);
}

function tangente(angulo) {
  return Math.tan(angulo);
}

// Funções hiperbólicas
function senoHiperbolico(angulo) {
  return Math.sinh(angulo);
}

function cossenoHiperbolico(angulo) {
  return Math.cosh(angulo);
}

function tangenteHiperbolica(angulo) {
  return Math.tanh(angulo);
}
class Gravidade {
  constructor(velocidadeInicial = 1, gravidade = 0.5) {
    this.velocidade = velocidadeInicial;
    this.gravidade = gravidade;
    this.tempo = 0;
  }

  aplicarGravidade(objetos) {
    for (let i = 0; i < objetos.length; i++) {
      let obj = objetos[i];
      this.tempo += this.gravidade;
      
      obj.style.top = (this.velocidade * this.tempo) + "px";
      
      if (parseInt(obj.style.top) >= window.innerHeight - obj.offsetHeight) {
        obj.style.top = window.innerHeight - obj.offsetHeight + "px";
      }
    }
  }

  iniciarAnimação(objetos, intervalo = 16) {
    setInterval(() => this.aplicarGravidade(objetos), intervalo);
  }
}
// Importando a biblioteca de criptografia do navegador
const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Função para gerar uma chave de criptografia
async function gerarChave() {
    return await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256
        },
        true,
        ["encrypt", "decrypt"]
    );
}

// Função para criptografar um texto
async function criptografar(texto, chave) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Vetor de inicialização
    const dados = encoder.encode(texto);
    const cifra = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        chave,
        dados
    );

    return {
        iv: btoa(String.fromCharCode(...iv)), 
        cifra: btoa(String.fromCharCode(...new Uint8Array(cifra))) 
    };
}

// Função para descriptografar um texto
async function descriptografar(cifra, iv, chave) {
    const ivBuffer = new Uint8Array(atob(iv).split("").map(c => c.charCodeAt(0)));
    const dadosCifrados = new Uint8Array(atob(cifra).split("").map(c => c.charCodeAt(0)));

    try {
        const dadosDecifrados = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: ivBuffer
            },
            chave,
            dadosCifrados
        );

        return decoder.decode(dadosDecifrados);
    } catch (e) {
        return "Erro ao descriptografar!";
    }
}

// Exemplo de uso:

// intrepetaodor 
function interpretarSimplesCode() {
  const simplescodeElements = document.querySelectorAll("simplescode");
  
  simplescodeElements.forEach(element => {
    const codigo = element.textContent.trim();

    try {
      new Function(codigo)(); 
      element.style.display = "none";
    } catch (error) {
      console.error("Erro ao executar Simples Code:", error);
    }
  });
}

window.addEventListener("load", interpretarSimplesCode);
  
