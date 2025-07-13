import { COLORS } from '@/constants/Colors';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',    
    backgroundColor: '#fff',  
  },
  homeText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color:COLORS.darkGray
  },
});
