import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Validators from '../../utils/Validators';
import * as COLORS from '../../utils/Colors';
import Scale, {verticalScale} from '../../utils/Scale';
import * as Constant from '../../utils/Constant';
import RadioButton from '../../components/RadioButton';
import Dialog from 'react-native-dialog';
import * as authAction from '../../action/authAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: '',
        lastname: '',
        email: '',
        mobileNo: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        citizen: '',
        gender: '',
        confirmAlert: false,
        verificationCode: '',
      },
      page: 1,
    };
  }

  textInputChange(val) {
    if (Validators.isEmailValid(val.trim())) {
      this.setState({
        data: {
          ...this.state.data,
          email: val,
          check_textInputChange: true,
        },
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          email: val,
          check_textInputChange: false,
        },
      });
    }
  }

  handlePasswordChange(val) {
    this.setState({
      data: {
        ...this.state.data,
        password: val,
      },
    });
  }

  handleConfirmPasswordChange(val) {
    this.setState({
      data: {
        ...this.state.data,
        confirm_password: val,
      },
    });
  }

  updateSecureTextEntry() {
    this.setState({
      data: {
        ...this.state.data,
        secureTextEntry: !this.state.data.secureTextEntry,
      },
    });
  }

  updateConfirmSecureTextEntry() {
    this.setState({
      data: {
        ...this.state.data,
        confirm_secureTextEntry: !this.state.data.confirm_secureTextEntry,
      },
    });
  }

  signInHandle(firstname, lastname, email, password) {
    // add login check logic here
    const data = {
      firstname: this.state.data.firstname,
      lastname: this.state.data.lastname,
      email: this.state.data.email,
      mobileNo: this.state.data.mobileNo,
      password: this.state.data.password,
      citizen: this.state.data.citizen,
      gender: this.state.data.gender,
    };

    this.props.action
      .userSignup(data)
      .then(userData => {
        console.log('data', userData);
        this.setState({
          confirmAlert: true,
        });
      })
      .catch(error => {
        Alert.alert('Error', 'Unable to signup');
      });
  }

  confirm_signupHandle() {
    const data = {
      username: this.state.data.email,
      code: this.state.verificationCode,
    };

    this.props.action
      .confirmSignup(data)
      .then(userData => {
        if (userData.success) {
          console.log('data', userData);
          this.props.navigation.navigate('Login');
        } else {
          Alert.alert('Error', 'Validation failed');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Validation failed');
      });
  }

  registerFirstPage() {
    const {data} = this.state;

    return (
      <ScrollView>
        <Text style={styles.text_footer}>First Name</Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your firstname"
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={val =>
              this.setState({
                data: {
                  ...this.state.data,
                  firstname: val,
                },
              })
            }
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer}>Last Name</Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your lastname"
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={val =>
              this.setState({
                data: {
                  ...this.state.data,
                  lastname: val,
                },
              })
            }
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer}>Email</Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={val => this.textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
      </ScrollView>
    );
  }

  renderButtons() {
    const {data} = this.state;
    return (
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            this.signInHandle(
              data.firstname,
              data.lastname,
              data.email,
              data.password,
            );
          }}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Sign Up
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#009387',
              },
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPassword() {
    const {data} = this.state;
    return (
      <>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 10,
            },
          ]}>
          Password
        </Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => this.handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={() => this.updateSecureTextEntry()}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 10,
            },
          ]}>
          Confirm Password
        </Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => this.handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={() => this.updateConfirmSecureTextEntry()}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            {' '}
            Terms of service
          </Text>
          <Text style={styles.color_textPrivate}> and</Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            {' '}
            Privacy policy
          </Text>
        </View>
      </>
    );
  }

  renderMoreInforView() {
    return (
      <View>
        <Text style={[styles.text_footer]}>Citizen Status</Text>
        <RadioButton
          DropData={Constant.Citizen}
          value={this.state.data.citizen}
          setValue={text =>
            this.setState({
              data: {
                ...this.state.data,
                citizen: text,
              },
            })
          }
        />
        <View style={styles.viewSeperator} />

        <Text style={[styles.text_footer]}>Mobile Number</Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <MaterialIcons
            name="add-call"
            color={COLORS.THEME_DARK_GREEN}
            size={20}
          />
          <TextInput
            placeholder="+19029029022"
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onChangeText={val =>
              this.setState({
                data: {
                  ...this.state.data,
                  mobileNo: val,
                },
              })
            }
          />
        </View>

        <Text style={[styles.text_footer]}>Gender</Text>
        <RadioButton
          DropData={Constant.Gender}
          value={this.state.data.gender}
          setValue={text =>
            this.setState({
              data: {
                ...this.state.data,
                gender: text,
              },
            })
          }
        />
        <View style={styles.viewSeperator} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.THEME_GREEN}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {this.state.page === 1 && this.registerFirstPage()}

          {this.state.page === 2 && this.renderMoreInforView()}

          {this.state.page === 3 && this.renderPassword()}

          {this.state.page === 3 && this.renderButtons()}

          <View style={styles.formControlView}>
            {this.state.page > 1 ? (
              <TouchableOpacity
                style={styles.formControlBtn}
                onPress={() => this.setState({page: this.state.page - 1})}>
                <FontAwesome
                  name="angle-left"
                  color={COLORS.DEFAULT_WHITE}
                  size={25}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {this.state.page < 3 ? (
              <TouchableOpacity
                style={styles.formControlBtn}
                onPress={() => this.setState({page: this.state.page + 1})}>
                <FontAwesome
                  name="angle-right"
                  color={COLORS.DEFAULT_WHITE}
                  size={25}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
          {/* </ScrollView> */}
        </Animatable.View>
        <View>
          <Dialog.Container visible={this.state.confirmAlert}>
            <Dialog.Title>Verify Code</Dialog.Title>
            <Dialog.Description>
              You may have received a verification code on your email.
            </Dialog.Description>
            <Dialog.Input
              label="Verification Code"
              onChangeText={code => this.setState({verificationCode: code})}
              value={this.state.verificationCode}
            />
            <Dialog.Button
              label="Cancel"
              onPress={() => {
                this.setState({confirmAlert: false});
              }}
            />
            <Dialog.Button
              label="Okay"
              onPress={() => {
                this.confirm_signupHandle();
              }}
            />
          </Dialog.Container>
        </View>
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.THEME_GREEN,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    // flex: Platform.OS === 'ios' ? 3 : 5,
    flex: 3,
    backgroundColor: COLORS.DEFAULT_WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: COLORS.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(18),
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: verticalScale(5),
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: COLORS.THEME_DARK_GREEN,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: COLORS.SMOKY_GREY,
  },
  formControlView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: verticalScale(15),
    width: '100%',
    alignSelf: 'center',
  },
  formControlBtn: {
    backgroundColor: COLORS.THEME_GREEN,
    width: 50,
    height: 50,
    borderRadius: Scale(25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formBtnText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: Scale(16),
    paddingHorizontal: Scale(10),
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    paddingBottom: Scale(5),
    marginTop: Scale(5),
    marginBottom: verticalScale(10),
  },
});
