import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors"; // For Google Icon

export default function SignIn() {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleGoogleLogin = () => {
        console.log("Google LogSignin Clicked");
    };

    const handleSignin = () => {
        console.log("userName:",userName,"Email:", email, "createPassword:", createPassword,"confirmPassword:", confirmPassword);
    };

    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/Baby mine logo-01.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>Sign In</Text>


            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                <FontAwesome name="google" size={20} color="black" style={styles.googleIcon} />
                <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>Create your own account</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.formContainer}>

            <Text style={styles.label}>User Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your User name"
                keyboardType="username-address"
                value={userName}
                onChangeText={setUserName}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Create Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={createPassword}
                onChangeText={setCreatePassword}
            />

            <Text style={styles.label}>Conform Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            </View>

            {/* Forgotten Password */}
            <TouchableOpacity onPress={() => router.push("./FogotPassword")}>
                <Text style={styles.forgotPassword}>Forgotten password?</Text>
            </TouchableOpacity>

            {/* SignIn Button */}
            <TouchableOpacity style={styles.SignInButton} onPress={handleSignin}>
                <Text style={styles.SignInText}>Sign In</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <TouchableOpacity onPress={() => router.push("./logIn")}>
                <Text style={styles.logInText}>Already have an account? <Text style={styles.LoginLink}>Log In</Text></Text>
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
        paddingHorizontal: 10,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#27014B",
        marginBottom: 10,
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
        marginVertical: 5,
    },
    separator: {
        flex: 1,
        height: 1,
        alignItems: "center",
        backgroundColor: Colors.BACKGROUND,
    },

    formContainer: {
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "100%",
        justifyContent: "center",
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
    },
    label: {
        alignSelf: "flex-start",
        paddingLeft:12,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
    },
    input: {

        width: "90%",
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
        marginBottom: 8,
    },
    SignInButton: {
        width: "70%",
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
    },
    SignInText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    logInText: {
        fontSize: 14,
        color: "#4A3B6F",
    },
    LoginLink: {
        fontWeight: "bold",
        color: "#8B0000",
    },
});

