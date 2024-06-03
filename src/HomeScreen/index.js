import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const data = ['1', '2', '3', '5', '6', '7'];

  const renderItem = () => {
    return (
      <View
        style={{
          height: 150,
          width: 200,
          borderColor: 'red',
          borderWidth: 1,
          marginRight: 10,
        }}></View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, margin: 10}}>
        <View
          style={{
            height: 180,
            width: '100%',
            borderColor: 'green',
            borderWidth: 1,
            marginBottom: 20,
          }}></View>

        <View style={{marginBottom: 5}}>
          <Text>CARD </Text>
        </View>
        <FlatList
          horizontal
          renderHeader
          renderItem={renderItem}
          keyExtractor={(item, index) => `rail_key_${index}`}
          data={data}
          contentContainerStyle={{}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
