
import React from 'react'

const Eventos = () => {

const eventoClick = () => {
    console.log('Me clickeaste');
}

  return (
    <div>
        <hr/>
        <h2>Eventos</h2>
        <button onClick={ () => eventoClick()}>Click</button>
    </div>
  )
}

export default Eventos