import {SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeRails from '../../Components/Rails/index';
import { getRequestAuthenticated } from '../../../apimanager/index';
const HomeScreen = () => {
  const [homepageData, setHomepageData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getRequestAuthenticated(
        'homescreen/pub/api/v1/hierarchy/HOMEPAGE',
      );

      res?.data?.map(async item => {
        const railRes = await getRequestAuthenticated(
          `homescreen/pub/api/v4/rail/${item?.railId}`,
        );
        // console.log('railRes=========>>>>>', railRes, railRes.data.position);
        setHomepageData(prevData => [...prevData, railRes.data]);
      });
    };

    fetchApi();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <HomeRails homepageData={homepageData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
