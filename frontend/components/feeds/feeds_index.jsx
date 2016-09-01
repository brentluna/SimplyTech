import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.feedLis = this.feedLis.bind(this);
  }



  feedLis() {
    let lis = [];
    for (let idx in this.props.feeds) {
      let feed = this.props.feeds[idx];
      for (let i = 0; i < feed.entries.length; i++) {
        let entry = feed.entries[i];
        lis.push(<FeedIndexItem title={entry.title} summary={$.parseHTML(entry.summary)[1].innerText} url={entry.url} published={entry.published} image={entry.image}/>);
      }
    }
    return lis;
  }

  render() {
    let content = null;
    if (this.props.feeds) {
      content = this.feedLis();
    } else {
      content =<div>Loading</div>;
    }
    return (
      <main className='feeds-index-container'>
        <ul>
          {content}
        </ul>
      </main>
    );
  }
}

export default FeedsIndex;
