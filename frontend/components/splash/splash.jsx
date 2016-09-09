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
        <h1 className='splash-header'>Welcome to simply<span>T</span>ech</h1>
          <p className='splash-text'>Your one stop source for everything Tech</p>
        {button}
        {/* <div className='splash-image'> */}
        <img src='https://s3.amazonaws.com/user-media.venngage.com/558588-e5865108d947677358534d37ceb1f464.jpg'/>
        {/* </div> */}
      </section>
      </main>
    );
  }
}

export default Splash;
