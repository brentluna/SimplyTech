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
    let sideContent;
    if (this.props.loggedIn) {
      sideContent = <h1>Logged In</h1>;
    } else {
      sideContent = <GetStarted />;
    }
    return sideContent;
  }

  footer() {
    let footer = '';
    if (this.props.loggedIn) {
      footer = <button className='logout-button' value='Logout' onClick={this.props.logout}/>;
    }
    return footer;
  }

  render() {
    let sideContent;
    if (this.props.loggedIn) {
      sideContent = <h1>Logged In</h1>;
    } else {
      sideContent = <GetStarted />;
    }
    return (
      <aside className='sidebar'>
        <div className='hamburger-icon'>
          <Hamburger />
        </div>

        {this.sideContent()}
        {this.footer()}
      </aside>
    );
  }
}

export default Sidebar;
