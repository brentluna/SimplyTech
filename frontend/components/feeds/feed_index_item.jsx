import React from 'react';
import ReaderModal from './reader_modal';


const favorite = (image, title, summary, feed, url, published, author, id, addFav, removeFav, inFav) => {

  return (e) => {
    e.preventDefault();
    e.stopPropagation();

    let newFavorite = {image, title, summary, feed, url, author, published,id};
    if (inFav) {
      removeFav(newFavorite);
    } else {
      addFav(newFavorite);
    }
  };

};

const FeedIndexItem = ({image, title, summary, feed, url, published, author, onClick, id, addFavorite, removeFavorite, inFavs}) => {
  return (
    <li onClick={onClick} className='feed-index-item group'>
    <div className='img-div'>
      <img className='feed-index-item-image' src={image} />
    </div>
      <div className='index-text-container'>
      <h3 className='feed-index-item-title'>{title}</h3>
        <p className='feed-index-item-summary'>{summary}</p>
        <footer>
          <p>{feed}</p>
          <div className='bookmark-container'>
          <p>{published}</p>
            <i onClick={favorite(image, title, summary, feed, url, published, author, id, addFavorite, removeFavorite, inFavs)} className="material-icons">bookmark_border</i>
          </div>
        </footer>
      </div>
    </li>
);
};

export default FeedIndexItem;
