import React from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {List, FAB} from 'react-native-paper';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {GlobalStyle} from '../styles/GlobalStyle';

export default function Doctors() {
  return (
    <View style={GlobalStyle.container}>
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-40020')}
    style={{margin: 20}}
    title="Docteur Ibnouzahir Mustapha"
    description="Chirurgie Plastique et d'Esthetique"
    left={props => <Fontisto name='doctor' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '0771-365840')}
    style={{margin: 20}}
    title="Lahlali Nawal "
    description="Chirurgien Dentiste-Orthodontiste "
    left={props => <Fontisto name='doctor' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05393-22134')}
    style={{margin: 20, marginBottom: 100}}
    title=" Dr Youssef DAKKAK"
    description="Cabinet Urologue "
    left={props => <Fontisto name='doctor' size={45} color='#A8D28F' />}

    />

    <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find doctor"
    color="white"
    onPress={() => Alert.alert('WebView', 'doctors on your city')}
    />
    
  </View>
  );
}