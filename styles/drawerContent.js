import React from 'react';
import {View, StyleSheet} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import { 
    Avatar,
    Title,
    Caption,
    Drawer,
} from "react-native-paper";


export function DrawerContent(props){

    
    return(
        
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>

        <View style={styles.DrawerContent}>
            <View style={styles.userInfoSection}>

                <View style={{flexDirection: "row", marginTop: 10}}>

                <Avatar.Text size={60} label="MZ" />
                </View>

                <View style={{marginLeft:15,marginTop: 15,flexDirection: 'column'}}>
                    <Title style={styles.title}> Moad Zizi</Title>
                    <Caption style={styles.caption}>@mouad.zizi</Caption>
                </View>
            </View>

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