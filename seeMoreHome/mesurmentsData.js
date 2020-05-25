import React from 'react';
import {Text, View } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'

export default function mesurmentsData() {
  return (

    <View style={{flex: 1 , alignItems: 'center'}}>
    <Text style={{top: 200}}> you didn't add any mesurments yet</Text>
    </View>
  );
}