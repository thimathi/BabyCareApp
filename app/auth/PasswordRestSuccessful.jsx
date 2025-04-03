import React, {useEffect, useState} from "react";
import {View,Text,Image,ActivityIndicator,StyleSheet} from "react-native";
import {router, useRouter} from "expo-router";
import Colors from "../../constant/Colors";

export default function PasswordRestSuccessful() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("./..//./index.tsx");
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/success baby.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Password reset successful!</Text>

            <Text style={styles.label}>Please use your new password for future logins.</Text>
        </View>
    );
}



// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND, // Light Pinkish Background
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: 150,
        height: 220,
        resizeMode: "contain",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#27014B",
        marginBottom: 10,
    },
    label: {
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
    },
});
