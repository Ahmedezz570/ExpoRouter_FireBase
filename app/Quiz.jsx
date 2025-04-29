import { View, Text, FlatList, Image, Button } from 'react-native';
import React, { useState } from 'react';
import data from '../products.json';
import { useRouter } from 'expo-router';

const Quiz = () => {
  const router = useRouter();
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleDelete = (id) => {
    const filteredData = products.filter(item => item.id !== id);
    setProducts(filteredData);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(`Added to cart: ${item.name}`);
  };
const handleSearch =(text)=>{
  setProducts(data.filter(item => item.name.includes(text)));
}
  const handleGoToCart = () => {
    
    router.push({
      pathname: '/cart',
      params: { cart: JSON.stringify(cart) } 
    });
  };

  return (
    <>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        Quiz
      </Text>
{/* <input placeholder='enter your search'></input>
<Button title='search' onPress={()=>{handleSearch()}}/> */}
      {/* <Button title="Go to Cart" color="orange" onPress={handleGoToCart} /> */}

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: '#555' }}>{item.max}</Text>
            <Image source={{ uri: item.images[0] }} style={{ width: 100, height: 100, marginVertical: 10 }} />
            {/* <Button title="View" onPress={() => router.push(`${item.id}`)} />
            <View style={{ height: 10 }} />
            <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
            <View style={{ height: 10 }} />
            <Button title="Add to Cart" color="green" onPress={() => handleAddToCart(item)} /> */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default Quiz;
