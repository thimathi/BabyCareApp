import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import { i18n } from "../utils/i18n";

export default function logIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
    };

    const handleLogin = () => {
        console.log("Email:", email, "Password:", password);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/Baby mine logo-01.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>{i18n.t('login.title')}</Text>

            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                <FontAwesome name="google" size={20} color="black" style={styles.googleIcon} />
                <Text style={styles.googleText}>{i18n.t('login.googleButton')}</Text>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>{i18n.t('login.orSeparator')}</Text>
                <View style={styles.separator} />
            </View>

            <Text style={styles.label}>{i18n.t('login.emailLabel')}</Text>
            <TextInput
                style={styles.input}
                placeholder={i18n.t('login.emailPlaceholder')}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>{i18n.t('login.passwordLabel')}</Text>
            <TextInput
                style={styles.input}
                placeholder={i18n.t('login.passwordPlaceholder')}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => router.push("./FogotPassword")}>
                <Text style={styles.forgotPassword}>{i18n.t('login.forgotPassword')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>{i18n.t('login.title')}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("./SignIn")}>
                <Text style={styles.signUpText}>
                    {i18n.t('login.signUpText')} <Text style={styles.signUpLink}>{i18n.t('login.signUpLink')}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// Styles remain exactly the same as your original
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF7FB",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    logo: {
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
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "90%",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    googleIcon: {
        marginRight: 10,
    },
    googleText: {
        fontSize: 16,
        fontWeight: "500",
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: "#B0A4C0",
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
    },
    label: {
        alignSelf: "flex-start",
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
    forgotPassword: {
        alignSelf: "flex-end",
        fontSize: 14,
        color: "#B0A4C0",
        marginBottom: 20,
    },
    loginButton: {
        width: "100%",
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
    },
    loginText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    signUpText: {
        fontSize: 14,
        color: Colors.BLUE1,
    },
    signUpLink: {
        fontWeight: "bold",
        color: Colors.PRIMARY,
    },
});