import React from 'react';
import {Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'



export default function Profil( ) {
  return (

    <View style={GlobalStyle.container}>
      <Text>Profil page!</Text>

      <TouchableOpacity
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});