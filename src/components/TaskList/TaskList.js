import React, { Component } from 'react';
import Task from '../Task/Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/taskActions';

class TaskList  extends Component {
    state={
        question: "no"
    }
    componentDidMount(){
        this.props.fetchTasks();
    }

    render() { 
        return  this.props.isFulfilled ? this.props.tasks.map((task) =>
            <Task key={task.id} task={task}/>  
            ) : <h2>Loading</h2>
        }
}
 
TaskList.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    tasks: state.tasks.taskList,
    isFulfilled: state.tasks.isFulfilled,
    isLoading: state.tasks.isLoading
})

export default connect(mapStateToProps, {fetchTasks})(TaskList);