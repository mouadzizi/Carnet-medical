import React from 'react';
import {Text, View, Button } from 'react-native';
import { Avatar, List, Colors } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import { ScrollView } from 'react-native-gesture-handler';



export default function About( {navigation} ) {
  return (
    <ScrollView>
    <View style={GlobalStyle.container}>

      <View style={GlobalStyle.boxAbout}>
      
      <View style={{flexDirection: 'row'}}>
      <Avatar.Icon size={100} icon={"folder"} style={GlobalStyle.avatarAbout}/>
      <Text style={GlobalStyle.titleAbout}>MedDoc </Text>
      <Text style={GlobalStyle.captionAbout}>@BinaryTech </Text>
      </View>
      <List.Icon color={Colors.green200} icon="folder" />
      <List.Icon color={Colors.green200} icon="equal" />
      <List.Icon color={Colors.green200} icon="calendar" />
      </View>

      <View style={GlobalStyle.boxAbout}>
      
      <List.Icon color={Colors.green200} icon="folder" />
      <List.Icon color={Colors.green200} icon="equal" />
      <List.Icon color={Colors.green200} icon="calendar" />
      </View>

      <View style={GlobalStyle.boxAbout}>
      
      <List.Icon color={Colors.green200} icon="folder" />
      <List.Icon color={Colors.green200} icon="equal" />
      <List.Icon color={Colors.green200} icon="calendar" />
      </View>
      
    </View>
    </ScrollView>
  );
}