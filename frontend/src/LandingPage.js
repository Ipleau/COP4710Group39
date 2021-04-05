import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

const LandingPage = ({handleLogout}) => {
	return(
		<section className = "LandingPage">
			<nav>
				<h2>Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
			<body>
				<NavLink exact to="/SuperAdmin" className="main-nav" activeClassName="main-nav-active">SuperAdmin</NavLink>
				<NavLink exact to="/Admin" className="main-nav" activeClassName="main-nav-active">Admin</NavLink>
				<NavLink exact to="/Student" className="main-nav" activeClassName="main-nav-active">Student</NavLink>
			</body>
		</section>
		)

}

export default LandingPage;