import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const LandingPage = ({handleLogout}) => {
	return(
		<section className = "LandingPage">
			<nav>
				<h2>Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
			<body>
				<Link exact to="/SuperAdmin" className="btn btn-primary">SuperAdmin</Link>
				<Link exact to="/Admin" className="btn btn-primary">Admin</Link>
				<Link exact to="/Student" className="btn btn-primary">Student</Link>
			</body>
		</section>
		)

}

export default LandingPage;