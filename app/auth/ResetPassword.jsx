import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ActivityIndicator
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Colors from "../../constant/Colors";
import { i18n } from "../utils/i18n";
import { supabase } from "../../lib/supabase";

export default function ResetPassword() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const email = params.email || "";

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  const handleResetPassword = async () => {
    // Validation checks
    if (!newPassword || !confirmPassword) {
      showAlert(
        i18n.t('resetPassword.errorTitle'),
        i18n.t('resetPassword.fillAllFields')
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      showAlert(
        i18n.t('resetPassword.errorTitle'),
        i18n.t('resetPassword.passwordsDontMatch')
      );
      return;
    }

    if (newPassword.length < 6) {
      showAlert(
        i18n.t('resetPassword.errorTitle'),
        i18n.t('resetPassword.passwordLength')
      );
      return;
    }

    setLoading(true);
    try {
      // First update the password in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (authError) {
        throw authError;
      }

      // Then update the password in your users table if needed
      const { data: userData, error: userError } = await supabase
        .from('users')
        .update({ password: newPassword })
        .eq('email', email);

      if (userError) {
        throw userError;
      }

      showAlert(
        i18n.t('resetPassword.successTitle'),
        i18n.t('resetPassword.successMessage')
      );
      router.push("./PasswordRestSuccessful");
    } catch (error) {
      showAlert(
        i18n.t('resetPassword.errorTitle'),
        error.message || i18n.t('resetPassword.generalError')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/otp.png")}
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
          onSubmitEditing={handleResetPassword}
        />
      </View>
      
      <TouchableOpacity 
        style={styles.ResetButton}  
        onPress={handleResetPassword}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.resetText}>{i18n.t('resetPassword.resetButton')}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

// Styles remain the same
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
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
