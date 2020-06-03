import React from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {List, FAB} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyle} from '../styles/GlobalStyle';

export default function Pharmacie() {
  return (
    <View style={GlobalStyle.container}>
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-50138')}
    style={{margin: 20}}
    title="Pharmacie Mouadafine"
    description="Quart. Boughaz, 70A, N°1, A Bis Wahda Watania"
    left={props => <MaterialIcons name='local-pharmacy' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-25011')}
    style={{margin: 20}}
    title="Pharmacie Place Du Maroc"
    description=" Avenue Moulay Abdelaziz, Tanger 90060"
    left={props => <MaterialIcons name='local-pharmacy' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05393-22290')}
    style={{margin: 20, marginBottom: 100}}
    title="PHARMACIE AL AMAL"
    description="Croisement Beni Makada"
    left={props => <MaterialIcons name='local-pharmacy' size={45} color='#A8D28F' />}
    />

    <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find a pharmacy"
    color="white"
    onPress={() => Alert.alert('WebView', 'all pharmacies on your city')}
    />
  </View>
    
  );
}