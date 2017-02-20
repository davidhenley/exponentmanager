import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Form,
  Item,
  Card,
  Label,
  Input,
  Text,
  Button,
  Icon,
  View,
  Spinner
} from 'native-base';


class LoginForm extends Component {
  componentWillUpdate() {
    if (this.props.user) Actions.employeeList();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    console.log(this.props.user);
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.container}>
            <Icon style={styles.logo} active name="briefcase" />
            <Text style={styles.title}>Work Manager</Text>
          </View>

          <Form style={styles.form}>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="name@example.com" />
            </Item>

            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                placeholder="password" />
            </Item>

            {this.props.error !== '' && <Text style={styles.error}>{this.props.error}</Text>}

            {this.props.loading ? (<Spinner color='#007aff' />) : (<Button
              onPress={this.onButtonPress.bind(this)}
              block
              style={styles.button}
              primary>
              <Text>Log In</Text>
            </Button>)}

          </Form>
        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    fontSize: 100
  },
  title: {
    fontSize: 30
  },
  button: {
    marginTop: 20
  },
  error: {
    color: 'red',
    marginTop: 10
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error, user } = auth;
  return { email, password, loading, error, user };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
