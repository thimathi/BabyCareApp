import React, { useState } from "react";
import {
    View,Text,TextInput,TouchableOpacity,Image,StyleSheet} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors";

export default function ResetPassword() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignin = () => {
        console.log("New Password:",newPassword,"Confirm Password:", confirmPassword);
    };

    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/otp  baby 1.png")}
                style={styles.image}
            />
            <Text style={styles.title}>{i18n.t('resetPassword.title')}</Text>
            <Text style={styles.label}>{i18n.t('resetPassword.instruction')}</Text>

            <View style={styles.formContainer}>

                <Text style={styles.label}>{i18n.t('resetPassword.newPasswordLabel')}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={i18n.t('resetPassword.newPasswordPlaceholder')}
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Text style={styles.label}>{i18n.t('resetPassword.confirmPasswordLabel')}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={i18n.t('resetPassword.confirmPasswordPlaceholder')}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <TouchableOpacity style={styles.ResetButton}  onPress={() => router.push("./PasswordRestSuccessful")}>
                <Text style={styles.resetText}>Reset Password</Text>
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
    formContainer: {
            flexDirection: "column",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 20,
            width: "90%",
            justifyContent: "center",
    },
    label: {
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
    },
    input: {
        width: "100%",
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#B0A4C0",
        backgroundColor: "white",
        marginBottom: 15,
    },

    ResetButton: {
        width: "70%",
        backgroundColor: "#8B0000",
        paddingVertical: 12,
        margin:20,
        borderRadius: 8,
        alignItems: "center",
    },
    resetText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
