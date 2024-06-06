import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DUMMY_DATA_HOME} from '../../Constants/index';
import BannerList from '../Banner/BannerList';
import {useNavigation} from '@react-navigation/native';

const HomeRails = ({homepageData}) => {
  const navigation = useNavigation();
  console.log('homepageData', homepageData);
  const renderRail = (item, index, layoutType) => {
    return (
      <View
        key={index}
        style={{
          height: layoutType == 'LANDSCAPE' ? 150 : 180,
          width: layoutType == 'LANDSCAPE' ? 165 : 155,
          borderWidth: 1,
          marginRight: 10,
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 15,
        }}>
        <Image
          style={{
            height: layoutType == 'LANDSCAPE' ? 150 : 180,
            width: layoutType == 'LANDSCAPE' ? 165 : 155,
          }}
          source={{
            uri: item?.image,
          }}
          //   resizeMode="stretch"
        />
        <Text style={{margin: 8, fontSize: 14, marginBottom: 20}}>
          {item?.title}
        </Text>
      </View>
    );
  };

  const renderCircularRail = ({item}) => {
    return (
      <View style={{alignItems: 'center', marginRight: 20, marginBottom: 15}}>
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            borderWidth: 1,
            marginBottom: 15,
          }}>
          <Image
            style={{height: 70, width: 70, borderRadius: 35}}
            source={{
              uri: `${item?.image}`,
            }}
            resizeMode="stretch"
          />
        </View>
        <Text style={{fontSize: 14}}>{item?.title}</Text>
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
      case 'SHORTCUT_RAIL':
        return (
          <FlatList
            horizontal
            keyExtractor={(_, index) => `key_${index}`}
            renderItem={renderCircularRail}
            data={item?.contentList}
            contentContainerStyle={{}}
          />
        );
      case 'RAIL':
        // console.log('123', item);
        return (
          <FlatList
            horizontal
            keyExtractor={(_, index) => `key_${index}`}
            renderItem={({item: contentItem, index}) =>
              renderRail(contentItem, index, item?.layoutType)
            }
            data={item?.contentList?.slice(0, 8)}
            contentContainerStyle={{}}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, margin: 12}}>
      {homepageData &&
        homepageData?.map((item, index) => {
          //   console.log('length', item);
          return (
            <>
              <View
                style={{
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{item?.title}</Text>
                {item?.totalCount > 8 && (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ViewAll', {data: item})
                    }>
                    <Text style={{color: 'red'}}>All</Text>
                  </TouchableOpacity>
                )}
              </View>
              {renderDyamimcRail(item, index)}
            </>
          );
        })}
    </View>
  );
};

export default HomeRails;
