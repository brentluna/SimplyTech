import React from 'react';
import ReactCollapsible from 'react-collapsible';
import {Link} from 'react-router';
import CollectionCollapsibleContainer from './collection_collapsible_container';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
    this.all = this.all.bind(this);
    this.favorites = this.favorites.bind(this);
  }

  componentDidMount() {
    // this.props.fetchAllCollections();
  }


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

  all() {
    return (
      <li>
        <Link to={'/feeds'}>
        <div className='collapsible-header-container'>
          <div className='collapsible-button' >
            <i className="material-icons">view_headline</i>
          </div>
          <div className='collapsible-title'>
            All Articles
          </div>
        </div>
        </Link>
      </li>
    );
  }
  favorites() {
    if (Object.keys(this.props.favorites).length) {

      return (
        <li>
          <Link to={'/favorites'}>
          <div className='collapsible-header-container'>
            <div className='collapsible-button' >
              <i className="material-icons">bookmark_border</i>
            </div>
            <div className='collapsible-title'>
              Saved Articles
            </div>
          </div>
          </Link>
        </li>
      );
    }
  }

  render() {
    return (
      <ul>
        {this.favorites()}
        {this.all()}
        {this.mapItems()}
      </ul>
    );
  }
}

export default CollectionIndexItem;
