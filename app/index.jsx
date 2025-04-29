import { View, Text , Button , StyleSheet , Pressable} from 'react-native';
import React from 'react';
import Register from './Register';
import Login from './Login';
// import Upload from '../Tasks/Upload';
import { useRouter } from 'expo-router';
const index = () => {
    const router = useRouter();
  return (
     <>
     <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => router.push("Register")}>
        <Text style={styles.txt}>Register</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => router.push("(tabs)/Home")}>
        <Text style={styles.txt}>Tabs</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => router.push("Login")}>
        <Text style={styles.txt}>Login</Text>
      </Pressable>

      
      <Pressable style={styles.btn} onPress={() => router.push("Quiz")}>
        <Text style={styles.txt}>Quiz</Text>
      </Pressable>
    </View>
     </>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      gap: 15,
      alignItems: 'center', 
    },
    btn: {
      backgroundColor: '#007bff',
    
      alignItems: 'center',
        justifyContent: 'center',
      height: 50,
      width: 100,
    },
    txt: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    }
  });
export default index;   