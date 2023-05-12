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
    $('.featured-item:first h4').append('<span class"badge bg-secondary"> Novo</span>')
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
    $('.featured-item a').on('click', function(event){
        event.preventDefault();
        alert("Produto esgotado");
    })

    /*
    *Callback
    *entendendo açoes que começam no fim de outra
    */
    $('.featured-item:nth(1)').hide(500, function(){
        console.log($(this).find('h4').text()+ " esgotado");
    })
    .show(500, function(){
        console.log($(this).find('h4').text()+" em estoque");
    })

    /*
    *Animações
    */
   const duracao = 1000;
    $('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)

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
    */
   $('.nav-modal-open').on('click', function(e){
        e.preventDefault();

        let elem = $(this).attr('rel');

        $('.modal-body').html($('#'+elem).html());

        $('.modal-header h5.modal-title').html($(this).html());

        let myModal = new bootstrap.Modal($('#modalId'));
        myModal.show();
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
})