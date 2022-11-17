import React from 'react';
import Main from "./screens/Main";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {CreateStackNavigator} from '@react-navigation/stack';

import Home from "./screens/Home";
import Main from './screens/Main';

const Stack = CreateStackNavigator();

 function App() {
  return (
    <NavigationContainer>

<Stack.Navigator initialRouteName = "Home"screenOptions = {{
  headerShown: false
}}>

  <Stack.Screen Name = "Home" component = {Home}/>
  <Stack.Screen Name = "Main" component = {Main}/>
</Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;