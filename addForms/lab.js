import React from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {List, FAB} from 'react-native-paper';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {GlobalStyle} from '../styles/GlobalStyle';

export default function Lab() {
  return (
    <View style={GlobalStyle.container}>
    
    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-65151')}
    style={{margin: 20}}
    title="LABORATOIRE ALAMI "
    description="Avenue Moulay Slimane, Tanger 90060"
    left={props => <Fontisto name='laboratory' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', '05393-24532')}
    style={{margin: 20}}
    title="Laboratoire Riad Tétouan "
    description="bv Moulay Youssef,résidence Ouchikh n 16"
    left={props => <Fontisto name='laboratory' size={45} color='#A8D28F' />}
    />

    <List.Item
    onPress={() => Alert.alert('Phone Number', ' 05393-22290')}
    style={{margin: 20, marginBottom: 100}}
    title="Medi-lab"
    description="60 Avenue Omar Ibn Al Khattab"
    left={props => <Fontisto name='laboratory' size={45} color='#A8D28F' />}

    />

    <FAB
    style={GlobalStyle.fab}
    small
    icon="map"
    label="find a lab"
    color="white"
    onPress={() => Alert.alert('WebView', 'labs on your city')}
    />
    
  </View>
  );
}