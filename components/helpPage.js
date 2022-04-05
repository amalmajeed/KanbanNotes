/*
 *  file: helpPage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: apr-04-2022 
 *  last-modified: apr-05-2022
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

/**
 * FUNCTION - HelpPage()
 * 
 * Purpose : This function returns the help/support page of the application. The "? Help" button at the bottom of the homepage
 *           will bring the user to this page of the application. The help page consists of instructions on how to move a task
 *           from one column to the next and how to delete task cards that have been created.
 * 
 * Parameter(s):
 * <1> navigation - property that is passed to every component that is part of the navigation stack in the App. This property
 *                  allows user to navigate to any route/component in the stack from the current route.
 * Precondition(s):
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Title logo image is stored in the assets folder
 * 
 * 
 * Returns: 
 * <1> React native components to display the HelpPage elements such as a SafeAreaView encapsulating Image, Text and TextInput.
 *
 * 
 * Side effect:
 * N/A
 *
 */

export default HelpPage = ({navigation}) => 
{
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

    help_title:{
        flex:0.3,
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
        textAlignVertical:"center"
        },

    text_content:{
        fontSize:20,
        fontFamily:"AmericanTypewriter", 
        marginBottom:15,
        paddingTop:20,
        paddingBottom:20,
        width:300,
        textAlign:"center", 
        textAlignVertical:"center" 
        },

    help_midsection: {
        flex: 0.7,
        paddingTop:0,
        alignItems: 'center',
        resizeMode:'contain',
        position:"relative",
        width:"100%"
        },

})