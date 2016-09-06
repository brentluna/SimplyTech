import React from 'react';
import Hamburger from 'react-icons/lib/fa/bars';
import GetStarted from '../get_started/get_started';
import {hashHistory} from 'react-router';
import CollectionIndexContainer from '../collection/collection_index_container';
import CollectionCollapsible from '../collection/collection_collapsible';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideContent = this.sideContent.bind(this);
    this.footer = this.footer.bind(this);
    this.categoryButton = this.categoryButton.bind(this);
    this.fetchCatagories = this.fetchCatagories.bind(this);
  }

  sideContent() {
    let buttonText = 'Login / Signup';
    let sideContent;
    if (!this.props.loggedIn) {
      sideContent = <GetStarted text={buttonText}/>;
      return sideContent;
    } else {
      return <CollectionIndexContainer />;
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

  fetchCatagories () {
    this.props.fetchAllCategories;
    hashHistory.push('/categories');
  }

  categoryButton () {
    if (this.props.loggedIn) {
      return(
        <button onClick={this.fetchCatagories} className='sidebar-category-button'>Categories</button>
      );
    }
  }

  render() {

    return (
      <aside className='sidebar'>
        <div className='hamburger-icon'>
          <Hamburger />
        </div>
        <div className='sidebar-content-container'>
          {this.sideContent()}
          {this.categoryButton()}
        </div>
        <div className='spacer'></div>
        {this.footer()}
      </aside>
    );
  }
}

export default Sidebar;
