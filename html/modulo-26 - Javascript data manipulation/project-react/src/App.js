import carro from './cars.js';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import produto1 from './produto1.svg';

function App() {
let listacarros = '';
let carrosusados = '';
let carrosnovos = '';
let revisao = '';

let valorCarros = carro.reduce( (val1, val2) => {
    return {valor: val1.valor + val2.valor}
})

carro.filter( (carro)=> {
    if (carro.km === 0){
        carrosusados += carro.nome + ', '
    }else if (carro.km > 0){
        carrosnovos += carro.nome + ', '
    }
})

carro.map( (carrokm => {
    let kmrevisao = 0;
    kmrevisao = carrokm.km;
    if (carrokm.km > 0){
        do{
            kmrevisao -= 10000;
        }while(kmrevisao > 10000);
    }

    revisao += '<p><b>'+carrokm.nome+'</b>: faltam '+(10000-kmrevisao)+'km para a revisão</p>'
}))

carro.forEach(lista => {
  listacarros += '<div><p>Produto: '+lista.id + ' </p><p>Descrição: '+lista.nome + ' </p><p>Marca: '+lista.marca +' </p><p>Ano: '+
                    lista.ano +' </p><p>KM rodado: '+lista.km+' </p><p>Valor: '+lista.valor+'</p></div>'
});

  return (
    <div className='App'>
      <Header title="Concessionária" />
      <h1 id='produtos'>Produtos</h1>
      <div className="container" dangerouslySetInnerHTML={{__html: listacarros}}></div>
      <div className='carros-usados-novos' id='novoseusado'>
        <h2>Carros novos</h2>
        <p dangerouslySetInnerHTML={{__html:carrosnovos}}></p>
        <h2>Carros usados</h2>
        <p dangerouslySetInnerHTML={{__html:carrosusados}}></p>
      </div>
      <div className='revisao' id='revisao'>
        <h2>Revisão</h2>
        <div dangerouslySetInnerHTML={{__html: revisao}}></div>
      </div>
      <div className='informacao'>
        <p dangerouslySetInnerHTML={{__html: 'Temos um total de: '+valorCarros.valor+'R$, em automoveis de alta qualidade.'}}></p>
      </div>
      <Footer note="Footer Note" />
    </div>
  );
}

export default App;
