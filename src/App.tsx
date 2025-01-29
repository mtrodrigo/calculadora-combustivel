import Logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <>
      <main className='calculadora' >
        <section className='container'>  
          <img src={Logo} alt="Logo" />
          <h1>CALCULADORA DE ALCOOL OU GASOLINA</h1>
          <p>Calcula pelo preço se é melhor alcool ou gasolina</p>
          <input
            
            placeholder='Valor do alcool (0,00)'
            required
          />
          <input
            placeholder='Valor da gasolina (0,00)'
            required
          />
          <button>Calcular</button>
          <h3>%</h3>
          <h3>Melhor combustivel para abastecer:</h3> 
        </section>
      </main>  
    </>
  )
}

export default App
