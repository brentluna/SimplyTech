import React from 'react';
import {Link} from 'react-router';

class CollectionCollapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state= {visible: false};
    this.liContent = this.liContent.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.titleHeader = this.titleHeader.bind(this);
    this.expandButton = this.expandButton.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllCollections();
  //   this.props.fetchAllFeeds();
  // }

  liContent() {
    let subLis = []
    const that = this;

    if (that.props.feeds && Object.keys(that.props.feeds).length){
      this.props.collection.feeds.forEach(feedId => {
        let feed = that.props.feeds[feedId];
        subLis.push(<li className='collection-index-item-feed'>{feed.title}</li>);
      });
    }
    if (this.state.visible) {

      return subLis;
    }
  }

  titleHeader() {
    let header = '';
    if (this.props.collection) {
      header = <Link to={`/collections/${this.props.collection.id}`}>
        <h3>{this.props.collection.title}</h3>
      </Link>
    }
    return header;
  }

  expandButton() {
    if (this.state.visible) {
      return <i className="material-icons">expand_less</i>;
    } else {
      return <i className="material-icons">expand_more</i>;
    }
  }


  toggleVisible(e) {
    e.preventDefault();
    let newState = !this.state.visible;
    this.setState({visible: newState });
  }

  render() {
    let titleHeader = '';
    if (this.props.collection) {
      titleHeader = this.props.collection.title;
    }


    return(
      <li>
        <div className='collapsible-header-container'>
          <div className='collapsible-button' onClick={this.toggleVisible}>
            {this.expandButton()}
          </div>
          <div className='collapsible-title'>
            {this.titleHeader()}
          </div>
        </div>
        <ul>
          {this.liContent()}
        </ul>
      </li>
    );
  }

}

export default CollectionCollapsible;
