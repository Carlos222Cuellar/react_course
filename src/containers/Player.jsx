import React, { useEffect } from 'react'; //importamos react
import { connect } from 'react-redux'; //importamos connect de redux
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions/index';
import '../assets/styles/components/Player.scss'; //importamos los estilos

const Player = (props) => { //por medio de props le voy a pasar una funcion al boton para regresar al home cuando de click en el

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  //vamos a validar si el video que estamos buscando esxiste o si no existe
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0; //el arreglo debe de ser mayor a cero para que exista video.

  //vamos a usar userEffect de react hooks para hacer un efecto para trasmitir el id a las actions y luego vaya a los redurcer y alli lo filtre y lo regrese aqui
  useEffect(() => {
    props.getVideoSource(id); //paso el id que necesita para que haga el filtrado en el reducer
  }, []); //le paso el arreglo vacio porque si no se renderiza nada y se hace un loop infinito

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src='props.playing.source' type='video/mp4' />
      </video>
      <div className='Player-back'>
        {/**nos permite regresar atras esto gracias a las props */}
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to='/404/' type='{/**se usa para que si no encuentra el video nos redirecciones a la pagina de error */}' />;

};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

//vamos a crear nuestro masDispatchToProps que es el que se encargara de disparar nuestras action para el player
const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
