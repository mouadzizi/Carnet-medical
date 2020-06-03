import React from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {List, FAB} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GlobalStyle} from '../styles/GlobalStyle';

export default function Hospitals() {
  return (
    <ScrollView>
    <View style={GlobalStyle.container}>
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', '05399-30856')}
    style={{margin: 20}}
    title="Hôpital Mohammed V"
    description="Adresse : 1 Avenue Moulay Rachid, Tanger"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '05399-34242')}
    style={{margin: 20}}
    title="Hôpital Al Kortobi"
    description="Adresse : Rue Assad Ibn al Farrat, Tangier "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05399-46976')}
    style={{margin: 20}}
    title="Croissant Rouge"
    description="Adresse : Rue Al Mansour Eddahbi, Tanger "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-40404')}
    style={{margin: 20}}
    title="Clinique Tingis"
    description="Avenue Abou Bakr Errazi, Tanger 90060"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05399-31288')}
    style={{margin: 20}}
    title="Hopital Italien"
    description="Avenue Italien, Tanger 90060"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 0621-559508')}
    style={{margin: 20, marginBottom: 60}}
    title="Esthetique Tanger"
    description="64 Rue de Fès, Tanger 90000"
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find hospital"
    color="white"
    onPress={() => Alert.alert('WebView', 'Hospital in your city')}
    />
    </View>
    </ScrollView>
  );
}

