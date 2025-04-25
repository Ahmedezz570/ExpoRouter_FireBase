import { View, Text , Button} from 'react-native';
import React from 'react';
import Register from './Register';
import Login from './Login';
import Upload from '../Tasks/Upload';
import { useRouter } from 'expo-router';
const index = () => {
    const router = useRouter();
  return (
     <>
       
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <Button title='Register' onPress={() => router.push("Register")}/>
     <Button title='tabs' onPress={() => router.push("(tabs)/Home")}/>
     <Button title='Login ' onPress={() => router.push("Login")}/>
      </View>
     </>
  )
}

export default index;   