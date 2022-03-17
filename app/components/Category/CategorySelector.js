import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CategorySelectorStyle';
import * as Constant from '../../utils/Constant';

const CategorySelector = props => {
  console.log('props', props);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => props.onClose()}>
            <Ionicons name="arrow-back" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Category</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <FlatList
          data={Constant.CATEGORY_LIST}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.categoryItemView}
                onPress={() => props.setCategory(item)}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryText}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategorySelector;
