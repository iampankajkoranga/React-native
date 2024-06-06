import {View, Text, FlatList,Image} from 'react-native';
import React from 'react';

const ViewAll = props => {
  const ViewAllData = props?.route?.params?.data?.contentList;
  const orientation= true

  const renderItem = (item, index, orientation) => {
    return (
      <View
        key={index}
        style={{
          height: orientation == 'PORTRAIT' ? 185 : 160,
          width: orientation == 'PORTRAIT' ? 162 : 175,
          borderWidth: 1,
          marginHorizontal: 6,
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 15,
        }}>
        <Image
          style={{height: 120, width: 200}}
          source={{
            uri: item?.image,          }}
          resizeMode="stretch"
        />
        <Text style={{margin: 8, fontSize: 14}}>
          {item?.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{alignItems:"center",margin:10}}>
      <FlatList
    numColumns={2}
        data={ViewAllData}
        renderItem={({item: contentItem, index}) =>
          renderItem(contentItem, index,orientation)
        }
      />
    </View>
  );
};

export default ViewAll;
