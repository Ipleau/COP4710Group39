import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

const ViewEvents = ({handleLogout}) => {
	return(
		<section className = "ViewEvents">
			<nav>
				<h2>Event List</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
			<body>

			</body>
		</section>
		)

}

export default ViewEvents;