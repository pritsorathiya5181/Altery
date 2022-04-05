import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './EditProfileScreenStyle';
import RadioButton from '../../../../components/RadioButton';
import * as Constant from '../../../../utils/Constant';
import * as COLORS from '../../../../utils/Colors';
import * as Validators from '../../../../utils/Validators';

const EditProfileScreen = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Mike',
    lastName: 'Smith',
    email: 'mikesmith@gmail.com',
    phone: '1234567890',
    citizen: 'inland citizen',
    gender: 'male',
    check_textInputChange: false,
  });

  useEffect(() => {
    const routeUserInfo = props.route?.params?.userInfo;
    console.log(routeUserInfo);
    setUserInfo({
      ...userInfo,
      ...routeUserInfo,
    });
  }, []);

  console.log(userInfo);

  const textInputChange = val => {
    if (Validators.isEmailValid(val.trim())) {
      setUserInfo({
        ...userInfo,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const registerFirstPage = () => {
    return (
      <>
        <Text style={styles.text_footer}>First Name</Text>
        <View style={[styles.action, styles.viewSeperator]}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your firstname"
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            value={userInfo?.firstName}
            onChangeText={val =>
              setUserInfo({
                ...userInfo,
                firstName: val,
              })
            }
          />
          {userInfo?.check_textInputChange ? (
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
            value={userInfo?.lastName}
            onChangeText={val =>
              setUserInfo({
                ...userInfo,
                lastName: val,
              })
            }
          />
          {userInfo?.check_textInputChange ? (
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
            value={userInfo?.email}
            onChangeText={val => textInputChange(val)}
          />
          {userInfo?.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
      </>
    );
  };

  const renderMoreInforView = () => {
    return (
      <View>
        <Text style={[styles.text_footer]}>Citizen Status</Text>
        <RadioButton
          DropData={Constant.Citizen}
          value={userInfo?.citizen}
          setValue={text =>
            setUserInfo({
              ...userInfo,
              citizen: text,
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
            value={userInfo?.phone}
            maxLength={10}
            onChangeText={val =>
              setUserInfo({
                ...userInfo,
                phone: val,
              })
            }
          />
        </View>

        <Text style={[styles.text_footer]}>Gender</Text>
        <RadioButton
          DropData={Constant.Gender}
          value={userInfo?.gender}
          setValue={text =>
            setUserInfo({
              ...userInfo,
              gender: text,
            })
          }
        />
        <View style={styles.viewSeperator} />
      </View>
    );
  };

  const onDoneEdit = () => {
    console.log('UserInfo Update', userInfo);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => props.navigation.navigate('Profile')}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onDoneEdit()}>
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {registerFirstPage()}

          {renderMoreInforView()}
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfileScreen;
