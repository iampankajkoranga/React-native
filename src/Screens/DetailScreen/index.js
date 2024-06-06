import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import HomeRails from '../../Components/Rails/index'

const DetailScreen = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <HomeRails />
      </ScrollView>
    </View>
  )
}

export default DetailScreen