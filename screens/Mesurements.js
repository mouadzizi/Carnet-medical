import React from 'react';
import {Text, View, ScrollView } from 'react-native';
import {List} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {GlobalStyle} from '../styles/GlobalStyle'

export default function Mesurements({navigation}) {
  return (
<ScrollView>
    <View style={GlobalStyle.container}>

    <List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Find Hospital near me"
    description="hospitals in my city"
    left={props => <FontAwesome name='hospital-o' size={50} color='#A8D28F' />}
    />

    <List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Find Doctors near me "
    description="doctors in my city "
    left={props => <Fontisto name='doctor' size={50} color='#A8D28F' />}
    />

    <List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Find Laboratory near me"
    description="laboratory in my city"
    left={props => <Fontisto name='laboratory' size={50} color='#A8D28F' />}
    />

    <List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Find Pharmacy near me"
    description="Pharmacy in my city"
    left={props => <MaterialIcons name='local-pharmacy' size={50} color='#A8D28F' />}
    />

<List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Find Pharmacy near me"
    description="Pharmacy in my city"
    left={props => <MaterialIcons name='local-pharmacy' size={50} color='#A8D28F' />}
    />

<List.Item
    onPress={alert("webview")}
    style={{margin: 20}}
    title="Ambulance"
    description="Ambulance numbers according to my possition"
    left={props => <MaterialIcons name='local-pharmacy' size={50} color='#A8D28F' />}
    />
    </View>
    </ScrollView>
  );
}