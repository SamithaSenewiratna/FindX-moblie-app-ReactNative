import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeBookmarkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Bookmark</Text>
      <Text style={styles.subtitle}>Welcome to the Home Bookmark Screen</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
