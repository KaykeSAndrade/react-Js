
/* Sem JSX
import React from "react"

const app = () =>{

  return React.createElement('a',{
    href:'https://google.com.br'
  },'Clique Aqui')
}
*/

/*
const app = () =>{
  return (
    <a href='https://goggle.com'>Clique Aqui! 2.0</a>
  )
}
*/

import{ Header } from './components/Header'

const app = () =>{
  const handleButtonClick= () =>{
    alert("Fui Clicado")
  }
   
  return (

    <button onClick={handleButtonClick}>Clique Aqui!</button>

    /*
    <div>
      <Header title="TI102" subtitle="Formados"/>
      Olá Mundo
      </div>
    */
      )
}

export default app

