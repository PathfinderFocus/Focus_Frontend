// navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen"
import SignUp from '../screens/SignUp';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
