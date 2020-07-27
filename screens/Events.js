import React from 'react';
import {View, ScrollView } from 'react-native';
import {List} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyle} from '../styles/GlobalStyle';



export default function Events ({navigation}) {

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={GlobalStyle.container}>

    <List.Item
    onPress={()=> navigation.navigate('Hospitals')}
    style={{margin: 20}}
    title="Hospital"
    description="Find hospital"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Doctors')}
    style={{margin: 20}}
    title="Doctors"
    description="Find doctors"
    left={props => <Fontisto name='doctor' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Laboratory')}
    style={{margin: 20}}
    title="Laboratory"
    description="Find laboratory"
    left={props => <Fontisto name='laboratory' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Pharmacy')}
    style={{margin: 20}}
    title="Pharmacy"
    description="Find pharmacy"
    left={props => <MaterialIcons name='local-pharmacy' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Ambulance')}
    style={{margin: 20}}
    title="Ambulance"
    description="Ambulance emergency number"
    left={props => <Fontisto name='ambulance' size={30} color='#A8D28F' />}
    />

    <List.Item
    onPress={()=> navigation.navigate('Blood')}
    style={{margin: 20}}
    title="Blood Banks"
    description="You can learn basics information about blood types, donation"
    left={props => <Fontisto name='blood' size={45} color='#A8D28F' />}
    />

    </View>
    </ScrollView>
  );
}