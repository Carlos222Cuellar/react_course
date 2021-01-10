import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //importamos link de react router
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarruselItem.scss';
//importando imagenes
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import trashIcon from '../assets/static/remove-icon.png';

const CarruselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });

  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (

    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {/*creamos una operacion ternaria donde si esta en la lista de favoritos no muestra el icono de agregar a favorito y si muestra el icono de eliminar y viceversa si no esta en favoritos no muestra el icono de eliminar pero si el de agregar a la lista de favoritos*/}
          {isList ? <img className='carousel-item__details--img' src={trashIcon} alt='delete Icon' onClick={() => handleDeleteFavorite(id)} /> :
          // eslint-disable-next-line indent
          <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleSetFavorite} />}

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>

  );
};

const mapToDispatchProps = {
  setFavorite,
  deleteFavorite,
};

//export default CarruselItem;
export default connect(null, mapToDispatchProps)(CarruselItem);
