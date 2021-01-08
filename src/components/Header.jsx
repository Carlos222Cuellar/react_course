import React from 'react'; //importamos react
import { connect } from 'react-redux'; //conectar header con redux para poder hacer uso de gravatar
import { Link } from 'react-router-dom';//importamos Link para manejar las referencias entre rutas y podernos mover mas facil
import '../assets/styles/components/Header.scss';
import gravatar from '../utils/gravatar'; // importando gravatar
//importando las imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import UserLogo from '../assets/static/user-icon.png';
// const logoPlatzi = require("./src/assets/images/google-icon.png");
// const logoUser = require('../assets/images/user-icon.png');
//vamos a crear componentes presencionales que solo solo empujan componentes pero ni tienen logica

const Header = (props) => { //nos aseguramos que estemos recibiendo propos

  const { user } = props; //Destructurando a nuestro usuario de las props asi vamos a usar solo user en lugar de props.user
  const hasUser = Object.keys(user).length > 0 ; //validando si existe el usuario logeado

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
          <li><a href='/'>Cuenta</a></li>
          <li>
            <Link to='/login'>
              Iniciar Sesión
            </Link>
          </li>
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

export default connect(mapStateToProps, null)(Header);
