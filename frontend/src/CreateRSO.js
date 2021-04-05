import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";
import Select from 'react-select'

const CreateRSO = ({handleLogout}) => {
	return(
		<section className = "CreateRSO">
			<nav>
				<h2>Create RSO</h2>
			</nav>
			<div class="formBox">
            	<label for="Title">Title</label>
            	<input type="text" id="Title" placeholder="Title"/>
        	</div>
        	<div class="formBox">
            	<label for="Description">Description</label>
            	<input type="text" id="Description" placeholder="Description"/>
       		</div>
       		<div class="formBox">
            	<label for="Email">Email 1</label>
            	<input type="text" id="Email" placeholder="Email"/>
        	</div>
        	<div class="formBox">
            	<label for="Email">Email 2</label>
            	<input type="text" id="Email" placeholder="Email"/>
        	</div>
        	<div class="formBox">
            	<label for="Email">Email 3</label>
            	<input type="text" id="Email" placeholder="Email"/>
        	</div>
        	<div class="formBox">
            	<label for="Email">Email 4</label>
            	<input type="text" id="Email" placeholder="Email"/>
        	</div>
        	<div class="formBox">
            	<label for="Email">Email 5</label>
            	<input type="text" id="Email" placeholder="Email"/>
        	</div>
		</section>
		)

}

export default CreateRSO;