import React from 'react';
import {Link} from 'react-router';
import SearchContainer from './search_container';
import GitHub from 'react-icons/lib/fa/github';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    if (this.props.currentUser) {
      return <SearchContainer />;
    }
  }

  render() {
    return (
      <section className='navbar-group'>
        <nav className='navbar-nav'>

          <Link to='/feeds'><h2 className='navbar-title'>simply<span>T</span>ech</h2></Link>
          <div className='navbar-container-right'>
            {this.search()}
            <a className='github-icon' target='_blank' href='https://github.com/brentluna/SimplyTech'>
              <GitHub />
            </a>
          </div>
        </nav>
      </section>
    );
  }
}

export default NavBar;
