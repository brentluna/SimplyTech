import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className='navbar-group'>
        <nav className='navbar-nav'>

          <Link to='/feeds'><h2>SimplyTech</h2></Link>
          <div className='search-div'>
            <i className="material-icons md-24 md-light md-inactive">search</i>
            <input className='search-input' type='text' placeholder="SEARCH"/>
          </div>
        </nav>
      </section>
    );
  }
}

export default NavBar;
