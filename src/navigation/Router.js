import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';

import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={styles.scene}>
        <Scene key="auth">
          <Scene key="loginForm" component={LoginForm} hideNavBar />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            title="Employee List"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()} />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate} />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  scene: {
    paddingTop: (Platform.OS === 'ios' ? 64 : 54)
  }
}

export default RouterComponent;
