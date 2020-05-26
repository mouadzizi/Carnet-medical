import React from 'react';
import {Text, View } from 'react-native';
import { List } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'

export default function eventsData() {
  return (

    <View style={GlobalStyle.container}>
    <List.Section>
        <List.Subheader>Events</List.Subheader>
        <List.Item
          title="Surgery"
          left={() => <List.Icon icon="calendar-month" />}
       />
       <List.Item
          title="Opointment"
          left={() => <List.Icon icon="calendar-month" />}
       />
     </List.Section>
    </View>
  );
}