import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CLEAR_EMPLOYEE,
  EMPLOYEE_FETCH_SUCCESS,
  FETCHING_EMPLOYEES
} from './types';

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

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: FETCHING_EMPLOYEES });
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
}
