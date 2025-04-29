import { View, Text , StyleSheet , TextInput , Button , Alert} from 'react-native';
import React ,{useState}from 'react';
import { db } from "../../firebase";
import {addDoc , collection} from 'firebase/firestore';
const AddProduct =  () => {
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [price , setPrice] = useState('');

    const handleAdd = async() => {
        if(title === '' || description === '' || price === ''){
            Alert.alert('Please fill all fields');
            return;
        }
        try{
         await addDoc(collection(db , "newProducts") , 
          {
            title ,
            description ,
            price,
            createdAt: new Date().toISOString()
          });
        console.log('Product added:', { title, description, price });
        setTitle('');
    setDescription('');
    setPrice('');
    }
    catch (error) {
        console.error('Error adding product:', error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
    }

  return (
  <View style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.text}>Header for page</Text>
        </View>
        <View style={styles.header2}>
           <TextInput placeholder='Enter your name' value={title} onChangeText={text => setTitle(text)} style={styles.input}/>
           <TextInput placeholder='Enter your email' value ={description} onChangeText={text => setDescription(text)}style={styles.input}/>
           <TextInput placeholder='Enter your password' value ={price} onChangeText={text => setPrice(text)}  style={styles.input}/>
           <Button title='Add' onPress={() =>handleAdd()}/>
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
  

export default AddProduct;