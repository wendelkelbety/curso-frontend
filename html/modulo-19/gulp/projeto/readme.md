# Gulp
Kit de ferramentas de automação de tarefas baseadas em javascript

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda e evita trabalhos lentos e repetitivos
- Criação de pipelines
- Você cria as configurações necessarias (flexivel)
- Tarefas escritas em JS ou plugins
- Aplica transformações em arquivos ainda na memoria (antes de gravas no disco rigido)

## porque automatizar?
- Melhor organização
- Evitar repetição de tarefas
- Mais tempo para focar no mais importante: regras de negocio e experiencia do usuario

## Principais recursos
- Minificação de arquivos
- Otimização de imagens (para melhor performance)
- Mescla de arquivos de diferentes origens

## Trnaspilação
É o processo de transformação (conversão) de escrita em outras linguagens para o JavaScript.
Você podera escrever em TypeScript ou Babel que o codigo.

Todo processo é executado a partir do node.js e gulp-cli (linha de comando)

## Global x Local
- A instalação de Node.js é global
- Já o Gulp e seus plugins são instalados localmente (em cada projeto)

## Gerenciadores de pacotes
- NPM: Node Packager Manager
- Utiliza o Node.js
- Permite a configuração rapida e facil de ambientes e plugins node

## Instalando o Gulp
- Rodar node.js
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Instalar o gulp-cli (Command line interface) globalmente: npm install gulp-cli -g
- Criar o gulpfile.js

## Trabalhando com o Gulp
- Baseado em funções, tasks




## OBS
- npm install gulp
- npm install gulp-concat
- npm install gulp-cssmin
- npm install gulp-uglify
- npm cache clean --force
- --save-dev