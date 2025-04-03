import React, { useState } from "react";
import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet} from "react-native";
import {router, useRouter} from "expo-router";
import Colors from "../../constant/Colors";

export default function ForgotPasswordOTP() {
    const router = useRouter();
    const [otp1, setOTP1] = useState("");
    const [otp2, setOTP2] = useState("");
    const [otp3, setOTP3] = useState("");
    const [otp4, setOTP4] = useState("");

    const handleResend = () => {
        console.log("OTP1:",otp2,"OTP2:", otp2, "OTP3:", otp3,"OTP4:", otp4);
    };

    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/otp  baby 1.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Get your code</Text>

            <Text style={styles.label}>Please enter the 4 digit code that sent to your E-mail Address or Contact  Number</Text>

            <View style={styles.separatorContainer}>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={otp1}
                onChangeText={setOTP1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={otp2}
                onChangeText={setOTP2}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={otp3}
                onChangeText={setOTP3}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={otp4}
                onChangeText={setOTP4}
            />

            </View>
            <Text style={styles.label}>If you don't receive a code.</Text>
            <TouchableOpacity onPress={handleResend}>
                <Text style={styles.ResendLink}>Resend</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.VerifyButton} onPress={() => router.push('./ResetPassword')}>
                <Text style={styles.VerifyText}>Verify</Text>
            </TouchableOpacity>

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
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#27014B",
        marginBottom: 20,
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
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
        width: 50,
        height:70,
        padding: 12,
        margin:10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#B0A4C0",
        backgroundColor: "white",
        marginBottom: 15,
    },

    VerifyButton: {
        width: "70%",
        backgroundColor: "#8B0000",
        paddingVertical: 12,
        margin:30,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
    },

    VerifyText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    ResendLink: {
        fontWeight: "bold",
        fontSize:20,
        color: Colors.PRIMARY,
    },
});
