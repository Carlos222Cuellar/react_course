/**
 * este componente no depende un estado ni un ciclo de vida
 * solo contiene logica son los mas utilizados hoy en dia 
 * porque trebajan con la parte funcional son funciones y nos permiten
 * centrarnos en lo que nececitamos
 */

 //importar react

import React from 'react'

 //vamos a crear nuestra funcion usando las arrow functions y 
 //directamente vamos a retornar el elemento html que queremos

const Stateless = () =>{
    //retornamos el html
    return(
        <h1>Hola Mundo</h1>
    );
};

export default Stateless;
