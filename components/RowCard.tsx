import * as React from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Pressable, StyleProp, ViewStyle, TextStyle, Platform } from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from './CustomButton';

type RowCardProps = {
  title: string;
  subtitle: string;
  buttonValue: string;
  onPress?: () => void;
};

const RowCard = ({ title, subtitle, buttonValue, onPress }: RowCardProps) => {
  const [fontsLoaded] = useFonts({
    'GodoB': require('../assets/fonts/GodoB.ttf'),
    'GodoM': require('../assets/fonts/GodoM.ttf'),
  })

  if (!fontsLoaded) return null;

  return (
    <View style={[styles.card]}>
      <View style={styles.square} />
      <View style={styles.column}>
        <View style={styles.texts}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <CustomButton title={buttonValue} onPress={onPress} containerStyle={styles.button} textStyle={styles.buttonText} />
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 8,
  },
  square: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.secondary,
  },
  title: {
    flex: 1,
    flexShrink: 1,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: 'GodoB',
    color: Colors.black,
    textAlign: 'left',
  },
  subtitle: {
    flex: 1,
    flexShrink: 1,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: 'GodoM',
    color: Colors.gray,
    textAlign: 'left',
  },
  texts: {
    flex: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 0,
  },
  card: {
    flex: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 14,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 10,
      }
    })
  },
  button: {
    alignSelf: 'stretch',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: -0.4,
    color: Colors.white,
    lineHeight: 20,
    fontFamily: 'GodoB',
  }
});

export default RowCard;
