import React from 'react';

const CategoryIndexItem = ({title, image}) => {

  return (
    <div className='category-item-container'>
      <li>
        <h1 className='category-item-title'>{title}</h1>
        <div className='category-item-img-container'>
          <img className='category-item-img' src={image} />
        </div>
      </li>
    </div>
  );
};

export default CategoryIndexItem;
