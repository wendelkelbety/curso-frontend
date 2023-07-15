# Webpack
- Empacotador de metodos JS
- utilizado por diversos frameworks modernos como o React, Angular...
- Trabalha com o Node.js

## instalação
 1. Iniciar o projeto no diretorio

'''
npm install -y
'''

2. Instalar o Webpack como dependencia de desenvolvimento

'''
npm install --save-dev webpack webpack-cli
'''

## Obs
rodar o webpack
- npx webpack --config webpack.config.js
- npm run build

## Trabalhando com HTML
É necessario trabalhar com plugin para ampliar as possibilidades de uso, instalação:

'''
npm install --save-dev html-webpack-plugin
'''

## Adicionando CSS
Para trabalhar com estilos tambem compensa adicionar algumas extensões
- node-sass: compilador de sass para node
- sass-loader: carrega para webpack compilar
- style-loader: injeta estilos na arvore de objetos DOM
- css-loader: interpreta diretivos de CSS (import, ...)
- extract: extrai CSS do JS

'''
npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
'''

- Sistema de modulos
- Gerenciamento de dependencias
- Desenvolvimento x Produção

## Melhorando compatibilidade do JS com Babel
Babel transforma o codigo JS para uma versão com maior compatibilidade para navegadores antigos

'''
npm install --save-dev @babel/core @babel/preset-env babel-loader
'''

## Trabalhando com imagens
Adicionar file loader

'''
npm install --save-dev file-loader
'''