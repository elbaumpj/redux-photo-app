import { createStore, compose } from 'redux'; 
import { synchHistoryWithStore } from 'react-router-redux'; 
import { browserHistory } from 'react-router'; 

// import root reducer 

import rootReducer from './reducers/index'; 

// data 

import comments from './data/comments';
import posts from './data/posts';

// create an object for default data

const defaultState = {
    posts,
    comments
}; 

const store = createStore(rootReducer, defaultState); 

export const history = synchHistoryWithStore(browserHistory, store); 

export default store; 