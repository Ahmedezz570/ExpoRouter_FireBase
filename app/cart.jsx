import { View, Text, FlatList, Image, StyleSheet, Button , TextInput} from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

const Cart = () => {
  const { cart } = useLocalSearchParams();
  const initialCart = JSON.parse(cart || '[]'); 
  const [cartItems, setCartItems] = useState(initialCart); 
 const [searchText, setSearchText] = useState("");
  const handleDelete = (index) => {
    setCartItems(prevCart => prevCart.filter((_, i) => i !== index));
  };
  
  const handleSearch = (text) => {
    setSearchText(text);
      setCartItems(initialCart.filter(item => item.name.toLowerCase().includes(text.toLowerCase())));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty!</Text>
      ) : (<>
        <TextInput
                      style ={{width : "100%" , height : "3%"}}
                      placeholder="Search..."
                      value={searchText}
                      onChangeText={handleSearch}
                    />
        <FlatList
          data={cartItems}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.images[0] }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Max Score: {item.max}</Text>
                <Button title="Delete" onPress={() => handleDelete(index)} color="red" />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});
