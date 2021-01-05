import React from 'react';
import ReactDOM from 'react-dom'; //es lo que nos ayuda a interectuar con el dom y react
import { Provider } from 'react-redux';//traemos el provider que se encargara de encapsular nuestros componentes por un conect que va transmitir la informacion que tenemos en nuestro store
import { createStore } from 'redux';//creamos el store que se encargara de la logica de nuestro store
//import HelloWorl from './components/HelloWorld' YA NO LO USAREMOS PERO NO LO BORRARE
import initialState from '../initialState.json'; //inicializar nuestro estado
import reducer from './reducers';//lo importamos el reducer
import App from './routes/App';

const store = createStore(reducer, initialState);//creamos el nuevo store para pasarselo a provider recibe dos parametros el primero es un reducer y el segundo nuestro estado inicial
//le pasamos el store a nuestro provider con esto ya podemos usar la data inicial
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
