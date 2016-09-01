import React from 'react';
import Hamburger from 'react-icons/lib/fa/bars';
import GetStarted from '../get_started/get_started';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideContent = this.sideContent.bind(this);
    this.footer = this.footer.bind(this);
  }

  sideContent() {
    let buttonText = 'Login / Signup';
    let sideContent;
    if (!this.props.loggedIn) {
      sideContent = <GetStarted text={buttonText}/>;
      return sideContent;
    }

  }

  footer() {
    let footer = '';
    if (this.props.loggedIn) {
      footer = <footer className='sidebar-footer'>
        <div className='footer-email'>
          {this.props.currentUser.email}
        </div>
        <button className='logout-button' onClick={this.props.logout}>Logout</button>
      </footer>;
    }
    return footer;
  }

  render() {

    return (
      <aside className='sidebar'>
        <div className='hamburger-icon'>
          <Hamburger />
        </div>

        {this.sideContent()}
        <div className='spacer'></div>
        {this.footer()}
      </aside>
    );
  }
}

export default Sidebar;
