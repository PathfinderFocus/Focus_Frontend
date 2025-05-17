// screens/HomeScreen.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from '../components/CustomButton';
import NavBar from '../components/NavBar';
import CustomCard from '../components/Card';
import MainCard from '../components/MainCard';
import RowCard from '../components/RowCard';
import InputLabel from '../components/InputLabel';
import { useState } from 'react';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const [id, setId] = useState("");
    return (
      <View style={{ padding: 20 }}>
        <InputLabel
        label="ID"
        placeholder="Please enter your ID.."
        value={id}
        onChangeText={setId}
      />
      </View>
    );
  }

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'column',
    gap: 26,
    marginTop: 26,
  },
  cardRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 14,
  }
})
  
