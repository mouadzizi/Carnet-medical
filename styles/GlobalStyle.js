import { StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({

    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },

    slideSplashScreen:{
      flex: 2,
      backgroundColor: 'white',
      marginTop: 100,
    },
    splashTitle:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#7FBF4D',
      textAlign: 'center',
    },
    splashText:{
      color: 'grey',
      marginTop: 20,
      textAlign: 'center',
    },
    dot:{
      backgroundColor: 'grey',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },
    dotActive:{
      backgroundColor: '#7FBF4D',
      width: 20,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },
    headerSplashScreen: {
      flex: 2,
      alignContent: 'center',
      alignItems: 'center',

    },

    footerSplashScreen: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
    },

    SplashContainer:{
      flex:1,
      backgroundColor: '#A8D28F',
    },
    btnSplash:{
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo:{
      height: 150,
      width: 150,
      alignSelf: 'center',
      marginTop: 150,
    },
    titleSplash:{
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
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
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#A8D28F'
    },
    SignInHeader:{
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    SignUpHeader:{
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 20,
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
      marginTop:50,
      marginLeft: 20,
      fontWeight: 'bold',
    },
    captionAbout:{
      fontSize:14,
      lineHeight: 14,
      marginTop: 55,
      marginLeft: 15,
   },
   avatarAbout: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#A8D28F',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignContent: 'center',
    alignItems: 'center',
   },
   preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  preference2: {
    flexDirection: 'row',
  },
  formContainer:{
    flex: 1,
  },
  formDateContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  formTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    margin: 25,
  },
  formSubTitle:{
    fontSize: 20,
    margin: 5,
  },

});
