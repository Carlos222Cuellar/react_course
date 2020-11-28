import React from 'react'; //importamos react
import '../assets/styles/components/Header.scss';
//importando las imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import UserLogo from '../assets/static/user-icon.png';
// const logoPlatzi = require("./src/assets/images/google-icon.png");
// const logoUser = require('../assets/images/user-icon.png');
//vamos a crear componentes presencionales que solo solo empujan componentes pero ni tienen logica

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src={logo}
      alt='Platzi Video'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={UserLogo} alt='user icon' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);

export default Header;
