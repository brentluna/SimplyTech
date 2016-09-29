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
            <p className='splash-text'>Your one stop source for tech news!</p>
          {button}
        </div>
        {/* <div className='splash-image'> */}

        <ul className='splash-ul'>
          <li className='splash-li'>
            <ul className='splash-feature-ul'>
              <li>
                <div className='feature-div'>
                  <i className="material-icons feature">rss_feed</i>
                  <div className='icon-title-div'>
                  <h4>Your blogs</h4>
                  <p> 
                    Dive deeper by following blogs from the latest movers, shakers and thinkers in the tech world. 
                  </p>
                  </div>
                </div>
              </li>      
              <li>
                <div className='feature-div'>
                  <i className="material-icons feature">view_list</i>
                  <div className='icon-title-div'>
                  <h4>Read</h4>
                  <p> 
                    simplyTech offers a clean, minimalist reading experience optimized for productivity.
                  </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='feature-div'>
                  <i className="material-icons feature">apps</i>
                  <div className='icon-title-div'>
                  <h4>Organize</h4>
                  <p> 
                    Let the web work for you by arranging the content you rely on inot easy-to-read collections.
                  </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='feature-div'>
                  <i className="material-icons feature">bookmark_border</i>
                  <div className='icon-title-div'>
                  <h4>Save for later</h4>
                  <p> 
                    Save stories and easily get back to them at a later time.
                  </p>
                  </div>
                </div>
              </li>
            </ul> 
          </li>
          <li className='splash-li'>
            <img src='/assets/sidebar.png'/>
          </li>
          
          <li className='splash-li'>
            <img src='/assets/SimplyTech.png'/>
          </li>
          <li className='splash-li'>
            <img src='/assets/add_feeds.png'/>
          </li>
        </ul>
        {/* </div> */}
      </section>
      </main>
    );
  }
}

export default Splash;
