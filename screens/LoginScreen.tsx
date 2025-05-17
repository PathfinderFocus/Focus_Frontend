import React, { useState } from "react";
import { View ,Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputLabel from "../components/InputLabel";
import CustomButton from "../components/CustomButton";
import SocialLoginButton from "../components/SocialLoginButton";
import Google from "../assets/로그인/google.svg"
import FaceBook from "../assets/로그인/2021_Facebook_icon 1.svg"

export default function (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={{ marginLeft:24,marginRight:24 }}>
        <Text style={styles.focus}>Focus</Text>
        <View style={styles.text}>
            <Text style={[styles.signInTo, styles.signInToFlexBox]}>Sign in to your {'\n'}Account</Text>
            <Text style={[styles.enterYourEmail, styles.signInToFlexBox]}>{`Enter your email and password to log in `}</Text>
        </View>
        <InputLabel label={"Email"} placeholder={"Please enter your Email.."} value={email} onChangeText={setEmail}></InputLabel>
        <InputLabel label={"Password"} placeholder={"Please enter your Password.."} value={password} onChangeText={setPassword}></InputLabel>
        <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
          <View style={styles.loginButton}>
          <CustomButton title={"Log In"} onPress={()=>{console.log(email,password)}}></CustomButton>
          </View >
          <View  style={styles.or}>
            <View style={styles.line} />
            <Text style={styles.or1}>Or</Text>
            <View style={styles.line} />
            </View>
            <View style={styles.socialButton}>
            <SocialLoginButton icon={<Google width={18} height={18} />} text="Continue with Google" />
            </View>
            <View style={styles.socialButton}>
            <SocialLoginButton icon={<FaceBook width={18} height={18} />} text="Continue with Facebook" />
            </View>
            <View style={{
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  marginTop: 17
}}>
  <Text style={[styles.dontHaveAn, styles.signUp1Typo]}>
    Don’t have an account?
  </Text>
  <Text style={[styles.signUp1, styles.signUp1Typo]}>
    Sign Up
  </Text>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
    signInToFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left"
    },
    focus: {
    fontSize: 20,
    fontFamily: "JacquesFrancois-Regular",
    textAlign: "left",
    color: "#2a2a2a",
    marginTop:68
    },
    signInTo: {
    fontSize: 32,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 327,
    color: "#2a2a2a",
    alignItems: "center",
    display: "flex",
    marginTop:32
    },
    enterYourEmail: {
    fontSize: 12,
    letterSpacing: -0.1,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#6c7278",
    width: 300,
    },
    text: {
    gap: 12,
    justifyContent: "center"
    },
    loginButton:{
        marginTop:24
    },
    line: {
        borderStyle: "solid",
        borderColor: "#8A8A8A",
        borderTopWidth: 1,
        height: 1,
        flex: 1
        },
        or1: {
        fontSize: 12,
        letterSpacing: -0.1,
        lineHeight: 18,
        fontFamily: "Inter-Regular",
        color: "#6c7278",
        textAlign: "center"
        },
        or: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 24
        },
        socialIcon:{
            borderStyle: "solid",
            borderColor: "#8A8A8A",
        },
        socialButton:{
            marginTop:16,
        },
        forgotPassword: {
            alignSelf: "stretch",
            fontSize: 12,
            letterSpacing: -0.1,
            lineHeight: 17,
            fontFamily: "Godo M",
            color: "#2a2a2a",
            textAlign: "right",
            marginTop:16,
            
        },
        forgotPasswordContainer: {
            flexDirection: 'row-reverse', 
            justifyContent: 'flex-start' 
        },
        signUp1Typo: {
            textAlign: "left",
            lineHeight: 17,
            letterSpacing: -0.1,
            fontSize: 12
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
            signUp: {
            alignSelf: "stretch",
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            marginTop:0
            }

});