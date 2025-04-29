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

<Tabs.Screen name='AddProduct' options={{
      title: 'Add',
      tabBarIcon: ({color}) => (
        <Ionicons name='cloud-upload-outline' size={22} color={color} />
      )
    }} />
<Tabs.Screen name='AllProducts' options={{
      title: 'All',
      tabBarIcon: ({color}) => (
        <Ionicons name='cloud-upload-outline' size={22} color={color} />
      )
    }} />

<Tabs.Screen name='Products' options={{
      title: 'Products',
      tabBarIcon: ({color}) => (
        <Ionicons name='cloud-upload-outline' size={22} color={color} />
      )
    }} />

<Tabs.Screen name='Cart' options={{
      title: '../cartt',
      tabBarIcon: ({color}) => (
        <Ionicons name='cloud-upload-outline' size={22} color={color} />
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