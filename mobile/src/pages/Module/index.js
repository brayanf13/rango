import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import cafe from '../../../assets/Café.png';

import styles from './styles';

export default function Module() {
    const [modules, setModules] = useState([
        {id: 1, name: "Café da manhã", image_url: "http://192.168.1.10:3333/uploads/Café.png"},{id: 2, name: "Almoço", image_url: "http://192.168.1.10:3333/uploads/Almoço.png"},{id: 3, name: "Jantar", image_url: "http://192.168.1.10:3333/uploads/Jantar.png"},
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
                            <Text style={styles.moduleButtonText}>{moduless.name}</Text>
                            <Image resizeMode="contain" source={{ uri: moduless.image_url, }} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}