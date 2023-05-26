import carro from './cars.js';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
let listacarros = '';
let carrosusados = '';
let carrosnovos = '';

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

let revisao = carro.map( (carrokm => {
    let kmrevisao = 0;
    kmrevisao = carrokm.km;
    if (carrokm.km > 0){
        do{
            kmrevisao -= 10000;
        }while(kmrevisao > 10000);
    }

    return carrokm.nome+' faltam '+(10000-kmrevisao)+'km para a revisão, considerando revisão a cada 10000km.<br>'
}))

carro.forEach(lista => {
    listacarros += '<div className="item-carro">Produto: '+lista.id + ' <br>Descrição: '+lista.nome + ' <br>Marca: '+lista.marca +' <br>Ano: '+
                    lista.ano +' <br>KM rodado: '+lista.km+' <br> Valor: '+lista.valor+'</div><br>'
 });

  return (
    <div className='App'>
      <Header title="My header" subtitle="subtitle2" />
      <div className="container" dangerouslySetInnerHTML={{__html: listacarros+'<br>Carros novos: '+carrosnovos+
      '<br>Carros usados: '+carrosusados+
      '<br><br>Revisão: '+ revisao+
      '<br>Temos um total de: '+valorCarros.valor+'R$, em automoveis de alta qualidade.'}}>
      </div>
      <Footer note="Footer Note" />
    </div>
  );
}

export default App;
