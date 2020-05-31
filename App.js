import React, { useState, useEffect } from 'react';
import {Button} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContent} from './styles/drawerContent';

 {/*Screens here*/}
import Splash from './screens/Splash';
import SignIn from './authentificationScreens/SignIn';
import SignUp from './authentificationScreens/SignUp';
import Home from './screens/Home';
import Tests from './screens/Tests';
import Events from './screens/Events';
import Profil from './screens/Profil';
import About from './screens/About';
import Settings from './screens/Settings';
import Mesurements from './screens/Mesurements';
import TestsData from './seeMoreHome/testesData';
import EventsData from './seeMoreHome/eventsData';
import MesurementsData from './seeMoreHome/mesurmentsData';
import Analyses from './addForms/tests/analyses';
import Radiology from './addForms/tests/radiology';
import Vaccins from './addForms/tests/vaccins';
import Appointment from './addForms/events/appointment';
import Surgery from './addForms/events/surgery';

import BloodPressur from './addForms/mesurments/bloodPressure';
import Pulse from './addForms/mesurments/pulse';
import SugerLevel from './addForms/mesurments/sugerLevel';


 {/*Navigators Stack - Drawer - Tab - Container*/}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


 {/*Creating Navigators*/}
const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();
const StackHome = createStackNavigator();
const StackTests = createStackNavigator();
const StackEvents = createStackNavigator();
const StackMesurements = createStackNavigator();
const Tab = createBottomTabNavigator();


 {/*Drawer Navigator*/}

function DrawerNavigator(){
  return (
      <Drawer.Navigator initialRouteName="StackHomeNavigation" 
      drawerContent= {props => <DrawerContent {...props} />
      }>
        <Drawer.Screen name="StackHomeNavigation" component={StackHomeNavigation}/>
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Profil" component={Profil} />
      </Drawer.Navigator>
)
}

{/*Tab Navigator*/}
function TabNavigator(){
  return (

    <Tab.Navigator
    screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } if (route.name === 'Tests') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            if (route.name === 'Mesurments') {
              iconName = focused ? 'ios-heart' : 'ios-heart';
            }
            else if (route.name === 'Events') {
              iconName = focused ? 'ios-timer' : 'ios-timer';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#A8D28F',
          inactiveTintColor: 'gray',
        }}>
    <Tab.Screen name="Home" component={DrawerNavigator} />
    <Tab.Screen name="Tests" component={StackTestsNavigation} />
    <Tab.Screen name="Events" component={StackEventsNavigation} />
    <Tab.Screen name="Mesurments" component={StackMesurementsNavigation} />
  </Tab.Navigator>

)
}

 {/*Home Stack navigator to manage the move in home page*/}
 function StackHomeNavigation(){
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={Home} 
        options={
          ({  navigation, route }) => ({
              headerTitle: props => <Entypo
                onPress={() => navigation.openDrawer()}
                name='menu'
                size={30}
                color='black'
                {...props}/>,
        })}/>
        <StackHome.Screen name="TestsData" component={TestsData} />
        <StackHome.Screen name="EventsData" component={EventsData} />
        <StackHome.Screen name="MesurmentsData" component={MesurementsData} />
  </StackHome.Navigator>
)
}

 {/*Tests Stack navigator to manage the move in home page*/}
 function StackTestsNavigation(){
  return (
    <StackTests.Navigator initialRouteName="Tests">
      <StackTests.Screen name="Tests" component={Tests} />
      <StackTests.Screen name="Analyses" component={Analyses} />
      <StackTests.Screen name="Radiology" component={Radiology} />
      <StackTests.Screen name="Vaccins" component={Vaccins} />
  </StackTests.Navigator>
)
}

{/*Tests Stack navigator to manage the move in home page*/}
function StackMesurementsNavigation(){
  return (
    <StackMesurements.Navigator initialRouteName="Mesurements">
      <StackMesurements.Screen name="Mesurements" component={Mesurements} />
      
      <StackMesurements.Screen name="BloodPressur" component={BloodPressur} />
      <StackMesurements.Screen name="Pulse" component={Pulse} />
      <StackMesurements.Screen name="SugerLevel" component={SugerLevel} />
  </StackMesurements.Navigator>
)
}

 {/*Events Stack navigator to manage the move in home page*/}
 function StackEventsNavigation(){
  return (
    <StackEvents.Navigator initialRouteName="Events">
      <StackEvents.Screen name="Events" component={Events} />
      <StackEvents.Screen name="Appointment" component={Appointment} />
      <StackEvents.Screen name="Surgery" component={Surgery} />
  </StackEvents.Navigator>
)
}


export default function App() {
  
  return (
    //Stack Navigator for the main page
    <NavigationContainer>

        <StackApp.Navigator initialRouteName="Splash">

          <StackApp.Screen 
          name="Splash" component={Splash} options={{ headerShown: false }}/>
          <StackApp.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <StackApp.Screen name="SignUp" component={SignUp} options={{headerTitle: ''}}/>
          <StackApp.Screen name="TabNavigator" component={TabNavigator}
          options={{ headerShown: false }}/>

        </StackApp.Navigator>
        
    </NavigationContainer>
  );
}


