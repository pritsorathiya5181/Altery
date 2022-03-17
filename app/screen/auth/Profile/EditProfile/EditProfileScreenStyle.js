import {StyleSheet, Platform} from 'react-native';
import * as COLORS from '../../../../utils/Colors';
import Scale, {verticalScale} from '../../../../utils/Scale';

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
  iconView: {
    width: 50,
  },
  headerTitle: {
    flex: 1,
    color: COLORS.DEFAULT_WHITE,
    textAlign: 'center',
    fontSize: Scale(20),
    fontWeight: '500',
  },
  doneButton: {
    // width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.DEFAULT_WHITE,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  doneBtnText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: Scale(15),
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text_footer: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(18),
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: verticalScale(5),
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
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    paddingBottom: Scale(5),
    marginTop: Scale(5),
    marginBottom: verticalScale(10),
  },
});

export default styles;
