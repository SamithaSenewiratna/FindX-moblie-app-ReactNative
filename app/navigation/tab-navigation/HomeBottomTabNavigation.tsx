import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#0a84ff', 
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen name="Menu" component={HomeMenuScreen} />
      <Tab.Screen name="Cart" component={HomeCartScreen} />
      <Tab.Screen name="Home" component={HomePageScreen} />
      <Tab.Screen name="Bookmarks" component={HomeBookmarkScreen} />
      <Tab.Screen name="Products" component={HomeProductScreen} />
    </Tab.Navigator>
  );
}
