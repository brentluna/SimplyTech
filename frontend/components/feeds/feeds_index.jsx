import React from 'react';
import FeedIndexItem from './feed_index_item';
import Loading from 'react-loading';

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.feedLis = this.feedLis.bind(this);
    this.parseSummary = this.parseSummary.bind(this);
  }

  parseSummary(summary) {
    return summary ? summary.replace(/<(?:.|\n)*?>/gm, '').split(" ").slice(0, 35).join(" ") + "..." : ""
  }

  feedLis() {
    let lis = [];
    for (let idx in this.props.feeds) {
      let feed = this.props.feeds[idx];
      for (let i = 0; i < feed.entries.length; i++) {
        let entry = feed.entries[i];
        lis.push(<FeedIndexItem title={entry.title} summary={this.parseSummary(entry.summary)} url={entry.url} published={entry.published} image={entry.image} title={entry.title} author={entry.author} feed={feed.title} key={`${idx + i}${entry.url}`}/>);
      }
    }
    return lis;
  }

  render() {
    let content = null;
    console.log(this.props.feeds);
    if (Object.keys(this.props.feeds).length) {
      content = this.feedLis();
    } else {
      // debugger
      content = <Loading type='bars' color='purple' />;
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
