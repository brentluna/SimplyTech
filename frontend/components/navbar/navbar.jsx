import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className='navbar-group'>
        <nav>
          <h2>SimplyTech</h2>
          <input type='text' placeholder=<i class="material-icons">search</i> />

        </nav>
      </section>
    );
  }
}

export default NavBar;
