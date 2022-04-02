import {StyleSheet} from 'react-native';
import Scale, {verticalScale} from '../../utils/Scale';
import * as COLORS from '../../utils/Colors';

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
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: Scale(20),
    fontWeight: '500',
  },
  totalComplaintView: {
    backgroundColor: '#473198',
    // height: verticalScale(80),
    padding: Scale(15),
  },
  totalCountText: {
    color: '#fff',
    fontSize: verticalScale(25),
    fontWeight: 'bold',
  },
  totalTitleText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: verticalScale(15),
    textTransform: 'uppercase',
  },
  multipleComplaintView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  openCompaintView: {
    // flex: 1,
    backgroundColor: '#DB2955',
    padding: Scale(15),
    marginTop: verticalScale(10),
    // marginRight: 10,
  },
  closeCompaintView: {
    // flex: 1,
    backgroundColor: '#F88961',
    padding: Scale(15),
    marginTop: verticalScale(10),
  },
  feedBackText: {
    fontSize: Scale(18),
    paddingTop: verticalScale(15),
    fontWeight: '600',
    textAlign: 'center',
  },
  positiveFeedbackView: {
    flex: 1,
    backgroundColor: '#9EB774',
    padding: Scale(15),
    marginRight: 10,
  },
  negativeFeedbackView: {
    flex: 1,
    backgroundColor: '#FF1F1F',
    padding: Scale(15),
    marginRight: 10,
  },
  pendingFeedbackView: {
    // flex: 1,
    backgroundColor: '#FBC668',
    padding: Scale(15),
    marginTop: verticalScale(10),
    // marginRight: 10,
  },
  addView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.THEME_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});

export default styles;
