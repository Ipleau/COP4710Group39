import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

const Admin = ({handleLogout}) => {
	return(
		<section className = "Admin">
			<nav>
				<h2>Admin Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
				<NavLink exact to="/CreateEvent" className="main-nav" activeClassName="main-nav-active">CreateEvent</NavLink>
			</nav>
		</section>
		)

}

export default Admin;