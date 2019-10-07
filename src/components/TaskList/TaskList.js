import React, { Component } from 'react';
import Task from '../Task/Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/taskActions';

class TaskList  extends Component {

    componentDidMount(){
        this.props.fetchTasks();
    }

    render() { 
        return this.props.tasks.map((task) => 
            <Task key={task.id} task={task}/>  
            )}
}
 
TaskList.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    tasks: state.tasks.taskList
})

export default connect(mapStateToProps, {fetchTasks})(TaskList);