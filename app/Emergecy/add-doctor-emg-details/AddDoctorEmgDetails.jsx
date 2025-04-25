import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../../../constant/Colors";
import { useRouter } from "expo-router";

export default function AddDoctorEmgDetails() {
    const [formData, setFormData] = useState({});
    const router = useRouter();
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
            case 'Doctor':
                return '#E8F4F8'; // Light Blue
            case 'Mid Wife':
                return '#F8E5F0'; // Light Pink
            case 'Hospital':
                return '#F4F8E0'; // Light Green
            default:
                return '#FFFFFF'; // Default background
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main Interfaces/mom-home")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add Emergency Details</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <View style={styles.tabsContainer}>
                {renderTab('Doctor')}
                {renderTab('Mid Wife')}
                {renderTab('Hospital')}
            </View>

            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder="Name of contact" />
                    <Text style={styles.label}>Job Description</Text>
                    <TextInput style={styles.input} placeholder="Explain the situation briefly" />
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="What signs show it's happening" />
                    <Text style={styles.label}>Contact Numbers</Text>
                    <TextInput style={styles.input} placeholder="Contact Number1" />
                    <TextInput style={styles.input} placeholder="Contact Number2" />
                    <TextInput style={styles.input} placeholder="Contact Number3" />
                    <TouchableOpacity style={styles.Button} onPress={() => router.push("./../../mother-registation/step-2-pregnancy-info")}>
                        <Text style={styles.Buttontext}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
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
    Buttontext: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.BLUE1,
    },
    tabsContainer: {
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
});
