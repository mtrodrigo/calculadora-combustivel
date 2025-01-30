import Logo from './assets/logo.png'
import './App.css'
import { useState } from 'react'

interface resultadoProps{
  titulo: string
  porcent: number
}
function App() {

  const [precoAlcool, setPrecoAlcool] = useState<number | undefined>(undefined)
  const [precoGasolina, setPrecoGasolina] = useState<number | undefined>(undefined)
  const [resultado, setResultado] = useState<resultadoProps>()

  function calcular(){
    if (precoAlcool === undefined || precoGasolina === undefined) {
      return;
    }
    const calculo = (precoAlcool / precoGasolina)
    const calPorcent = (calculo * 100)
    if(calculo <= 0.7){
      setResultado({
        titulo: "Alcool",       
        porcent: calPorcent,
        }
      )
    }
    else{
      setResultado({
        titulo: "Gasolina",       
        porcent: calPorcent,
        }
    )}}
     
  return (
    <>
      <main className='calculadora' >
        <section className='container'>  
          <img src={Logo} alt="Logo" />
          <h1>CALCULADORA DE ALCOOL OU GASOLINA</h1>
          <p>Calcula pelo preço se é melhor alcool ou gasolina</p>
          <input
            type='number'
            step="0.01"
            min="1"
            value={precoAlcool}
            onChange={(e) => setPrecoAlcool(Number(e.target.value))}
            placeholder='Valor do alcool (0,00)'
            required
          />
          <input
            type='number'
            step="0.01"
            min="1"
            value={precoGasolina}
            onChange={(e) => setPrecoGasolina(Number(e.target.value))}
            placeholder='Valor da gasolina (0,00)'
            required
          />
          <button onClick={calcular}>Calcular</button>
          {resultado && Object.keys(resultado).length > 0 &&(
            <div className='resultado_container'>
              <h3>{resultado?.porcent.toFixed(2).replace("." , ",")}%</h3>
              <h3>Melhor combustivel para abastecer: {resultado?.titulo}</h3>
            </div>
          )}
        </section>
      </main>  
    </>
  )
}

export default App
