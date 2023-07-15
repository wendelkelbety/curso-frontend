# BOOTSTRAP
- Framework ou Biblioteca de Desenvolvimento
- Modular
- Componentes Ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile-First
- Amplamente Utilizada
- Cross Browser

## Biblioteca x Framework
- Biblioteca: Oferece objetos / Classes prontas para uso
- Framework: Oferece um conjunto de bibliotecas
- Biblioteca: Recurso para trabalhar
- Framework: Metodologia de trabalho
- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

## Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negocio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Minimo produto viavel
- Estar envolvido x comprometido

## Vantagens
- Uso simples
- Menos codigo
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

## Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- abstração de estilos

### Com Bootstrap
'''
    <a class="btn btn-lg">Botão</a>
'''

### Sem Bootstrap
'''
    <a class="botao botao-grande">Botão</a>

<style>
    html{
        font-size: 62.5%;
    }

    .botao{
        background-color: #ccc;
        border-radius: 2px;
        display: block;
        font-family: sans-serif;
        font-size: 1.6rem;
        padding: 1rem 2rem;
        margin: 5px auto;
    }
    .botao-grande{
        font-size: 2rem;
    }
    .botao:hover{}
    .botao:active{}
    .botao:visited{}
</style>
'''