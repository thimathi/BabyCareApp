import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Colors from "../../constant/Colors";
import { supabase } from "../../lib/supabase";
import { i18n } from "../utils/i18n";

export default function ForgotPasswordOTP() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [email] = useState(params.email || "");
  const [resendCooldown, setResendCooldown] = useState(60);
  const [isCooldownActive, setIsCooldownActive] = useState(true);

  const inputRefs = Array(6).fill().map(() => useRef());

  useEffect(() => {
    if (isCooldownActive && resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (resendCooldown === 0) setIsCooldownActive(false);
  }, [resendCooldown, isCooldownActive]);

  const handleOTPChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOTP(newOtp);
      
      // Auto-focus next input
      if (text && index < 5) inputRefs[index + 1].current.focus();
      
      // Auto-submit when last digit entered
      if (index === 5 && text) handleVerifyOTP();
    }
  };

  const handleResendOTP = async () => {
    if (isCooldownActive) return;
    
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: { shouldCreateUser: false } 
    });
    setLoading(false);
    
    if (error) {
      Alert.alert(
        i18n.t('forgotPasswordOTP.errorTitle'),
        error.message
      );
    } else {
      Alert.alert(
        i18n.t('forgotPasswordOTP.otpSent'),
        i18n.t('forgotPasswordOTP.checkEmail')
      );
      setResendCooldown(60);
      setIsCooldownActive(true);
    }
  };

  const handleVerifyOTP = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      Alert.alert(
        i18n.t('forgotPasswordOTP.errorTitle'),
        i18n.t('forgotPasswordOTP.incompleteOTP')
      );
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });
    setLoading(false);
    
    if (error) {
      Alert.alert(
        i18n.t('forgotPasswordOTP.errorTitle'),
        i18n.t('forgotPasswordOTP.incorrectOTP')
      );
    } else {
      router.push({
        pathname: "./ResetPassword",
        params: { email },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/otp.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{i18n.t('forgotPasswordOTP.title')}</Text>
      <Text style={styles.label}>{i18n.t('forgotPasswordOTP.instruction')}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOTPChange(text, index)}
            onSubmitEditing={() => {
              if (index === 5) handleVerifyOTP();
            }}
          />
        ))}
      </View>

      <Text style={styles.label}>
        {i18n.t('forgotPasswordOTP.resendPrompt')}{' '}
        {isCooldownActive && `(${resendCooldown}s)`}
      </Text>
      
      <TouchableOpacity 
        onPress={handleResendOTP} 
        disabled={isCooldownActive || loading}
      >
        <Text style={[
          styles.resendLink,
          (isCooldownActive || loading) && styles.disabledLink
        ]}>
          {i18n.t('forgotPasswordOTP.resendLink')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.verifyButton} 
        onPress={handleVerifyOTP}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.verifyText}>{i18n.t('forgotPasswordOTP.verifyButton')}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}



// Styles
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#27014B",
    marginBottom: 10,
  },
  label: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.BLUE1,
    marginBottom: 5,
    paddingHorizontal: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  input: {
    width: 45,
    height: 60,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B0A4C0",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 24,
  },
  verifyButton: {
    width: "70%",
    backgroundColor: "#8B0000",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resendLink: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 30,
  },
  disabledLink: {
    color: "#cccccc",
  },
});
