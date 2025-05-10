import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Colors from "./../../../../constant/Colors";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

import { router } from 'expo-router';
import { useNavigation, useRoute } from "@react-navigation/native";




const data = [
    { id: '1', title: 'Clinic No:01' },
    { id: '2', title: 'Clinic No:02' },
    { id: '3', title: 'Clinic No:03' },
];

const ScheduleCard = ({ item, isPast }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardText}>• Date = </Text>
        <Text style={styles.cardText}>• Location = </Text>
        <Text style={styles.cardText}>• Start = </Text>
        <Text style={styles.cardText}>• End = </Text>
        <Text style={styles.cardText}>• Description = </Text>
        {!isPast && (
            <TouchableOpacity style={styles.updateBtn}>
                <Text style={styles.updateBtnText}>Update Details</Text>
            </TouchableOpacity>
        )}
    </View>
);

const MySchedule = () => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScheduleCard item={item} />}
        contentContainerStyle={styles.list}
    />
);

const CreateSchedule = () => (
    <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Schedule Name" />
        <TextInput style={styles.input} placeholder="Date (mm/dd/yyyy)" />
        <TextInput style={styles.input} placeholder="Start Time" />
        <TextInput style={styles.input} placeholder="End Time" />
        <TextInput style={styles.input} placeholder="Location" />
        <TextInput style={styles.input} placeholder="URL" />
        <TextInput style={styles.input} placeholder="Description" multiline />
        <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
        </TouchableOpacity>
    </View>
);

const PastSchedules = () => (
    <View style={styles.form}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ScheduleCard item={item} isPast />}
        />
        <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Clear</Text>
        </TouchableOpacity>
    </View>
);


export default function BabyClinicSchedule() {

    const route = useRoute();
    const [selectedTab, setSelectedTab] = useState('my');

    const renderTab = () => {
        switch (selectedTab) {
            case 'my':
                return <MySchedule />;
            case 'create':
                return <CreateSchedule />;
            case 'past':
                return <PastSchedules />;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => router.push("./../../../Main-Interfaces/mom-home")} >
                        <Ionicons name="chevron-back" size={24} color="#fff" />
                    </TouchableOpacity><Text style={styles.headerText}>Baby Clinic Scheduling</Text>
                </View>
                <View style={styles.cardSection}>
                    {/* Custom Tab Buttons */}
                    <View style={styles.tabBar}>
                        <TouchableOpacity
                            style={[styles.tabBtn, selectedTab === 'my' && styles.tabBtnActive]}
                            onPress={() => setSelectedTab('my')}
                        >
                            <Text style={styles.tabBtnText}>My Schedule</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabBtn, selectedTab === 'create' && styles.tabBtnActive]}
                            onPress={() => setSelectedTab('create')}
                        >
                            <Text style={styles.tabBtnText}>Create Schedule</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabBtn, selectedTab === 'past' && styles.tabBtnActive]}
                            onPress={() => setSelectedTab('past')}
                        >
                            <Text style={styles.tabBtnText}>Past Schedules</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Render Tab Content */}
                    <View style={styles.content}>{renderTab()}</View>


                </View>


            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        backgroundColor: Colors.PRIMARY,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    cardSection: {
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
        backgroundColor: '#eee',
    },
    tabBtn: {
        padding: 10,
        borderBottomWidth: 2,
        borderColor: 'transparent',
    },
    tabBtnActive: {
        borderBottomColor: Colors.PRIMARY,
    },
    tabBtnText: {
        color: '#000',
        fontWeight: '600',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    list: {
        paddingBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 14,
        color: '#333',
    },
    updateBtn: {
        marginTop: 10,
        backgroundColor: '#800020',
        paddingVertical: 8,
        borderRadius: 6,
        alignItems: 'center',
    },
    updateBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    form: {
        paddingVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#800020',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    saveBtn: {
        backgroundColor: '#800020',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    saveBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
