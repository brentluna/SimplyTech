import React from 'react';
import {Link} from 'react-router';
import SearchContainer from './search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className='navbar-group'>
        <nav className='navbar-nav'>

          <Link to='/feeds'><h2 className='navbar-title'>simplyTech</h2></Link>
          <SearchContainer />
        </nav>
      </section>
    );
  }
}

export default NavBar;
