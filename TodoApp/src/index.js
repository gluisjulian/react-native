import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import AddTask from './pages/AddTask';

const Stack = createStackNavigator();

function App() {
  return (
    <>

      <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default App;
