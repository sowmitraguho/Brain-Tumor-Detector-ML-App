import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';

export default function Explore() {
  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
      <Text style={styles.boldLargeText}>
        Understanding Brain Tumors: Types, Precautions, and Cures 

         Introduction 

        Brain tumors are abnormal growths of cells within the brain or surrounding structures. They can be benign (non-cancerous) or malignant (cancerous) and can arise from the brain tissue itself or from other parts of the body. The complexity of brain tumors necessitates a comprehensive understanding of their types, potential precautions, and available treatment options.
          
        Types of Brain Tumors
          
        Brain tumors can be classified into several categories based on their origin and characteristics. Here are some of the most common types: 

        1. Gliomas: 
        Gliomas arise from glial cells, which support and protect neurons in the brain. They are further divided into subtypes: 
        - Astrocytomas: These tumors originate from astrocytes, star-shaped glial cells. They can range from low-grade (slow-growing) to high-grade (fast-growing and aggressive). 
        - Oligodendrogliomas: These tumors develop from oligodendrocytes, which produce myelin (the protective sheath around nerves). They tend to grow more slowly than astrocytomas and often have better treatment outcomes. 
        - Ependymomas: These tumors form from ependymal cells, which line the ventricles of the brain and the central canal of the spinal cord. They can occur at any age and can be challenging to treat due to their location.  

        2. Meningiomas: 
        Meningiomas arise from the meninges, the protective membranes surrounding the brain and spinal cord. They are typically benign and slow-growing but can cause problems due to their location and pressure on brain structures. 

        3. Medulloblastomas: 
        These are primitive neuroectodermal tumors that primarily affect children. They are fast-growing and typically found in the cerebellum, impacting balance and coordination. 

        4. Pituitary Tumors: 
        These tumors develop in the pituitary gland, which regulates hormones. They can affect hormonal balance and cause a variety of symptoms, including headaches and vision problems. 

        5. Schwannomas: 
        Schwannomas arise from Schwann cells, which produce the myelin sheath surrounding peripheral nerves. The most common type is vestibular schwannoma (acoustic neuroma), affecting hearing and balance. 

         Precautions Against Brain Tumors 

        While the exact cause of brain tumors is often unknown, several precautions can help reduce the risk: 

        1. Healthy Lifestyle Choices: 
        - Diet: Consuming a balanced diet rich in fruits, vegetables, whole grains, and lean proteins can support overall health. 
        - Exercise: Regular physical activity helps maintain a healthy weight and reduces the risk of several cancers.  

        2. Avoiding Exposure to Harmful Substances: 
        - Radiation: Minimize exposure to ionizing radiation when possible, particularly during medical imaging. 
        - Chemicals: Reduce exposure to harmful chemicals and toxins in the environment, such as pesticides and industrial solvents.  

        3. Regular Check-Ups: 
        - Stay proactive about health check-ups and discuss any neurological symptoms with a healthcare provider promptly.  
        Cure and Treatment Options  

        The treatment of brain tumors depends on various factors, including the tumor type, location, size, and the patient’s overall health. Common treatment options include:  

        1. Surgery: 
        - The primary treatment for many brain tumors is surgical removal. The goal is to excise as much of the tumor as possible while preserving surrounding healthy tissue.  

        2. Radiation Therapy: 
        - This treatment uses high-energy radiation to kill tumor cells or shrink tumors. It is often used after surgery to target remaining cells or for tumors that cannot be surgically removed.  

        3. Chemotherapy: 
        - Chemotherapy involves using drugs to kill rapidly dividing cells, including cancerous ones. It may be used alone or in conjunction with surgery and radiation.  

        4. Targeted Therapy: 
        - Targeted therapies focus on specific molecular targets associated with tumor growth and progression, providing a more personalized approach to treatment.  

        5. Immunotherapy: 
        - This emerging treatment uses the body’s immune system to fight cancer. It can be particularly effective for certain types of brain tumors.  

        Conclusion  

        Brain tumors represent a significant health challenge, but advancements in medical research and technology have improved the diagnosis, treatment, and outcomes for patients. Understanding the types of brain tumors, taking precautionary measures, and exploring available treatment options can empower individuals to take proactive steps in managing their health. Regular communication with healthcare providers and awareness of symptoms are essential for early detection and intervention, leading to better prognoses and improved quality of life.
      </Text>
      </ScrollView>
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