import React from "react";
import Inputs from './Inputs';
import Submit from './Submit';
import UserStores from './stores/UserStores';

class LoginInfo extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			username: '',
			password: '',
			buttonDisabled: false
		}
	}
	setInputValue(property, val)
	{
		val = val.trim();
		if (val.length > 20)
		{
			return;
		}
		this.setState({
			[property]: val
		})
	}
	resetForm() {
		this.setState({
			username: '',
			password: '',
			buttonDisabled: false
		})
	}
	async doLogin() {
		if(!this.state.username)
		{
			return;
		}
		if(!this.state.password)
		{
			return;
		}
		this.setState({
			buttonDisabled: true
		})
		try{
			let res = await fetch('/login',{
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})
			});
			let result = await res.json();
			if (result && result.success)
			{
				UserStores.isLoggedIn = true;
				UserStores.username = result.username;
			}
			else if (result && result.success === false)
			{
				this.resetForm();
				alert(result.msg);
			}
		}
		catch(e)
		{
			console.log(e);
			this.resetForm();
		}
	}
	render() 
	{
		return(
    		<div className="loginInfo">
    			Log In
    			<Inputs
    			type = 'text'
    			placeholder = 'Username'
    			value = {this.state.username ? this.state.username : ''}
    			onChange = { (val) => this.setInputValue('username', val)}
    			/>
    			<Inputs
    			type = 'text'
    			placeholder = 'Password'
    			value = {this.state.password ? this.state.password : ''}
    			onChange = { (val) => this.setInputValue('password', val)}
    			/>
    			<Submit
    				text= 'Login'
    				disabled={this.state.buttonDisabled}
    				onClick = { () => this.doLogin() }
    			/>

    		</div>
    	);

	}
  
}

export default LoginInfo;
