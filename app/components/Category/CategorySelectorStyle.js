import {StyleSheet} from 'react-native';
import * as COLORS from '../../utils/Colors';
import Scale, {verticalScale} from '../../utils/Scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.THEME_GREEN,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  headerTitle: {
    flex: 1,
    color: COLORS.DEFAULT_WHITE,
    textAlign: 'center',
    fontSize: Scale(20),
    fontWeight: '500',
    marginLeft: -Scale(15),
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  categoryItemView: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
  },
  categoryImage: {
    width: Scale(50),
    height: verticalScale(50),
    borderRadius: Scale(25),
  },
  categoryText: {
    fontSize: Scale(15),
    color: 'black',
    fontWeight: '400',
    marginTop: verticalScale(5),
  },
});

export default styles;
