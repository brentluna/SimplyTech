import React from 'react';
import GetStarted from '../get_started/get_started';

class Splash extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <main className='splash-container'>
        <GetStarted />
      </main>
    );
  }
}

export default Splash;
