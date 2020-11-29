import React from 'react'; //importamos react
import { Link } from 'react-router-dom';//importamos Link para manejar las referencias entre rutas y podernos mover mas facil
import '../assets/styles/components/Header.scss';
//importando las imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import UserLogo from '../assets/static/user-icon.png';
// const logoPlatzi = require("./src/assets/images/google-icon.png");
// const logoUser = require('../assets/images/user-icon.png');
//vamos a crear componentes presencionales que solo solo empujan componentes pero ni tienen logica

const Header = () => (
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
        <img src={UserLogo} alt='user icon' />
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

export default Header;
