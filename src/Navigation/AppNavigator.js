import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../components/Signup';
import Login from '../components/Login';
import HomeScreen from '../components/HomeScreen';
import LoginSelect from '../components/LoginSelect';
import Track from '../components/Track';
import Route01 from '../components/Route01';
import Language from '../components/Language';
import VerifyOTP from '../components/VerifyOTP';
import Schedule from '../components/Schedule';
import Recycle from '../components/Recycle';
import LoginAdmin from '../components/LoginAdmin';
import LoginDriver from '../components/LoginDriver';
import HomeAdmin from '../components/HomeAdmin';
import HomeDriver from '../components/HomeDriver';
import TrackAdmin from '../components/TrackAdmin';
import TrackDriver from '../components/TrackDriver';
import RouteDriver from '../components/RouteDriver';
import Profile from '../components/Profile';


const Stack = createStackNavigator();

const AppNavigator = () => {
 
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Select"> 
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Select" component={LoginSelect} />
            <Stack.Screen name="Track" component={Track} />
            <Stack.Screen name="Route01" component={Route01} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="Otp" component={VerifyOTP} />
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="Recycle" component={Recycle} />
            <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
            <Stack.Screen name="LoginDriver" component={LoginDriver} />
            <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
            <Stack.Screen name="HomeDriver" component={HomeDriver} />
            <Stack.Screen name="TrackAdmin" component={TrackAdmin} />
            <Stack.Screen name="TrackDriver" component={TrackDriver} />
            <Stack.Screen name="RouteDriver" component={RouteDriver} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default AppNavigator;
