// screens/HomeScreen.tsx
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from '../components/CustomButton';
import NavBar from '../components/NavBar';
import CustomCard from '../components/Card';
import MainCard from '../components/MainCard';
import RowCard from '../components/RowCard';
import Colors from '../constants/Colors';
import Notifictaion from '../assets/MainPage/notification-bing.svg';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const MoveToPlanning = () => {
  console.log('Planning');
}

const MoveToHistory = () => {
  console.log('History');
}

const MoveToFriends = () => {
  console.log('Firends');
}

export default function MainPage() {
  const [fontsLoaded] = useFonts({
    'GodoB': require('../assets/fonts/GodoB.ttf'),
    'GodoM': require('../assets/fonts/GodoM.ttf'),
  })

  if (!fontsLoaded) return null;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.top}>
            <Text style={styles.userText}>Hello,</Text>
            <View style={styles.square}>
              <Notifictaion width={24} height={24} fill={Colors.white} />
            </View>
          </View>
          <View style={styles.inner}>
            <View style={styles.texts}>
              <Text style={styles.slogunText}>Plan Smarter,{'\n'}Learn Faster.</Text>
              <Text style={styles.subSlogunText}>Build your personalized study planner.</Text>
            </View>
            <View>
              <CustomCard title="Your Goal" subtitle="Set a Goal to get started." useButton={false} />
              <View style={styles.cards}>
                <MainCard title='Set Your Goal' subtitle='Your study journey begins here.' buttonValue='Start Planning' onPress={MoveToPlanning} />
                <View style={styles.cardRow}>
                  <RowCard title='Study History' subtitle="See how much time you've invested in yourself." buttonValue='See History' onPress={MoveToHistory} />
                  <RowCard title='Study With Friends' subtitle='See what your friends studied today.' buttonValue='Check It Out' onPress={MoveToFriends} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <NavBar />
      </View>
    );
  }

const styles = StyleSheet.create({
  top: {
    paddingTop: 18,
    marginHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  userText: {
    fontFamily: 'GodoB',
    fontSize: 16,
  },
  square: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    marginBottom: 36,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 18,
    gap: 12,
  },
  inner: {
    flexDirection: 'column',
    gap: 38,
    paddingHorizontal: 26,
    paddingTop: 18,
    paddingBottom: 50,
  },
  texts: {
    gap: 6,
  },
  slogunText: {
    fontFamily: 'GodoB',
    fontSize: 36,
    lineHeight: 48,
  },
  subSlogunText: {
    fontFamily: 'GodoM',
    color: Colors.gray,
    fontSize: 14,
  },
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
  
