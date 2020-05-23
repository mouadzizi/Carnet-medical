import React from 'react';
import {Text, View, Button } from 'react-native';

import { List, TextInput } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Events () {
  return (
    <View style={GlobalStyle.container}>

      <TextInput
        label='Event'
        mode='flat'
        placeholder='add an event'
        underlineColor='#A8D28F'
        />

    <TouchableOpacity
        onPress={()=> alert('add event')}>
        <Text
        style={GlobalStyle.buttonSignIn}>Add an event</Text>
    </TouchableOpacity>

    <List.Item
      title="First Test"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
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