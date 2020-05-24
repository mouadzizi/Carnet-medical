import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image  } from 'react-native';
import { List } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'



export default function About() {

  return (
    <ScrollView>

    <View style={GlobalStyle.container}>

      <View style={GlobalStyle.boxAbout}>
      
      <View style={{flexDirection: 'row'}}>

      <TouchableOpacity
      style={GlobalStyle.avatarAbout}>
      <Image
        style={{height: 100, width: 100}}
        source={require('../assets/logo.png')}
        resizeMode={"contain"}/> 
      </TouchableOpacity>

      <Text style={GlobalStyle.titleAbout}> MedDoc </Text>
      <Text style={GlobalStyle.captionAbout}> @BinaryTech </Text>
      </View>

      <List.Item
        title="Version"
        description="1.0"
        left={props => <List.Icon {...props} icon="exclamation" />}
      />
      <List.Item
        title="License"
        description="BinaryTech"
        left={props => <List.Icon {...props} icon="book" />}
      />
      </View>

      <View style={GlobalStyle.boxAbout}>
      
      <Text
      style={{fontWeight: 'bold', margin: 15}}>
      Author</Text>

      <List.Item
        title="Moad Zizi"
        description="mobile devloper"
        left={props => <List.Icon {...props} icon="account" />}
      />
      </View>

      <View style={GlobalStyle.boxAbout}>
      
      <Text
      style={{fontWeight: 'bold', margin: 15}}>Company</Text>

      <List.Item
        title="BinaryTech"
        description="technologie start-up"
        left={props => <List.Icon {...props} icon="domain" />}
      />
      </View>  
    </View>

    </ScrollView>
  );
}