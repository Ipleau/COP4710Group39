import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import Select from 'react-select'

const Universities = [
	{label: 'UCF', value:'UCF'},
	{label: 'FSU', value:'FSU'}
]
const RSO = [
	{label: 'UCF', value:'UCF'},
	{label: 'FSU', value:'FSU'}
]
const Category = [
	{label: 'UCF', value:'UCF'},
	{label: 'FSU', value:'FSU'}
]

const CreateEvent = ({handleLogout}) => {	
	return(
		<section className = "CreateEvent">
			<nav>
				<h2>Create Event</h2>
			</nav>
			<body>
    			<form>
        			<div class="formBox">
            			<label for="title">Event Title</label>
            			<input type="text" id="title" placeholder="Event Description"/>
        			</div>
        <div class="formBox">
            <label for="Description">Description</label>
            <input type="text" id="Description" placeholder="Description"/>
        </div>
        <div class="formBox">
            <label for="University">University</label>
            <Select options = {Universities} />
		</div>
		<div class="formBox">
            <label for="RSO">RSO</label>
            <Select options = {RSO} />
		</div>
		<div class="formBox">
            <label for="Category">Category</label>
            <Select options = {Category} />
		</div>
		<div class="formBox">
            <label for="Time">Time</label>
            <input type="number" id="Time" placeholder="Time"/>
        </div>
        <div class="formBox">
            <label for="Date">Date</label>
            <input type="number" id="Date" placeholder="Date"/>
        </div>
        <div class="formBox">
            <label for="Phone">Phone</label>
            <input type="text" id="Phone" placeholder="Phone"/>
        </div>
        <div class="formBox">
            <label for="Email">Email</label>
            <input type="text" id="Email" placeholder="Email"/>
        </div>
        <div class="formBox">
            <button id="btn">Click to Add</button>
        </div>
        <div id="msg">
            <pre></pre>
        </div>
    </form>
    </body>
		</section>
	)

}

export default CreateEvent;