import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';

import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask'

class App extends Component{
  state = {
    taskList: [
      {
        id: uuid.v4(),
        title: "Finish React Assesment",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Watch movie with Abby",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Eat scones and eggs for breakfast",
        completed: false
      },
    ]
  };

  checkComplete = (id) => {
    this.setState({
      taskList: this.state.taskList.map(e => {
        if(e.id === id){
          e.completed = !e.completed;
        }
        return e;
      })
    })
  }

  deleteTask = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((e, ind) => {
        return e.id !== id
      })
    })
  }

  submitHandler = (title) => {
    let newTask = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ taskList: [...this.state.taskList, newTask]})
  }

  render(){
    const {taskList} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Bestest To-Do List</h1>
        </header>
        <AddTask submitHandler={this.submitHandler}/>
        <TaskList list={taskList} deleteTask={this.deleteTask} checkComplete={this.checkComplete}/>
      </div>
    );
  }
  
}

export default App;
