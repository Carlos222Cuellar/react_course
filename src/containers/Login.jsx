import React, { useState } from 'react'; //llamamos a useState para usar hooks
import { connect } from 'react-redux'; //vamos a conectar nuestro login con redux es decir le vamos a mandar los estados a nuestra aplicacion
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions'; //importamos nuestro accions
//agregando las imagenes
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({ //el form me permite ver la informacion que estoy recibiendo y el setValues me permite guardarlos cuando cambien
    email: '', //informacion inicial vacio porque no lo tengo aun
  });

  const handleInput = (event) => { //escucha el evento de nuestro inputs
    setValues({ //voy a guardar los datos
      ...form, //tengo que tener lo que esta en form
      [event.target.name]: event.target.value, //vamos a hacer dinamica la informacion es decir voy a obtener el nombre del input y le asigno el valor que tienen en ese momento
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //previene el comportamiento po defecto de html que cuando se da click en un boton la info se envie atravez de la url lo cual puede interferir con nuestras rutas
    props.loginRequest(form); //envio los datos del form a las props de la accion es decir la mando al estado simulando el inicio de sesion
    props.history.push('/'); //nos permite movernos para donde sea necesario dependiendo del compotamiento de nuetsra app esto es parte de react router
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input name='email' className='input' type='text' placeholder='Correo' onChange={handleInput} />
          <input name='password' className='input' type='password' placeholder='Contraseña' onChange={handleInput} />
          <button className='button' type='submit'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='googleImagen' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='TwitterImagen' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link className='registrarse_palabra' to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
