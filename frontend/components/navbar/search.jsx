import React from 'react';
import {Link} from 'react-router';
import {feedSearch} from '../../util/search_api_util';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: ''};
    this.renderResults = this.renderResults.bind(this);
    this.updateState = this.updateState.bind(this);
  }


  updateState(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({search: e.target.value}, () =>{
      if (this.state.search.length) {
        feedSearch(this.state.search, this.renderResults);
      }
    });
  }

  renderResults(feeds) {
    let results = [];
    feeds.forEach(feed => {
      results.push(
        <Link to={`/feeds/${feed.id}`}>
          <li>
            {feed.title}
          </li>
        </Link>
      );
    });
    if (results.length) {
      this.setState({results: results});
    } else {
      this.setState({results: ''});
    }
  }

  render() {

    return(
      <div className='search-container'>
        <div className='search-div'>
          <i className="material-icons md-24 md-light md-inactive">search</i>
          <input onChange={this.updateState} className='search-input' type='text' placeholder="SEARCH"/>
        </div>
        <ul>
          {this.state.results}
        </ul>
      </div>
    );
  }

}

export default Search;
