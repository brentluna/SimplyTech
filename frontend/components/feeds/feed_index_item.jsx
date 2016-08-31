import React from 'react';

const FeedIndexItem = ({image, title, summary}) => (
  <li className='feed-index-item'>
  <div className='img-div'>
    <img className='feed-index-item-image' src={image} />
  </div>
    <div className='index-text-container'>
    <h3 className='feed-index-item-title'>{title}</h3>
      <p className='feed-index-item-summary'>{summary}</p>
    </div>
  </li>
);

export default FeedIndexItem;
