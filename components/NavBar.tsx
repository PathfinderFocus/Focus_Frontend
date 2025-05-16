import * as React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import Colors from '../constants/Colors';

const moveToTask = () => {
    console.log('Task');
}

const moveToHome = () => {
    console.log('Home');
}

const moveToProfile = () => {
    console.log('Profile');
}

const NavBar = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.navBar}>
                <Pressable onPress = {moveToTask}>
                    <Image source = {require('../assets/NavBar/nav1.png')} />
                </Pressable>
                <Pressable onPress = {moveToHome}>
                    <Image source = {require('../assets/NavBar/nav2.png')} />
                </Pressable>
                <Pressable onPress = {moveToProfile}>
                    <Image source = {require('../assets/NavBar/nav3.png')} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    navBar: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 14,
        gap: 64,
    }
})

export default NavBar;