import {StyleSheet} from 'react-native';
import * as COLORS from '../../../utils/Colors';
import Scale, {verticalScale} from '../../../utils/Scale';

const styles = StyleSheet.create({
  HeaderView: {
    backgroundColor: COLORS.DEFAULT_WHITE,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.THEME_GREEN,
    borderBottomWidth: 1,
  },
  HeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.THEME_GREEN,
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  complaintView: {
    backgroundColor: COLORS.DEFAULT_WHITE,
    paddingVertical: verticalScale(10),
    paddingHorizontal: Scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    marginBottom: Scale(5),
  },
  viewButton: {
    backgroundColor: COLORS.THEME_GREEN,
    paddingVertical: verticalScale(10),
    paddingHorizontal: Scale(20),
    borderRadius: Scale(5),
  },
  viewText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: Scale(15),
    fontWeight: '600',
  },
});

export default styles;
