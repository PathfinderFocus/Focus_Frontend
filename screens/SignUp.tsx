import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import InputLabel from "../components/InputLabel";
import CustomButton from "../components/CustomButton";
import InputLabelMini from "../components/InputLabelMini";

export default function () {
  const [email, setEmail] = useState("");
  const [ID, setID] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}>
        <Text style={styles.signUp}>Sign Up</Text>

        <View style={styles.rowContainer}>
          <InputLabelMini label="ID" placeholder="Please enter your ID.." value={ID} onChangeText={setID} />
          <CustomButton title="Confirm" onPress={() => console.log("pressed")} containerStyle={styles.containerStyle} textStyle={styles.textStyle} />
        </View>

        <View style={styles.rowContainer}>
          <InputLabelMini label="Email" placeholder="Please enter your email.." value={email} onChangeText={setEmail} />
          <CustomButton title="Send" onPress={() => console.log("pressed")} containerStyle={styles.containerStyle} textStyle={styles.textStyle} />
        </View>

        <View style={styles.rowContainer}>
          <InputLabelMini label="Verification code" placeholder="Please enter your verification..." value={verificationCode} onChangeText={setVerificationCode} />
          <CustomButton title="Confirm" onPress={() => console.log("pressed")} containerStyle={styles.containerStyle} textStyle={styles.textStyle} />
        </View>

        <InputLabel label="Password" placeholder="Please enter your password.." value={password} onChangeText={setPassword} />
        <InputLabel label="Confirm password" placeholder="Please enter your confirm password.." value={confirmPassword} onChangeText={setConfirmPassword} />

        <View style={styles.bottomTextRow}>
          <Text style={[styles.dontHaveAn, styles.signUp1Typo]}>
            Don’t have an account?
          </Text>
          <Text style={[styles.signUp1, styles.signUp1Typo]}>
            Sign Up
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomButton title="Sign up" onPress={() => console.log(ID, email, verificationCode, password, confirmPassword)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    signUp: {
        fontSize: 34,
        fontFamily: "Godo M",
        color: "#2a2a2a",
        textAlign: "center",
        marginTop:110
        },
        signUp1Typo: {
            textAlign: "left",
            lineHeight: 17,
            letterSpacing: -0.1,
            fontSize: 12,
            marginTop:10
            },
            dontHaveAn: {
            fontWeight: "500",
            fontFamily: "Inter-Medium",
            color: "#6c7278"
            },
            signUp1: {
            fontFamily: "Godo M",
            color: "#4d81e7"
            },
            containerStyle:{
                borderRadius: 10,
                width:"32%",
                backgroundColor: '#acc572',
                height: 45,
                overflow: 'hidden',
                alignSelf: "flex-end",
                marginBottom:-12
              },
              textStyle:{
                fontSize: 14,
                lineHeight: 22,
                fontFamily: 'Godo M',
                color: '#fff',
                textAlign: 'center',
              },
              rowContainer: {
                flexDirection: 'row',
                alignItems: 'flex-end', // 버튼과 입력창 아래 정렬
                gap: 8, // React Native에서 gap은 최신 버전에서만 지원, 구버전이면 marginRight 사용
              },
              bottomTextRow: {
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                marginTop: 17,
              },
              
});