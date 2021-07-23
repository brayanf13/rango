import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Module from './pages/Module';
import UnityModule from './pages/Module/UnityModule';
import UnityInfo from './pages/Module/UnityModule/UnityInfo';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator >
                <AppStack.Screen
                    options={{
                        // title: '',
                        headerStyle: {
                            backgroundColor: '#C85103',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            // fontWeight: 'bold',
                        },
                    }}
                    name="Módulos" component={Module}
                />
                <AppStack.Screen
                    options={{
                        title: 'Unidades',
                        headerStyle: {
                            backgroundColor: '#C85103',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            // fontWeight: 'bold',
                        },
                    }}
                    name="Unidades" component={UnityModule}
                />
                <AppStack.Screen
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#C85103',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            // fontWeight: 'bold',
                        },
                    }}
                    name="Informação da Unidade" component={UnityInfo}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}