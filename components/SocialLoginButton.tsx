import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ icon, text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#8A8A8A",
    borderWidth: 1,
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#2a2a2a",
    textAlign: "center",
  },
});

export default SocialLoginButton;
