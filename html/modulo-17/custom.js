// Instancia jquery e evita conflitos
//jquery( function($){
$(document).ready(function (){
    $('.owl-carousel').owlCarousel();
    let titulos = $("h4") //tag
    let itens = $(".featured-item") //class
    let destaques = $("#featured") //id

    console.log(titulos.first());

    //Configuração dos produtos
    $('.featured-item a').addClass('btn btn-dark sctretch-link')
    //$('.featured-item:first h4').append('<span class"badge bg-secondary"> Novo</span>')
    //$('.featured-item:first h4').start('<span class"badge bg-secondary"> Novo</span>')
    //$('.featured-item:first h4').html('<span class"badge bg-secondary"> Novo</span>')
    //$('.featured-item:first h4').addClass('active')
    //$('.featured-item:first h4').removeClass('active')
    //$('.featured-item:first h4').toggleClass('active')
    //$('.featured-item:first h4').hide()
    //$('.featured-item:first h4').show()
    //$('.featured-item:first h4').fadeIn(2000)
    //$('.featured-item:first h4').fadeOut()
    //$('.featured-item:first h4').css('color', '#f00')

    /*$('.featured-item:first h4').css({
        'color':'#f00',
        'background':'#ff0',
        'font-weight':'100'
    })

    $('.featured-item').hover(
        function(){
            console.log($(this).find('h4').text());
        },
        function(){
            console.log($(this).find('h4').text()+ "  -  "+ $(this).find('h6').text());
        }
    )

    */

    //manipulação de eventos
    $('.featured-item:nth(2)').on('click', function(event){
        event.preventDefault();
        alert("Produto esgotado");
        $(this).parent().fadeOut();
    })

    /*
    *Callback
    *entendendo açoes que começam no fim de outra
    */
    /*$('.featured-item:nth(1)').hide(500, function(){
        console.log($(this).find('h4').text()+ " esgotado");
    })
    .show(500, function(){
        console.log($(this).find('h4').text()+" em estoque");
    })

    /*
    *Animações
    */
   /*const duracao = 1000;
    $('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)*/

    $('#form-submit').on('click', function(e){
            e.preventDefault();

            if($('#email').val() != ''){
                $('#email').animate({
                    opacity: 'toggle',
                    top: "-50"
                }, 500, function(){
                    console.log($(this).val())
                })
            }
    })

    /*
    *Ouvinte de eventos .nav-modal-open
    
   $('.nav-modal-open').on('click', function(e){
        e.preventDefault();

        let elem = $(this).attr('rel');

        $('.modal-body').html($('#'+elem).html());

        $('.modal-header h5.modal-title').html($(this).html());

        let myModal = new bootstrap.Modal($('#modalId'));
        myModal.show();
<<<<<<< HEAD
   })

   /*
   *TODO: Incrementar a validação
   * - checar se o nome é valido (mais de 2 caracteres)
   * - checar se o email é valido com ao menos um "@" e "."
   */

   function validate(elem){
    console.log(elem.val())
        if(elem.val() == ""){
            console.log('o campo de '+elem.attr('name')+ ' é obrigatorio');
            elem.addClass('invalid');
            return false;
        }else{
            elem.removeClass('invalid');
        }
   }

   $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault();

        const inputName = $('#nome');
        const inputEmail = $('#email');

        validate(inputName);
        validate(inputEmail);
        return false;
        /*if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid')){
            console.log('verificar campos obrigatorios');
            return false;
        }else{
            $(this).submit();
        }*/
   })

   $('body').on('blur', '#nome', function(){
        validate($(this));
   })
   $('body').on('blur', '#email', function(){
        validate($(this));
   })
=======
   })*/
})

$('body').on('submit', '.modal-body .form', function(e){
    e.preventDefault();

    const inputName = $('#nome');
    const inputEmail = $('#email')
    const inputData = $('#date')
    const inputHora = $('#time')
    const inputCep = $('#cep')
    const inputCelular = $('#phone')
    const inputCpf = $('#cpf')

    validate(inputName);
    validate(inputEmail);
    validate(inputData);
    validate(inputHora);
    validate(inputCep);
    validate(inputCelular);
    validate(inputCpf);

    if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputData.hasClass('invalid') || inputHora.hasClass('invalid') || inputCep.hasClass('invalid') || inputCelular.hasClass('invalid') || inputCpf.hasClass('invalid')){
        console.log('Verificar camppos obrigatorios')
        return false;
    }else{
        $(this).submit();
    }
})

function validate(elem){
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    const dataValida = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/;
    const horaValida = /^([01]?[0-9]|[2][0-3]):[0-5][0-9]$/;
    const cepValida = /^[0-9]{5}-[0-9]{3}$/;
    const phoneValida = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    const cpfValida = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (elem.val() == ''){
        console.log('o campo de '+elem.attr('name')+ ' é orbigatorio');

        elem.parent().find('.text-muted').show();
        elem.addClass('invalid');
        return false;
    }else{
        if (elem.attr('id') == "email"){
            if (!elem.val().match(emailValido)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }else if (elem.attr('id') == "date"){
            if (!elem.val().match(dataValida)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }else if (elem.attr('id') == "time"){
            if (!elem.val().match(horaValida)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }else if (elem.attr('id') == "cep"){
            if (!elem.val().match(cepValida)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }else if (elem.attr('id') == "phone"){
            if (!elem.val().match(phoneValida)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }else if (elem.attr('id') == "cpf"){
            if (!elem.val().match(cpfValida)){
                elem.parent().find('.text-muted').show();
                elem.addClass('invalid');
                return false;
            }
        }
        elem.removeClass('invalid');
        elem.parent().find('.text-muted').hide();
    }
}

$('body').on('blur', '#nome', function(){
    validate($(this));
})
$('body').on('blur', '#email', function(){
    validate($(this));
})
$('body').on('focus', '#date', function(){
    //$(this).datepicker();
})
$('body').on('blur', '#date', function(){
    $(this).mask('00/00/0000');
    validate($(this));
})
$('body').on('blur', '#time', function(){
    $(this).mask('00:00');
    validate($(this));
})
$('body').on('blur', '#cep', function(){
    $(this).mask('00000-000');
    validate($(this));
})
$('body').on('blur', '#phone', function(){
    $(this).mask('00000-0000');
    validate($(this));
})
$('body').on('blur', '#cpf', function(){
    $(this).mask('000.000.000-00');
    validate($(this));
>>>>>>> d2101800abd1373bc1933f0a9c5ddd1f972dbcba
})