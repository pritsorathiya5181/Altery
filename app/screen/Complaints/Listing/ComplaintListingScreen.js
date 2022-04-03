import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './ComplaintListingStyle';
import * as complaintsActions from '../../../action/complaintsActions';
import * as Constant from '../../../utils/Constant';
import {useFocusEffect} from '@react-navigation/native';

function ComplaintListingScreen({route, navigation}) {
  const [conplaintList, setconplaintList] = useState([]);

  useEffect(() => {
    console.log(route?.params?.complaints);
    setconplaintList(route?.params?.complaints);
  }, [route?.params?.complaints]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log(route);
  //     setconplaintList(route?.params?.complaints);
  //     return () => {
  //       if (route.params && 'complaints' in route.params) {
  //         delete route.params;
  //       }
  //     };
  //   }, []),
  // );

  const openComplaitDetails = item => {
    navigation.navigate('Details', {complaint: item});
  };

  return (
    <View>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderTitle}>Complaint Listing</Text>
      </View>

      <View>
        <FlatList
          data={conplaintList}
          keyExtractor={item => item.complaintId}
          ItemSeparatorComponent={() => <View style={styles.viewSeperator} />}
          renderItem={({item, index}) => {
            return (
              <View style={styles.complaintView}>
                <View>
                  <Text>{item.subject}</Text>
                  <Text>{item.cateogry}</Text>
                  <Text>{item.complaintId}</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => openComplaitDetails(item)}>
                  <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplaintListingScreen);
