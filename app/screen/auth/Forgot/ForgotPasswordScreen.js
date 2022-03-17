import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ForgotPasswordStyle';

const ForgotPasswordScreen = props => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Forgot Password</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <Text style={[styles.text_footer]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'black'} size={20} />
          <TextInput
            placeholder="Enter registered email"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              props.navigation.navigate('ResetPass');
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Send Email
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          onPress={() => props.navigation.goBack()}>
          <View style={styles.row}>
            <Ionicons name="arrow-back" color={'#009387'} size={25} />
            <Text style={styles.backText}>Go Back</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default ForgotPasswordScreen;
