import React from 'react';
import GetStarted from '../get_started/get_started';

class Splash extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let buttonText ='Get Started';
    const button = <GetStarted className='splash-button' text={buttonText}/>;
    return (
      <main className='splash-container'>
      <section className='splash-section'>
      <div className='splash-header-container'>

          <h1 className='splash-header'>Welcome to simply<span>T</span>ech</h1>
            <p className='splash-text'>Your one stop source for everything Tech</p>
          {button}
        </div>
        {/* <div className='splash-image'> */}
        <ul className='splash-ul'>
          <li className='splash-li'>
            <img src='/assets/sidebar.png'/>
          </li>
          <li className='splash-li'>
            <img src='/assets/category.png'/>
          </li>
          <li className='splash-li'>
            <img src='/assets/SimplyTech.png'/>
          </li>
          <li className='splash-li'>
            <img src='/assets/add_feeds.png'/>
          </li>
          <li className='splash-li'>
            <img src='/assets/add_to_collection.png'/>
          </li>
        </ul>
        {/* </div> */}
      </section>
      </main>
    );
  }
}

export default Splash;
