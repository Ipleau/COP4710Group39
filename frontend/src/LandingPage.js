import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const LandingPage = ({handleLogout}) => {
	return(
		<section className = "LandingPage">
			<nav>
				<h2>Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
		</section>
		)

}

export default LandingPage;