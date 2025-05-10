import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, Button, ScrollView, TouchableOpacity, Dimensions, } from 'react-native';
import Colors from "../../../constant/Colors";

import { router } from 'expo-router';
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constant/Colors";


export default function MotherRecovery() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mother Physical Recovery Guidance </Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
            <View style={styles.cardSection}>

                <View style={styles.titleSection}>
                    <Image source={require("./../../../assets/images/Apter P mother.png")} style={styles.motherImage} />
                    <View>
                        <Text style={styles.headerTitle}>Post-Delivery Mother Physical Recovery Guidance </Text>
                    </View>
                </View>

                <ScrollView >
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.details}>* Medical Advice: Always consult your doctor before taking medicine or undergoing tests.</Text>
                        <Text style={styles.details}>                             </Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>1. Initial Recovery Period (First 6 weeks)</Text>
                        <Text style={{ fontSize: 18, wordWrap: "break-word", fontWeight: "500", color: colors.BLUE1, marginBottom: 5, paddingLeft: 10, padding: 5, }}>🔹 Vaginal Delivery:</Text>
                        <Text style={styles.details}>* Rest as much as possible, avoid heavy lifting.</Text>
                        <Text style={styles.details}>* Sitz baths with warm water to soothe perineal area.</Text>
                        <Text style={styles.details}>* Use cold packs and maternity pads for swelling and bleeding.</Text>
                        <Text style={styles.details}>* Kegel exercises after 1–2 weeks to strengthen pelvic floor (only if cleared by doctor).</Text>

                        <Text style={{ fontSize: 18, wordWrap: "break-word", fontWeight: "500", color: colors.BLUE1, marginBottom: 5, paddingLeft: 10, padding: 5, }}>🔹 Cesarean Delivery:</Text>
                        <Text style={styles.details}>* No lifting heavier than the baby for 6–8 weeks.</Text>
                        <Text style={styles.details}>* Keep the incision clean and dry. Use loose clothing.</Text>
                        <Text style={styles.details}>* Avoid abdominal pressure or twisting motions.</Text>
                        <Text style={styles.details}>* Gentle walking helps avoid blood clots and boosts healing.</Text>
                    </View>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>2. Nutrition and Hydration(First 6 weeks)</Text>
                        <Text style={{ fontSize: 18, wordWrap: "break-word", fontWeight: "500", color: colors.BLUE1, marginBottom: 5, paddingLeft: 10, padding: 5, }}>🥗 Essential Foods:
                        </Text>
                        <Text style={styles.details}>* Protein-rich meals (chicken, eggs, lentils) for tissue repair.</Text>
                        <Text style={styles.details}>* Leafy greens, dates, carrots for iron and blood replenishment. </Text>
                        <Text style={styles.details}>* Whole grains for energy and digestion.</Text>
                        <Text style={styles.details}>* Fruits like papaya and orange for vitamin C (boosts healing).</Text>
                        <Text style={styles.details}>* Healthy fats (nuts, avocado) for brain and hormone health.</Text>

                        <Text style={{ fontSize: 18, wordWrap: "break-word", fontWeight: "500", color: colors.BLUE1, marginBottom: 5, paddingLeft: 10, padding: 5, }}>💧 Hydration:
                        </Text>
                        <Text style={styles.details}>* At least 8–10 glasses of water daily, especially if breastfeeding.</Text>
                        <Text style={styles.details}>* Herbal teas (fenugreek, ginger, fennel) can improve digestion and lactation.</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>3. Supplements (consult your doctor before starting)</Text>
                        
                        <Text style={styles.details}>* Iron & folic acid – if you had blood loss.</Text>
                        <Text style={styles.details}>* Calcium + Vitamin D – helps bone recovery and baby feeding.</Text>
                        <Text style={styles.details}>* Omega-3 (DHA/EPA) – supports mood and baby brain development.</Text>
                        <Text style={styles.details}>* Multivitamin – if breastfeeding or feeling fatigued.</Text>
                    </View>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>4. Gentle Meditation & Breathing (Daily 10–15 mins)</Text>
                        <Text style={styles.details}>🌸 Purpose: Reduces stress, anxiety, and stabilizes hormones post-delivery.</Text>

                        <Text style={{ fontSize: 18, wordWrap: "break-word", fontWeight: "500", color: colors.BLUE1, marginBottom: 5, paddingLeft: 10, padding: 5, }}>🧘‍♀ Simple Routine:</Text>
                        <Text style={styles.details}>* Sit in a quiet space, close your eyes.</Text>
                        <Text style={styles.details}>* Practice deep breathing: Inhale for 4 seconds, hold for 2, exhale slowly for 6 seconds.</Text>
                        <Text style={styles.details}>* Listen to calming music or guided meditations (available on apps like Calm, Insight Timer).</Text>
                        <Text style={styles.details}>* Positive affirmations (e.g., “I am healing”, “I am strong”, “I am supported”).</Text>
                    </View>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>5. Emotional & Mental Support</Text>
                        <Text style={styles.details}>* Talk to a trusted friend, spouse, or counselor.</Text>
                        <Text style={styles.details}>* Monitor for post-partum depression symptoms (sadness, detachment, sleep issues).</Text>
                        <Text style={styles.details}>* Don't hesitate to ask for help with baby or household.</Text>
                        <Text style={styles.details}>* Kegel exercises after 1–2 weeks to strengthen pelvic floor (only if cleared by doctor).</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>6. Follow-Up Medical Visits</Text>
                        <Text style={styles.details}>* Usually 6 weeks after birth (or 2 weeks for C-section incision check)</Text>
                        <Text style={styles.details}>* Discuss birth control, healing, bleeding, emotional health.</Text>
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
        paddingBottom: 15,
        paddingTop: 15,
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
        color: colors.BLUE1,
        marginBottom: 5,
        paddingLeft: 10,
        padding: 5
    },
    details: {
        fontSize: 15,
        paddingLeft: 10,
        marginRight: 30,
        wordWrap: "contain",
    },
});
