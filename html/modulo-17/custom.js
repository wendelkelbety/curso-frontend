// Instancia jquery e evita conflitos
jquery( function($){
    let titulos = $("h4") //tag
    let itens = $(".featured-item") //class
    let destaques = $("#featured") //id

    console.log(titulos.first());
})