import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryColor,
  },

  appNameStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.latoBlack,
  },

  appNameContainer: {
    top: 0,
    width: '100%',
    position: 'absolute',
    paddingVertical: 10,
    backgroundColor: colors?.darkPink,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  cardStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightPurple,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    flexDirection: 'column',
  },

  cardText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.latoRegular,
    width: '95%',
    marginTop: 22,
    alignSelf: 'center',
    color: colors?.black,
  },

  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.transparentBlack,
    justifyContent: 'center',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  popupCard: {
    backgroundColor: colors.white,
    width: '90%',
    paddingVertical: '10%',
    alignSelf: 'center',
    borderRadius: 15,
    position: 'absolute',

    bottom: '5%',
  },

  calendarImage: {
    width: 90,
    height: 90,
  },

  closeImage: {
    width: 15,
    height: 15,
  },

  eventTitleStyle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontFamily: fonts.latoBold,
    width: '95%',
    alignSelf: 'center',
    color: colors.black,
  },

  closeImageButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 15,
    top: 15,
    padding: 5,
  },

  calendarView: {
    alignSelf: 'center',
    position: 'absolute',
    top: -50,
  },
  
  dateTimeText: {
    textAlign: 'center',
    paddingVertical: 20,
    paddingBottom: 25,
    color: colors.transparentBlack,
    fontSize: 18,
    fontFamily: fonts.latoLight,
  },

  dateSelection: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },

  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: colors.darkPink,
    width: '100%',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  buttonStyleDisabled: {
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    width: '100%',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  saveButtonText: {
    fontSize: 19,
    textAlign: 'center',
    paddingVertical: 9,
    fontFamily: fonts.latoRegular,
  },

  bgImage: {width: 40, height: 40, position: 'absolute'},
  
  secondModal: {
    width: '100%',
    paddingVertical: 30,
    height: '100%',
    position: 'absolute',
  },

  popupMenu: {
    backgroundColor: colors.white,
    width: '90%',
    paddingVertical: '10%',
    paddingBottom: '7%',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    top: '25%',
  },

  menuTitleStyle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 22,
    fontFamily: fonts.latoBlack,
    width: '95%',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: colors?.black,
  },
  
  lineDivider: {
    height: 1,
    width: '95%',
    backgroundColor: colors.transparentBlack,
    marginVertical: 20,
    borderRadius: 30,
    alignSelf: 'center',
  },

  iconView: {
    width: 120,
    height: 120,
  },

  optionsStyle: {
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
    position: 'absolute',
  },

  rowContainerMain: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  mainMenuImage: {
    width: '35%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  titleView: {
    alignItems: 'flex-start',
    width: '65%',
  },

  titleStyle: {
    fontSize: 18,
    marginLeft: 20,
    justifyContent: 'center',
    textAlign: 'left',
    color: colors?.black,
    fontFamily: fonts?.latoRegular,
  },

  permissionAccessView: {
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
    marginBottom: 20,
  },

  deniedCalendarText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors?.red,
  },

  goToSettingsText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors?.skyBlue,
    textDecorationLine: 'underline',
  },

  activityIndicatorStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: colors?.transparentBlack,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyleDate: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 10,
  },

  calendarButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  dateTimeStyle: {
    fontSize: 17,
    fontFamily: fonts?.latoRegular,
    color: colors.black,
  },

  menuButtonContainer: {
    padding: 15,
    width: '10%',
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
    position: 'absolute',
  },

  dropShadowStyle: {
    shadowColor: colors?.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default styles;