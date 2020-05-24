import React from 'react';
import {Text, View, Image  } from 'react-native';
import {GlobalStyle} from '../styles/GlobalStyle'
import {Avatar} from 'react-native-paper';


export default function Profil() {
  return (

    <View style={GlobalStyle.container}>

      <View style={{flex : 1, alignContent: 'center', alignItems: 'center', marginTop: 30}}>
      <Avatar.Image size={150} source={require('../assets/logo.png')} />
      </View>

      <View style={{flex : 3}}>
        
      </View>

    </View>
    
  );
}