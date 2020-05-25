import React from 'react';
import {View} from 'react-native';

import AddTest from '../add/addTests';
import {GlobalStyle} from '../styles/GlobalStyle'



export default function Tests( ) {
  
  return (
    <View style={GlobalStyle.container}>
    <AddTest />
    </View>
  );
}