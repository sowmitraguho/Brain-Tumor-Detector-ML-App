import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

export default function Home() {
  const [imageUri, setImageUri] = useState(null);
  const [result, setResult] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [confidence, setConfidence] = useState(null); // State for confidence
  const navigation = useNavigation();

  // Function to handle photo capture
  const capturePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({ mediaType: 'photo' }, (response) => {
      
    });
    if (result.assets) {
      setImageUri(result.assets[0].uri);
      detectTumor(result.assets[0]);
    }
  };

  // Function to handle photo upload
  const uploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaType: 'photo' }, (response) => {console.log(response)});

    if (result.assets) {
      console.log(result.assets[0]);
      setImageUri(result.assets[0].uri);
      detectTumor(result.assets[0].uri);
    }
    //console.log(result.assets[0]);
  };

  const detectTumor = async (image) => {
    console.log(image);

    let imageUri, imageType;

    if (Platform.OS === 'web') {
      imageUri = image; 
      imageType = 'image/jpeg';
    } else {
      imageUri = image;
      imageType = image.type || 'image/jpeg';
    }

    let base64Image;
    console.log('imageUri:', imageUri);
    console.log('Type of imageUri:', typeof imageUri);

    if (Platform.OS !== 'web') {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        base64Image = reader.result.split(',')[1]; 
      };
      reader.readAsDataURL(blob);
    } else {
      
      base64Image = imageUri.split(',')[1]; 
    }

    try {
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (base64Image) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });

      const response = await fetch('https://sowmmo.pythonanywhere.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64Image,
          type: imageType,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResult(data.result);
        setConfidence(data.confidence); // Set confidence from the response
      } else {
        console.error(`Error: API call returned status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error during the API call:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Welcome to Brain Tumor Detection App!</Text>
      <Text style={styles.infoText}>This app helps in identifying brain tumors using advanced AI technology.</Text>
      <Text style={styles.infoText}>Upload or capture an MRI image for analysis.</Text>

      <Button
        title="Capture Photo"
        onPress={capturePhoto}
        color="#000"
        style={styles.button}
      />
      <View style={styles.buttonMargin} />
      <Button
        title="Upload Photo"
        onPress={uploadPhoto}
        color="#000"
        style={styles.button}
      />
      
      {/* Result Section */}
      {result && (
        <View style={styles.resultContainer}>
          <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
          <Text style={styles.resultText}>{result}</Text>
          <Text style={styles.resultText}>Confidence: {(confidence * 100).toFixed(2)}%</Text>
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonMargin: {
    height: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
  uploadedImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginVertical: 10,
    borderRadius: 5,
  },
  
});
