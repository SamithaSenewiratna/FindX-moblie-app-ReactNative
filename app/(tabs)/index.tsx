import SplashScreen from '@/components/ui/screen/SplashScreen ';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <Text style={styles.text}>Home Screen</Text> 
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
   
  },
});
