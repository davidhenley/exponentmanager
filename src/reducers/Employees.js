import {
  EMPLOYEE_FETCH_SUCCESS,
  FETCHING_EMPLOYEES
} from '../actions/types';

const INITIAL_STATE = {
  employees: [],
  isLoading: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return { employees: action.payload, isLoading: false };
    case FETCHING_EMPLOYEES:
      return { ...state, isLoading: true }
    default:
      return state;
  }
};
