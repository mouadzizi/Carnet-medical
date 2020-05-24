import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList, Image } from 'react-native'



import cal from '../assets/calendar.png';
import cons from '../assets/doctor.png';
import analy from '../assets/hospital.png';
import radio from '../assets/radiology.png';
import surg from '../assets/surgery.png';
import vacc from '../assets/vaccine.png';
import med from '../assets/medicine.png';
import mes from '../assets/calories.png';
import all from '../assets/allergy.png';



const pageList=[
    {name:'Medicament',title:'Médicament',icon:med,key:'1'}, 
    {name:'Allergie',title:'Allergie',icon:all,key:'2'},
    {name:'Mesures',title:'Mesures',icon:mes,key:'3'},
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
