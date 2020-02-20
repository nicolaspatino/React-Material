import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from "moment";
import logo from '../logo.svg';
import {TodoList} from "./TodoList";
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';


export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render(){
        return(
        <div className="App">

            <br/>
            <br/>
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <h3>New TODO</h3>
                <TextField id="text" label="Text" onChange={this.handleTextChange} value={this.state.text}/>

                <br/>
                <br/>
                
                <TextField id="priority" label="Priority" type="number" onChange={this.handlePriorityChange} value={this.state.priority} />

                <br/>
                <br/>
                
                
                <DatePicker
                    id="due-date"
                    selected={this.state.dueDate}
                    placeholderText="Due date"
                    onChange={this.handleDateChange}>
                </DatePicker>
                <br/>
                <Button variant="contained" color="primary" type="submit"> Add #{this.state.items.length + 1} </Button>
            </form>
            <br/>
            <br/>
            <TodoList todoList={this.state.items}/>
        </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        
        console.log("asd")
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        console.log(newItem);
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: '' 
        }));
    }

}