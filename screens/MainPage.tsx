// screens/HomeScreen.tsx
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useFonts } from 'expo-font';
import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from '../components/CustomButton';
import NavBar from '../components/NavBar';
import CustomCard from '../components/Card';
import MainCard from '../components/MainCard';
import RowCard from '../components/RowCard';
import Colors from '../constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainPage() {
  const [fontsLoaded] = useFonts({
    'GodoB': require('../assets/fonts/GodoB.ttf'),
    'GodoM': require('../assets/fonts/GodoM.ttf'),
  })

  if (!fontsLoaded) return null;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text>Hello,</Text>
          <View style={styles.inner}>
            <View style={styles.texts}>
              <Text style={styles.slogunText}>Plan Smarter,{'\n'}Learn Faster.</Text>
              <Text style={styles.subSlogunText}>Build your personalized study planner.</Text>
            </View>
            <View>
              <CustomCard title="title" subtitle="subtitle" useButton={true} />
              <View style={styles.cards}>
                <MainCard title='Set Your Goal' subtitle='Your study journey begins here.' buttonValue='Start Planning' />
                <View style={styles.cardRow}>
                  <RowCard title='Study History' subtitle="See how much time you've invested in yourself." buttonValue='See History' />
                  <RowCard title='Study With Friends' subtitle='See what your friends studied today.' buttonValue='Check It Out' />
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
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingVertical: 18,
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
  
