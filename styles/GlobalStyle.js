import { StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({

    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },

    SplashContainer:{
      flex:1,
      backgroundColor: '#A8D28F',
    },
    headerSplash:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerSplash:{
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    logo:{
      height: 150,
      width: 150,
    },
    titleSplash:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#573085',
    }, 
    buttonSplash:{
      width: 150,
      height:40,
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 50,
      backgroundColor:'#A8D28F',  
    },
   
    buttonSignIn:{
      height: 50,
      marginTop: 20,
      borderRadius: 50,
      backgroundColor:'#A8D28F',  
      textAlign: "center",
      textAlignVertical: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white'
    },
    buttonSignUp:{
      height: 50,
      marginTop: 20,
      borderRadius: 50,
      backgroundColor:'white',  
      textAlign: "center",
      textAlignVertical: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#A8D28F',
      borderColor: '#A8D28F',
      borderWidth: 2,
    },
    SignInHeader:{
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    SignInFooter: {
      flex: 3,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    
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
    boxAbout: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      backgroundColor: 'white'
    },
    titleAbout:{
      fontSize:16,
      marginTop:20,
      marginLeft: 20,
      fontWeight: 'bold',
    },
    captionAbout:{
      fontSize:14,
      lineHeight: 14,
      marginTop: 25,
      marginLeft: 15,
   },
   avatarAbout: {
    marginTop: 10,
    marginLeft: 15,
   },
  });

