import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import styles from './ComplaintScreenStyle';
import {launchImageLibrary} from 'react-native-image-picker';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as complaintsActions from '../../../action/complaintsActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioButton from '../../../components/RadioButton';
import * as Constant from '../../../utils/Constant';
import CategorySelector from '../../../components/Category/CategorySelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ComplaintScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [severity, setSeverity] = useState('');
  const [category, setCategory] = useState('Cyber Crime');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [photos, setPhotos] = useState([
    {
      photoId: 0,
      isPhoto: false,
    },
  ]);

  const onAddService = () => {
    let options = {
      mediaType: 'mixed',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response.assets);

      if (response.didCancel) {
        alert('Cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setPhotos([
        ...photos,
        {
          photoId: photos.length,
          isPhoto: true,
          photoUrl: 'data:image/jpeg;base64,' + response.assets[0].base64,
        },
      ]);
    });
  };

  const onAddComplaint = async () => {
    let userData = await AsyncStorage.getItem('userInfo');
    if (userData) {
      userData = JSON.parse(userData);
    }

    const newComplaint = {
      complaintId: new Date().getTime().toString(),
      subject: subject,
      severity: severity,
      category: category,
      description: description,
      location: location,
      photos: photos,
      complaintStatus: 'pending',
      username: userData.name,
      useremail: userData.email,
    };
    console.log('newComplaint-->', newComplaint);

    props.action
      .makeComplaint(newComplaint)
      .then(res => {
        console.log('res-->', res);
        if (res.success) {
          Alert.alert('Success', 'Complaint filled successfully', [
            {text: 'OK', onPress: () => props.navigation.navigate('Home')},
          ]);
        } else {
          Alert.alert('Error', 'Unable to make new complaint');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Unable to make new complaint');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => props.navigation.navigate('Home')}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onAddComplaint()}>
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 50,
          }}>
          <View>
            <Text style={styles.titleText}>Subject</Text>
            <View style={[styles.action, styles.viewSeperator]}>
              <MaterialIcons name="subject" color="#05375a" size={20} />
              <TextInput
                placeholder="Someone defaming me"
                style={styles.textInput}
                value={subject}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onChangeText={text => setSubject(text)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.titleText}>Catrogry</Text>
            <View style={styles.action}>
              <TouchableOpacity
                style={styles.categoryView}
                onPress={() => setModalVisible(true)}>
                <Text>{category || 'Cyber Crime'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.titleText}>Level of Severity</Text>
            <RadioButton
              DropData={Constant.Severity}
              value={severity}
              setValue={text => setSeverity(text)}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.titleText}>Complaint Details</Text>
            <View style={styles.multilineAction}>
              <MaterialIcons name="subject" color="#05375a" size={20} />
              <TextInput
                placeholder="This is report about someone who is defaming me..."
                style={styles.textInput}
                value={description}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                textAlignVertical="top"
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setDescription(text)}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.titleText}>Complaint Location</Text>
            <View style={styles.multilineAction}>
              <MaterialIcons name="location-on" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter address details"
                style={styles.textInput}
                value={location}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                textAlignVertical="top"
                multiline={true}
                numberOfLines={2}
                onChangeText={text => setLocation(text)}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.titleText}>Images</Text>
            <View style={styles.photosView}>
              {photos.map(item => {
                return item.isPhoto ? (
                  <View key={item.photoId} style={styles.photoGrid}>
                    <Image
                      alt="serviceImg"
                      className="serviceImg"
                      style={{width: '100%', height: '100%'}}
                      source={{uri: item.photoUrl}}
                    />
                  </View>
                ) : (
                  <TouchableOpacity
                    key={item.photoId}
                    style={styles.photoGrid}
                    onPress={() => onAddService()}>
                    <AntDesign name="plus" size={25} color="#05375a" />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <CategorySelector
              onClose={() => setModalVisible(false)}
              setCategory={cate => {
                setCategory(cate?.text);
                setModalVisible(false);
              }}
            />
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  console.log('state-->', state);
  if (state) {
    return {
      complaintsData: state.home.complaintsData,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(complaintsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintScreen);
