//esto va servir para poder manejar el header y el footer por cada ruta que nos movamos sin estarlo renderizando en cada vista
import React from 'react';
import Header from './Header';//importamosel header a mostrar
import Footer from './Footer';//importamos el footer a mostrar

const Layout = ({ children }) => ( //va recibir un hijo como prop el cual va ser lo que queremos renderizar entre el footer y header
//alli recibe el hino entre el header y el footer que va ser lo que se va renderizar
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>

);

export default Layout;
