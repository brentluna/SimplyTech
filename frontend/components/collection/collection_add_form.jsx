import React from 'react';
import FeedIndexItemDetail from '../feeds/feed_index_item_detail';
import Modal from 'react-modal';


const customStyles = {

  content: {
    boxShadow: "8px 10px 34px rgba(0, 0, 0, .5)",
    top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background: '#966fd6',
      padding: '40px',
      minWidth: '300px',
      minHeight:'300px'

  }

};


class CollectionAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {subscribe:[], unsubscribe:[], modalIsOpen: false, newVisible: false, newCollectionName: ''};
    // this.state =  {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.mapCollections = this.mapCollections.bind(this);
    this.collectionHasFeed = this.collectionHasFeed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.newCollection = this.newCollection.bind(this);
    this.updateNewName = this.updateNewName.bind(this);
    this.createNewCollection = this.createNewCollection.bind(this);
    this.newCollectionButton = this.newCollectionButton.bind(this);
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
      if(feed === this.props.feedId) {
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
        <li className='add-collection-checkbox-li' key={collection.id}>
          <label className='add-collection-checkbox-label'>
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

  newCollection() {
    if (this.state.newVisible) {
      return (
        <div className='new-collection-input-container'>
          <input type='text' onChange={this.updateNewName} placeholder='Collection Name' className='new-collection-input'/>
          <button className='create-collection-button' onClick={this.createNewCollection}>Create</button>
        </div>
        );
    }
  }
  createNewCollection(e) {
    e.preventDefault();

    debugger
    if (this.state.newCollectionName.length) {
      this.props.addCollection(this.state.newCollectionName);
      this.setState({newCollectionName: '', newVisible: false});

    }
  }

  updateNewName(e) {
    e.preventDefault();
    this.setState({newCollectionName: e.target.value});
  }

  toggleVisible(e) {
    e.preventDefault();
    let newState = !this.state.newVisible;
    this.setState({newVisible: newState});
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
    this.props.fetchAllCollections();
  }

  newCollectionButton() {
    if (!this.state.newVisible) {
      return (
        <button className='new-collection-button' onClick={this.toggleVisible}><i className="material-icons">add_circle_outline</i></button>
      );
    } else {
      return (
        <button className='new-collection-button' onClick={this.toggleVisible}><i className="material-icons">remove_circle_outline</i></button>
      );
    }
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
              <ul className='add-collection-ul'>
                {this.mapCollections()}
              </ul>
              <div className='new-collection-button-input-container'>
                {this.newCollectionButton()}
                {this.newCollection()}
              </div>
              <button className='add-collection-submit-button'>Update</button>
            </form>
          </div>
          <button className='add-collection-close-button' onClick={this.closeModal}><i className="material-icons">close</i></button>
        </Modal>
      </div>
    );
  }
}
export default CollectionAddForm;
