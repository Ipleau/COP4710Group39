import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const Admin = ({handleLogout}) => {
	return(
		<section className = "Admin">
			<nav>
				<h2>Admin Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
		</section>
		)

}

export default Admin;