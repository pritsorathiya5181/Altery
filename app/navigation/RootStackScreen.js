import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import BottomTab from './BottomTab';
import ComplaintListingScreen from '../screen/Complaints/Listing/ComplaintListingScreen';
import ComplaintScreen from '../screen/Complaints/MakeComplaint/ComplaintScreen';
import ComplaintDetailsScreen from '../screen/Complaints/Details/ComplaintDetailsScreen';
import ProfileScreen from '../screen/auth/Profile/ProfileScreen';
import ChangePasswordScreen from '../screen/auth/ChangePassword/ChangePasswordScreen';
import CategorySelector from '../components/Category/CategorySelector';
import ForgotPasswordScreen from '../screen/auth/Forgot/ForgotPasswordScreen';
import ResetPasswordScreen from '../screen/auth/ResetPassword/ResetPasswordScreen';
import EditProfileScreen from '../screen/auth/Profile/EditProfile/EditProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="complaintsListing" component={ComplaintListingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
      <Stack.Screen name="ChnagePass" component={ChangePasswordScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
      <Stack.Screen name="Browse" component={BottomStack} />
      <Stack.Screen name="Complaint" component={ComplaintScreen} />
      <Stack.Screen name="Details" component={ComplaintDetailsScreen} />
      <Stack.Screen name="CategoryOptions" component={CategorySelector} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
