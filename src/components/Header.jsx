import React from 'react'; //importamos react
import { connect } from 'react-redux'; //conectar header con redux para poder hacer uso de gravatar
import { Link } from 'react-router-dom';//importamos Link para manejar las referencias entre rutas y podernos mover mas facil
import '../assets/styles/components/Header.scss';
import gravatar from '../utils/gravatar'; // importando gravatar
import { logoutRequest } from '../actions/index'; //importamos el action para cerrar sesión
//importando las imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import UserLogo from '../assets/static/user-icon.png';
// const logoPlatzi = require("./src/assets/images/google-icon.png");
// const logoUser = require('../assets/images/user-icon.png');
//vamos a crear componentes presencionales que solo solo empujan componentes pero ni tienen logica

const Header = (props) => { //nos aseguramos que estemos recibiendo propos

  const { user } = props; //Destructurando a nuestro usuario de las props asi vamos a usar solo user en lugar de props.user
  const hasUser = Object.keys(user).length > 0 ; //validando si existe el usuario logeado

  //manejador para iniciar y cerrar sesion
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__img'
          src={logo}
          alt='Platzi Video'
        />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {/**vamos a validar si cumple con la imagen va mostrar el avatar si no va mostrar la imagen por defecto */}
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={UserLogo} alt='user icon' />}
          <p>Perfil</p>
        </div>
        <ul>
          {/**vamos a crear una validacion que nos muestre si este logeado alguien o no es decir
             si no esta logeado que muestre iniciar sesion y si esta logeado que diga cerrar sesion
             y vamos a crear el evento para que cuando de click se cierre esta atravez de un manejador */}
          { hasUser ?
            <li><a href='/'>{user.email}</a></li> : //muestra el usuario logeado si no no muestra nada
            null }
          {hasUser ?
            <li><a href='#LogOut' onClick={handleLogout}>Cerrar Sesión</a></li> :
            // eslint-disable-next-line react/jsx-wrap-multilines
            <li>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </li>}
        </ul>
      </div>
    </header>

  );
};

//quiero traerme del estado el elemento que se encarga de nuestros usuarios para eso vamos a traer mapStateToProps

const mapStateToProps = (state) => {
  return {
    user: state.user, //vamos a retornar el usuario desde el estado
  };
};

//como tenemos una accion tenemos que mapearla para que la podamos usar para eso haremos un mapDispatchToProps
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
