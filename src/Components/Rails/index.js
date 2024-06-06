import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {DUMMY_DATA_HOME} from '../../Constants/index';
import BannerList from '../Banner/BannerList';

const HomeRails = ({homepageData}) => {
  const renderRail = ({item, index}) => {
    // console.log('item=====>>>>>>>', item);
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
            uri: `${item?.image}`,
          }}
          resizeMode="stretch"
        />
        <Text style={{margin: 8, fontSize: 14}}>{item?.content?.title}</Text>
      </View>
    );
  };
  const renderDyamimcRail = (item, index) => {
    switch (item?.sectionType) {
      case 'HERO_BANNER':
        return (
          // <BannerList
          //   bannerData={item.contentEditorial}
          //   key={`hero_banner${index}`}
          // />
          <View>
            <Text>abc</Text>
          </View>
        );
      case 'RAIL':
        // console.log('123', item);
        return (
          <FlatList
            horizontal
            keyExtractor={(_, index) => `key_${index}`}
            renderItem={renderRail}
            data={item?.contentList}
            contentContainerStyle={{}}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, margin: 10}}>
      {homepageData &&
        homepageData?.map((item, index) => {
          return (
            <>
              <View style={{marginBottom: 5}}>
                <Text>{item?.title}</Text>
              </View>
              {renderDyamimcRail(item, index)}
            </>
          );
        })}
    </View>
  );
};

export default HomeRails;
