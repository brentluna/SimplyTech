import React from 'react';
import ReaderModal from './reader_modal';


const FeedIndexItem = ({image, title, summary, feed, url, published, author, onClick}) => (
    <li onClick={onClick} className='feed-index-item group'>
    <div className='img-div'>
      <img className='feed-index-item-image' src={image} />
    </div>
      <div className='index-text-container'>
      <h3 className='feed-index-item-title'>{title}</h3>
        <p className='feed-index-item-summary'>{summary}</p>
        <footer>
          <p>{feed}</p>
          <p>{published}</p>

        </footer>
      </div>
      {/* <ReaderModal isOpen={} image={image} title={title} content={summary} url={url} published={published} author={author} feed={feed}/> */}
    </li>
);

export default FeedIndexItem;
