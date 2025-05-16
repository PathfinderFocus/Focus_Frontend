import * as React from 'react';
import { Text, StyleSheet, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Colors from '../constants/Colors';

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const CustomButton = ({ title, onPress, containerStyle, textStyle }: CustomButtonProps) => {
  return (
    <Pressable style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={[styles.labelText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: Colors.primary,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    width: '100%',
    height: 48,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});

export default CustomButton;
