import React from "react";
import {observer} from 'mobx-react';
import './App.css';
import UserStores from './stores/UserStores';
import LoginInfo from './LoginInfo';
import Submit from './Submit';

class App extends React.Component {

	async componentDidMount()
	{
		try{
			let res = await fetch('/isLoggedIn', {
				method: 'post',
				headers: {
					'Accept': 'applictaion/json',
					'Content-Type': 'application/json'
				}
			});

			let result = await res.json();
			if(result && result.success)
			{
				UserStores.loading = false;
				UserStores.isLoggedIn = true;
				UserStores.username = result.username;
			}
			else
			{
				UserStores.loading = false;
				UserStores.isLoggedIn = false;
			}
		}
		catch(e)
		{
			UserStores.loading = false;
			UserStores.isLoggedIn = false;
		}
	}

	async doLogout()
	{
		try
		{
			let res = await fetch('/logout', {
				method: 'post',
				headers: {
					'Accept': 'applictaion/json',
					'Content-Type': 'application/json'
				}
			});

			let result = await res.json();
			if(result && result.success)
			{
				UserStores.isLoggedIn = false;
				UserStores.username = '';
			}
		}
		catch(e)
		{
			console.log(e)
		}
	}

	render() 
	{
		if(UserStores.loading)
		{
			return(
    			<div className="app">
    				<div className = 'container'>
    					loading
    				</div>
    			</div>
    		);
		}
		if(UserStores.isLoggedIn)
		{
			return(
    			<div className="app">
    				<div className = 'container'>
    					Welcome {UserStores.username}

    					<Submit
    						text={'Log out'}
    						disabled = {false}
    						onClick = { () => this.doLogout() }
    						/>
    				</div>
    			</div>
    		);
		}
		return(
    		<div className="app">
    		
    			<LoginInfo />
    		</div>
    	);

	}
  
}

export default observer(App);
