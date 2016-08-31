import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class GetStarted extends React.Component {
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
      <div>
        <button className='get-started-button' onClick={this.openModal}>{this.props.text}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Please login or Signup</div>
          <SessionFormContainer closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default GetStarted;
