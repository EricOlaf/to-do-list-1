import {FETCH_TASKS, ADD_TASKS, DELETE_TASKS, COMPLETE_TASKS, GET_TASK, UPDATE_TASK} from "../actions/types"

const initialState = {
    taskList: [],
    task: {},
    isLoading: false,
    isFulfilled: false,
    isRejected: false
}

export default function(state = initialState, action){
    switch(action.type){
        case `${FETCH_TASKS}_PENDING`:
            return{
                ...state,
                isLoading:true
            };
        case `${FETCH_TASKS}_FULFILLED`:
            return{
                ...state,
                taskList: action.payload,
                isFulfilled: true,
                isLoading: false
            };
        case `${FETCH_TASKS}_REJECTED`:
                return{
                    ...state,
                    taskList: action.payload,
                    isRejected: true
                };
        case ADD_TASKS:
            return{
                ...state,
                taskList: action.payload
            };
        case DELETE_TASKS:
            return{
                ...state,
                taskList: action.payload
            };
        case COMPLETE_TASKS:
            return{
                ...state,
                taskList: action.payload
            };
        case GET_TASK:
            console.log(action.payload)
            return{
                ...state,
                task: action.payload
            };
        case UPDATE_TASK:
            console.log(action.payload)
            return{
                ...state,
                taskList: action.payload
            };
        default:
            return state;
    }
}