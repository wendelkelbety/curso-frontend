const calcularMedia = ( notas ) => {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media;
}

const aprovacao = ( notas ) => {
    let media = calcularMedia( notas ); 
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

const contagemRegressiva = (numero) => {
    let proximoNumero = numero - 1;
    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

const formulario1 = document.getElementById('formulario-01');
if(formulario1){
    formulario1.addEventListener('submit', function( evento ){
        evento.preventDefault();
        evento.stopPropagation();
        
        let dados = new FormData(this);
        let notas = [];
        for(let key of dados.keys()) {
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;
            if(!isNaN(numero)) {
                notas.push(numero);
            }
        }

        texto = aprovacao(notas)
        document.getElementById('resultado').innerHTML = texto;
    });
}

class validacao{

    validaCampo(){
        let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
        for( let emFoco of camposObrigatorios) {
            emFoco.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                if(this.value == ""){
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                } else {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                }
            });
        }
    }
    
    validaCampoCEP(){
        let camposNumericos = document.querySelectorAll('input.cep');
        for( let emFoco of camposNumericos) {
            emFoco.addEventListener('focusout', function(event) {
                event.preventDefault();
                const cepvalido = /^[0-9]{5}[0-9]{3}$/i;
                if(this.value.match(cepvalido)){
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
            });
        }
    }
    
    
    validaEmail(){
        let camposEmail = document.querySelectorAll('input.email');
        for( let emFoco of camposEmail) {
                emFoco.addEventListener('focusout', function(event) {
                event.preventDefault();
                const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
                if(this.value.match(emailValido)) {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
            });
        }
    }
    
    validaUF(){
        let campoUF = document.querySelectorAll('input.uf');
        for( let emFoco of campoUF) {
            emFoco.addEventListener('focusout', function(event) {
                event.preventDefault();
                const ufvalido = /^[a-záàâãéèêíïóôõöúçñ]{2}$/i;
                if(this.value.match(ufvalido) && this.value != "") {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
            });
        }
    }

    validaTelefone(){
        let camposTelefone = document.querySelectorAll('input.telefone');
        for( let emFoco of camposTelefone) {
            emFoco.addEventListener('focusout', function(event) {
                event.preventDefault();
                const telefonevalido = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
                if(this.value.match(telefonevalido) && this.value != "") {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
            });
        }
    }
}

const emvalidacao = new validacao()
emvalidacao.validaCampo();
emvalidacao.validaCampoCEP();
emvalidacao.validaEmail();
emvalidacao.validaUF();
emvalidacao.validaTelefone();