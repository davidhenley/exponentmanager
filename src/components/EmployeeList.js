import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Spinner } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  render() {
    console.log(this.props.employees);
    return (
      <Container>
        <Content>
          <List dataArray={this.props.employees} renderRow={(employee) => {
            return <ListItem><Text>{employee.name}</Text></ListItem>;
          }} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, key) => {
    return { ...val, key };
  });
  return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
