import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated, View } from 'react-native';

export default function SplashScreen({ onFinish }: any) {
  const scaleAnim = useRef(new Animated.Value(0)).current; 
  const opacityAnim = useRef(new Animated.Value(0)).current; 
 
  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        onFinish(); 
      }, 3000);
    });
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/images/logo/find-X-logo-removebg.png')}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      />
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
  logo: {
    width: 450,
    height: 450,
  },
});