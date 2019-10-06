import React, { Component } from 'react';
import Task from '../Task/Task';
import PropTypes from 'prop-types';

class TaskList  extends Component {

    render() { 
        return this.props.list.map((task) => 
            <Task key={task.id} checkComplete={this.props.checkComplete} deleteTask={this.props.deleteTask} task={task}/>  
            )}
}
 
TaskList.propTypes = {
    list: PropTypes.array.isRequired
}

export default TaskList ;