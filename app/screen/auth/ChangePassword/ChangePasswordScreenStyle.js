import {StyleSheet, Platform} from 'react-native';
import * as COLORS from '../../../utils/Colors';
import Scale, {verticalScale} from '../../../utils/Scale';

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
    paddingHorizontal: Scale(10),
    paddingTop: verticalScale(15),
  },
  instructionText: {
    fontSize: Scale(13),
    paddingBottom: verticalScale(5),
    paddingLeft: Scale(20),
  },
  titleText: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(18),
    fontWeight: '500',
    marginTop: verticalScale(10),
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: COLORS.THEME_DARK_GREEN,
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    paddingBottom: Scale(5),
    marginTop: Scale(5),
    marginBottom: verticalScale(10),
  },
  profileBtn: {
    backgroundColor: COLORS.THEME_GREEN,
    width: '70%',
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: Scale(5),
    marginTop: verticalScale(15),
  },
  btnText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: Scale(14),
    fontWeight: '600',
  },
});

export default styles;
