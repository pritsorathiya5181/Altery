import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import BottomTab from './BottomTab';
import ComplaintListingScreen from '../screen/Complaints/ComplaintListingScreen';
import ComplaintScreen from '../screen/Complaints/MakeComplaint/ComplaintScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="complaintsListing" component={ComplaintListingScreen} />
      <Tab.Screen name="Schedule" component={SignUpScreen} />
    </Tab.Navigator>
  );
}

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Browse" component={BottomStack} />
      <Stack.Screen name="Complaint" component={ComplaintScreen} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
