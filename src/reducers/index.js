import { combineReducers } from 'redux';
import CoursesReducer from './courses_reducer';

const rootReducer = combineReducers({
  courses: CoursesReducer
});

export default rootReducer;
