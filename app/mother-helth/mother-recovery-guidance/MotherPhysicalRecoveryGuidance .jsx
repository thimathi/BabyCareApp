import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Colors from "../../../constant/Colors";
import { router, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constant/Colors";


export default function MotherPhysicalRecoveryGuidance({ }) {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main Interfaces/mom-home")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mother Physical Recovery Guidance</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <ScrollView style={styles.container}>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND,
        paddingTop: 40,
        paddingHorizontal: 16,
        paddingBottom: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: colors.BLUE1,
        fontSize: 18,
        fontWeight: '600',
    },
});
