import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Scale, {verticalScale} from '../utils/Scale';
import * as COLORS from '../utils/Colors';

const RadioButton = props => {
  return (
    <View>
      {props?.DropData?.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            <Text style={styles.radioText}>{res.text}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                props?.setValue(res.key);
              }}>
              {props?.value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: Scale(35),
    color: COLORS.THEME_DARK_GREEN,
    fontSize: Scale(14),
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.THEME_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: COLORS.THEME_GREEN,
  },
});
