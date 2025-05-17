// navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen"

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
