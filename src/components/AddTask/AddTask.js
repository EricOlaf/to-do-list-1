import React, { Component } from 'react';
//import uuid from 'uuid';
import PropTypes from 'prop-types';
import { addTasks } from '../../actions/taskActions';
import { connect } from 'react-redux';

class AddTask extends Component {
    state = { 
        title: ""
     }

     submitHandler = (e) => {
        e.preventDefault();

        const task = {
            // id: uuid.v4(),
            title: this.state.title,
            description: "",
            completed: false
          }

        this.props.addTasks(task);
        this.setState({title: ""});


     }

    render() { 
        return (
            <div>
                <form onSubmit={this.submitHandler}style={{display: "flex", margin:"1.5rem 2rem 0 2rem"}}>
                    <input style={{flex: "10"}} type="text" name="title" placeholder="Add task" value={this.state.title} onChange={e=>{
                        this.setState({title: e.target.value})
                    }}></input>
                    {this.state.title ? <input style={{flex: "1", background: "orange", borderRadius: "5px", marginLeft:"1rem"}} type="submit" value="submit"></input> : null}
                </form>
            </div>
        );
    }
}

AddTask.prototypes = {
    addTasks: PropTypes.func.isRequired
}
 
export default connect(null, {addTasks})(AddTask);