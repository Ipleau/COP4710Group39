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
import { createRSO } from "./store/actions/RSOActions";

const Universities = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];
const Admin = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];
const Student = [
  { label: "UCF", value: "UCF" },
  { label: "FSU", value: "FSU" },
];

const CreateRSO = ({ handleLogout }) => {
    const dispatch = useDispatch()
    const [input, setInput] = React.useState({ title: '', description: '', university: null, admin: null, Student1: null, Student2: null, Student3: null, Student4: null, Student5: null, })

    const onSubmit = React.useCallback(e => {
        e.preventDefault()

        console.log(input)
        
        dispatch(createRSO(input))
    }, [input, dispatch])

    const handleInputChange = React.useCallback(key => e => {
        
       const value = e?.target?.value ?? e

        setInput({ ...input, [key]: value })
    }, [input])

  return (
    <section className="CreateRSO">
      <nav>
        <h2>Create RSO</h2>
      </nav>
      <div style={{ maxWidth: 520, margin: '16px auto' }}>
        <form onSubmit={onSubmit}>
          <div class="formBox">
            <label for="title">RSO Title</label>
            <input type="text" id="title" placeholder="RSO Description" value={input.title} onChange={handleInputChange('title')} />
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
            <label for="Admin">Admin</label>
            <Select options={Admin} value={input.admin} onChange={handleInputChange('admin')} />
          </div>
          <div class="formBox">
            <label for="Student">Student 1</label>
            <Select options={Student} value={input.Student} onChange={handleInputChange('Student1')} />
          </div>
          <div class="formBox">
            <label for="Student">Student 2</label>
            <Select options={Student} value={input.Student} onChange={handleInputChange('Student2')} />
          </div>
          <div class="formBox">
            <label for="Student">Student 3</label>
            <Select options={Student} value={input.Student} onChange={handleInputChange('Student3')} />
          </div>
          <div class="formBox">
            <label for="Student">Student 4</label>
            <Select options={Student} value={input.Student} onChange={handleInputChange('Student4')} />
          </div>
          <div class="formBox">
            <label for="Student">Student 5</label>
            <Select options={Student} value={input.Student} onChange={handleInputChange('Student5')} />
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

export default CreateRSO;
