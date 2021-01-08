import md5 from 'md5'; //md5 es un servicio usado por gravatar para no guardar tu correo si no que por medio de criptografia crea un hash y se lo asigna a un correo el tuyo para mostrar un avatar

const gravatar = (email) => { //recibe un correo
  const base = 'https://gravatar.com/avatar/'; //direccion del correo
  const formattedEmail = (email).trim().toLowerCase(); //formatear nuetsro correo electronico quitar espacios y pasarlo a minusculas
  const hash = md5(formattedEmail, { encoding: 'binary' });//creamos nuestro hash le pasamos nuestro correo formateado le quitamos la arroba y le pasamos un bianrio
  return `${base}${hash}`; //retorna la imagen en forma de url que es la que vamos a presentar
};

export default gravatar;
