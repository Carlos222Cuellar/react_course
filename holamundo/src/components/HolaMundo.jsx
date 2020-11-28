/**
 * JSX permite mezclar HTML que es la vista con 
 * la logica que es JavaScript y XML en un mismo 
 * archivo sin la necesidad de estar cambiando de archivos
 */

import React from 'react';

//vamos adeclarar un compnente presentational
const HolaMundo = () => {
  //se usa className para añadir estilos a los elemtos html no se usa class porque
  //Es una palabra reservada de JS
  const hello = '¡Hola Mundo!'; //es la variable que le pasaremos al elemnto html
  const isTrue = false; //lo usare en el html para validar si muestro una parte del codigo o otra
  return (
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h2>Curso Escencial de React</h2>
      <img
        src="https://cdn.auth0.com/blog/react-js/react.png" alt="Imagen de React"
      />

      {isTrue ? <h4>Es verdadero</h4> : <h5>Es Falso</h5>}
       {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
  //la segunda forma de llamarlo solo va mostrar algo si es verdadero de lo contraro
  //no muestra nada
};

export default HolaMundo;

