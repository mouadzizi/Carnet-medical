import React from 'react';
import {View, ScrollView } from 'react-native';
import {List} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {GlobalStyle} from '../styles/GlobalStyle';



export default function Events ({navigation}) {

  return (
    <ScrollView>
    <View style={GlobalStyle.container}>

    <List.Item
    onPress={()=> navigation.navigate('Hospitals')}
    style={{margin: 20}}
    title="Hospital"
    description="Item description"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Doctors')}
    style={{margin: 20}}
    title="Doctors"
    description="Item description"
    left={props => <Fontisto name='doctor' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Laboratory')}
    style={{margin: 20}}
    title="Laboratory"
    description="Item description"
    left={props => <Fontisto name='laboratory' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Pharmacy')}
    style={{margin: 20}}
    title="Pharmacy"
    description="Item description"
    left={props => <MaterialIcons name='local-pharmacy' size={45} color='#A8D28F' />}
    />
    </View>
    </ScrollView>
  );
}