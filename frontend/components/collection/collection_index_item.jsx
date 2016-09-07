import React from 'react';
import ReactCollapsible from 'react-collapsible';
import {Link} from 'react-router';
import CollectionCollapsibleContainer from './collection_collapsible_container';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
  }

  componentDidMount() {
    // this.props.fetchAllCollections();
  }

  // mapItems() {
  //   let lis = []
  //   const that = this;
  //
  //   for (let idx in this.props.collections) {
  //     let collection = this.props.collections[idx];
  //     let subLis = [];
  //     if (Object.keys(that.props.feeds).length) {
  //       collection.feeds.forEach(feedId => {
  //         let feed = that.props.feeds[feedId];
  //         subLis.push(<li className='collection-index-item-feed' key={feed.title}>{feed.title}</li>);
  //       });
  //     }
  //     lis.push(
  //       <li className='collection-index-item-collection' key={collection.title}>
  //         <Link to={`/collections/${collection.id}`}>{collection.title}</Link>
  //         <ul>
  //           {subLis}
  //         </ul>
  //       </li>
  //     );
  //   }
  //   return lis;
  //
  // }

  mapItems() {
    let lis = [];
    const that = this;

    for (let idx in this.props.collections) {
      let collection = this.props.collections[idx];
      let subLis = [];
      // if (Object.keys(that.props.feeds).length) {
        lis.push(<CollectionCollapsibleContainer key={collection.id} collection={collection}/>);
      // }
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
