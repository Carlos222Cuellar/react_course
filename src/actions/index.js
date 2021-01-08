/**
 * vamos a crear el primero que se encarga de describir la informacion que vamos a poseer
 * ademas va devolver un objeto que vamos a tener disponible dentro de nuestro reducer
 * el que despues va tomar la accion que nosotros estemos ejecutando para evaluar
 * como lo va guardar dentro de nuestro estado
 * type: para indicar la acción que se va a ejecutar.
 * payload: es la información que estamos mandando al reducer.
 */

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

//vamos a crear lo que va eliminar nuestrao item de la lista de favoritos

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});
