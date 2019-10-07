//VERSION THREE
import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';


import router from './router';

import store from "./store";

class App extends Component{
  state={
    btnName : "orange"
  }

  btnHandler = () => {
    let {btnName} = this.state
    if(btnName === "orange"){
      this.setState({btnName: "grey"})
    }else{
      this.setState({btnName: "orange"})
    }
  }

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <button onClick={this.btnHandler} className={this.state.btnName}>CLICK ME</button>
            <h1>My To-Do List</h1>
          </header>
          {router}
        </div>
      </Provider>
    );
  }
  
}

export default App;
