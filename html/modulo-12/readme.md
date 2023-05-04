# Javascript
- Estado do JS (https//2023.stateofjs.com/en-US/tetchnologies/)
- Onde é executado
- Omnipresente na web
- App Hibridos
- Aplicação de ponta a ponta: banco de dados, back end/front end
- Interagir com o DOM (api-web)
- Requisições dinamicas
- IOT (Internet das coisas): o JS está presente em tudo
- EMCAScript

## Fundamentos JS
- Fundamentos do Javascript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluimos da base para o topo
- é melhor que começar na frente e precisar retornar a base

## Metodologia
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha de evolução
- Começa facil e vai aumentando a complexidade
- Além de especialização, aprendemos a integrar com diversas possibilidades

## Logica de programacao
- Computador:
  -- Maquina que extrai dados
  -- Processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultado do processamento
- Processamento de dados: Entrada (dados) > Processamento > Saida (informação)

E a logica?
Logica é aquilo que faz sentido

Como um escrever um programa?
- Aplicar a logica pra descrever os passos para desenvolver um problema em ordem de execução

A logica de programação
- É a tecnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
- A sequencia de passos, instruções que o computador deve seguir é conhecida como algoritmo

Algoritmo
- Sequencia logica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instrução
- Nem todo algoritmo é um programa de computaor, mas todo programa de computador é um algoritmo
- quem viabiliza o funcionamento dos algoritmos nos computadores: linguagem de programação

### Algoritmo para calcular a media de 3 numeros
1. Inicio;
2. Receber o primeiro numero de entrada: entrada 1;
3. Receber o segundo numero de entrada: entrada 2;
4. Receber o terceiro numero de entrada: entrada 3;
5. Somar os 3 numeros recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log;
7. Fim;

### Torre de hanoi
- Mover todos os discos para direita, com menor numero de movimentos possivel, sem colocar um disco em cima de um disco menor: https://www.somatematica.com.br/jogos/hanoi/
- Jogos: https://www.somatematica.com.br/jogos.php

## Funcionalidades gerais
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos (cliques, submit), estilos CSS
- Node.js framework JS para back-end / runtime em JS
- Mongo.db / GraphQL: banco de dados em JS
- React / VueJS / Angular: framework JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile

- Receber e manipular dados
- Tomar decisoes baseadas na logica computacional
- Loop e interações
- Condições de saida

### Executar o JS
- Console browsers
- Editores: Sublime, Visual Studio Code
- JS fiddle, https://jsfiddle.net/

### Instalação do Node.js
- Para a gente conseguir executar scripts de JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://nodejs.org/pt-br/download/package-manager/

* Windows: Primeiro instalar o chocolatey
- Precisa executar o Powershell como administrador
- Se tudo der certo na instalação do chocolatey, rodar: choco install nvs
- nvs add lts
- nvs link lts

* MacOs: Primeiro instalar o Homebrew
- Se tudo der certo na instalação do Homebrew, rodar: brew install node

#### Após concluir a instalação
- Rodar em um novo terminal: node -v

## Variaveis
São utilizadas para referenciar espaço na memoria

- Var
- Const (fica com valor imutavel)
- Let
- Starting (tipo de variavel para conjuntos de caracteres)
- Tipagem: numero ou string
- Array: conjunto de valores

## Operadores
- Soma +
- Subtração -
- Multiplicar *
- Divisão /
- Modulo (resto de divisão) %
- Math: random() / round() / sqrt()

* Atribuição
a + b
a += b
a - b
a -= b
a * b
a *= b
a / b
a /= b
a % b
- Adicionar 1 ++
- Subtrai 1 --

* Operadores de comparação
- Igual == ou ===
- Diferente !=
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor ou igual < =

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operations
