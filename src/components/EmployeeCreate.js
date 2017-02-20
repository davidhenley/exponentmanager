import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Container>
        <Text>Employee Create</Text>
      </Container>
    );
  }
}

const mapStateToProps = ({ employeeCreate }) => {
  const { name, phone, shift } = employeeCreate;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
