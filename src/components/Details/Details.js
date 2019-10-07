import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ls from 'local-storage';
import { getTask, updateTask, deleteTask, completeTask } from '../../actions/taskActions';

import "./Details.css"

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            id: 0,
            completed: false
        }
    }
    

    async componentDidMount(){
        // this.props.tasks.forEach(t=> 
        //     parseInt(t.id) === parseInt(this.props.match.params.id) ?
        //     (function(){
        //         localStorage.setItem('title', t.title)
        //         localStorage.setItem('id', t.id)
        //         localStorage.setItem('description', t.description)
        //         localStorage.setItem('completed', t.completed)
        //     })()
        //     : null
        // )

        // this.setState({
        //     title: localStorage.getItem('title'),
        //     description: localStorage.getItem('description'),
        //     id: localStorage.getItem('id'),
        //     completed: localStorage.getItem('completed')
        // })



        this.props.tasks.forEach(t=> 
            parseInt(t.id) === parseInt(this.props.match.params.id) ?
            this.setState({
                title: t.title,
                description: t.description,
                id: t.id,
                completed: t.completed
            })
            : null
        )
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    deleteHandler = () => {
        let {id} = this.state
        this.props.deleteTask(id)
    }

    completeHandler = () => {
        console.log("hit handler")
        let {id} = this.state
        this.props.completeTask(id)
    }

    updateHandler = (e) => {
        e.preventDefault();
        const {id, title, description} = this.state;
        this.props.updateTask(id, title, description)
    }

    changeBack = () => {
        
        this.props.tasks.forEach(t=> 
            parseInt(t.id) === parseInt(this.props.match.params.id) ?
            this.setState({
                title: t.title,
                description: t.description,
                id: t.id
            }) : null
        )
    }




    render() {
        console.log(this.state)
        console.log(this.props.tasks)
        const {title, description} = this.state;
        return(
            <div>
                <Link to="/" className="center"><p className="details__link">Back to Home Page</p></Link>
                <h1>Task Details</h1>
                <form onSubmit={this.updateHandler}>
                    <div>
                        <label className="label">
                            Title:
                            <input onChange={(e) => this.changeHandler(e)} style={inputStyles}type="text" name="title" value={title} />
                        </label>
                    </div>
                    <br></br>
                    <div>
                    <label className="label">
                        Description:
                        <input onChange={(e) => this.changeHandler(e)} style={inputStyles} type="textarea" name="description" value={description}/>
                    </label>
                    </div>
                    <br></br>
                    <input className="btn" type="submit" value="Submit" />
                    <Link to="/">
                        <button className="btn" onClick={this.deleteHandler}>Delete Task</button>
                    </Link>
                    <Link to="/">
                        <button className="btn" onClick={this.completeHandler}>Complete Task</button>
                    </Link>
                    <button className="btn" onClick={this.changeBack}>Revert</button>
                </form>
            </div>
        )  
    }
}
 
const inputStyles = {
    height: "5vh", 
    width: "40vw",
    fontSize: "1.1rem",
    marginLeft: "1rem"
}

Details.propTypes = {
    tasks: PropTypes.array.isRequired,
    getTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tasks: state.tasks.taskList,
    task: state.tasks.task
})

export default connect(mapStateToProps, {getTask, updateTask, deleteTask, completeTask})(Details);