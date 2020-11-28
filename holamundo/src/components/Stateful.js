/**
 * Por convenio de la comunidad todos los archivos que usemos con react
 * deben de iniciar con una letra mayuscula
 * 
 * Vamos a crear una clase que se llama Stateful que es particularmente conocido como 
 * la estructura de clase que nos va permitir tener estado y ciclo de vida
 * y es el mas robusto de react
 */

//importamos react y el component

import React, { Component } from 'react';

//creamos la clase Stateful que hereda o se extiende de Component
class Stateful extends Component {
//va ir la logica donde esta el ciclo de vida de la aplicacion asi como los estados

//creando el constructor que va recibir props y las inicializamos con super
constructor(props){
    super(props);
//asignando el estado
    this.state = {
        hello: "hola Mundo"
    }
}

//render nos permite retornar el HTML
render(){
    return(
        //<h1>Hola Mundo</h1>
        //como ya tengo un state en el constructos puedo usarlo aqui sin necesidad de usar 
        //o mas bien dicho pasar el texto directamente al <h1></h1>
        <h1>{ this.state.hello }</h1>//se lo pasamos entre llaves

    )

}
}

//tenemos que exportar nuestro componente

export default Stateful ;
