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
  ListItem,
  CheckBox,
  Body,
  Text,
  View
} from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdate, createEmployee } from '../actions';

class EmployeeCreate extends Component {

  toggleDay(day, selected) {
    this.props.employeeUpdate({ prop: day, value: !selected });
  }

  onButtonPress() {
    const { name, phone, Monday, Tuesday, Wednesday, Thursday, Friday } = this.props;
    const days = {Monday, Tuesday, Wednesday, Thursday, Friday};
    const shiftarray = _.map(days, (val, key) => {
      if (val === true) return key;
    });
    const shift = _.filter(shiftarray, (param) => {
      return param !== undefined;
    }).join(', ');
    this.props.createEmployee({ name, phone, shift });
  }

  render() {
    return (
      <Container>
        <Form>
          <Item fixedLabel>
            <Label>Name</Label>
            <Input
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
              style={styles.input}
              autoCapitalize="words" />
          </Item>
          <Item fixedLabel>
            <Label>Phone</Label>
            <Input
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
              style={styles.input}
              keyboardType="phone-pad" />
          </Item>
          <View style={styles.datepick}>
            <Text style={styles.datetext}>Choose Day(s)</Text>
          </View>
          <ListItem>
           <CheckBox checked={this.props.Monday} onPress={() => this.toggleDay('Monday', this.props.Monday)} />
           <Body>
               <Text>Monday</Text>
           </Body>
         </ListItem>
         <ListItem>
           <CheckBox checked={this.props.Tuesday} onPress={() => this.toggleDay('Tuesday', this.props.Tuesday)} />
           <Body>
               <Text>Tuesday</Text>
           </Body>
         </ListItem>
         <ListItem>
           <CheckBox checked={this.props.Wednesday} onPress={() => this.toggleDay('Wednesday', this.props.Wednesday)} />
           <Body>
               <Text>Wednesday</Text>
           </Body>
         </ListItem>
         <ListItem>
           <CheckBox checked={this.props.Thursday} onPress={() => this.toggleDay('Thursday', this.props.Thursday)} />
           <Body>
               <Text>Thursday</Text>
           </Body>
         </ListItem>
         <ListItem last>
           <CheckBox checked={this.props.Friday} onPress={() => this.toggleDay('Friday', this.props.Friday)} />
           <Body>
               <Text>Friday</Text>
           </Body>
         </ListItem>
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

const mapStateToProps = ({ employeeCreate }) => {
  const { name, phone, Monday, Tuesday, Wednesday, Thursday, Friday } = employeeCreate;
  return { name, phone, Monday, Tuesday, Wednesday, Thursday, Friday };
}

export default connect(mapStateToProps, { employeeUpdate, createEmployee })(EmployeeCreate);
