import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 48,
        backgroundColor: '#C85103',
    },

    viewInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    moduleInput: {
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

    moduleList: {
        marginTop: 32,
    },

    module: {
        // flex: 1,
        flexDirection: 'column',
        margin: 4,
        height: 200,
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

    moduleButton: {
        flex: 1,
        padding: 24,
        margin: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    moduleButtonText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins',
    },

    image: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },

    scroll: {
        flex: 1,
        marginBottom: 20
    },
});