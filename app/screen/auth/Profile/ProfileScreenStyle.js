import {StyleSheet} from 'react-native';
import * as COLORS from '../../../utils/Colors';
import Scale, {verticalScale} from '../../../utils/Scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.THEME_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.2,
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.DEFAULT_WHITE,
    paddingHorizontal: Scale(10),
  },
  headerTitle: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  nameRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  nameText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: Scale(18),
  },
  titleText: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(18),
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  contentText: {
    color: COLORS.DEFAULT_BLACK,
    fontSize: Scale(14),
  },
  contentView: {
    paddingBottom: verticalScale(10),
    // paddingHorizontal: Scale(10),
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    paddingTop: verticalScale(5),
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
