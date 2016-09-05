import React from 'react';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCollections();
  }

  mapItems() {
    let lis = []

    for (let idx in this.props.collections) {
      let collection = this.props.collections[idx];
      let subLis = [];
      collection.feeds.forEach(feed => {
        subLis.push(<li className='collection-index-item-feed'>{feed.title}</li>)
      });
      lis.push(
        <li className='collection-index-item-collection'>
          {collection.title}
          <ul>
            {subLis}
          </ul>
        </li>
      );
    }
    return lis;

  }

  render() {
    return (
      <ul>
        {this.mapItems()}
      </ul>
    );
  }
}

export default CollectionIndexItem;
