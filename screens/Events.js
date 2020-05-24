import React from 'react';
import {View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { List, Dialog, Portal, Text } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle';



export default function Events () {

  return (
    <View style={GlobalStyle.container}>

      <TouchableOpacity
          style={GlobalStyle.TouchableOpacityStyle}>
          
          <Image
           source={require('../assets/plus_icon.png')}
            style={GlobalStyle.FloatingButtonStyle}
          />
      </TouchableOpacity>


    <List.Item
      title="First Test"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder"
      style={{marginTop: 20}}/>}
    />

        
    <List.Item
      title="Second Test"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
    />

    <List.Item
      title="Third Test"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
    />
    </View>
  );
}