import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        margin: 24,
        borderRadius: 8,
        backgroundColor: '#C85103',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    viewInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    unityInput: {
        marginTop: 32,
        height: 40,
        width: '100%',
        paddingHorizontal: 30,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    searchIcon: {
        position: 'absolute',
        opacity: 0.5,
        top: 42,
        right: 10,
        zIndex: 2,
    },

    unityModuleList: {
        marginTop: 32,
    },

    unityModule: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    unityModuleButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    unityModuleButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },

    image: {
        height: "100%",
        width: '100%',
        borderRadius: 8,
    },
});