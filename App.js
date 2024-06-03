import 'react-native-gesture-handler';
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen/index';


const App = () => {
  const Drawer = createDrawerNavigator();

  const drawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  };

  return <NavigationContainer>
    {/* {drawerNavigator()} */}
    <HomeScreen/>
  </NavigationContainer>;
};

export default App;
