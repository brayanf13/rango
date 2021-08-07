import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    unityInfoBackGround: {
        flex: 1,
        // margin: 24,
        backgroundColor: '#C85103',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 24,
    },


    scroll: {
        // flex: 1,
        // marginBottom: 20,
        // height: 100
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#C76F35',
        marginTop: 10,
        borderRadius: 8,
    },

    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },

    unityInfo: {
        textAlign: 'center',
        borderRadius: 8,
        fontFamily: 'Poppins',
        // backgroundColor: '#fff',
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
        padding: 16,
        marginTop: 20,


    },
})