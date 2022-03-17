import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './ProfileScreenStyle';
import * as IMAGES from '../../../utils/Images';

const ProfileScreen = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Mike',
    lastName: 'Smith',
    email: 'mikesmith@gmail.com',
    phone: '1234567890',
    citizen: 'Inland Citizen',
    gender: 'male',
  });

  const naviagetToChangePass = () => {
    props.navigation.navigate('ChnagePass');
  };

  const naviagetToEditProfile = () => {
    props.navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <Image
          source={
            userInfo?.gender === 'male'
              ? IMAGES.PROFILE_MAN
              : IMAGES.PROFILE_WOMAN
          }
          style={styles.image}
        />
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>{userInfo.firstName} </Text>
          <Text style={styles.nameText}>{userInfo.lastName}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>Personal Information</Text>

          <View style={styles.contentView}>
            <Text style={styles.contentText}>Email</Text>
            <Text style={styles.contentText}>{userInfo?.email}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.contentText}>MobileNo</Text>
            <Text style={styles.contentText}>{userInfo?.phone}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.contentText}>Gender</Text>
            <Text style={styles.contentText}>{userInfo?.gender}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.contentText}>Citizen Status</Text>
            <Text style={styles.contentText}>{userInfo?.citizen}</Text>
          </View>
          <View style={styles.viewSeperator} />

          <Text style={styles.titleText}>Profile Options</Text>

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => naviagetToChangePass()}>
            <Text style={styles.btnText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => naviagetToEditProfile()}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;
