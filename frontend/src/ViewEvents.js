import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

const LandingPage = ({handleLogout}) => {
	return(
		<section className = "LandingPage">
			<nav>
				<h2>Event List</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
			<body>

			</body>
		</section>
		)

}

export default LandingPage;