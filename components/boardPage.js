/*
 *  file: boardPage.js
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: mar-27-2022 
 *  last-modified: apr-01-2022
 */

import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Image, Text} from 'react-native';
// @ts-ignore
import { BoardRepository, Board } from 'react-native-draganddrop-board';


/**
 * FUNCTION - KanbanBoard()
 * 
 * Purpose : This function returns the drag and drop kanban board page of the application. The board page is rendered using 
 *           the 'react-native-draganddrop-board' package. The tasks that are entered in the input form of the homePage are 
 *           passed to the boardPage as a parameter which are then rendered to cards in three columns named 'To Do', 'In Progress'
 *           and 'Done' respectively. The user has the ability to drag and drop the card from one column to the next.
 * 
 * Parameter(s):
 * <1> navigation - property that is passed to every component that is part of the navigation stack in the App. This property
 *                  allows user to navigate to any route/component in the stack from the current route.
 * 
 * <2> route - property that contains parameters passed from the HomePage route which are the user entered list of tasks
 *             to be done and presses the 'Lets begin!' button.
 * 
 * Precondition(s):
 * 
 * <1> All the styling components are defined within the Stylesheet object 'styles'.
 * <2> Title logo image is stored in the assets folder.
 * <3> The user has entered the names of the 5 tasks in the homepage before pressing the button to redirect.
 * 
 * 
 * Returns: 
 * <1> React native components to display the BoardPage elements such as a SafeAreaView encapsulating Image and Board elements
 *     of the homepage for the user to interact with.
 * 
 * Side effect:
 * <1> 'react-native-draganddrop-board' updates the cards.
 *
 */


export default KanbanBoard = ({navigation,route}) => {

    const {task1,task2,task3,task4,task5} = route.params;
    const [tx,setTx] = useState("");
    const data = [
      {
        id: 1,
        name: 'TO DO',
        rows: [{id:'1',name: task1},
        {id:'2',name:task2},
        {id:'3',name:task3},
        {id:'4',name:task4},
        {id:'5',name:task5}]
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
    ]
     
    const boardRepository = new BoardRepository(data);
  
    // function renderText(){
    //     setTx(boardRepository.items(1).length - 1);
    //     return(
    //         <Text> {tx} </Text>
    //     );
        
    // }

    return (
      <SafeAreaView style={styles.board_container}>
        <SafeAreaView style={styles.board_title}>
          <Image style ={{ transform:[{scale:0.27}],}} source = {require('../assets/Kanban-board-1.png')}></Image>
        </SafeAreaView>
        <SafeAreaView style={styles.board}>
          <Board
            boardRepository={boardRepository}
            open={() => {}}
            onPress={() => {}}
            onDragEnd={() => {}}
            board
          />
        </SafeAreaView>
        <SafeAreaView style={styles.board_bottom}>
            {/* <Text> {boardRepository.items(1).length - 1} </Text> */}
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
        resizeMode:'contain'
      },
    
      board_title:{flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
      backgroundColor:'#0197f6'},
      
        board:{
        flex:1.7,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain'
      },
      
      board_bottom:{flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain'
      }
    
})