import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View>
      <Text style={styles.boldLargeText}>About This App {'\n'}{'\n'} 
      Welcome to the Brain Tumor Detection App, developed as part of my final year project at the University of Chittagong. My name is Sowmitra Guha, and I am a student in the Department of Electrical and Electronic Engineering. This innovative application utilizes a machine learning model to analyze MRI images for the early detection of brain tumors. By harnessing advanced algorithms, the app aims to provide accurate and efficient assessments, helping to facilitate timely medical intervention. Join me on this journey to leverage technology for improved healthcare outcomes!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    width: '100%', // Full width of the screen
    maxHeight: 600, // Set a max height to enable scrolling
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  boldLargeText: {
    fontSize: 24, // Change this value for larger or smaller text
    //fontWeight: 'bold', // This makes the text bold
  },
});