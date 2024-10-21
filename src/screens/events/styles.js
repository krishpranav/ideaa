import { StyleSheet } from "react-native";
import fonts from '../../../assets/fonts/fonts';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors?.primaryColor,
    },
    
    titleStyle: {
        width: '100%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: fonts?.latoBlack,
        color: colors?.white,
    },

    backButtonStyle: {
        width: 25,
        height: 25
    }
})