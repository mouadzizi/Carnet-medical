import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


import Entypo from 'react-native-vector-icons/Entypo'

export default function Header({ navigation, title }) {
  return (

    <View style={{flexDirection: 'row', height: 50, borderBottomColor: 'black', borderWidth: 1}}>
        
        <View style={{flex:1,justifyContent: 'center'}}>  
            
            <TouchableOpacity
            onPress={()=> navigation.openDrawer()}>
            <Entypo
                name='menu'
                size={40}
                color='black'
                style={{marginLeft: 20}}
            /> 
            </TouchableOpacity>

        </View>
        
            <View style={{flex: 1.5, justifyContent:'center'}}>
            <Text style={{textAlign: 'center'}}> {title}</Text>
            </View>

        <View style={{flex:1}}></View>
    </View>


  );
}