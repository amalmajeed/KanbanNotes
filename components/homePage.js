/*
 *  file: homePage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: mar-27-2022 
 *  last-modified: apr-01-2022
 */

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';


/**
 * FUNCTION - HomePage()
 * 
 * Purpose : This function returns the landing page of the application. The landing page consists of a Logo, and a prompt
 *           with 5 input boxes, for the users to enter their 5 daily focuses to do. After entering the 5 to do tasks,
 *           the button press takes the user to the Kanban board.
 * 
 * Parameter(s):
 * <1> navigation - property that is passed to every component that is part of the navigation stack in the App. This property
 *                  allows user to navigate to any route/component in the stack from the current route.
 * Precondition(s):
 * 
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Title logo image is stored in the assets folder
 * 
 * 
 * Returns: 
 * <1> React native components to display the HomePage elements such as a SafeAreaView encapsulating Image, Text ,TextInput
 *     and Pressable elements of the homepage for the user to interact with.
 * 
 * Side effect:
 * <1> Changes the state hooks t1, t2, t3, t4 and t5 from empty string to task names as per user input.
 * <2> On button press, the navigation prop navigates to the BoardPage route to render the kanban board with the above mentioned
 *     list elements.
 *
 */


export default HomePage = ({navigation}) => {
  const [t1,setTask1] = useState("");
  const [t2,setTask2] = useState("");
  const [t3,setTask3] = useState("");
  const [t4,setTask4] = useState("");
  const [t5,setTask5] = useState("");
  const [errMsg,setErr] = useState("");

  const noTaskDuplicatesOrEmpties = () =>
  {
      console.log("The state inside the function \n t1:",t1,"t2:",t2,"t3:",t3,"t4:",t4,"t5:",t5,"\n");
      if((t1=="")||(t2=="")||(t3=="")||(t4=="")||(t5==""))
      {
          setErr("Empty task entry(s) found ! Don't slack now, we have the day to conquer ! ");
          return(false);
      }
    
      const l1 = t1.toLowerCase();
      const l2 = t2.toLowerCase();
      const l3 = t3.toLowerCase();
      const l4 = t4.toLowerCase();
      const l5 = t5.toLowerCase();

      if((l1!=l2)||(l1!=l3)||(l1!=l4)||(l1!=l5))
      {
          if((l2!=l3)||(l2!=l4)||(l2!=l5))
          {
            if((l3!=l4)||(l3!=l5))
            {
                if((l4!=l5))
                {
                    setErr('');
                    return(true)
                }
            }    
          }
      }
      setErr("Duplicate task entries found ! Retry !");
      return(false);
  }

return(
  <SafeAreaView style={styles.home_container}>
    <SafeAreaView style={styles.home_title}>
        <Image style ={{ transform:[{scale:0.27}],}} source = {require('../assets/Kanban-board-1.png')}></Image>
    </SafeAreaView>
    <SafeAreaView>
        <Text style={{color:"black"}}>
            {errMsg}
        </Text>
    </SafeAreaView>
    <SafeAreaView style={styles.home_midsection}>
      <Text style={styles.text_title}> Enter your 5 focus tasks for today !</Text>
      <TextInput style={styles.input}
        onChangeText={(tsk) => setTask1(tsk)}
        placeholder="Enter task 2 here" />
      <TextInput style={styles.input}
        onChangeText={(tsk) => setTask2(tsk)}
        placeholder="Enter task 2 here" />
      <TextInput style={styles.input}
        onChangeText={(tsk) => setTask3(tsk)}
        placeholder="Enter first task here" />
      <TextInput style={styles.input}
        onChangeText={(tsk) => setTask4(tsk)}
        placeholder="Enter first task here" />
      <TextInput style={styles.input}
        onChangeText={(tsk) => setTask5(tsk)}
        placeholder="Enter first task here" />
      <Pressable
        style={{backgroundColor:"thistle",
        borderRadius:50,
        marginBottom:50, 
        marginTop:30,
        paddingTop:20,
        paddingBottom:20,
        borderWidth: 4,
        width:200,
        alignItems:"center"}}
            onPress={() => {console.log("Pressed");
                            if(noTaskDuplicatesOrEmpties())
                            {
                                setErr('');
                                navigation.navigate('BoardPage',{task1: t1,task2: t2,task3: t3,task4: t4,task5: t5})
                            }
                        }}>
          <Text style={{fontSize:18}}>Let us begin ! </Text>
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
    //   borderWidth:3
      },

      text_title:{
        // backgroundColor:"lemonchiffon",
        fontSize:20,
        fontFamily:"AmericanTypewriter", 
        // marginTop:15,
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
        // justifyContent: 'center',
        resizeMode:'contain',
        // borderWidth:3,
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