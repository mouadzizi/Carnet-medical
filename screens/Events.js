import React from 'react';
import {View, Image, TouchableOpacity, ScrollView } from 'react-native';

import AddEvents from '../add/addEvents';

import {GlobalStyle} from '../styles/GlobalStyle';



export default function Events () {

  return (
    <View style={GlobalStyle.container}>

      <AddEvents />

    </View>
  );
}