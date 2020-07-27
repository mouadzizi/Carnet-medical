import React from 'react';
import { View, Text, Alert } from 'react-native';
import { List, FAB } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle';

export default function Boold() {
  return (
    <View style={GlobalStyle.container}>
      <List.AccordionGroup>
        
        <List.Accordion title="Type of blood group" id="1">
          <List.Item title="Ab" />
          <List.Item title="B" />
          <List.Item title="A" />
          <List.Item title="O" />
        </List.Accordion>

        <List.Accordion title="Blood donations" id="1">
          <List.Item title="Homologous donaition" />
          <List.Item title="Plasma Donaition" />
          <List.Item title="Platelet donaition" />
        </List.Accordion>
    
      </List.AccordionGroup>

      <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find a blood donaition center"
    color="white"
    onPress={() => Alert.alert('WebView', 'all pharmacies on your city')}
    />
    </View>
  );
}