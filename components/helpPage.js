/*
 *  file: helpPage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: apr-04-2022 
 *  last-modified: apr-04-2022
 */

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';

export default HelpPage = ({navigation}) => {

    return(
    
    <SafeAreaView style={styles.help_container}>
        <SafeAreaView style={styles.help_title}>
            <Image style ={{ transform:[{scale:0.27}],}} source = {require('../assets/Kanban-board-1.png')}></Image>
        </SafeAreaView>
        <SafeAreaView style={styles.help_midsection}>
          <Text style={styles.text_title}> Kanban Notes - To Do app Support</Text>
          <Text style={styles.text_content}> 1. Press task card once to move to the next bin</Text>
          <Text style={styles.text_content}> 2. Long press task card to delete it from the board</Text>
        </SafeAreaView>
      </SafeAreaView>
    );
    }
    
//||==================**************************** STYLING COMPONENTS ****************************==================||

const styles = StyleSheet.create({
help_container: {
    flex: 1,
    backgroundColor: '#0197f6',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain',
    },

    help_title:{flex:0.3,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain',
    },

    text_title:{
    fontSize:25,
    fontFamily:"AmericanTypewriter", 
    fontWeight:"bold",
    color:"white",
    textShadowRadius:20,
    textShadowColor:"white",
    textDecorationLine:"underline",
    textDecorationStyle:"double",
    textDecorationColor:"white",
    marginBottom:20,
    paddingTop:20,
    paddingBottom:20,
    width:390,
    textAlign:"center", 
    textAlignVertical:"center"},

    text_content:{
        fontSize:20,
        fontFamily:"AmericanTypewriter", 
        marginBottom:15,
        paddingTop:20,
        paddingBottom:20,
        width:300,
        textAlign:"center", 
        textAlignVertical:"center" },

    help_midsection: {
    flex: 0.7,
    paddingTop:0,
    alignItems: 'center',
    resizeMode:'contain',
    position:"relative",
    width:"100%"
    },

})