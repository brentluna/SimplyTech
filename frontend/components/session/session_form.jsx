import React from 'react';
import {Link, hashHistory} from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.closeModal();
    }
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }


  redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}


  handleLogin(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  handleSignup(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  demoLogin() {
    let demoEmail = 'user@demo.com'.split('');
    let demoPassword = 'password'.split('');

    const that = this;
    let interval = setInterval(() => {
        if (demoEmail.length > 0) {
          this.setState({email: `${this.state.email}${demoEmail.shift()}`});
        } else if (demoPassword.length > 0){
          this.setState({password: `${this.state.password}${demoPassword.shift()}`});
        } else {

          const user = this.state;
          console.log(user);
          this.props.login({user});
          clearInterval(interval);
        }

    },200);
  }

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {
    return(
      <div className='login-form-container'>
        <form  className='login-form'>
          {this.renderErrors()}
          <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.update('email')} className='login-input'/>


          <label>Password</label>
            <input type='password' value={this.state.password} onChange={this.update('password')} className='login-input'/>


          <div className='login-button-container'>
            <input type='submit' value='Login' onClick={this.handleLogin} className='login-button'/>

            <input type='submit' value='Signup' onClick={this.handleSignup} className='login-button' />

            <input type='submit' value='Demo Login' onClick={this.demoLogin} className='login-button' />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
