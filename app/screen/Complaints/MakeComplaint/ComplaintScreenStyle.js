import {StyleSheet, Platform} from 'react-native';
import * as COLORS from '../../../utils/Colors';
import Scale, {verticalScale} from '../../../utils/Scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
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
    paddingHorizontal: Scale(10),
    paddingTop: verticalScale(15),
  },
  titleText: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(18),
    textTransform: 'capitalize',
    fontWeight: '600',
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
    marginBottom: verticalScale(10),
  },
  categoryView: {
    paddingLeft: 20,
    backgroundColor: COLORS.THEME_BORDER_LIGHT_GREEN,
    height: 40,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
  },
  multilineAction: {
    borderWidth: 1.5,
    borderColor: COLORS.THEME_BORDER_GREEN,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
  photosView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoGrid: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: COLORS.THEME_GREEN,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
});

export default styles;
