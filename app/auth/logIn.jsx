import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import Colors from "../../constant/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {router, useRouter} from 'expo-router';

// Initialize Google Sign-In
GoogleSignin.configure({
    webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID', // Get this from Firebase Console
});


export default function logIn() {
    const [email, setEmail] = useState('mom');
    const [password, setPassword] = useState('123');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }

        // **Offline Bypass Login**
        if (email === "mom" && password === "123") {
            Alert.alert('Success', 'Logged in offline!');
            router.replace('./../../OnboardingScreen1'); // Navigate to Home screen
            return;
        }

        // Firebase Authentication
        setLoading(true);
        try {
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Success', 'Logged in successfully!');
            router.replace('./../../OnboardingScreen1');
        } catch (error) {
            Alert.alert('Login Failed', error.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle Google Login
    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            Alert.alert('Success', 'Logged in with Google!');
            router.replace('./../../OnboardingScreen1.jxs');
        } catch (error) {
            Alert.alert('Google Login Failed', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/Baby mine logo-01.png")} style={styles.logo} />
            <Text style={styles.title}>Log In</Text>

            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                <FontAwesome name="google" size={20} color="black" style={styles.googleIcon} />
                <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.separator} />
            </View>

            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" value={email} onChangeText={setEmail} />

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword} />

            <TouchableOpacity onPress={() => router.push("./FogotPassword")}>
                <Text style={styles.forgotPassword}>Forgotten password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("./SignIn")}>
                <Text style={styles.signUpText}>Already haven't an account? <Text style={styles.signUpLink}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

// Styles
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
        width: "80%",
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

