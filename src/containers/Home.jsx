import React, { useState, useEffect } from 'react';//le tenemos que pasar useState y useEffect para poder usar Hooks
//import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
//import Footer from '../components/Footer';

//lo traemos porque aqui es donde vamos a traer nuestros componentes
//para unirlos en un solo componente principal

//vamos a crear nuestro container

//tenemos que cambiarle de un return explicito a un return entre llaves
const Home = () => {
  //aqui va ir la logica
  //vamos a añadir a mi estado y vamos a traer dos elemntos el primero es el elemento donde guardo mi estado y el segundo recibe los cambios
  const [video, setvideo] = useState({ mylist: [], trends: [], originals: [] });//stateUse recibe algo para inicializar en este caso un [] vacio

  //usando useEffect que recibe una funcion anonima donde se crea la logica
  useEffect(() => {
  //vamos usar fetch recibe una url para las peticones a nuestra api
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())//recibe la respuesta y la pasa a formato json para usarla
      .then((data) => setvideo(data));//a setvideo le paso la data del resonse
  }, []);//recibe otro parametro que se encarga de escuchar si algo cambia para volver a ejecutar la funcion de otro modo entra en un loop de peticiones

  //probando si trae los datos
  console.log(video);
  return (
    //le pasamos el Reac.fragment para poder decirle que no cree un nodo mas en el dom
    <>
      {/*<Header />  ya no se usa porque en Layout usaremos la vista del header lo mismo para el footer*/ }
      <Search />
      {/**como teniamos tres secciones en la original, entonces lo haremos igual aqui
      pero para que nuestro nombre de la lista en el encabezado varie segun la seccion lo que haremos es
      que le pasaremos una props a categories con el nombre del titulo*/}

      {
        //vamos a validar con logica que si la lista no tiene elementos entonces no quiero que muestre nada
        video.mylist.length > 0 && //si es mayor que cero se muestra si no no
       (
         <Categories title='Mi lista'>
           <Carrusel>
             {
               video.mylist.map((item) => {
                 return (
                   // eslint-disable-next-line react/jsx-props-no-spreading
                   <CarruselItem key={item.id} {... item} />
                 );
               })
             }
           </Carrusel>
         </Categories>
       )
      }
      <Categories title='Tendencias'>
        <Carrusel>
          {
            video.trends.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarruselItem key={item.id} {... item} />
              );
            })
          }
        </Carrusel>
      </Categories>
      <Categories title='Originale de platzi'>
        <Carrusel>
          {
            video.originals.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarruselItem key={item.id} {... item} />
              );
            })
          }
        </Carrusel>
      </Categories>
      { /*<Footer /> */ }
    </>
  );
};

export default Home;
