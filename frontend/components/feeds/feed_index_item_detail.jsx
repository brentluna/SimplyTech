import React from 'react';

const FeedIndexItemDetail = ({title, image, content}) => (
  <div className='reader-modal-container'>
    <div className='reader-modal-img-container'>
      <img src={image} alt=""/>
    </div>

    <h1 className='reader-modal-title'>{title}</h1>
    <p className='reader-modal-content'>{content}</p>
  </div>
);

export default FeedIndexItemDetail;
