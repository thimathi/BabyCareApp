import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { router, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import { i18n } from "../utils/i18n";
import { supabase } from "../../lib/supabase";
import { ActivityIndicator, Alert } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendOtp = async () => {
    if (!isValidEmail(email)) {
      Alert.alert(
        i18n.t('forgotPassword.invalidEmail'),
        i18n.t('forgotPassword.enterValidEmail')
      );
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    });
    setLoading(false);

    if (error) {
      Alert.alert(i18n.t('forgotPassword.error'), error.message);
    } else {
      setOtpSent(true);
      Alert.alert(
        i18n.t('forgotPassword.otpSent'),
        i18n.t('forgotPassword.checkEmail')
      );
      router.push({
        pathname: "/auth/ForgotPasswordOTP",
        params: { email },
      });
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });
    setLoading(false);
    if (error) {
      Alert.alert(i18n.t('forgotPassword.error'), error.message);
    } else {
      Alert.alert(
        i18n.t('forgotPassword.loginSuccess'),
        i18n.t('forgotPassword.loggedIn')
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/think baby1.png")}
        style={styles.image}
      />
      <Text style={styles.label}>{i18n.t("forgotPassword.instruction")}</Text>

      <Text style={styles.googleText}>
        {i18n.t("forgotPassword.inputLabel")}
      </Text>

      <TextInput
        style={styles.input}
        placeholder={i18n.t("forgotPassword.inputPlaceholder")}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.SendButton}
        onPress={handleSendOtp}
        disabled={!isValidEmail(email) || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.SendText}>
            {i18n.t("forgotPassword.sendButton")}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF7FB",
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
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    fontSize: 16,
    color: Colors.BLUE1,
    marginBottom: 5,
  },
  input: {
    width: "90%",
    padding: 12,
    margin: 20,
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
    margin: 30,
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
