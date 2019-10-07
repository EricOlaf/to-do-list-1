import {FETCH_TASKS, ADD_TASKS, DELETE_TASKS, COMPLETE_TASKS, GET_TASK, UPDATE_TASK} from "./types";
import axios from 'axios'

export const fetchTasks = () => dispatch => {
        axios.get("https://practiceapi.devmountain.com/api/tasks")
        .then(res=> res.data)
        .then(tasks => dispatch({
            type: FETCH_TASKS,
            payload: tasks
        }));
}

export const addTasks = (task) => dispatch => {
        axios.post("https://practiceapi.devmountain.com/api/tasks", task)
        .then(res=> res.data)
        .then(tasks => dispatch({
            type: ADD_TASKS,
            payload: tasks
        }));
}

export const deleteTask = (id) => dispatch => {
    axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res=> res.data)
    .then(task => dispatch({
        type: DELETE_TASKS,
        payload: task
    }));
}

export const completeTask = (id) => dispatch => {
    axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res=> res.data)
    .then(task => dispatch({
            type: COMPLETE_TASKS,
            payload: task
        }));
}

export const getTask = (id) => dispatch => {
    // console.log(task)
    //       dispatch({
    //           type: GET_TASK,
    //           payload: task
    //       });
    axios.get("https://practiceapi.devmountain.com/api/tasks")
        .then(res=> res.data.filter(t=> parseInt(t.id) === parseInt(id)))
        .then(task => dispatch({
            type: GET_TASK,
            payload: task
        }));
  }

  export const updateTask = (id, title, description) => dispatch => {
    console.log("HIT update with ", title, id, description)
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
        title: title,
        description: description,

    })
    .then(res=> res.data)
    .then(task => dispatch({
        type: UPDATE_TASK,
        payload: task
    }));
  }