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
        <h1 className='splash-header'>Welcome to SimplyTech</h1>
          <p className='splash-text'>Your one stop source for everything Tech</p>
        {button}
        <div className='splash-image'></div>
      </section>
      </main>
    );
  }
}

export default Splash;
