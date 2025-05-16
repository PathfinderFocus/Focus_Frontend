import * as React from 'react';
import { View, Text, StyleSheet, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from './CustomButton';

type CustomCardProps = {
  title: string;
  subtitle: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  useButton: boolean;
};

const buttonOnPress = () => {
    console.log('Card Button Pressed');
}

const CustomCard = ({ title, subtitle, containerStyle, useButton }: CustomCardProps) => {
  return (
    <View style={[styles.card]}>
      <View style={styles.texts}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.subtitle]}>{subtitle}</Text>
      </View>
      {
        useButton ? (
            <CustomButton title='-' onPress={buttonOnPress} containerStyle={styles.button} textStyle={styles.buttonText} />
        ) : (<View />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: Colors.black,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: Colors.black,
    textAlign: 'left',
  },
  texts: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 6,
  },
  card: {
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 22,
  },
  button: {
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: 24,
    height: 24,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    lineHeight: 20,
  }
});

export default CustomCard;
