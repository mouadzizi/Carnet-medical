import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList, Image } from 'react-native'



import cal from '../assets/calendar.png';
import surg from '../assets/surgery.png';



const pageList=[
    {name:'Appotmnt',title:'Rendez-vous',icon:cal,key:'1'},
    {name:'Surgery',title:'Chirurgie',icon:surg,key:'2'},
]
export default class test extends Component {
    render() { 
    
        return (
            <View style={styles.container}>
                 <View style={styles.gridContainer}>
                <FlatList 
                    numColumns={1}
                    data={pageList}
                    renderItem={({item})=>(
                            <TouchableOpacity style={styles.item} 
                                onPress={()=>alert(item.name)}>
                                <Image source={item.icon} style={styles.image} />
                                <Text style={styles.txtItem}> {item.title} </Text>
                            </TouchableOpacity>
                    )
                }
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    item:{
        marginVertical:50,
        marginHorizontal:15,
        width:90,
        height:90,
        alignItems:'center',
        justifyContent:'center'
    },
    gridContainer:{
        marginTop:30,
        
    },
    txtItem:{
        color:'#A8D28F',
        fontWeight:'bold',
        position:'absolute',
        bottom:0
    },
    image:{
        width:80,
        height:80,
        position:'absolute',
        top:-8,
    }
})
