import {View, Text, FlatList,Image} from 'react-native';
import React from 'react';

const ViewAll = props => {
  const ViewAllData = props?.route?.params?.data;
  const orientation= props?.route?.params?.orientation

  const renderItem = (contentItem, index, orientation) => {
    return (
      <View
        key={index}
        style={{
          height: orientation == 'PORTRAIT' ? 185 : 160,
          width: orientation == 'PORTRAIT' ? 162 : 175,
          borderWidth: 1,
          margin: 10,
          borderRadius: 10,
          overflow: 'hidden',
        //   marginBottom: 15,
        }}>
        <Image
          style={{height: 120, width: 200}}
          source={{
            uri: `https://dev-astro-datastore.videoready.tv/${contentItem?.content?.posterImage}`,
          }}
          resizeMode="stretch"
        />
        <Text style={{margin: 8, fontSize: 14}}>
          {contentItem?.content?.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{alignItems:"center"}}>
      <FlatList
    numColumns={2}
        data={ViewAllData?.contentEditorial}
        renderItem={({item: contentItem, index}) =>
          renderItem(contentItem, index,orientation)
        }
      />
    </View>
  );
};

export default ViewAll;
