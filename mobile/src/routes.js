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
                        fontFamily: 'PoppinsBold',
                        textAlign: 'center',
                        color: '#FFF',
                        },
                    }}
                    name="Categoria de receitas" component={Module}
                />
                <AppStack.Screen
                    options={{
                        title: 'Receitas',
                        headerStyle: {
                            backgroundColor: '#C85103',
                            
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                        fontFamily: 'PoppinsBold',
                        },
                    }}
                    name="Unidades" component={UnityModule}
                />
                <AppStack.Screen
                    options={{
                        title: 'Receita',
                        headerStyle: {
                            backgroundColor: '#C85103',
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                        fontFamily: 'PoppinsBold',
                        },
                    }}
                    name="Informação da Unidade" component={UnityInfo}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}