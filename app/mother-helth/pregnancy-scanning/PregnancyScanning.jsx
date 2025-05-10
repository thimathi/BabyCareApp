import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, Button, ScrollView, TouchableOpacity, Dimensions, } from 'react-native';
import Colors from "../../../constant/Colors";

import { router } from 'expo-router';
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constant/Colors";


export default function PregnancyScanning() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Pregnancy Scanning</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
            <View style={styles.cardSection}>

                <View style={styles.titleSection}>
                    <Image source={require("./../../../assets/images/scan.png")} style={styles.motherImage} />
                    <View>
                        <Text style={styles.headerTitle}>Pregnancy Scanning & Medical Treatments</Text>
                    </View>
                </View>

                <ScrollView >
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.details}>* Medical Advice: Always consult your doctor before taking medicine or undergoing tests.</Text>
                        <Text style={styles.details}>* Important Scans: Dating Scan (Month 2), NT Scan (Month 3), Anomaly Scan (Month 5), Growth Scan</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>1. Pregnancy Confirmation (Month 1-2)</Text>
                        <Text style={styles.details}>* Urine or blood test to confirm pregnancy.</Text>
                        <Text style={styles.details}>* First ultrasound (Dating Scan) to check baby’s heartbeat and due date.</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>2. First Trimester Scans & Tests (Month 3-4)</Text>
                        <Text style={styles.details}>* NT Scan (Nuchal Translucency) – Checks Down syndrome risk.</Text>
                        <Text style={styles.details}>* Blood Tests – Check blood group, sugar, anemia, and infections.</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>3. Mid-Pregnancy Scans & Tests (Month 5-6)</Text>
                        <Text style={styles.details}>* Anomaly Scan (20 Weeks) – Examines baby's organs and growth.</Text>
                        <Text style={styles.details}>* Glucose Tolerance Test (GTT) – Checks for gestational diabetes.</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>4. Late Pregnancy Scans & Checkups (Month 7-8)</Text>
                        <Text style={styles.details}>* Growth Scan – Ensures the baby is developing well.</Text>
                        <Text style={styles.details}>* Rh Injection (If Rh-negative blood type)</Text>
                        <Text style={styles.details}>* Blood Pressure & Urine Tests – Checks for preeclampsia.</Text>

                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>5. Final Month (Month 9)</Text>
                        <Text style={styles.details}>* Doppler Scan & NST (Non-Stress Test) – Monitors baby's movements and heartbeat.</Text>
                        <Text style={styles.details}>* Hospital bag preparation & final doctor checkup.</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>6. Postpartum Checkup (After Birth)</Text>
                        <Text style={styles.details}>* Mother's Recovery Checkup – 6 weeks after delivery.</Text>
                        <Text style={styles.details}>* Baby's Health Monitoring & Vaccination Start.</Text>
                    </View>
                </ScrollView>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAD3FF',
        paddingHorizontal: 0,
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FAD3FF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    cardSection: {
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
    },

    ColumnContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginRight: 20,
        paddingBottom:15,
        paddingTop:15,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    motherImage: {
        width: 120,
        height: 120,
        marginRight: 10,
        resizeMode: "contain",
    },
    titleSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 15,

    },
    headerTitle: {
        color: colors.BLUE1,
        fontSize: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 20,
        wordWrap: "break-word",
        fontWeight: "500",
        color:colors.BLUE1,
        marginBottom: 5,
        paddingLeft: 10,
        padding:5
    },
    details: {
        fontSize: 15,
        paddingLeft: 10,
        marginRight: 30,
        wordWrap: "contain",
    },
});
