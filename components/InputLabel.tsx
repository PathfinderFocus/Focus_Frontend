import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface InputLabelProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, placeholder, value, onChangeText }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="rgba(138, 138, 138, 0.8)"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    color: "#2a2a2a",
    marginBottom: 4,
    fontFamily: "Godo M",
  },
  inputWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#8A8A8A",
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 13,
  },
  input: {
    fontSize: 13,
    fontFamily: "Godo M",
    color: "#2a2a2a",
  },
});

export default InputLabel;
