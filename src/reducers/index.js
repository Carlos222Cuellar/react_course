const Reducer = (state, action) => { //recibe dos valores el state y una accion y retorna el estado
//manejan la imfromacion y las ponen en el estado
  switch (action.type) {
    case 'SET_FAVORITE':
      // eslint-disable-next-line no-case-declarations
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload, //asigno los elementos a user
      };
      //agregando el reducer poara cerrar sesion
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload, //asigno los elementos a user
      };
      //el reducer para el registro
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload, //asigno los elementos a user
      };
      //el reducir de el action para ir a traer el sources del video
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) || //paso el string a tipo number como el id lo recibo por parametro este es un string lo tengo que pasar a numero), //en el arreglo de trends de nuestro inital state voy a usar fin para buscar los id de los item y si uno es identico a el id del action que recibo ese quiero reproducir
        state.originals.find((item) => item.id === Number(action.payload)) || //por si no encuentra nada en trends va ir a buscarlos a originals
        [], //si noe encuentra en ninguno de los dos significa que no existe por lo tanto devolvemos un arreglo vacio
      };
    default:
      return state;
  };
};

export default Reducer;
