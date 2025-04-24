import { View, Text , StyleSheet, TextInput , Button , Alert} from 'react-native';
import React, { useState } from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleRegister = async ()=>{
        if(name === '' || email === '' || password === ''){
            Alert.alert('Please fill all fields');
        }
        if (password.length < 6) {
            Alert.alert("Weak Password", "Password must be at least 6 characters.");
            return;
          }

          try {
            // promise : that fires when the user is created
            // createUserWithEmailAndPassword is a method that takes email and password as arguments and returns a promise
            // await is used to wait for the promise to resolve
            // auth is the authentication object that is created in firebase.js file
                 const createUser = await createUserWithEmailAndPassword(auth ,email, password);  // Returns a promise (use async and await)
                 // for print a user object in console
                 const user = createUser.user;
                    console.log(user);
          }catch (error){
            console.log(error);
            Alert.alert('Error', 'Something went wrong. Please try again later.');
          }
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.text}>Header for page</Text>
      </View>
      <View style={styles.header2}>
      <TextInput placeholder='Enter your name' value={name} onChangeText={text => setName(text)} style={styles.input}/>
      <TextInput placeholder='Enter your email' value ={email} onChangeText={text => setEmail(text)}style={styles.input}/>
      <TextInput placeholder='Enter your password' value ={password} onChangeText={text => setPassword(text)} secureTextEntry style={styles.input}/>
      <Button title='Register' onPress={() =>handleRegister()}/>
      </View>
         
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    color: 'red',
    
  },
    header: {
    //   flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header2: {
        backgroundColor: 'yellow',
        width: '100%',
        height: "80%",
        // justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 20,
       
    },
});

export default Register;