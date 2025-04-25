import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import colors from "../../../constant/Colors"; 
import { useRouter } from "expo-router";

export default function Step3HealthInfo({ navigation }) {
    const router = useRouter();
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../mother-registation/step-2-pregnancy-info")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mother Pregnancy Registration</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <Text style={styles.title}>Health Related Info</Text>
            <Text style={styles.label}>What is your blood group?</Text>
            <TextInput style={styles.input} placeholder="Blood Group" />
            <Text style={styles.label}>Do you have Existing Conditions?</Text>
            <TextInput style={styles.input} placeholder="Existing Conditions" />
            <Text style={styles.label}>Do you have Allergies?</Text>
            <TextInput style={styles.input} placeholder="Allergies" />
            <Text style={styles.label}>Do you have Current Medications?</Text>
            <TextInput style={styles.input} placeholder="Current Medications" />
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../../mother-registation/step-4-upload-image")}>
                <Text style={styles.Buttontext}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20},
    title: {fontWeight: 'bold', fontSize: 18, marginBottom: 10,alignContent:"center",alignSelf: "center", },
    label: {
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
    },
    Rowcontainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    picker:{
        marginLeft: 20 ,
        width:180,
        height:45,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 10,
        margin:8,
        borderRadius: 8,
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
        margin:15,
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
});
