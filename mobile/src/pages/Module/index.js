import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import cafe from '../../../assets/Café.png';
// import { useFonts } from 'expo-font';
// import AppLoading from "expo-app-loading";

import styles from './styles';

export default function Module() {
    const [modules, setModules] = useState([
        {id: 1, name: "Café da manhã", image_url: "http://192.168.0.116:3333/uploads/Café.png"},{id: 2, name: "Almoço", image_url: "http://192.168.0.116:3333/uploads/Almoço.png"},{id: 3, name: "Jantar", image_url: "http://192.168.0.116:3333/uploads/Jantar.png"},
    ]);
    const navigation = useNavigation();
    // const [searchValue, setSearchValue] = useState('');


    function navigateToInUnity(modulee) {
        navigation.navigate('Unidades', { modulee });
    }

    // async function loadModules() {
    //     const response = await api.get('module');

    //     setModules(response.data);
    // };

    // useEffect(() => {
    //     loadModules();
    // }, []);

    // async function search() {
    //     const response = await api.get('module', {
    //         params: {
    //             search: searchValue
    //         }
    //     });
    //     setModules(response.data);
    // };

    // useEffect(() => {
    //     search();
    // }, [searchValue]);
      
    //   async function loadFont(){
        
    //     const [loaded] = useFonts({
    //         Poppins: require('../../../assets/fonts/Poppins-Medium.ttf'),
    //       });
    //     const response = await loaded;

    //     return response;
    //   }

    // const [loaded] = useFonts({
    //     Poppins: require('../../../assets/fonts/Poppins-Medium.ttf'),
    //   });

    //   if(!loaded){return <AppLoading/>}

    return (
        <View style={styles.container} >

            <FlatList
                data={modules}
                style={styles.moduleList}
                keyExtractor={moduless => String(moduless.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: moduless }) => (
                    <View style={styles.module}>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={() => navigateToInUnity(moduless)}
                        >
                            {/* <ScrollView style={styles.scroll}> */}
                                <Image resizeMode="contain" source={{ uri: moduless.image_url, }} style={styles.image} />
                                <Text style={styles.moduleButtonText}>{moduless.name}</Text>
                            {/* </ScrollView> */}
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}