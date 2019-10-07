import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { deleteTask, completeTask } from '../../actions/taskActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Task.css'

class Task extends Component {
   
    getStyle = () => {
        return {
            marginLeft:"1.5rem",
            textDecoration: this.props.task.completed ? "line-through" : "none",
            color: this.props.task.completed ? "#282c34" : "white"
        }
    }

    deleteHandler = () => {
        this.props.deleteTask(this.props.task.id)
    }

    completeHandler = () => {
        this.props.completeTask(this.props.task.id)
    }

 
    
    render() { 
        const {title, id, completed} = this.props.task;

        return (  
            <div style={{backgroundColor:"gray", display:"flex", margin:"1rem 0"}} key={id}>
                {completed ? null : <input style={{margin: '1.5rem 0 1.5rem  1.5rem'}} type="checkbox" onChange={()=>this.completeHandler()}></input>}
                <Link style={{textDecoration: "none"}}key={id} to={`/details/${id}`}>
                    <h3 style={this.getStyle()}>{title}</h3>
                </Link>
                <button style={btnStyle} onClick={this.deleteHandler}>X</button>
            </div>  
        );
    }
}

const btnStyle = {
    margin: "1.5rem",
    backgroundColor: 'orange',
    borderRadius: "5px"
}


Task.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired
}
 
export default connect(null, {deleteTask, completeTask})(Task);