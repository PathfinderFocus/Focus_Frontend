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

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    return (
      <View style={{ padding: 20 }}>
        <CustomButton title="Log In" onPress={() => console.log('Button pressed')} />
        <NavBar />
        <CustomCard title="title" subtitle="subtitle" useButton={true} />
        <View style={styles.cards}>
          <MainCard title='Set Your Goal' subtitle='Your study journey begins here.' buttonValue='Start Planning' />
          <View style={styles.cardRow}>
            <RowCard title='Study History' subtitle="See how much time you've invested in yourself." buttonValue='See History' />
            <RowCard title='Study With Friends' subtitle='See what your friends studied today.' buttonValue='Check It Out' />
          </View>
        </View>
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
  
