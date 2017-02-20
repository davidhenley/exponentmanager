import {
  EMPLOYEE_UPDATE,
  CLEAR_EMPLOYEE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const clearEmployee = () => {
  return {
    type: CLEAR_EMPLOYEE
  };
};
