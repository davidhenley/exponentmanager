import {
  EMPLOYEE_UPDATE,
  CLEAR_EMPLOYEE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_EMPLOYEE:
      console.log('cleared');
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
}
