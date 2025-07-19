import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeBookmarkScreen from '@/components/ui/screen/home/HomeBookmarkScreen';
import HomeCartScreen from '@/components/ui/screen/home/HomeCartScreen ';
import HomeMenuScreen from '@/components/ui/screen/home/HomeMenuScreen';
import HomePageScreen from '@/components/ui/screen/home/HomePageScreen ';
import HomeProductScreen from '@/components/ui/screen/home/HomeProductScreen ';



const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigation() {
  return (
     <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'home-outline';

          if (route.name === 'Menu') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bookmarks') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00bcd4',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Menu" component={HomeMenuScreen} />
      <Tab.Screen name="Cart" component={HomeCartScreen} />
      <Tab.Screen name="Home" component={HomePageScreen} />
      <Tab.Screen name="Bookmarks" component={HomeBookmarkScreen} />
      <Tab.Screen name="Products" component={HomeProductScreen} />
    </Tab.Navigator>
  );
}
