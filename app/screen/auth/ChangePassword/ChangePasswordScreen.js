import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ChangePasswordScreenStyle';

const ChangePasswordScreen = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const changePassword = () => {
    // logic for changing the password will go here
    props.navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Change Password</Text>
        </View>
      </View>

      <View style={styles.footer}>
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
        <Text style={styles.instructionText}>
          {'\u2022'} does password and confirm password match
        </Text>

        <Text style={[styles.titleText, {marginTop: 50}]}>
          Enter New Password
        </Text>
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
            onPress={() => setSecureTextEntryConfirm(!secureTextEntryConfirm)}>
            {secureTextEntryConfirm ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => changePassword()}>
          <Text style={styles.btnText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
