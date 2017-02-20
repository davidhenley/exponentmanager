import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';

import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="auth">
          <Scene key="loginForm" component={LoginForm} hideNavBar />
        </Scene>
        <Scene initial key="main">
          <Scene
            key="employeeList"
            title="Employee List"
            component={EmployeeList}
            rightTitle="Add"
            style={styles.scene}
            onRight={() => console.log('pressed')} />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  scene: {
    paddingTop: (Platform.OS === 'ios' ? 64 : 44)
  }
}

export default RouterComponent;
