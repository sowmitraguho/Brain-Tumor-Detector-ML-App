import { View, Text, Image } from 'react-native'
import React from 'react'
import image from '../../assets/images/braintumorsymptoms.jpg'
export default function Header() {
  return (
    <View>
      <View style={{
        display: 'flex',
        margin: 'auto'
      }}>
        <Text>This is inside Header</Text>
        <Image 
        style={{
          width: '300px',
          height: '300px'
        }}
        source={require('../../assets/images/braintumorsymptoms.jpg')} />
      </View>
    </View>
  )
}