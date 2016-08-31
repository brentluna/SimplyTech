import React from 'react';

const FeedIndexItem = ({image, title, summary}) => (
  <li>
    <h3>{title}</h3>
    <p>{summary}</p>
    <img src={image} />
  </li>
);

export default FeedIndexItem;
