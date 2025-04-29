import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, getDocs , deleteDoc , doc } from 'firebase/firestore';
import { useRouter } from 'expo-router';
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchProdusts = async () => {
      try {
        const q = await getDocs(collection(db, "newProducts"));
        const productsArray = q.docs.map(doc => ({
          id: doc.id,  // add this line to get the document ID
          ...doc.data()   // transfer all data from doc.data() to the new object
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProdusts();
  }, []);

  const handleDelete = async(id)=>{
    // const newProducts = products.filter((product) => product.id !== id);
    // setProducts(newProducts);
    // console.log("Product deleted: ", id);
    try {
      await deleteDoc(doc(db, "newProducts", id));
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    console.log("Product deleted from Firestore: ", id);
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <View style={styles.buttonsContainer}>
              <Pressable style={styles.button} onPress={() => handleDelete(item.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
              <Pressable style={[styles.button, { backgroundColor: 'green' }]} onPress={() => router.push(`Update/${item.id}`)}>
                <Text style={styles.buttonText}>Update</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  flatList: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    color: 'red',
    marginBottom: 5,
  },
  desc: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AllProducts;
