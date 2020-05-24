import React from 'react';
import {Text, View,Image, TouchableOpacity } from 'react-native';

import AddTest from '../add/addTests';
import { List, TextInput, DataTable  } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'



export default function Tests( ) {
  return (
    <View style={GlobalStyle.container}>

      <AddTest />
    </View>
  );
}