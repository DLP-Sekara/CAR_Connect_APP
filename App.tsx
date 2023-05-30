import * as React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/pages/Dashboard/Dashboard';

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Profile" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Dashboard />
  );
};
export default App;
