import React from 'react';
import FeedIndexItemDetail from '../feeds/feed_index_item_detail';
import Modal from 'react-modal';


const customStyles = {

  content: {
    borderLeft: '1px solid black',
    borderRadius: '1px',
    bottom: '0',
    minHeight: '10rem',
    padding: '2rem',
    position: 'fixed',
    right: '0',
    top: '0',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem',
    left: 'auto'
  }

};


class ReaderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  render() {
    return (
      <div open={this.openModal}>
        <button className='reader-modal-button' onClick={this.openModal}>More Info</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <FeedIndexItemDetail title={this.props.title} image={this.props.image} content={this.props.content} url={this.props.url} author={this.props.author} published={this.props.published} feed={this.props.feed} />
          <button onClick={this.closeModal}>X</button>
        </Modal>
      </div>
    );
  }
}

export default ReaderModal;
