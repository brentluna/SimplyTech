import React from 'react';
import {Link, hashHistory} from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
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
          <label>Email:
            <input type='text' value={this.state.email} onChange={this.update('email')} className='login-input'/>
          </label>

          <label>Password:
            <input type='password' value={this.state.password} onChange={this.update('password')} className='login-input'/>
          </label>

          <input type='submit' value='Login' onClick={this.handleLogin} />

          <input type='submit' value='Signup' onClick={this.handleSignup} />

        </form>
      </div>
    );
  }
}

export default SessionForm;
