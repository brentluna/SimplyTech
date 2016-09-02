import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className='navbar-group'>
        <nav>

        <Link to='/feeds'><h2>SimplyTech</h2></Link>
          {/* <input type='text' placeholder=<i class="material-icons">search</i> /> */}

        </nav>
      </section>
    );
  }
}

export default NavBar;
