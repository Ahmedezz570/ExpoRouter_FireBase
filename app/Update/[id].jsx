import { View, Text, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Update = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState(null);
  const route = useRouter();
  const { id } = useLocalSearchParams(); 
  console.log('Product ID:', id); // Log the product ID to check if it's being passed correctly
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const docRef = ;
        const docSnap = await getDoc(doc(db, 'newProducts', id));

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() }); // Store the product data in state (spread operator)
          console.log('Document data:', docSnap.data());
          console.log('Document ID:', docSnap.id);
          setTitle(docSnap.data().title);
          setDescription(docSnap.data().description);
          setPrice(docSnap.data().price);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchProduct();
  }, []);

  const handleUpdate = async () => {
    if (title && description && price) {
      try {
      
        await updateDoc(doc(db, 'newProducts', id), {
          title: title,
          description: description,
          price: price,
        //   createdAt: new Date().toISOString(),
        });
        console.log('Product updated successfully');
      } catch (error) {
        console.error('Error updating document:', error);
      }
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <View>
      {product ? (
        <>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            placeholder="Price"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
          <Button title="Update" onPress={handleUpdate} />
        </>
      ) : (
        <Text>Loading product...</Text>
      )}
    </View>
  );
};

export default Update;
