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
            console.log($(this).fint('h4').text());
        },
        function(){
            console.log($(this).fint('h4').text()+ "  -  "+ $(this).find('h6').text());
        }
    )

    */

    //manipulação de eventos
    $('.featured-item a').on('click', function(event){
        event.preventDefault();
        alert("Produto esgotado");
    })
})