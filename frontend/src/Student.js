import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const Student = ({handleLogout}) => {
	return(
		<section className = "Student">
			<nav>
				<h2>Student Event Planning</h2>
				<button onClick={handleLogout}> Logout </button>
			</nav>
		</section>
		)

}

export default Student;