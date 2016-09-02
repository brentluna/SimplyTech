import React from 'react';
import {Link} from 'react-router';

const CategoryIndexItem = ({title, image, id}) => {

  return (
    <div className='category-item-container'>
    <Link to={`/categories/${id}`}>
      <li>
        <h1 className='category-item-title'>{title}</h1>
        <div className='category-item-img-container'>
          <img className='category-item-img' src={image} />
        </div>
      </li>
    </Link>
    </div>
  );
};

export default CategoryIndexItem;
