import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';

import styles from './styles';

export default function UnityModule() {
    const navigation = useNavigation();
    const [unityModule, setUnityModule] = useState([]);
    const route = useRoute();
    const modulee = route.params.modulee;
    const [searchValue, setSearchValue] = useState('');

    function imageOrVideo(iov) {
        const arrayOfStrings = iov.split('.');
        const imageFormat = ['jpeg', 'png', 'bmp', 'svg', 'gif']
        var aux = '';
        const string = arrayOfStrings[arrayOfStrings.length - 1]
        for (let i = 0; i < imageFormat.length; i++) {
            if (imageFormat[i] == string) {
                aux = 'imagem'
                break
            } else {
                aux = 'video'
            }
        }

        if (aux != 'imagem') {
            return false
        } else return true
    }

    function navigateToInUnityInfo(info) {
        const videOrImage = imageOrVideo(info.image_name)
        navigation.navigate('Informação da Unidade', { info, videOrImage });
    }

    async function loadUnityModules() {
        const response = await api.get(`unityModule/${modulee}`);

        setUnityModule(response.data);
    }

    useEffect(() => {
        loadUnityModules();
    }, [])

    async function search() {
        const response = await api.get(`unityModule/${modulee.id}`, {
            params: {
                search: searchValue
            }
        });
        setUnityModule(response.data);
    }

    useEffect(() => {
        search();
    }, [searchValue])

    return (
        <View style={styles.container} >

            <View style={styles.viewInput}>
                <TextInput style={styles.unityInput} type="text" onChangeText={text => setSearchValue(text)}></TextInput>
                <Feather style={styles.searchIcon} name="search" size={20} color="black" />
            </View>


            <FlatList
                data={unityModule}
                style={styles.unityModuleList}
                keyExtractor={unity => String(unity.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: unity }) => (
                    <View style={styles.unityModule}>
                        <TouchableOpacity
                            style={styles.unityModuleButton}
                            onPress={() => navigateToInUnityInfo(unity)}
                        >
                            <Text style={styles.unityModuleButtonText}>{unity.name}</Text>
                            <Image resizeMode="contain" source={{ uri: unity.image_url, }} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}