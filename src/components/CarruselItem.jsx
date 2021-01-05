import React from 'react';
import { connect } from 'react-redux';
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
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
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
