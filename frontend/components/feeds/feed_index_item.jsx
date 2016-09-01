import React from 'react';
import ReaderModal from './reader_modal';


const FeedIndexItem = ({image, title, summary}) => (
    <li className='feed-index-item group'>
    <div className='img-div'>
      <img className='feed-index-item-image' src={image} />
    </div>
      <div className='index-text-container'>
      <h3 className='feed-index-item-title'>{title}</h3>
        <p className='feed-index-item-summary'>{summary}</p>
      </div>
      <ReaderModal image={image} title={title} content={summary}/>
    </li>
);

export default FeedIndexItem;
