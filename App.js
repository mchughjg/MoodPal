import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import MoodEntry from './Components/MoodEntry';
import MoodHistory from './Components/MoodHistory';
import Settings from './Components/Settings';
import Support from './Components/Support';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="MoodEntry" component={MoodEntry} />
        <Stack.Screen name="MoodHistory" component={MoodHistory} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Support" component={Support} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
