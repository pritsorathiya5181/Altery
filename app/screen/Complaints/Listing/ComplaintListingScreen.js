import React, {useState} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import styles from './ComplaintListingStyle';

function ComplaintListingScreen({navigation}) {
  const [conplaintList, setconplaintList] = useState([
    {
      complaintId: 'C01123213',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
        {
          photoId: 1,
          isPhoto: true,
          photoUrl:
            'https://www2.gov.bc.ca/assets/gov/careers/all-employees/pay-and-benefits/propass/bc_transit_image.jpg',
        },
      ],
    },
    {
      complaintId: 'C01123214',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
      ],
    },
    {
      complaintId: 'C01123215',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
      ],
    },
    {
      complaintId: 'C01123216',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
      ],
    },
    {
      complaintId: 'C01123217',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
      ],
    },
    {
      complaintId: 'C01123218',
      subject: 'Regarding noice',
      category: 'Cyber crime',
      level: 'three',
      complaintDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      complaintLocation: 'Halifax, NS, B3L 4P7',
      photos: [
        {
          photoId: 0,
          isPhoto: false,
        },
      ],
    },
  ]);

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

export default ComplaintListingScreen;
