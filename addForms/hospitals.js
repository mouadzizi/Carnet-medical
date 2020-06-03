import React from 'react';
import {ScrollView, View} from 'react-native';
import {List} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {GlobalStyle} from '../styles/GlobalStyle';

export default function Hospitals() {
  return (
    <ScrollView>
    <View style={GlobalStyle.container}>
    
    <List.Item
    style={{margin: 20}}
    title="Hôpital Mohammed V"
    description="Téléphone : 05399-30856 "
    description="Adresse : 1 Avenue Moulay Rachid, Tanger 90100 "
    description="Horaires : Ouvert 24 h/24 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    style={{margin: 20}}
    title="Hôpital Al Kortobi"
    description="Téléphone :  05399-34242 "
    description="Adresse : Rue Assad Ibn al Farrat, Tangier "
    description="Horaires : Ouvert 24 h/24 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    style={{margin: 20}}
    title="Hôpital Al Kortobi"
    description="Téléphone :  05399-46976 "
    description="Adresse : Rue Al Mansour Eddahbi, Tanger "
    description="Horaires : Ouvert 24 h/24 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    style={{margin: 20}}
    title="Clinique Tingis"
    description="Téléphone :  05393-40404 "
    description="Avenue Abou Bakr Errazi, Tanger 90060"
    description="Horaires : Ouvert 24 h/24 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />
    
    <List.Item
    style={{margin: 20}}
    title="Hopital Italien"
    description="Téléphone :  05399-31288 "
    description="Avenue Italien, Tanger 90060"
    description="Horaires : Ouvert 24 h/24 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />

    <List.Item
    style={{margin: 20}}
    title="Esthetique Tanger"
    description="Téléphone :  05393-40404 "
    description="64 Rue de Fès, Tanger 90000"
    description="Horaires : 07:00  à 22:00 "
    left={props => <FontAwesome name='hospital-o' size={45} color='#A8D28F' />}
    />
    </View>
    </ScrollView>
  );
}