// navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainPage from '../screens/MainPage';
import LoginScreen from "../screens/LoginScreen"
import SignUp from '../screens/SignUp';

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Settings: undefined;
  Login:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainPage} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Login" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
