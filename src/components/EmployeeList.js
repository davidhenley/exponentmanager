import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  renderList() {

  }

  render() {
    return (
      <Container>
        <Content>

        </Content>
      </Container>
    );
  }
}

export default connect(null, { fetchEmployees })(EmployeeList);
