import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { router } from 'expo-router';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from 'react';
import { useLocalSearchParams } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constant/Colors";


export default function Reports() {
    const navigation = useNavigation();
    const route = useRoute();
    const [activeTab, setActiveTab] = useState('Doctor');

    const renderTab = (tabName) => (
        <TouchableOpacity
            style={[styles.tab, activeTab === tabName && styles.activeTab]}
            onPress={() => setActiveTab(tabName)}
        >
            <Text style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>{tabName}</Text>
        </TouchableOpacity>
    );

    const getBackgroundColor = () => {
        switch (activeTab) {
            case 'BMI':
                return '#E8F4F8'; // Light Blue
            case 'CHECKUP':
                return '#F8E5F0'; // Light Pink
            case 'MEDICINE':
                return '#F4F8E0'; // Light Green
            default:
                return '#FFFFFF'; // Default background
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>All Health Reports</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
            <View style={styles.cardSection}>

                <View style={styles.titleSection}>
                    <Image source={require("./../../../assets/images/reports.png")} style={styles.motherImage} />
                    <View>
                        <Text style={styles.mainTitle}>Health Reports</Text>
                        <Text style={styles.subtitle}>View Health History</Text>
                    </View>
                </View>
                <View style={styles.tabsContainer}>
                    {renderTab('BMI')}
                    {renderTab('CHECKUP')}
                    {renderTab('MEDICINE')}
                </View>
                <View style={{
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", color: "#27014B", alignItems: "center" }}>Checkup History Reports</Text>
                </View>
                <View style={styles.ColumnContainer}>
                    <Text style={styles.title}>2024/ DEC/02 Report</Text>
                    <Text style={styles.details}>* Weight = </Text>
                    <Text style={styles.details}>* Height =</Text>
                    <Text style={styles.details}>* BMI Rate = </Text>
                    <Text style={styles.details}>* BMI Status =</Text>
                </View>

                <View style={styles.ColumnContainer}>
                    <Text style={styles.title}>2024/ DEC/02 Report</Text>
                    <Text style={styles.details}>* Weight = </Text>
                    <Text style={styles.details}>* Height =</Text>
                    <Text style={styles.details}>* BMI Rate = </Text>
                    <Text style={styles.details}>* BMI Status =</Text>
                </View>

                <View style={styles.ColumnContainer}>
                    <Text style={styles.title}>2024/ DEC/02 Report</Text>
                    <Text style={styles.details}>* Weight = </Text>
                    <Text style={styles.details}>* Height =</Text>
                    <Text style={styles.details}>* BMI Rate = </Text>
                    <Text style={styles.details}>* BMI Status =</Text>
                </View>


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
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#27014B",
    },
    titleSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    motherImage: {
        width: 120,
        height: 120,
        marginRight: 10,
        resizeMode: "contain",
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#27014B",
    }, tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#F8EDF9',
    },
    tab: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    tabText: {
        color: '#666',
        fontWeight: '700',
    },
    activeTab: {
        borderBottomColor: '#5B4FFF',
        borderBottomWidth: 3,
    },
    activeTabText: {
        color: '#5B4FFF',
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