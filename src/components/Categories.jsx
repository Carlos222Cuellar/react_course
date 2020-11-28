import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (//le pasaremos el titulo de las lista como una prop

  <div>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>

);

export default Categories;
