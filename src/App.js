//VERSION THREE
import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';


import router from './router';

import store from "./store";

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>My To-Do List</h1>
          </header>
          {router}
        </div>
      </Provider>
    );
  }
  
}

export default App;
