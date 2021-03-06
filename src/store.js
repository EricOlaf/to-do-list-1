import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promise from 'redux-promise-middleware'

const initialState = {};

const middleware = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(promise, ...middleware));

export default store;