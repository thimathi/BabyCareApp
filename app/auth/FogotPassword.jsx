import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet} from "react-native";
import {router, useRouter} from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors";

export default function FogotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/think baby1.png")}
                style={styles.image}
            />
            <Text style={styles.label}>Enter your Email address or Contact number associated with your Baby Mine account.</Text>

            <Text style={styles.googleText}>E-mail Address or Contact Number</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.SendButton} onPress={() => router.push("./ForgotPasswordOTP")}>
                <Text style={styles.SendText}>Send The Code</Text>
            </TouchableOpacity>

        </View>
    );
}



// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF7FB", // Light Pinkish Background
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#27014B",
        marginBottom: 20,
    },
    label: {
        marginLeft:60,
        marginRight:60,
        textAlign: "center",
        fontSize: 16,
        color: Colors.BLUE1,
        marginBottom: 5,
    },
    input: {
        width: "90%",
        padding: 12,
        margin:20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#B0A4C0",
        backgroundColor: "white",
        marginBottom: 15,
    },

    SendButton: {
        width: "70%",
        backgroundColor: "#8B0000",
        paddingVertical: 12,
        margin:30,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
    },

    SendText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

});
