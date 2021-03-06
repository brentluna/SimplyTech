import React from 'react';
import FeedIndexItem from './feed_index_item';
import Loading from 'react-loading';
import FeedIndexItemDetail from '../feeds/feed_index_item_detail';
import Modal from 'react-modal';

const customStyles = {

  content: {
    boxShadow: "8px 10px 34px rgba(0, 0, 0, .5)",
    bottom: '0',
    minHeight: '10rem',
    padding: '2rem',
    position: 'fixed',
    right: '-100%',
    top: '0',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem',
    left: '100%',
    transition: '.7s',
    zIndex: '2'

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
    this.feedTitle = this.feedTitle.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  parseSummary(summary) {
    let result = summary ? summary.replace(/<(?:.|\n)*?>/gm, '').split(" ").slice(0, 35).join(" ") + "..." : "";
    result = result.replace(/&nbsp;/g, ' ');
    result = result.replace(/&#8217;/g, "'");
    result = result.replace(/&#8216;/g, "'");
    result = result.replace(/&#038;/g, '&')
    return result;
  }

  componentDidMount() {
    // if (!Object.keys(this.props.state.collections).length) {
    //   this.props.fetchAllCollections();
    // }
    // if (!Object.keys(this.props.state.feeds).length) {
    //   console.log('fetchAll from inside feedsIndex CDM');
    //   this.props.fetchAllFeeds();
    // }
  }

  openModal(entry, feed) {
    entry.feed = feed;

    this.setState({modalOpen: true, currentEntry: entry});
  }

  onModalOpen() {

    customStyles.content.left = 'auto';
    customStyles.content.right = '0';
  }

  closeModal() {
    customStyles.content.left = '100%';
    customStyles.content.right = '-100%';
    this.setState({modalOpen: false});
  }

  feedTitle(feed, entry) {
    let feedTitle;

    if (this.props.feedObjs && Object.keys(this.props.feedObjs).length) {
        feedTitle = this.props.feedObjs[feed].title;
    }
    return feedTitle;
  }

  feedLis() {


    let lis = [];
    for (let idx in this.props.feeds) {
      let feed = this.props.feeds[idx];
      for (let i = 0; i < feed.entries.length; i++) {
        let entry = feed.entries[i];

        let feedTitle = this.feedTitle(entry.feed, entry);
        lis.push(
          <FeedIndexItem
          onClick={this.openModal.bind(this, entry, entry.feed)} title={entry.title}
          summary={this.parseSummary(entry.summary)}
          url={entry.url}
          published={entry.published}
          image={entry.image}
          title={entry.title}
          author={entry.author}
          id={entry.id}
          feed={feedTitle}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
          inFavs={this.props.favs}
          key={`${idx + i}${entry.url}`}
          />
        );
      }
    }
    return lis;
  }

  render() {
    let content = null;
    if (Object.keys(this.props.feeds).length) {
      content = this.feedLis();
    } else {
      content = <Loading className='loading-bars' type='bars' color='#7e5bbe' style='width: 300px; height: 400px;' />;
    }
    return (
      <main className='feeds-index-container'>
        <ul>
          {content}
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.onModalOpen}
          style={customStyles} >
          <FeedIndexItemDetail entry={this.state.currentEntry} />
          <button className='reader-close-button' onClick={this.closeModal}><i className="material-icons">clear</i></button>
        </Modal>
      </main>
    );
  }
}

export default FeedsIndex;
