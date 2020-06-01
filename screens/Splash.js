import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity  } from 'react-native';
import {GlobalStyle} from '../styles/GlobalStyle';
import Swiper from 'react-native-swiper';


export default function Splash( {navigation} ) {

  const {width, height} = Dimensions.get('window');
  const height_image = height * 0.4 ;
  const width_image =  width * 0.8;

  return (

    <Swiper
      loop={false}
      style={{backgroundColor: 'white'}}
      dot={<View style={GlobalStyle.dot} />}
      activeDot={<View style={GlobalStyle.dotActive} />}>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide1.png")}
            style={{height:height_image, width: width_image}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> MedDoc application </Text>
          <Text style={GlobalStyle.splashText}> your health book, your smart solution </Text>
      </View>
    </View>


    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide2.png")}
            style={{height:height_image, width: width_image, marginTop: 20}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Mesurements </Text>
          <Text style={GlobalStyle.splashText}> MedDoc provide you the ability to add your latest analyse and mesurements to keep latest updates </Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide3.png")}
            style={{height:height_image, width: width_image}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
        <Text style={GlobalStyle.splashTitle}> Tests </Text>
          <Text style={GlobalStyle.splashText}> MedDoc provide you the ability to add your latest analyse and mesurements to keep latest updates </Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide4.png")}
            style={{height:height_image, width: width_image}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> MedDoc application </Text>
          <Text style={GlobalStyle.splashText}> 
          MedDoc allow you to see all the doctors near you and also to have an opointment with your doctor </Text>
      
      <View 
      style={{flexDirection:'row'}}
      animation="bounceIn">
        <TouchableOpacity
          onPress={()=> navigation.replace('SignUp')}
          style={[GlobalStyle.btnSplash,{
          borderColor: '#7FBF4D',
          borderRadius: 50,
          marginTop: 15,
          borderWidth: 1,}]}>
        <Text style={{color: '#7FBF4D'}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> navigation.replace('SignIn')}
          style={[GlobalStyle.btnSplash,{
          backgroundColor: '#7FBF4D',
          borderColor: '#7FBF4D',
          borderRadius: 50,
          marginTop: 15,
          marginLeft: 25,
          borderWidth: 1,}]}>
        <Text style={{color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </View>

    </Swiper>




  );
}

