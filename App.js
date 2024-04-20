import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MentalScreen from './screens/MentalScreen';
import DisSocialScreen from './screens/DisSocialScreen';
import Home from './screens/Home';
import MedicationScreen from './screens/MedicationScreen';
import HomoepathicScreen from './screens/HomoepathicScreen';
import AyurvedicScreen from './screens/AyurvedicScreen';
import SchizophreniaScreen from './screens/SchizophreniaScreen';
import ObsessiveCompulsiveDisorderScreen from './screens/ObsessiveCompulsiveDisorderScreen';
import SocialPhobiaScreen from './screens/SocialPhobiaScreen';
import BigToePose from './screens/BigToePose';
import BoundAnglePose from './screens/BoundAnglePose';
import Chamomile from './screens/Chamomile';
import Kava from './screens/Kava';
import Belladona from './screens/Belladona';
import DiaryScreen from './screens/DiaryScreen';
import LoginScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MentalScreen" component={MentalScreen} />
        <Stack.Screen name="DisSocialScreen" component={DisSocialScreen} />
        <Stack.Screen name="MedicationScreen" component={MedicationScreen} />
        <Stack.Screen name="HomoepathicScreen" component={HomoepathicScreen} />
        <Stack.Screen name="AyurvedicScreen" component={AyurvedicScreen} />
        <Stack.Screen
          name="SchizophreniaScreen"
          component={SchizophreniaScreen}
        />
        <Stack.Screen
          name="ObsessiveCompulsiveDisorderScreen"
          component={ObsessiveCompulsiveDisorderScreen}
        />
        <Stack.Screen
          name="SocialPhobiaScreen"
          component={SocialPhobiaScreen}
        />
        <Stack.Screen name="BigToePose" component={BigToePose} />
        <Stack.Screen name="BoundAnglePose" component={BoundAnglePose} />
        <Stack.Screen name="Chamomile" component={Chamomile} />
        <Stack.Screen name="Kava" component={Kava} />
        <Stack.Screen name="Belladona" component={Belladona} />
        <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
