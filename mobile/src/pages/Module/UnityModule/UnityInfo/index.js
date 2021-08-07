import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

export default function UnityInfo() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const route = useRoute();
    const info = route.params.info;
    const videOrImage = route.params.videOrImage;

    return (
        <View style={styles.unityInfoBackGround}>
            <Image resizeMode="contain" source={{ uri: info.image_url, }} style={styles.image} />
            
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <Text style={styles.unityInfo}>
                        {info.content}
                    </Text>
                </ScrollView>
            
            </View>
        </View>
    )
};