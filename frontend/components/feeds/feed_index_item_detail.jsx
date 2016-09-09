import React from 'react';

const parseSummary = (summary) =>  {
  let result = summary ? summary.replace(/<(?:.|\n)*?>/gm, '') : "";
  result = result.replace(/&nbsp;/g, ' ');
  result = result.replace(/&#8217;/g, "'");
  result = result.replace(/&#8216;/g, "'");
  result = result.replace(/&#038;/g, '&');
  return result;
  }



const FeedIndexItemDetail = ({entry: {title, image, summary, author, feed, published, url}}) => {

  return (

  <div className='reader-modal-container'>
    <div className='reader-modal-img-container'>
      <img src={image} alt=""/>
    </div>

    <h1 className='reader-modal-title'>{title}</h1>
    <p className='reader-modal-content'>{parseSummary(summary)}<a href={url} target='_blank'> Read More</a></p>


    <footer className='popout-footer'>
      <p>Author: {author}</p>
      <p>{published}</p>
  
    </footer>
  </div>
  );
};

export default FeedIndexItemDetail;
