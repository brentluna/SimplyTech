import React from 'react';
import {Link} from 'react-router';
import {feedSearch} from '../../util/search_api_util';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: ''};
    this.renderResults = this.renderResults.bind(this);
    this.updateState = this.updateState.bind(this);
    this.searchContent = this.searchContent.bind(this);
    this.loseFocus = this.loseFocus.bind(this);
    this.backOnFocus = this.backOnFocus.bind(this);
  }


  updateState(e) {
    e.preventDefault();
    this.setState({search: e.target.value}, () =>{

        feedSearch(this.state.search, this.renderResults);

    });
  }

  renderResults(feeds) {

    let results = [];
    feeds.forEach(feed => {
      results.push(
        <Link to={`/feeds/${feed.id}`} onClick={this.loseFocus} key={feed.title}>
          <li className='search-li' >
            <div className='search-title'>{feed.title}</div>
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



  searchContent() {
    if (this.state.search.length) {
      return this.state.results;
    } else {
      return '';
    }
  }

  loseFocus() {
    this.setState({search: ''});
  }

  backOnFocus() {
    this.setState({search: this.value});
  }

  render() {

    return(
      <div className='search-container'>
        <div className='search-div'>
          <i className="material-icons search">search</i>
          <input onChange={this.updateState} className='search-input' type='text' placeholder="SEARCH"  />
        </div>
        <ul className='search-ul'>
          {this.searchContent()}
        </ul>
      </div>
    );
  }

}

export default Search;
