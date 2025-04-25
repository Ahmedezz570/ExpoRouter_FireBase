import { Stack } from 'expo-router';
import React from 'react';
const Layout = () => {
  return (
    
    <Stack>
        <Stack.Screen name="(tabs)"  options={{headerShown:true}}/>
      <Stack.Screen name="Register"  options={{headerShown:true}}/>
      <Stack.Screen name="Login"  options={{headerShown:true}}/>
        

    
      </Stack>
  );
}

export default Layout;