import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './HomeScreenStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import * as complaintsActions from '../../action/complaintsActions';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const [complaintsData, setComplaintsData] = useState([]);
  const [openComplaintsData, setOpenComplaintsData] = useState([]);
  const [closeComplaintsData, setCloseComplaintsData] = useState([]);
  const [pendingComplaintsData, setPendingComplaintsData] = useState([]);

  useEffect(() => {
    getComplaints();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getComplaints();
    }, []),
  );

  const getComplaints = async () => {
    let userData = await AsyncStorage.getItem('userInfo');
    if (userData) {
      userData = JSON.parse(userData);
    }

    props.action
      .getAllComplaints()
      .then(res => {
        if (res.success) {
          setComplaintsData(
            res.complaints.filter(
              complaint => complaint.useremail === userData.email,
            ),
          );
          generateComplaintsStats(
            res.complaints.filter(
              complaint => complaint.useremail === userData.email,
            ),
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const generateComplaintsStats = complaints => {
    const openComplaints = [];
    const closeComplaints = [];
    const pendingComplaints = [];

    complaints?.map(complaint => {
      if (complaint.complaintStatus === 'pending') {
        pendingComplaints.push(complaint);
      } else if (complaint.complaintStatus === 'open') {
        openComplaints.push(complaint);
      } else if (complaint.complaintStatus === 'done') {
        closeComplaints.push(complaint);
      }
    });

    setOpenComplaintsData(openComplaints);
    setCloseComplaintsData(closeComplaints);
    setPendingComplaintsData(pendingComplaints);
  };

  const viewComplaints = complaints => {
    props.navigation.setParams({
      complaints: complaints,
    });
    props.navigation.navigate('complaintsListing', {
      complaints: complaints,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Complaint Portal</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.totalComplaintView}
            onPress={() => viewComplaints(complaintsData)}>
            <Text style={styles.totalCountText}>{complaintsData?.length}</Text>
            <View style={styles.row}>
              <Text style={styles.totalTitleText}>Total Complaints</Text>
              <FontAwesome5 name="boxes" color={'white'} size={25} />
            </View>
          </TouchableOpacity>

          {/* <View style={styles.multipleComplaintView}> */}
          <TouchableOpacity
            style={styles.openCompaintView}
            onPress={() => viewComplaints(openComplaintsData)}>
            <Text style={styles.totalCountText}>
              {openComplaintsData?.length}
            </Text>
            <View style={styles.row}>
              <Text style={styles.totalTitleText}>Open Complaints</Text>
              <FontAwesome5
                name="envelope-open-text"
                color={'white'}
                size={25}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pendingFeedbackView}
            onPress={() => viewComplaints(pendingComplaintsData)}>
            <Text style={styles.totalCountText}>
              {pendingComplaintsData?.length}
            </Text>
            <View style={styles.row}>
              <Text style={styles.totalTitleText}>Pending Complaint</Text>
              <Ionicons name="ios-timer-outline" color={'white'} size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeCompaintView}
            onPress={() => viewComplaints(closeComplaintsData)}>
            <Text style={styles.totalCountText}>
              {closeComplaintsData?.length}
            </Text>
            <View style={styles.row}>
              <Text style={styles.totalTitleText}>Close Complaints</Text>
              <FontAwesome5 name="envelope-open" color={'white'} size={25} />
            </View>
          </TouchableOpacity>
          {/* </View> */}

          {/* <Text style={styles.feedBackText}>Feedbacks</Text>
          <View style={styles.multipleComplaintView}>
            <View style={styles.positiveFeedbackView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>
                  Positive{'\n'}Feedbacks
                </Text>
                <FontAwesome5 name="thumbs-up" color={'white'} size={25} />
              </View>
            </View>
            <View style={styles.negativeFeedbackView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>
                  Negative{'\n'}Feedbacks
                </Text>
                <FontAwesome5 name="thumbs-down" color={'white'} size={25} />
              </View>
            </View>
          </View>
          <View style={styles.multipleComplaintView}>
            <View style={styles.pendingFeedbackView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>
                  Pending{'\n'}Feedbacks
                </Text>
                <Ionicons name="ios-timer-outline" color={'white'} size={25} />
              </View>
            </View>
            <View style={styles.negativeFeedbackView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>
                  Dropped{'\n'}Feedbacks
                </Text>
                <Ionicons name="ios-trash-bin" color={'white'} size={25} />
              </View>
            </View>
          </View> */}
        </ScrollView>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.addView}
        onPress={() => {
          props.navigation.navigate('Complaint');
        }}>
        <Ionicons name="add-outline" size={30} color="white" />
      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
