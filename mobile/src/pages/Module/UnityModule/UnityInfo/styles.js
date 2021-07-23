import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    unityInfoBackGround: {
        flex: 1,
        margin: 24,
        paddingHorizontal: 10,
        backgroundColor: '#C85103',
        borderRadius: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    image: {
        height: "100%",
        width: '100%',
        borderRadius: 8,
    },

    video: {
        marginTop: 10,
        alignSelf: 'center',
        width: 320,
        height: 200,
        borderRadius: 8,
    },

    scroll: {
        flex: 1,
        marginBottom: 20
    },


    unityInfo: {
        flex: 1,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
        padding: 16,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
})