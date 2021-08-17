import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { questionsReducer } from './reducers'

const store = createStore(questionsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;