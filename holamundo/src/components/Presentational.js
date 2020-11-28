/**
 * depende de funciones no tiene estados
 */

import React from 'react';

//este hace in retorn explicito sin necesidad de llamarlo ni poner parentesis
const Presentational = () => <h1> Hola Mundo </h1>;
    //estos solo tienen un parte especifica de html que se va ver en el navegador
    //que no tienen logica que no tienen propiedades

export default Presentational;