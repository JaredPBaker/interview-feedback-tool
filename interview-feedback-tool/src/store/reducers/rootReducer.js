import { combineReducers } from 'redux';
import feedbackReducer from './feedbackReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  feedback: feedbackReducer,
  // Add other reducers here
});

export default rootReducer;