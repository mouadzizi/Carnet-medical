import React from 'react';
import {Text, View, StatusBar } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'
import {Button} from 'react-native-elements';


export default function Splash( {navigation} ) {
  return (
    <View style={GlobalStyle.SplashContainer}>
    <StatusBar barStyle="light-content"/>
        <View style={GlobalStyle.headerSplash}>
        
        <Animatable.Image

              animation="bounceIn"
              duration={2500}
              style={GlobalStyle.logo}
              source={require('../assets/logo.png')}
              resizeMode={"contain"}
            />

        </View>
        <View style={GlobalStyle.footerSplash}>
        <Text style={GlobalStyle.titleSplash}>Be Healthy Be Safe</Text>
        
        <Animatable.View
        animation="fadeInLeftBig"
        duration={2000}>
        <Button
          title='Go Start'
          buttonStyle={GlobalStyle.buttonSplash}
          onPress={()=> navigation.navigate('SignIn')}
        />
        </Animatable.View>
        

      
        </View>
    
    </View>
  );
}

