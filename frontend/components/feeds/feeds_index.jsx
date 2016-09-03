import React from 'react';
import FeedIndexItem from './feed_index_item';
import Loading from 'react-loading';
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


class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false, currentEntry: {}};
    this.feedLis = this.feedLis.bind(this);
    this.parseSummary = this.parseSummary.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  parseSummary(summary) {
    return summary ? summary.replace(/<(?:.|\n)*?>/gm, '').split(" ").slice(0, 35).join(" ") + "..." : "";
  }

  openModal(entry, feed) {
    entry.feed = feed;
    this.setState({modalOpen: true, currentEntry: entry});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  feedLis() {
    let lis = [];
    for (let idx in this.props.feeds) {
      let feed = this.props.feeds[idx];
      for (let i = 0; i < feed.entries.length; i++) {
        let entry = feed.entries[i];
        lis.push(<FeedIndexItem onClick={this.openModal.bind(this, entry, feed)} title={entry.title} summary={this.parseSummary(entry.summary)} url={entry.url} published={entry.published} image={entry.image} title={entry.title} author={entry.author} feed={feed.title} key={`${idx + i}${entry.url}`}/>);
      }
    }
    return lis;
  }

  render() {
    let content = null;
    if (Object.keys(this.props.feeds).length) {
      content = this.feedLis();
    } else {
      // debugger
      content = <Loading type='bars' color='#966fd6' style='width: 300px; height: 400px;' />;
    }
    return (
      <main className='feeds-index-container'>
        <ul>
          {content}
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <FeedIndexItemDetail entry={this.state.currentEntry} />
          <button onClick={this.closeModal}>X</button>
        </Modal>
      </main>
    );
  }
}

export default FeedsIndex;
