import React from 'react';
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

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Complaint Portal</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <View style={styles.totalComplaintView}>
            <Text style={styles.totalCountText}>15</Text>
            <View style={styles.row}>
              <Text style={styles.totalTitleText}>Total Complaints</Text>
              <FontAwesome5 name="boxes" color={'white'} size={25} />
            </View>
          </View>

          <View style={styles.multipleComplaintView}>
            <View style={styles.openCompaintView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>Open{'\n'}Complaints</Text>
                <FontAwesome5
                  name="envelope-open-text"
                  color={'white'}
                  size={25}
                />
              </View>
            </View>
            <View style={styles.closeCompaintView}>
              <Text style={styles.totalCountText}>15</Text>
              <View style={styles.row}>
                <Text style={styles.totalTitleText}>Close{'\n'}Complaints</Text>
                <FontAwesome5 name="envelope-open" color={'white'} size={25} />
              </View>
            </View>
          </View>

          <Text style={styles.feedBackText}>Feedbacks</Text>
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
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.addView}
        onPress={() => {
          navigation.navigate('Complaint');
        }}>
        <Ionicons name="add-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
