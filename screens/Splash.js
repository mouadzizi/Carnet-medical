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
          <Text style={GlobalStyle.splashText}> MedDoc provide you the best technologies, to observe your health. </Text>
      </View>
    </View>


    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide3.png")}
            style={{height:height_image, width: width_image, marginTop: 20}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Medical Act </Text>
          <Text style={GlobalStyle.splashText}> MedDoc provide a dynamic platform to store your medical measurements, analytics, radiology and so many more.</Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide2.png")}
            style={{height:height_image, width: width_image, marginTop: 30}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
        <Text style={GlobalStyle.splashTitle}> Medical facilities </Text>
          <Text style={GlobalStyle.splashText}> MedDoc allows you to see all the medical facilities on your city. </Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../assets/slide4.png")}
            style={{height:height_image, width: width_image, marginTop: 20}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Locations </Text>
          <Text style={GlobalStyle.splashText}> 
          MedDoc allow you to find the nearest doctor, Laboratory, hospital or pharmacy on the map. </Text>
      
      <View 
      style={{flexDirection:'row'}}>
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

