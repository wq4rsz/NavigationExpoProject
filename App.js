import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './screen';
import Languages from './languages';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={About} />
        <Tab.Screen name="Мои Языки Программирования" component={Languages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};