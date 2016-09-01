import React from 'react';

const FeedIndexItemDetail = ({title, image, content, author, feed, published, url}) => (
  <div className='reader-modal-container'>
    <div className='reader-modal-img-container'>
      <img src={image} alt=""/>
    </div>

    <h1 className='reader-modal-title'>{title}</h1>
    <p className='reader-modal-content'>{content}<a href={url} target='_blank'> Read More</a></p>


    <footer className='popout-footer'>
      <p>Author: {author}</p>
      <p>{published}</p>

    </footer>
  </div>
);

export default FeedIndexItemDetail;
