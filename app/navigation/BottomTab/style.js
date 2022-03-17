import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import * as COLORS from '../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    height: 77,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.THEME_GREEN,
    borderTopWidth: 0.5,
    borderTopColor: '#DCDCDC',
  },
  paddingView: {
    backgroundColor: COLORS.DEFAULT_WHITE,
    paddingBottom: isIphoneX() ? 34 : 0,
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
  },
  imgProfile: {
    height: 30,
    width: 30,
  },
  font12: {
    fontSize: 10,
    fontFamily: 'Raleway-SemiBold',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxView: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon32: {
    height: 32,
    width: 32,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  image32: {
    height: 32,
    width: 32,
  },
  view31: {
    height: 31,
    width: 31,
    borderRadius: 16,
    backgroundColor: 'rgb(233, 234,242)', // '#B4B8D5'
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
