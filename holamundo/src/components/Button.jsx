import React from 'react';



//PRIMERO CREMOS NUESTRA CLASE PARA LE STATEFUL

class Button extends React.Component {//esto es otra forma de usar component sin necesidad de importarlo en la linea donde importamos React
 //vamos a crear un estado para poder tener un contador que cada vez que le de click al boton aumente en uno
   state = {
    count: 0
  };//ahora ya podremos usar count en nuetsro html

  //vamos a hacer la logica para que cuando se le de click al boton se aumente en un numero
  //creamos la clase manejadora de los click
  handlerState =() => {
    this.setState({//va permitir colocar los cambio a este se le paso el objeto
  count: this.state.count + 1,//agarramos el count del estado y le sumamos uno
    });

    }
render(){
  //destructurando count
  const {count} = this.state;
  return(
    
    <div>
      <h1>manzanas: {count}</h1>
      <button type="button" onClick={this.handlerState}>Aumentar</button>
    </div>
  )
}

}






//vamos a crear nuestro componente stateless para darle vida  a nuestros componentes

//vamos a combertir nuestri boton de stateless a stateful
// const Button = props => {
//   const {text} = props;//esto se llama destructurar las propiedades en lugar de hacerlo en boton creo esta variable para colocarla en el boton de una vez
//   return (
//     <div>
    
//       <button type="button">{text}</button>
//     </div>
//   );
// };

export default Button;
