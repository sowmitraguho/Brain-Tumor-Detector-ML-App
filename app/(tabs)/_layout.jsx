import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { Tabs } from 'expo-router'
import {Colors} from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
        <Tabs.Screen name='home'
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({color})=><FontAwesome name="home" size={24} color="black" />
        }}
        />
        <Tabs.Screen name='explore' 
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({color})=><Ionicons name="home" size={24} color={color} />
        }}
        />
        <Tabs.Screen name='about' 
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({color})=><Ionicons name="home" size={24} color={color} />
        }}
        />
    </Tabs>
  )
}