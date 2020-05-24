import React from 'react';
import {Text, View,Image, TouchableOpacity } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'
import AddMesurments from '../add/addMesurments'

export default function Mesurements() {
  return (

    <View style={GlobalStyle.container}>
    <AddMesurments/>
    </View>
  );
}