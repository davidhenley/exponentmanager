import { combineReducers } from 'redux';

import auth from './Auth';
import employeeCreate from './EmployeeCreate';

export default combineReducers({
  auth,
  employeeCreate
});
