import React from 'react';
import {Text, View } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'

export default function eventsData() {
  return (

    <View style={{flex: 1 , alignItems: 'center'}}>
    <Text style={{top: 200}}> you didn't add any events yet</Text>
    </View>
  );
}