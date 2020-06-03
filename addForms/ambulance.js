import React from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {List, FAB} from 'react-native-paper';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {GlobalStyle} from '../styles/GlobalStyle';
export default function Ambulance() {
  return (
    <View style={GlobalStyle.container}>
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', '0707-843003')}
    style={{margin: 20}}
    title="Tanger "
    description="Ambulance Service Tanger "
    left={props => <Fontisto name='ambulance' size={30} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '0670-553940')}
    style={{margin: 20}}
    title="Tétouan "
    description="Ambulance Tetouan"
    left={props => <Fontisto name='ambulance' size={30} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05222-22253')}
    style={{margin: 20, marginBottom: 100}}
    title="Casablanca"
    description="Ambulance Casablanca"
    left={props => <Fontisto name='ambulance' size={30} color='#A8D28F' />}

    />

    <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find an ambulance"
    color="white"
    onPress={() => Alert.alert('WebView', 'labs on your city')}
    />
    
  </View>
  );
}