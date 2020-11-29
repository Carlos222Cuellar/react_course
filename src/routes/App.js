import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //browser se va encargar de encapsular todos los elementos para podr trabajar con la navegacion que le vamos a añadir a nuestro proyecto
import Home from '../containers/Home';//exportamos el Home de nuestra App a usar
import Login from '../containers/Login';//exportamos el login para usarlo
import Register from '../containers/Register';//importamos el register
import NotFound from '../containers/NotFound';//imporyando el notfound
import Layout from '../components/Layout';//importamos layout que va manejar nuestro footer y header

const App = () => (
  //se encargara de encapsular nuestras rutas en el proyecto luego con route le pasamos el path para nuestro Home pero le tenemos que cambiar el nombre a nuestro archivo App por Home
  //con switch lo que logramos es que solo un elemento por ruta se muestre asi tenemos mejor comtrol de todo
  <BrowserRouter>
    {/*vamos a encapslar nuestro switch para que sea el hijo que reciva nuestro layput */}
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
