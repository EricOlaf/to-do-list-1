import {FETCH_TASKS, ADD_TASKS, DELETE_TASKS, COMPLETE_TASKS} from "./types";
import uuid from 'uuid';

const initialTaskList = [
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
    ];

export const fetchTasks = () => dispatch => {
  
        dispatch({
            type: FETCH_TASKS,
            payload: initialTaskList
        });
}

export const addTasks = (task) => dispatch => {
  console.log(task)
        dispatch({
            type: ADD_TASKS,
            payload: task
        });
}

export const deleteTask = (task) => dispatch => {
  console.log(task)
        dispatch({
            type: DELETE_TASKS,
            payload: task
        });
}

export const completeTask = (task) => dispatch => {
  console.log(task)
        dispatch({
            type: COMPLETE_TASKS,
            payload: task
        });
}