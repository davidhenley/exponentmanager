import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  CLEAR_EMPLOYEE,
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

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: CLEAR_EMPLOYEE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
