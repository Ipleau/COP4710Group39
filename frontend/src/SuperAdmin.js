import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const SuperAdmin = ({handleLogout}) => {
	return(
		<section className = "Super Admin">
			<nav>
				<h2>SuperAdmin Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
		</section>
		)

}

export default SuperAdmin;