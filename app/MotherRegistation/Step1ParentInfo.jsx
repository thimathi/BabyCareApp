import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import Colors from "../../constant/Colors";
import {router, useRouter} from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";
import colors from "../../constant/Colors";

export default function Step1ParentInfo({ navigation }) {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../OnboardingScreen1.jsx")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create Parent Account</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>


        <ScrollView style={styles.container}>
        <View style={styles.container}>

            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} placeholder="First Name" />
            <Text style={styles.label}>Second Name</Text>
            <TextInput style={styles.input} placeholder="Second Name" />
            <Text style={styles.label}>Age</Text>
            <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" />
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="Address" />
            <Text style={styles.label}>Country</Text>
            <TextInput style={styles.input} placeholder="Country" />
            <Text style={styles.label}>District</Text>
            <TextInput style={styles.input} placeholder="District" />
            <Text style={styles.label}>Town</Text>

            <TextInput style={styles.input} placeholder="Town" />
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput style={styles.input} placeholder="Date of Birth" />
            <Text style={styles.label}>Contact Number</Text>
            <TextInput style={styles.input} placeholder="Contact Number" keyboardType="phone-pad" />
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../Step2PregnancyInfo.jsx")}>
                <Text style={styles.Buttontext}>Next</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: colors.BACKGROUND,
            padding: 20,
        },
    title: {fontWeight: 'bold', fontSize: 18, marginBottom: 10, alignItems: "center"},
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
    Button: {
        width: "60%",
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 12,
        borderRadius: 8,
        textDecorationColor: Colors.WHITE,
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 15,
    },
    Buttontext:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    header: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius:10,
            padding:20,
            backgroundColor: Colors.SECONDARY,
            justifyContent: "space-between",
        },
            headerTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.BLUE1,
        },
            titleSection: {
            backgroundColor: colors.SECONDARY,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            marginBottom: 15,
        },

    //input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 }
});
