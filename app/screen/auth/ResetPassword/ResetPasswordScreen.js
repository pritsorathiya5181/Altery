import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ResetPasswordScreenStyle';
import * as authAction from '../../../action/authAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const ResetPasswordScreen = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const changePassword = () => {
    props.action
      .forgotPasswordOtp({
        username: props?.route?.params?.email,
        code: verificationCode,
        password: password,
      })
      .then(forgotData => {
        console.log('data', forgotData);
        if (forgotData.success) {
          props.navigation.navigate('Profile');
        } else {
          Alert.alert('Error', 'Verification failed');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Verification failed');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reset Password</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <ScrollView>
          <Text style={[styles.instructionText, {paddingLeft: 0}]}>
            In order to protect your account, make sure your password:
          </Text>

          <Text style={styles.instructionText}>
            {'\u2022'} is longer 7 characters
          </Text>
          <Text style={styles.instructionText}>
            {'\u2022'} does have one captial character
          </Text>
          <Text style={styles.instructionText}>
            {'\u2022'} does have one special character [recommended]
          </Text>
          <Text style={styles.instructionText}>
            {'\u2022'} does have one number
          </Text>
          {/* <Text style={styles.instructionText}>
            {'\u2022'} does password and confirm password match
          </Text> */}

          <Text style={[styles.titleText, {marginTop: 50}]}>Enter Code</Text>
          <View style={[styles.action, styles.viewSeperator]}>
            <Feather name="code" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter code that you might recieved on your email"
              secureTextEntry={secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={verificationCode}
              onChangeText={val => setVerificationCode(val)}
            />
          </View>

          <Text style={[styles.titleText]}>Enter New Password</Text>
          <View style={[styles.action, styles.viewSeperator]}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter New Password"
              secureTextEntry={secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={password}
              onChangeText={val => setPassword(val)}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* 
          <Text style={styles.titleText}>Re-enter New Password</Text>
          <View style={[styles.action, styles.viewSeperator]}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Re-enter New Password"
              secureTextEntry={secureTextEntryConfirm ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={passwordConfirm}
              onChangeText={val => setPasswordConfirm(val)}
            />
            <TouchableOpacity
              onPress={() =>
                setSecureTextEntryConfirm(!secureTextEntryConfirm)
              }>
              {secureTextEntryConfirm ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => changePassword()}>
            <Text style={styles.btnText}>Change Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  console.log('state-->', state);
  if (state) {
    return {
      signupUserData: state.auth.signupUserData,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(authAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordScreen);
