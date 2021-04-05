import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

const SuperAdmin = ({handleLogout}) => {
	return(
		<section className = "Super Admin">
			<nav>
				<h2>SuperAdmin Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
				<NavLink exact to="/CreateEvent" className="main-nav" activeClassName="main-nav-active">CreateEvent</NavLink>

			</nav>
		</section>
		)

}

export default SuperAdmin;