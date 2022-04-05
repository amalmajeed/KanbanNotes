/*
 *  file: App.tsx
 *  author: Amal Majeed <amf856@uregina.ca>
 *  version: 0.1
 *  date-created: mar-27-2022 
 *  last-modified: apr-05-2022
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/homePage'
import KanbanBoard from './components/boardPage'
import HelpPage from './components/helpPage'


const Stack = createNativeStackNavigator();


/**
 * FUNCTION - App()
 * 
 * Purpose : This function serves as the entry point of the application and defines the relation between the three function
 *           components of this project.
 * 
 * Parameter(s):
 * N/A 
 * 
 * Precondition(s):
 * <1> All the three functional components 'HomePage', 'BoardPage' and 'HelpPage' have been defined.
 * 
 * 
 * Returns: 
 * <1> React native components to define the relation of the three components within the navigation stack and display the 
 *     initial route which is the homepage.
 *
 * 
 * Side effect:
 * N/A
 *
 */

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component ={HomePage} />
        <Stack.Screen name="BoardPage" component={KanbanBoard}/>
        <Stack.Screen name="HelpPage" component={HelpPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;