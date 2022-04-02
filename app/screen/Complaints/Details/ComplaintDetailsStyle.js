import {StyleSheet} from 'react-native';
import Scale, {verticalScale} from '../../../utils/Scale';
import * as COLORS from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  backArrow: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: Scale(20),
    fontWeight: '500',
    marginLeft: -Scale(15),
  },
  headerSubTitle: {
    color: '#fff',
    fontSize: Scale(15),
  },
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentTitle: {
    color: COLORS.THEME_GREEN,
    fontSize: Scale(15),
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  contentAnswer: {
    fontSize: Scale(13),
    paddingLeft: Scale(10),
    color: 'black',
  },
  viewSeperator: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.THEME_BORDER_GREEN,
    paddingTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  photosView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoGrid: {
    width: 100,
    height: 100,
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
