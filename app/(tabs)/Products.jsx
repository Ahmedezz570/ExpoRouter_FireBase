import { View, Text, FlatList, Image, Button , TextInput, Pressable} from 'react-native';
import React, { useState } from 'react';
import data from '../../products.json';
import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Quiz = () => {
  const router = useRouter();
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [count , setCount] = useState(false);
  const [temp , setTemp] = useState(0);
  const handleDelete = (id) => {
    const filteredData = products.filter(item => item.id !== id);
    setProducts(filteredData);
  };

  const handleAddToCart =async (item) => {
     setCart((prevCart) => [...prevCart, item]);
//    await AsyncStorage.setItem(cart ,  JSON.stringify(cart));
    setCount(true);
   
    console.log(`Added to cart: ${item.name}`);
  };
// const handleSearch =(text)=>{
//     const filtered = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
//   setProducts(filtered);
// }

const handleSearch = (text) => {
    setSearchText(text);
      setProducts(data.filter(item => item.name.toLowerCase().includes(text.toLowerCase())));
    
  };
  const handleGoToCart = () => {
    
    router.push({
      pathname: '/cart',
      params: { cart: JSON.stringify(cart) } 
    });
  };
const handleRefresh = () =>{
    setCount(false);
    // setCart([]);
}
  return (
    <>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        Quiz
      </Text>
      <View style ={{ flexDirection : "row" , justifyContent : "center" , width : "100%" , backgroundColor : "white" , padding : 10 }}>
{/* <input placeholder='enter your search'  onChangeText={handleSearch}></input> */}
<TextInput
              style ={{width : "100%" , height : "100%"}}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
            />
{/* <Button title='search' onPress={()=>{handleSearch(searchText)}}/> */}

</View>
      <Button title="Go to Cart" color="orange" onPress={handleGoToCart} />
       <Button title="Refresh" onPress={()=>handleRefresh()}/>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            
            {/* <Text style={{ color: '#555' }}>{item.max}</Text> */}
            <Image source={{ uri: item.images[0] }} style={{ width: 100, height: 100, marginVertical: 10 , borderRadius : 30 }} />
            {/* <Button title="View" onPress={() => router.push(`${item.id}`)} />
            <View style={{ height: 10 }} />
            <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
            <View style={{ height: 10 }} /> */}
            <Text style={{ fontSize: 20, fontWeight:60 }}>{item.price}EGP</Text>
            { count ? 
               <View style= {{flexDirection : "row" , justifyContent : "center" }}>
                <Button title='+' onPress={()=>{setTemp(temp +1 )}}></Button>
                {/* <Pressable style={{backgroundColor : "blue" , width : "100%"}}  onPress={()=>{setTemp(temp +1 )}}>
                    <Text style={{color : "white", fontSize : 20}}>+</Text>
                </Pressable> */}
                <Text style={{justifyContent : "center" , alignItems : "center"}}>{temp}</Text>
                <Button  title='-' onPress={()=>{setTemp(temp -1 )}}></Button>
                {/* <Pressable style={{backgroundColor : "blue" , width : "100%"}}  onPress={()=>{setTemp(temp -1 )}}>
                    <Text style={{color : "white"}}>-</Text>
                </Pressable> */}
               </View>
            :<Button title="Add to Cart"  onPress={() => handleAddToCart(item)} />  }
            {/* <Button title="Add to Cart"  onPress={() => handleAddToCart(item)} /> */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default Quiz;
