import logo from '../src/imagens/image 2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="secao-1">
        <h1><img src={logo} alt="Logo da Razor" className="logo"></img></h1>

        <nav>
          <ul>
            <li>PRODUTOS</li>
            <li>PARA EMPRESAS</li>
            <li>SUPORTE</li>
          </ul>
        </nav>
      </section>

      <section className='secao-2'></section>

      <section className='secao-3'></section>

      <section className='secao-4'></section>
      <section className='secao-5'></section>
      <section className='secao-6'></section>
      <section className='secao-7'></section>
      <section className='secao-8'></section>
      
    </div>
  );
}

export default App;
