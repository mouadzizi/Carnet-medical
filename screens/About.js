import React from 'react';
import {Text, View, Button } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'



export default function About( {navigation} ) {
  return (
    <View style={GlobalStyle.container}>
      <Text>About page!</Text>
    </View>
  );
}