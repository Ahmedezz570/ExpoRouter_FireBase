import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen name='Home' options={{
      title: 'Home',
      tabBarIcon: ({color}) => (
        <Ionicons name='home-outline' size={22} color={color} />
      )
    }} />

<Tabs.Screen name='Profile' options={{
      title: 'Profile',
      tabBarIcon: ({color}) => (
        <Ionicons name='person-outline' size={22} color={color} />
      )
    }} />
<Tabs.Screen name='Upload' options={{
      title: 'Uplaod Image',
      tabBarIcon: ({color}) => (
        <Ionicons name='cloud-upload-outline' size={22} color={color} />
      )
    }} />
     

    
  
    

  </Tabs>
  );
}