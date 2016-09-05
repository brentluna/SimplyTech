import React from 'react';
import FeedIndexItemDetail from '../feeds/feed_index_item_detail';
import Modal from 'react-modal';


const customStyles = {

  content: {
    border: '1px solid black',
    top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
  }

};


class CollectionAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {subscribe:[], unsubscribe:[], modalIsOpen: false};
    // this.state =  {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.mapCollections = this.mapCollections.bind(this);
    this.collectionHasFeed = this.collectionHasFeed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }



  collectionHasFeed(collection) {
    let result = false;
    collection.feeds.forEach(feed => {
      if(feed.id === this.props.feedId) {
        result = true;
      }
    });
    return result;
  }

  updateState(e) {
    if(e.target.checked) {
      this.setState({subscribe: [...this.state.subscribe, {feed_id: this.props.feedId, collection_id: parseInt(e.target.value)}]});
    } else {
      this.setState({unsubscribe: [...this.state.unsubscribe, {feed_id: this.props.feedId, collection_id: parseInt(e.target.value)}]});
    }
  }

  mapCollections() {
    let collectionLis = [];
    for(let idx in this.props.collections) {
      let collection = this.props.collections[idx];
      collectionLis.push(
        <li key={collection.id}>
          <label>
            <input
              className='add-collection-checkbox'
              type='checkbox'
              value={collection.id}
              onChange={this.updateState}
              defaultChecked={this.collectionHasFeed(collection)}
            />
            {collection.title}
          </label>
        </li>
      );
    }
    return collectionLis;
  }

  handleSubmit(e) {
    this.closeModal();
    e.preventDefault();
    this.state.subscribe.forEach(subs => {
      this.props.createCollectionFeed(subs.collection_id, subs.feed_id);
    });

    this.state.unsubscribe.forEach(subs => {
      this.props.deleteCollectionFeed(subs.collection_id, subs.feed_id);
    });
  }

  render() {
    return (
      <div open={this.openModal}>
        <button className='add-modal-button' onClick={this.openModal}>Add To Collection</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div>
            <form onSubmit={this.handleSubmit}>
              <ul>
                {this.mapCollections()}
              </ul>
              <button>Update</button>
            </form>
          </div>
          <button onClick={this.closeModal}>X</button>
        </Modal>
      </div>
    );
  }
}
export default CollectionAddForm;
