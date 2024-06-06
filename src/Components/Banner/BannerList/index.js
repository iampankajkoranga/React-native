import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Carousel from 'react-native-reanimated-carousel';

const BannerList = ({key, bannerData}) => {
  let WINDOW_WIDTH = Dimensions.get('screen').width;
  let WINDOW_HEIGHT = Dimensions.get('screen').height;
  let CAROUSAL_HEIGHT = 200;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View key={key} style={styles.bannerListView}>
      <Carousel
        loop
        data={bannerData}
        width={WINDOW_WIDTH}
        autoPlayInterval={4000}
        height={CAROUSAL_HEIGHT}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        scrollAnimationDuration={500}
        enabled={bannerData.length > 1}
        autoPlay={bannerData.length > 1}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={() => {}}
      />
      {bannerData.length > 1 ? (
        <View style={styles.pagination}>
          {bannerData.map((item, index) => (
            <View
              key={item.contentId}
              style={styles.dots(index === currentIndex)}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default BannerList;
