import { FETCH_COURSES } from '../actions/courses_actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
  }

  return state;
}
