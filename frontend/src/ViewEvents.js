import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { readEvents } from "./store/actions/eventActions";
const ViewEvents = ({handleLogout}) => {
	const dispatch = useDispatch()

  // Initializes events by calling this on app startup
  	React.useEffect(() => {
    	let promises = [dispatch(readEvents())]
    	Promise.all(promises)
      	.then(() => {
      })
      .catch(() => {
      })
  }, [dispatch])
  function GrabEvents() 
  {
  	const [events] = useSelector(state => [state.events])
  
  	React.useEffect(() => {
    // will only get triggered when events changes
  }, [events])
}
	return(
	<section className="ViewEvents">
	<div>
        <h3>Events List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>University</th>
              <th>RSO</th>
              <th>Category</th>
              <th>Time</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Privacy</th>

            </tr>
          </thead>
          <tbody>
            { 
             }
          </tbody>
        </table>
      </div>
    </section>
	)

}

export default ViewEvents;