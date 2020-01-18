import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../constants/constants';
import {changeStationID, changePassword, changeRoute, changeAuthState} from '../actions/actions';
import Police from '../Police/Police';
import './signin.css';

const mapStateToProps = state => {
	return {
		PoliceStationID: state.name,
		password: state.password,
		auth: state.auth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		StationIDChange: value => dispatch(changeStationID(value)),
		PasswordChange: value => dispatch(changePassword(value)),
		RouteChange: route => dispatch(changeRoute(route)),
		changeAuthState: val => dispatch(changeAuthState(val)),
	}
}

class signin extends Component{
	constructor() {
		super();
		this.state = {
			loading: false,
		}
	}

    onSubmit = () => {
		const {PoliceStationID, password, changeAuthState} = this.props;

		if(PoliceStationID && password) {
			this.setState({ loading: true });
			auth.signInWithEmailAndPassword(PoliceStationID, password)
				.then((user) => {
					if (user) {
						changeAuthState(true);
					} else {
						this.setState({ loading: false });
						alert('Something went wrong. Please try again later.')	
					}
				})
				.catch((e) => {
					this.setState({ loading: false });
					alert('Authentication Error. Please try refreshing the page.')
				});
		}
		else alert('Please fill the Entries')
    }
    
    enterPressed = event => {
		var code = event.keyCode || event.which;
	    if(code === 13) { 
	    	this.onSubmit();
	    }
	}
    
    render(){
		const {  StationIDChange, PasswordChange, auth } = this.props;
		if (auth) {
			return <Police />
		}
		return (
		  <article className="br3 ba b--black-10 w-50-m w-25-l shadow-5 center">		
			<main onKeyPress={this.enterPressed} className="pa4 br3 black-80">
			<div>
				<fieldset className="ba b--transparent ph0 mh0">
					<legend className="f1 fw6 ph0 black mh0">SignIn</legend>
					<div className="mt3">
					<label className="db fw6 lh-copy black f6">PoliceStationID</label>
					<input onChange={(event) => StationIDChange(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="" name="email"/>
					</div>
					<div className="mv3">
					<label className="db fw6 lh-copy black f6">Password</label>
					<input onChange={(event) => PasswordChange(event.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"/>
					</div>
					{
					this.state.loading
					? <p className="f4 db black">LoggingIn...</p>
					: <p onClick={this.onSubmit} className="f4 link dim db pointer black underline">SignIn</p>
					}
				</fieldset>
			</div>
			</main>
		  </article>
	    );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(signin);