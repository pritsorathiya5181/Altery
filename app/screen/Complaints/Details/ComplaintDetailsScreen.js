import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './ComplaintDetailsStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ComplaintDetailsScreen = props => {
  console.log('props', props.route.params);
  const [complaintItem, setcomplaintItem] = useState(
    props.route.params?.complaint,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Complaint Details</Text>
        </View>
        <Text style={styles.headerSubTitle}>#{complaintItem?.complaintId}</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <Text style={styles.contentTitle}>Subject:</Text>
            <Text style={styles.contentAnswer}>{complaintItem?.subject}</Text>
          </View>
          <View style={styles.viewSeperator} />

          <View style={styles.row}>
            <Text style={styles.contentTitle}>Category:</Text>
            <Text style={styles.contentAnswer}>{complaintItem?.category}</Text>
          </View>
          <View style={styles.viewSeperator} />

          <View style={styles.row}>
            <Text style={styles.contentTitle}>Location:</Text>
            <Text style={styles.contentAnswer}>{complaintItem?.location}</Text>
          </View>
          <View style={styles.viewSeperator} />

          <View style={styles.row}>
            <Text style={styles.contentTitle}>Description:</Text>
            <Text style={styles.contentAnswer}>
              {complaintItem?.description}
            </Text>
          </View>
          <View style={styles.viewSeperator} />

          <View style={styles.row}>
            <Text style={styles.contentTitle}>Current Status:</Text>
            <Text style={styles.contentAnswer}>
              {complaintItem?.complaintStatus}
            </Text>
          </View>
          <View style={styles.viewSeperator} />

          {complaintItem?.photos.length > 1 && (
            <>
              <Text style={styles.contentTitle}>Photos:</Text>
              <View style={styles.photosView}>
                {complaintItem?.photos.map(item => {
                  console.log('item', item);
                  return (
                    item.isPhoto && (
                      <View key={item.photoId} style={styles.photoGrid}>
                        <Image
                          alt="serviceImg"
                          resizeMode="cover"
                          source={{
                            uri: item.photoUrl,
                          }}
                          style={{width: '100%', height: '100%'}}
                        />
                      </View>
                    )
                  );
                })}
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default ComplaintDetailsScreen;
