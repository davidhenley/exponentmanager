import React, { Component } from 'react';
import _ from 'lodash';
import {
  Container,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Button,
  List,
  ListItem,
  CheckBox,
  Body,
  Text,
  View
} from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdate, createEmployee } from '../actions';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

class EmployeeCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      shift: []
    };
  }

  onButtonPress() {
    const { name, phone, shift } = this.state;
    this.props.createEmployee({ name, phone, shift });
  }

  onRowPress(day) {
    if (this.state.shift.indexOf(day) < 0) {
      this.setState({ shift: [...this.state.shift, day] })
    } else {
      this.setState({ shift: [
        ...this.state.shift.splice(0, this.state.shift.indexOf(day)),
        ...this.state.shift.splice(this.state.shift.indexOf(day) + 1)
      ] })
    }
  }

  render() {
    return (
      <Container>
        <Form>
          <Item fixedLabel>
            <Label>Name</Label>
            <Input
              value={this.state.name}
              onChangeText={value => this.setState({ name: value })}
              style={styles.input}
              autoCapitalize="words" />
          </Item>
          <Item fixedLabel>
            <Label>Phone</Label>
            <Input
              value={this.state.phone}
              onChangeText={value => this.setState({ phone: value })}
              style={styles.input}
              keyboardType="phone-pad" />
          </Item>
          <View style={styles.datepick}>
            <Text style={styles.datetext}>Choose Day(s)</Text>
          </View>
          <List dataArray={DAYS} renderRow={day => {
            return (
              <ListItem onPress={() => this.onRowPress(day)}>
                <CheckBox onPress={() => this.onRowPress(day)} checked={this.state.shift.indexOf(day) >= 0} />
                <Body>
                  <Text>{day}</Text>
                </Body>
              </ListItem>
            );
          }} />
         <Button
           onPress={this.onButtonPress.bind(this)}
           block
           style={styles.button}
           primary>
           <Text>Create</Text>
         </Button>
        </Form>
      </Container>
    );
  }
}

const styles = {
  datepick: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    color: 'grey'
  }
}

export default connect(null, { createEmployee })(EmployeeCreate);
