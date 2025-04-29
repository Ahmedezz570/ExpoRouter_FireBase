import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import data from "../products.json";

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 
  const filteredData = data.filter((item) => item.id === id);

  console.log('Product ID:', id); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      {filteredData.map((item) => (
        <View key={item.id} style={styles.card}>
          {item.images.map((img, index) => (
      <Image
        key={index}
        source={{ uri: img }}
        style={styles.image}
      />
    ))}
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.max}>Max Score: {item.max}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3, // لو على أندرويد
    shadowColor: '#000', // لو على iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  max: {
    fontSize: 16,
    color: '#777',
  },
});







// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// import React from 'react';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import data from "../products.json";

// const Details = () => {
//   const router = useRouter();
//   const { id } = useLocalSearchParams(); 
//   const filteredData = data.filter((item) => item.id === id);

//   console.log('Product ID:', id); 

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Product Details</Text>
//       {filteredData.map((item) => (
//         <View key={item.id} style={styles.card}>
//           <View style={styles.imagesContainer}>
//             {item.images.map((img, index) => (
//               <Image
//                 key={index}
//                 source={{ uri: img }}
//                 style={styles.image}
//               />
//             ))}
//           </View>
//           <Text style={styles.name}>{item.name}</Text>
//           <Text style={styles.max}>Max Score: {item.max}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default Details;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#f0f0f0',
//     width: '100%',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     alignItems: 'center',
//     elevation: 3, // لأندرويد
//     shadowColor: '#000', // لآيفون
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   imagesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     margin: 5,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 5,
//   },
//   max: {
//     fontSize: 16,
//     color: '#777',
//   },
// });




// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// import React from 'react';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import data from "../products.json";

// const Details = () => {
//   const router = useRouter();
//   const { id } = useLocalSearchParams(); 
//   const filteredData = data.find((item) => item.id === id);

//   console.log('Product ID:', id); 

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Product Details</Text>
//       {/* {filteredData.map((item) => ( */}
//         <View key={filteredData.id} style={styles.card}>
//           {filteredData.images.map((img, index) => (
//       <Image
//         key={index}
//         source={{ uri: img }}
//         style={styles.image}
//       />
//     ))}
//           <Text style={styles.name}>{filteredData.name}</Text>
//           <Text style={styles.max}>Max Score: {filteredData.max}</Text>
//         </View>
//       {/* ))} */}
//     </ScrollView>
//   );
// };

// export default Details;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#f0f0f0',
//     width: '100%',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     alignItems: 'center',
//     elevation: 3, // لو على أندرويد
//     shadowColor: '#000', // لو على iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 5,
//   },
//   max: {
//     fontSize: 16,
//     color: '#777',
//   },
// });
