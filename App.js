import 'react-native-gesture-handler';
import {View, Text, SafeAreaView,Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/Screens/HomeScreen/index';
import DetailScreen from './src/Screens/DetailScreen/index'
import ViewAll from './src/Screens/ViewAll/index';

const App = () => {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();


  const drawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  };

  const tabNavigator=()=>{
    return(
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
            title: 'TATA PLAY',
            // tabBarIcon: () => {
            //   return (
            //     <Image
            //       style={{heigth:20,width:30}}
            //       source={{
            //         uri:'https://dev-astro-datastore.videoready.tv/image/movies/Disenchanted_3x4.jpg',
            //       }}
            //       resizeMode="stretch"
            //     />
            //   );
            // },
          }}/>
      <Tab.Screen name="Live" component={DetailScreen} />

    </Tab.Navigator>
    )
  }

  return <NavigationContainer>
    {/* {drawerNavigator()} */}

    {/* <HomeScreen/> */}

    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={tabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="Settings" component={DetailScreen} />
      </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
