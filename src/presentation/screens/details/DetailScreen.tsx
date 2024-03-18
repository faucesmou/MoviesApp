import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const DetailScreen = () => {

  const {top } = useSafeAreaInsets();
  return (
    <View
    style={{
      marginTop:top + 40,
      paddingBottom: 30
    }}>
        <Text>
        DetailScreen
        </Text>
    </View>
    
  )
}