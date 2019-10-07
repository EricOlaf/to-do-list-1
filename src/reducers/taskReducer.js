import {FETCH_TASKS, ADD_TASKS, DELETE_TASKS, COMPLETE_TASKS} from "../actions/types"

const initialState = {
    taskList: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TASKS:
            return{
                ...state,
                taskList: action.payload
            };
        case ADD_TASKS:
            return{
                ...state,
                taskList:[action.payload, ...state.taskList]
            };
        case DELETE_TASKS:
            return{
                ...state,
                taskList: state.taskList.filter(t=> t.id !== action.payload)
            };
        case COMPLETE_TASKS:
            return{
                ...state,
                taskList: state.taskList.map(t=> t.id === action.payload ? {
                    id: t.id,
                    title: t.title,
                    completed: true
                  } : t)
            };
        default:
            return state;
    }
}