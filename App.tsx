import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/pages/Dashboard/Dashboard';
import AllCars from './src/pages/AllCars/AllCars';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
        <Stack.Screen name="Allcars" component={AllCars} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Dashboard />
  );
};
export default App;
