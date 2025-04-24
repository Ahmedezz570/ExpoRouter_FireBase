import React, { useState } from 'react';
import { Button, Image, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickAndUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: false,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const formData = new FormData();

      formData.append('file', {
        uri,
        type: 'image/jpeg',
        name: 'upload.jpg',
      });

      formData.append('upload_preset', 'upload'); 
      setLoading(true);

      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dlgzjfjlb/image/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        console.log('Upload response:', data);
        setImageUrl(data.secure_url);
        setLoading(false);
      } catch (error) {
        console.log('Upload error:', error);
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Image" onPress={pickAndUploadImage} />
      {loading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />}
      {imageUrl && (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
          <Text selectable style={{ marginTop: 10, color: 'blue' }}>
            {imageUrl}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
});
