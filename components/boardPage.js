/*
 *  file: boardPage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: mar-27-2022 
 *  last-modified: apr-05-2022
 */

import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, FlatList, TextInput, Alert} from 'react-native';

// GLOBAL ENVIRONMENT VARIABLES

var taskCount = 3;

/**
 * FUNCTION - KanbanBoard()
 * 
 * Purpose : This function returns the touch and push kanban board page of the application. The board page is rendered using 
 *           three Flatlist components. The tasks that are entered in the input form of the homePage are 
 *           passed to the boardPage as a parameter which are then rendered to cards in three columns named 'To Do', 'In Progress'
 *           and 'Done' respectively. Initially all the cards are in the 'To Do' column. The user has the ability to press the
 *           card and it will be removed from its current column and will be assigned to the next column.
 * 
 * Parameter(s):
 * <1> navigation - property that is passed to every component that is part of the navigation stack in the App. This property
 *                  allows user to navigate to any route/component in the stack from the current route.
 * 
 * <2> route - property that contains parameters passed from the HomePage route which are the user entered list of tasks
 *             to be done and presses the 'Lets begin!' button.
 * 
 * Precondition(s):
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Title logo image is stored in the assets folder.
 * <3> The user has entered the names of the 3 tasks in the homepage before pressing the button to redirect.
 * <4> Global variable with the task count has been initialized.
 * 
 * 
 * Returns: 
 * <1> React native components to display the BoardPage elements such as a SafeAreaView encapsulating Image and Flatlist with
 *     the task card elements from the homepage for the user to interact with.
 * 
 * Side effect:
 * <1> Global variable taskCount gets updated everytime a new task is added.
 *
 */


export default KanbanBoard = ({navigation,route}) => 
{

    const {task1,task2,task3}=route.params;
    const [newTask, setNew] = useState("");
    const [flag,setFlag] = useState(true);
    const [data, setData] = useState([
      {
        id: 1,
        name: 'TO DO',
        rows: [{id:'1',name: task1},
        {id:'2',name:task2},
        {id:'3',name:task3}]
      },
      {
        id: 2,
        name: 'IN PROGRESS',
        rows: []
        
      },
      {
        id: 3,
        name: 'DONE',
        rows: []
      }
    ]);

/**
 * FUNCTION - deletionAlert()
 * 
 * Purpose : This function adds a new task to 'To Do' column
 * 
 * Parameter(s):
 * <1> code - 1 for TO DO element, 2 for 'IN PROGRESS' element and 3 for 'DONE' element.
 * <2> elem - element from the flatlist to be removed
 * 
 * Precondition(s):
 * <1> A task card was long pressed
 * 
 * Returns: 
 * N/A
 * 
 * Side effect:
 * <1> Generates an alert pop up on phone.
 *
 */
    const deletionAlert = (code,elem) =>
    Alert.alert(
      "Do you want to delete the below task ?",
      elem.name,
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes, delete!", onPress: () => removeTask(code,elem) }
      ]
    );

/**
 * FUNCTION - pushToMoveTODO()
 * 
 * Purpose : This function moves a task card from 'To Do' column to 'In Progress' column
 * 
 * Parameter(s):
 * <1> elem - an item from the array representing rows of the TO DO object in data
 * 
 * Precondition(s):
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Global variable with the task count has been initialized.
 * 
 * Returns: 
 * N/A
 * 
 * Side effect:
 * <1> Modifies the state hooks 'data' and 'flag'
 *
 */
    const pushToMoveTODO = (elem) => {
      console.log("Element pressed to do was:",elem.name,"\n");
      var temp = data;
      const index = temp[0].rows.findIndex(obj => {return obj.name == elem.name;});
      console.log("Returned index of pressed item:",index,"\n");
      var pushValue = temp[0].rows.splice(index,1);
      temp[1].rows.push(pushValue[0]);
      setData(temp);
      if(flag)
      {
        setFlag(false);
      }
      else
      {
        setFlag(true);
      }
      console.log("DATA :",data,"\n");    
    }

/**
 * FUNCTION - pushToMoveINPROG()
 * 
 * Purpose : This function moves a task card from 'In Progress' column to 'Done' column
 * 
 * Parameter(s):
 * <1> elem - an item from the array representing rows of the IN PROGRESS object in data
 * 
 * Precondition(s):
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Global variable with the task count has been initialized.
 * 
 * Returns: 
 * N/A
 * 
 * Side effect:
 * <1> Modifies the state hooks 'data' and 'flag'
 *
 */

    const pushToMoveINPROG = (elem) => {
      console.log("Element pressed in progress was:",elem.name,"\n");
      var temp = data;
      const index = temp[1].rows.findIndex(obj => {return obj.name == elem.name;});
      console.log("Returned index of pressed item:",index,"\n");
      var pushValue = temp[1].rows.splice(index,1);
      temp[2].rows.push(pushValue[0]);
      setData(temp);
      if(flag)
      {
        setFlag(false);
      }
      else
      {
        setFlag(true);
      }
      console.log("DATA :",data,"\n")
    }

    const pushToMoveDONE = (elem) => 
    {
      console.log("Element pressed done was:",elem.name,"\n");
    }

  /**
   * FUNCTION - addTask()
   * 
   * Purpose : This function adds a new task to 'To Do' column
   * 
   * Parameter(s):
   * N/A
   * 
   * Precondition(s):
   * <1> State hooks 'data' and 'newTask' were initialized
   * 
   * Returns: 
   * N/A
   * 
   * Side effect:
   * <1> Modifies the state hooks 'data' and 'newTask'
   *
   */

  const addTask = () => 
  {
    if(newTask!=""){
      var temp = data;
      taskCount = taskCount + 1; 
      var enteredTask = {id:taskCount.toString(), name:newTask};
      console.log("New Task object created:",enteredTask,"\n");
      temp[0].rows.push(enteredTask);
      console.log("TEMP DATA !!",temp,"\n");
      setData(temp);
      console.log("FINAL DATA !!",data,"\n");
      setNew("");
      console.log("************************************ END ***********************************\n");
    }
    else
    {
      console.log("Empty Task entered ! Try again ! \n");
    }
  }

  /**
   * FUNCTION - removeTask()
   * 
   * Purpose : This function removes a task whose card had been long pressed
   * 
   * Parameter(s):
   * <1> code - 1 for TO DO element, 2 for 'IN PROGRESS' element and 3 for 'DONE' element.
   * <2> elem - element from the flatlist to be removed
   * 
   * Precondition(s):
   * <1> State hooks 'data' and 'flag' were initialized
   * 
   * Returns: 
   * N/A
   * 
   * Side effect:
   * <1> Modifies the state hooks 'data' and 'flag'
   *
   */

  const removeTask = (code,elem) =>
  {
    var temp = data;
    if(code == 1)
    {
      const index = temp[0].rows.findIndex(obj => {return obj.name == elem.name;});
      console.log("Returned index of longpressed item:",index,"\n");
      temp[0].rows.splice(index,1);
    }
    if(code == 2)
    {
      const index = temp[1].rows.findIndex(obj => {return obj.name == elem.name;});
      console.log("Returned index of longpressed item:",index,"\n");
      temp[1].rows.splice(index,1);
    }
    if(code == 3)
    {
      const index = temp[2].rows.findIndex(obj => {return obj.name == elem.name;});
      console.log("Returned index of longpressed item:",index,"\n");
      temp[2].rows.splice(index,1);
    }
    setData(temp);
    if(flag)
    {
      setFlag(false);
    }
    else
    {
      setFlag(true);
    }
  }

  return (
    <SafeAreaView style={styles.board_container}>
      <SafeAreaView style={styles.board_title}>
        <Image style ={{ transform:[{scale:0.27}],}} source = {require('../assets/Kanban-board-1.png')}></Image>
      </SafeAreaView>
      <SafeAreaView style={styles.board}>
        <SafeAreaView style={styles.columns}>
          <Text style={styles.column_heading_1}>
            TO DO
          </Text>
          <FlatList
          data ={data[0].rows}
          extraData = {flag}
          renderItem={({item})=>(
          <TouchableOpacity style={styles.todo_cards} onLongPress ={()=>{deletionAlert(1,item);}} onPress={()=>{pushToMoveTODO(item);}}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          />
          
        </SafeAreaView>
        <SafeAreaView style={styles.columns}>
        <Text style={styles.column_heading_2}>
            IN PROGRESS
          </Text>
          <FlatList
          data ={data[1].rows}
          extraData = {flag}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.inprog_cards} onLongPress ={()=>{deletionAlert(2,item);}} onPress={()=>{pushToMoveINPROG(item)}}>
              <Text>{item.name}</Text>
              </TouchableOpacity>
            
          )}
          keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.columns}>
          <Text style={styles.column_heading_3}>
            DONE
          </Text>
          <FlatList
          data ={data[2].rows}
          extraData = {flag}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.done_cards} onLongPress ={()=>{deletionAlert(3,item);}} onPress={()=>{pushToMoveDONE(item)} }>
              <Text style={{ textDecorationLine:'line-through', textDecorationStyle:"double",textDecorationColor:"red"}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>  
      </SafeAreaView>
      <SafeAreaView style={styles.board_bottom}>
        <TextInput style={styles.input}
        onChangeText={(tsk) => setNew(tsk)}
        value={newTask}
        placeholder="Enter new task" />
        <TouchableOpacity onPress={()=>addTask()}>
              <Image source = {require('../assets/add_task.png')}/>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

//||==================**************************** STYLING COMPONENTS ****************************==================||

  const styles = StyleSheet.create({
      board_container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          resizeMode:'contain',
          borderWidth:5
        },
    
      board_title:{flex:0.5,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
        backgroundColor:'#0197f6',
        width:404},
      
        board:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'#0197f6',
        resizeMode:'contain',
        marginBottom:10
      },
      
      columns:{
        flex:1,
        backgroundColor:"turquoise",
        alignItems:"center",
        margin:3,
        borderRadius:10
      },

      column_heading_1:{
        marginTop:30,
        marginBottom:30,
        fontFamily:'Avenir-Black',
        color:'black',
        textShadowColor:"beige",
        textShadowRadius:6,
        textShadowOffset:{width: 3, height: 5}
      },
      column_heading_2:{
        marginTop:30,
        marginBottom:30,
        fontFamily:'Avenir-Black',
        color:'black',
        textShadowColor:"gold",
        textShadowRadius:6,
        textShadowOffset:{width: 3, height: 5}
      },
      column_heading_3:{
        marginTop:30,
        marginBottom:30,
        fontFamily:'Avenir-Black',
        color:'black',
        textShadowColor:"greenyellow",
        textShadowRadius:6,
        textShadowOffset:{width: 3, height: 5}
      },

      todo_cards:{
        backgroundColor:"beige",
        alignItems:"center",
        justifyContent:"center",
        borderStyle:'solid',
        borderRadius:15,
        borderWidth:2,
        width:120,
        marginTop:15,
        padding:10
      },
      inprog_cards:{
        backgroundColor:"gold",
        alignItems:"center",
        justifyContent:"center",
        borderStyle:'solid',
        borderRadius:15,
        borderWidth:2,
        width:120,
        marginTop:15,
        padding:10
      },
      done_cards:{
        backgroundColor:"greenyellow",
        alignItems:"center",
        justifyContent:"center",
        borderStyle:'solid',
        borderRadius:15,
        borderWidth:2,
        width:120,
        marginTop:15,
        padding:10
      },

      board_bottom:{flex:0.25,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain'
      },

      input: {
        height: 40,
        margin: 4,
        borderWidth: 2,
        width:150,
        textAlign:"center",
        alignItems:"center",
        padding: 10,
        backgroundColor:"white"
      }
    
})