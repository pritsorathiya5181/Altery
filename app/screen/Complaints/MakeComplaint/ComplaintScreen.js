import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import styles from './ComplaintScreenStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RadioButton from '../../../components/RadioButton';
import * as Constant from '../../../utils/Constant';
import CategorySelector from '../../../components/Category/CategorySelector';

const ComplaintScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [severity, setSeverity] = useState('');
  const [category, setCategory] = useState();
  const [photos, setPhotos] = useState([
    {
      photoId: 0,
      isPhoto: false,
    },
  ]);

  const onAddService = () => {
    setPhotos([...photos, {photoId: photos.length, isPhoto: false}]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 25,
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
            <Text>{category?.text ? category?.text : 'Cyber Crime'}</Text>
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
            value={subject}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            textAlignVertical="top"
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setSubject(text)}
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
            value={subject}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            textAlignVertical="top"
            multiline={true}
            numberOfLines={2}
            onChangeText={text => setSubject(text)}
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
            setCategory(cate);
            setModalVisible(false);
          }}
        />
      </Modal>
    </ScrollView>
  );
};

export default ComplaintScreen;
