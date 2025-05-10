import React, { useState } from 'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Switch, KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useRouter } from "expo-router";

import Colors from '../../../constant/Colors';
import { ScrollView } from 'react-native-web';

export default function CreateBabySchedule() {
    const [activity, setActivity] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isPhysical, setIsPhysical] = useState(false);
    const [scheduleList, setScheduleList] = useState([]);
    const router = useRouter();

    const handleSaveSchedule = () => {
        const newSchedule = {
            id: Date.now().toString(),
            activity,
            notes,
            date,
            time,
            isPhysical,
        };

        if (!activity || !date || !time) {
            alert('Please fill in required fields.');
            return;
        }

        setScheduleList([...scheduleList, newSchedule]);

        // Clear form
        setActivity('');
        setNotes('');
        setDate('');
        setTime('');
        setIsPhysical(false);
    };

    const renderItem = ({ item }) => (
        <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.activity}</Text>
            <Text style={styles.tableCell}>{item.date}</Text>
            <Text style={styles.tableCell}>{item.time}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() =>
                            router.push("./../../Main-Interfaces/mom-home/MomHome")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Baby Schedule</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />

                </View>
                <View style={styles.cardSection}>
                    
                        <View style={styles.card}>
                            <Text style={styles.label}>Activity Type *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="e.g. Feeding, Meditation, Exercise"
                                value={activity}
                                onChangeText={setActivity}
                            />
                        
                        <Text style={styles.label}>Activity</Text>
                        <Text style={styles.label}>Physical Activity Required</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Breakfast"
                            value={date}
                            onChangeText={setDate}
                        />

                            <Text style={styles.label}>Additional Notes</Text>
                            <TextInput
                                style={[styles.input, { height: 60 }]}
                                placeholder="e.g. Feed formula, use soft toys..."
                                value={notes}
                                onChangeText={setNotes}
                                multiline
                            />

                            

                            <Text style={styles.label}>Time *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="e.g. 10:30 AM"
                                value={time}
                                onChangeText={setTime}
                            />

                            

                            <TouchableOpacity style={styles.button} onPress={handleSaveSchedule}>
                                <Text style={styles.buttonText}>Save Schedule</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.tableTitle}>Scheduled Activities</Text>
                        <View style={styles.tableHeader}>
                            <Text style={[styles.tableCell, styles.headerCell]}>Activity</Text>
                            <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
                            <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
                        </View>
                        <FlatList
                            data={scheduleList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            ListEmptyComponent={<Text style={styles.emptyText}>No schedule added yet.</Text>}
                        />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffeadb',
        paddingHorizontal: 0,
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#ffeadb',
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
        marginBottom:10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.BLUE1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginTop: 16,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 14,
        marginBottom: 6,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
    },
    switchContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 14,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 16,
        textAlign: 'center',
        color: '#333',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#ffeadb',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    tableCell: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    headerCell: {
        fontWeight: '700',
    },
    emptyText: {
        textAlign: 'center',
        color: '#aaa',
        marginTop: 20,
        fontStyle: 'italic',
    },
});
