import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import feedbackReducer from './reducers/feedbackReducer';

const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;