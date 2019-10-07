import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';


import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

import store from "./store";

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>The Bestest To-Do List</h1>
          </header>
          <AddTask submitHandler={this.submitHandler}/>
          <TaskList deleteTask={this.deleteTask} checkComplete={this.checkComplete}/>
        </div>
      </Provider>
    );
  }
  
}

export default App;
