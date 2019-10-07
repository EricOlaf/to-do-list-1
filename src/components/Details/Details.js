import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTask, updateTask, deleteTask, completeTask } from '../../actions/taskActions';

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            id: 0
        }
    }
    

    async componentDidMount(){
        this.props.getTask(this.props.match.params.id)
        this.props.tasks.forEach(t=> 
            parseInt(t.id) === parseInt(this.props.match.params.id) ?
            this.setState({
                title: t.title,
                description: t.description,
                id: t.id
            }) : null
        )
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    deleteHandler = () => {
        this.props.deleteTask(this.state.id)
    }

    completeHandler = () => {
        this.props.completeTask(this.state.id)
    }

    changeBack = () => {
        const task = this.props.tasks.filter((e) => e.id == this.props.match.params.id);
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
        const {title, description} = this.state;
        return(
            <div>
                <Link to="/"><p>Back to Home Page</p></Link>
                <h1>DETAILS</h1>
                <form onSubmit={() => this.props.updateTask(this.state)}>
                    <div>
                        <label>
                            Title:
                            <input onChange={(e) => this.changeHandler(e)} style={inputStyles}type="text" name="title" value={title} />
                        </label>
                    </div>
                    <br></br>
                    <div>
                    <label>
                        Description:
                        <input onChange={(e) => this.changeHandler(e)} style={inputStyles}type="textarea" name="description" value={description}/>
                    </label>
                    </div>
                    <br></br>
                    <input type="submit" value="Submit" />
                    <Link to="/">
                        <button onClick={this.deleteHandler}>Delete Task</button>
                    </Link>
                    <Link to="/">
                        <button onClick={this.completeHandler}>Complete Task</button>
                    </Link>
                    <button onClick={this.changeBack}>Revert to original</button>
                </form>
            </div>
        )  
    }
}
 
const inputStyles = {
    height: "5vh", 
    width: "40vw"
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