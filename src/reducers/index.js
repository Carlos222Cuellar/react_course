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
    default:
      return state;
  };
};

export default Reducer;
