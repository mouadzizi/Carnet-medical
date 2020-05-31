import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {auth} from '../database/firebase';

import { 
    Avatar,
    Title,
    Caption,
    Drawer,
    Switch,
    TouchableRipple,
    Button,
} from "react-native-paper";


export function DrawerContent(props){
    
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user)  
            setName(user.displayName)
        })
        
    },[])

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const[userName,setName]= useState("");

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    function signOutUser() {
        
        auth.signOut()
        .catch(err=>Alert.alert('Error',err.message))
    }
    return(
        
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
        {/* this section for header Drawer */}
        <View style={styles.DrawerContent}>
            <View style={styles.userInfoSection}>

                <View style={{flexDirection: "row", marginTop: 10}}>

                <Avatar.Text size={60} label="MZ" />
                </View>

                <View style={{marginLeft:15,marginTop: 15,flexDirection: 'column'}}>
                    <Title style={styles.title}> {userName} </Title>
                    <Caption style={styles.caption}>@{userName}</Caption>
                </View>
            </View>

            {/* this section for pages */}
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            icon={({color, size}) =>(
                <Icon
                    name="home-outline"
                    color={color}
                    size={size}
                />
            )}
            label="Home"
            onPress={()=>{props.navigation.navigate('StackHomeNavigation')}}
            />

            <DrawerItem
            icon={({color, size}) =>(
                <Icon
                    name="account-outline"
                    color={color}
                    size={size}
                />
            )}
            label="Profile"
            onPress={()=>{props.navigation.navigate('Profil')}}
            />

            <DrawerItem
            icon={({color, size}) =>(
                <Icon
                    name="settings-outline"
                    color={color}
                    size={size}
                />
            )}
            label="Settings"
            onPress={()=>{props.navigation.navigate('Settings')}}
            />
            <DrawerItem
            icon={({color, size}) =>(
                <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                />
            )}
            label="About"
            onPress={()=>{props.navigation.navigate('About')}}
            />

            {/* this section for dark theme and pdf */}
            </Drawer.Section>
            <Drawer.Section title='Preference'>
                <TouchableRipple onPress={()=> {toggleTheme()}}>
                <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch 
                            value={isDarkTheme}
                            color='#A8D28F'
                            />
                        </View>
                </View>
                </TouchableRipple>

                <TouchableRipple onPress={()=> alert('pdf generator')}>
                <View style={styles.preference}>
                        <View pointerEvents="none">
                        <Button 
                        icon="book-open-outline" 
                        mode="contained" 
                        onPress={() => console.log('Pressed')}
                        color='#A8D28F'>
                        PDF</Button>
                        </View>
                </View>
                </TouchableRipple>

            </Drawer.Section>

        </View>

        </DrawerContentScrollView>


        <Drawer.Section style={styles.bottomDrawerSection}>

        <DrawerItem
            icon={({color, size}) =>(
                <Icon
                    name="exit-to-app"
                    color={color}
                    size={size}
                />
            )}
            label="Sign Out"
            onPress={()=> signOutUser()}
        />

        </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,
    },
    userInfoSection:{
        flexDirection: 'row',
        paddingLeft: 20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize:14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        marginRight: 15, 
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

})