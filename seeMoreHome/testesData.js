import React from 'react';
import {Text, View } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default function testesData() {
  return (
    <ScrollView>
      
    <View style={GlobalStyle.container}>

      <Text>First Aid page</Text>

    </View>

    
    </ScrollView>
  );
}