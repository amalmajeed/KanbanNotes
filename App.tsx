import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/homePage'
import KanbanBoard from './components/boardPage'
import HelpPage from './components/helpPage'


const Stack = createNativeStackNavigator();


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