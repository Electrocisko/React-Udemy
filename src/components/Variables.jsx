import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde esta constante';
    const imagen = 'https://www.capa9.net/attachments/243990-2-jpg.23656/'

  return (
    <div>
        <h2>Nuevo componente { saludo }</h2>
        <img src={imagen} alt="100px"/>
    </div>
  )
}

export default Variables