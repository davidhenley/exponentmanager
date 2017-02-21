import { combineReducers } from 'redux';

import auth from './Auth';
import employeeCreate from './EmployeeCreate';
import employees from './Employees';

export default combineReducers({
  auth,
  employeeCreate,
  employees
});
