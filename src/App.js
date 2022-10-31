import './App.css';
import picture from './src/imagens/Picture.png'
function App() {
  return (
    <div className="App">
      <div className='cabecalho'>
        <div className='container-md'>
          <div className='row'>
            <div className='col-md-3'>
              <h1 id='logo'>razor</h1>
            </div>
            <div className='col-md-6'>
              <p className='list-nav'><a href='#'>Produtos</a></p>
              <p className='list-nav'><a href='#'>Para Empresas</a></p>
              <p className='list-nav'><a href='#'>Suporte</a></p>
            </div>
            <div className='col-md-3' id='button-nav'><button type="button" class="btn btn-secondary">Adicione ao carrinho</button></div>

          </div>
        </div>
      </div>

      <div className='pagina-1'>
        <img src={picture}></img>
      </div>

      <div className='pagina-2'>
        
      </div>
    </div>
  );
}

export default App;