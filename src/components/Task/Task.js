import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Task extends Component {
    getStyle = () => {
        return {
            marginLeft:"1.5rem",
            textDecoration: this.props.task.completed ? "line-through" : "none",
            color: this.props.task.completed ? "#282c34" : "white"
        }
    }

    
    render() { 
        const {title, id, completed} = this.props.task;
        return (  
            <div style={{backgroundColor:"gray", display:"flex", margin:"1rem 0"}}key={id}>
                {completed ? null : <input style={{margin: '1.5rem 0 1.5rem  1.5rem'}} type="checkbox" onChange={this.props.checkComplete.bind(this, id)}></input>}
                <h3 style={this.getStyle()}>{title}</h3>
                <button style={btnStyle} onClick={this.props.deleteTask.bind(this, id)}>X</button>
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
    task: PropTypes.object.isRequired
}
 
export default Task;