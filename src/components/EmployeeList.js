import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.fetchEmployees();
  }

  onRowPress(employee) {
    Actions.employeeCreate({ employee });
  }

  render() {
    return (
      <Container>
        <Content>
          { this.props.isLoading ? (<Spinner color='black' />) : (<List dataArray={this.props.employees} renderRow={(employee) => {
            return (
              <ListItem onPress={() => this.onRowPress(employee)}>
                <Text>{employee.name}</Text>
              </ListItem>
            );
          }} />)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees.employees, (val, key) => {
    return { ...val, key };
  });
  return { employees, isLoading: state.employees.isLoading };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
