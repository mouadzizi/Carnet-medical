import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'


export default function Mesurements({navigation}) {

  return (
<ScrollView>
  <View style={GlobalStyle.container}>

    <Text>this is  page </Text>
    </View>
    </ScrollView>
  );
}