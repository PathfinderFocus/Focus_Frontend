// screens/HomeScreen.tsx
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import styles from './HomeScreen.styles';
import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from '../components/CustomButton';
import NavBar from '../components/NavBar';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    return (
      <View style={{ padding: 20 }}>
        <CustomButton title="Log In" onPress={() => console.log('Button pressed')} />
        <NavBar />
      </View>
    );
  }
  
