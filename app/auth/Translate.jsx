import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { useRouter } from "expo-router";
import Colors from "../../constant/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { i18n, setLocale } from "../utils/i18n";
import { supportedLanguages } from "../utils/translations";

export default function Translate() {
    const [language, setLanguage] = useState("English");
    const router = useRouter();

    // Load saved language preference
    useEffect(() => {
        const loadLanguage = async () => {
            const savedLanguage = await AsyncStorage.getItem('appLanguage');
            if (savedLanguage) {
                setLanguage(savedLanguage);
                setLocale(savedLanguage);
            }
        };
        loadLanguage();
    }, []);

    const handleLanguageChange = async (newLanguage) => {
        setLanguage(newLanguage);
        setLocale(newLanguage);
        await AsyncStorage.setItem('appLanguage', newLanguage);
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.BACKGROUND,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
            }}
        >
            <View>
                <Image
                    source={require('../../assets/images/translate.png')}
                    style={{
                        width: 200,
                        height: 200,
                        alignItems: "center",
                    }}
                    resizeMode="contain"
                />
            </View>

            {/* Welcome Text */}
            <Text style={{ fontSize: 24, fontWeight: "bold", color: Colors.PRIMARY, marginTop: 20 }}>
                {i18n.t('welcome')}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.PRIMARY }}>
                {i18n.t('toApp')}
            </Text>
            <Text style={{ fontSize: 16, color: Colors.BLUE1, marginTop: 5 }}>
                {i18n.t('subtitle')}
            </Text>

            {/* Language Selection */}
            <Text style={{ 
                fontSize: 16, 
                fontWeight: "bold", 
                color: Colors.PRIMARY, 
                marginTop: 20,
                marginBottom: 10 
            }}>
                {i18n.t('chooseLanguage')}
            </Text>

            <RadioButton.Group 
                onValueChange={handleLanguageChange} 
                value={language}
            >
                {supportedLanguages.map((lang) => (
                    <View 
                        key={lang.code}
                        style={{ 
                            flexDirection: "row", 
                            alignItems: "center", 
                            marginVertical: 5,
                            width: '100%',
                            paddingHorizontal: 20
                        }}
                    >
                        <RadioButton 
                            value={lang.code} 
                            color={Colors.PRIMARY}
                        />
                        <Text style={{ 
                            fontSize: 16,
                            color: Colors.TEXT,
                            marginLeft: 8
                        }}>
                            {i18n.t(`languages.${lang.code}`)}
                        </Text>
                    </View>
                ))}
            </RadioButton.Group>

            <TouchableOpacity 
                onPress={() => router.push('./logIn')}
                style={{
                    backgroundColor: Colors.PRIMARY,
                    paddingVertical: 14,
                    paddingHorizontal: 60,
                    borderRadius: 8,
                    marginTop: 30,
                    elevation: 3,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                }}
            >
                <Text style={{ 
                    color: "white", 
                    fontSize: 18, 
                    fontWeight: "bold",
                    textAlign: 'center'
                }}>
                    {i18n.t('getStarted')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}