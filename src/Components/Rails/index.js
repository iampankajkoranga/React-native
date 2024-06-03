import {
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {DUMMY_DATA_HOME} from '../../Constants/index';

const HomeRails = () => {
  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          height: item?.orientation == 'LANDSCAPE' ? 160 : 180,
          width: item?.orientation == 'LANDSCAPE' ? 180 : 200,
          borderWidth: 1,
          marginRight: 10,
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 15,
        }}>
        <Image
          style={{height: 120, width: 200}}
          source={{
            uri: `https://dev-astro-datastore.videoready.tv/${item?.content?.posterImage}`,
          }}
          resizeMode="stretch"
        />
        <Text style={{margin: 8, fontSize: 14}}>{item?.content?.title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, margin: 10}}>
      <View
        style={{
          height: 180,
          width: '100%',
          borderColor: 'green',
          borderWidth: 1,
          marginBottom: 20,
        }}></View>

      {DUMMY_DATA_HOME.data?.results?.map(item => {
        return (
          <>
            <View style={{marginBottom: 5}}>
              <Text>{item?.name}</Text>
            </View>
            <FlatList
              horizontal
              keyExtractor={(_, index) => `key_${index}`}
              renderItem={renderItem}
              data={item?.contentEditorial}
              contentContainerStyle={{}}
            />
          </>
        );
      })}
    </View>
  );
};

export default HomeRails;
