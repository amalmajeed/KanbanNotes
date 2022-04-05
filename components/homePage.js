/*
 *  file: homePage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: mar-27-2022 
 *  last-modified: apr-05-2022
 */

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable, Alert } from 'react-native';


/**
 * FUNCTION - HomePage()
 * 
 * Purpose : This function returns the landing page of the application. The landing page consists of a Logo, and a prompt
 *           with 3 input boxes, for the users to enter their first 3 daily focuses to do. After that the button press 
 *           takes the user to the Kanban board.
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
 * <1> React native components to display the HomePage elements such as a SafeAreaView encapsulating Image, Text ,TextInput
 *     and Pressable elements of the homepage for the user to interact with.
 * 
 * Side effect:
 * <1> Changes the state hooks t1, t2 and t3 from empty string to task names as per user input.
 * <2> On button press, the navigation prop navigates to the BoardPage or HelpPage route to render the kanban board or provide 
 *     instructions respectively.
 *
 */


export default HomePage = ({navigation}) => 
{
  const [t1,setTask1] = useState("");
  const [t2,setTask2] = useState("");
  const [t3,setTask3] = useState("");

  /**
   * FUNCTION - noTaskEmpties()
   * 
   * Purpose : This function checks for empty entries initially
   * 
   * Parameter(s):
   * N/A
   * 
   * Precondition(s):
   * <1> State hooks 't1','t2' and 't3' were initialized.
   * 
   * Returns: 
   * N/A
   * 
   * Side effect:
   * <1> Modifies the state hooks 't1', 't2' and 't3'.
   *
   */

  const noTaskEmpties = () =>
  {
      console.log("The state inside the function \n t1:",t1,"t2:",t2,"t3:",t3);
      if((t1=="")||(t2=="")||(t3==""))
      {
          Alert.alert(
            "Input Error",
            "Empty task entry(s) found ! Enter 3 tasks",
            [
              {
                text: "Retry",
                onPress: () => console.log("Retry Pressed"),
                style: "cancel"
              }
            ]
          );
          return(false);
      }
      const l1 = t1.toLowerCase();
      const l2 = t2.toLowerCase();
      const l3 = t3.toLowerCase();
      if((l1!=l2)||(l1!=l3))
      {
        if((l2!=l3))
        {
            //setErr('');
            return(true)
        }
      }
      Alert.alert(
        "Input Error",
        "Duplicate task entries found !",
        [
          {
            text: "Retry",
            onPress: () => console.log("Retry Pressed"),
            style: "cancel"
          }
        ]
      );
      return(false);
  }

  return(
    <SafeAreaView style={styles.home_container}>
      <SafeAreaView style={styles.home_title}>
          <Image style ={{ transform:[{scale:0.50}],}} source = {require('../assets/Kanban-board-1.png')}></Image>
      </SafeAreaView>
      <SafeAreaView style={styles.home_midsection}>
        <Text style={styles.text_title}> Enter your 3 focus tasks for today !</Text>
        <TextInput style={styles.input}
          onChangeText={(tsk) => setTask1(tsk)}
          placeholder="Enter task 1 here" />
        <TextInput style={styles.input}
          onChangeText={(tsk) => setTask2(tsk)}
          placeholder="Enter task 2 here" />
        <TextInput style={styles.input}
          onChangeText={(tsk) => setTask3(tsk)}
          placeholder="Enter task 3 here" />
        <Pressable
          style=
          {{
            backgroundColor:"lime",
            borderRadius:50,
            shadowColor:"white",
            shadowRadius:10,
            shadowOpacity:1,
            marginBottom:50, 
            marginTop:30,
            paddingTop:20,
            paddingBottom:20,
            borderWidth: 4,
            width:200,
            alignItems:"center"
          }}
          onPress={() => {console.log("Pressed");
                          if(noTaskEmpties())
                          {
                              //setErr('');
                              navigation.navigate('BoardPage',{task1: t1,task2: t2,task3: t3})
                          }
                  }}>
            <Text style={{fontSize:18}}>Let us begin ! </Text>
          </Pressable>
          <Pressable
          style=
          {{
            backgroundColor:"thistle",
            borderRadius:70,
            shadowColor:"white",
            shadowRadius:10,
            shadowOpacity:1,
            marginBottom:50, 
            marginTop:30,
            paddingTop:20,
            paddingBottom:20,
            borderWidth: 4,
            width:100,
            alignItems:"center"
          }}
          onPress={() => { navigation.navigate('HelpPage'); }}>
            <Text style={{fontSize:18}}> ? Help </Text>
          </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}

//||==================**************************** STYLING COMPONENTS ****************************==================||

const styles = StyleSheet.create({
    home_container: {
        flex: 1,
        backgroundColor: '#0197f6',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
      },
    
      home_title:{flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
      },

      text_title:{
        fontSize:21,
        fontFamily:"AmericanTypewriter", 
        fontWeight:"bold",
        color:"black",
        textShadowColor:"white",
        textShadowRadius:10,
        marginBottom:15,
        paddingTop:20,
        paddingBottom:20,
        width:500,
        textAlign:"center", 
        textAlignVertical:"center" },
    
       home_midsection: {
        flex: 0.7,
        paddingTop:0,
        alignItems: 'center',
        resizeMode:'contain',
        position:"relative",
        width:"100%"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        width:300,
        textAlign:"center",
        alignItems:"center",
        padding: 10,
        backgroundColor:"white"
      }
    
})