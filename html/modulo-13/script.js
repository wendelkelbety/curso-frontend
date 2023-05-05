function calcularmedia(notas){
    let soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;
     return media;
}

let media; // escopo global

function aprovacao(notas){
    let media = calcularmedia(notas);
    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return "Media: "+ media + " - Resultado: " + condicao;
}

// Função recursiva

function contagemRegressiva(numero){
    console.log(numero);
    let proximoNumero = numero - 1;

    if (proximoNumero > 0){
        contagemRegressiva(proximoNumero);
    }
}

document.addEventListener('submit', function(evento){
    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById("formulario-01");;
    let dados = new FormData(formulario);

    let object = {};
    let notas = [];
    for (let key of dados.keys()){
        object[key] = dados.get(key);
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);
    console.log(object);

    document.getElementById("resultado").innerHTML = aprovacao(notas);
})

function testexercicio(){
    let parcelas = 0;
    let prestacao = 750;
    let valor = 30000;
    let totalprestacao = 0;
    do{
    	parcelas += 1;
    	totalprestacao += prestacao;

        console.log(totalprestacao);
    }while (totalprestacao < valor);
    console.log(parcelas);
}