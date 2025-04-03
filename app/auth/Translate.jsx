import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import {useRouter} from "expo-router";
import Colors from "../../constant/Colors";

export default function Translate() {
    const [language, setLanguage] = useState("English");
    const router = useRouter();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.BACKGROUND,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 5,
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
                />

            </View>

            {/* Welcome Text */}
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginTop: 20 }}>
                WELCOME !
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1E3A8A" }}>
                TO THE BABY MINE
            </Text>
            <Text style={{ fontSize: 14, color: "#666", marginTop: 5 }}>
                The best baby care partner
            </Text>

            {/* Language Selection */}
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1E3A8A", marginTop: 10 }}>
                Choose your language
            </Text>

            <RadioButton.Group onValueChange={newValue => setLanguage(newValue)} value={language}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="English" />
                    <Text style={{ fontSize: 16 }}>English</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Sinhala" />
                    <Text style={{ fontSize: 16 }}>Sinhala</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Tamil" />
                    <Text style={{ fontSize: 16 }}>Tamil</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Korean" />
                    <Text style={{ fontSize: 16 }}>Korean</Text>
                </View>
            </RadioButton.Group>


            <TouchableOpacity onPress={() => router.push('./logIn')}
                style={{
                    backgroundColor: Colors.PRIMARY,
                    paddingVertical: 12,
                    paddingHorizontal: 60,
                    borderRadius: 8,
                    marginTop: 10,
                }}
                 // Navigate to Main Screen
            >
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
}
