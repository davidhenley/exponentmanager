import { combineReducers } from 'redux';

import auth from './Auth';
import employees from './Employees';

export default combineReducers({
  auth,
  employees
});
