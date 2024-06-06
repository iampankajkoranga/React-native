import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeRails from '../../Components/Rails/index';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <HomeRails />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
