import React from "react";
import { Switch, Route } from "react-router-dom";

import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import Details from './components/Details/Details';

export default (
  <Switch>
    <Route exact path="/" render={()=>
        <div>
            <AddTask/>
            <TaskList/>
        </div>
    } />
    <Route path="/details/:id" component={Details} />
  </Switch>
);