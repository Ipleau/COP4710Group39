import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { createEvent } from "./store/actions/eventActions";

const Universities = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];
const RSO = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];
const Category = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];

const CreateEvent = ({ handleLogout }) => {
    const dispatch = useDispatch()
    const [input, setInput] = React.useState({ title: '', description: '', university: null, rso: null, category: null, time: '', date: '', phone: '', email: '' })

    const onSubmit = React.useCallback(e => {
        e.preventDefault()

        console.log(input)
        
        dispatch(createEvent(input))
    }, [input, dispatch])

    const handleInputChange = React.useCallback(key => e => {
        /*
            obj = { key1: 'abc', key2: '123' }
            ...obj => key1: 'abc', key2: '123'

            obj = { ...obj, key1: 'vhc' }
            { key1: 'vhc', key2: '123' }
        */
       const value = e?.target?.value ?? e

        setInput({ ...input, [key]: value })
    }, [input])

  return (
    <section className="CreateEvent">
      <nav>
        <h2>Create Event</h2>
      </nav>
      <div style={{ maxWidth: 520, margin: '16px auto' }}>
        <form onSubmit={onSubmit}>
          <div class="formBox">
            <label for="title">Event Title</label>
            <input type="text" id="title" placeholder="Event Description" value={input.title} onChange={handleInputChange('title')} />
          </div>
          <div class="formBox">
            <label for="Description">Description</label>
            <input type="text" id="Description" placeholder="Description" value={input.description} onChange={handleInputChange('description')} />
          </div>
          <div class="formBox">
            <label for="University">University</label>
            <Select options={Universities} value={input.university} onChange={handleInputChange('university')} />
          </div>
          <div class="formBox">
            <label for="RSO">RSO</label>
            <Select options={RSO} value={input.rso} onChange={handleInputChange('rso')} />
          </div>
          <div class="formBox">
            <label for="Category">Category</label>
            <Select options={Category} value={input.category} onChange={handleInputChange('category')} />
          </div>
          <div class="formBox">
            <label for="Time">Time</label>
            <input type="time" id="Time" placeholder="Time" value={input.time} onChange={handleInputChange('time')} />
          </div>
          <div class="formBox">
            <label for="Date">Date</label>
            <input type="date" id="Date" placeholder="Date" value={input.date} onChange={handleInputChange('date')} />
          </div>
          <div class="formBox">
            <label for="Phone">Phone</label>
            <input type="text" id="Phone" placeholder="Phone" value={input.phone} onChange={handleInputChange('phone')} />
          </div>
          <div class="formBox">
            <label for="Email">Email</label>
            <input type="text" id="Email" placeholder="Email" value={input.email} onChange={handleInputChange('email')} />
          </div>
          <div class="formBox">
            <button id="btn" type='submit'>Click to Add</button>
          </div>
          <div id="msg">
            <pre></pre>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
