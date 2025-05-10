import React, { useState } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, CheckBox, ScrollView
} from 'react-native';
import Colors from '../../../constant/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ViewBabySchedule ({ route }) {
    const router = useRouter();
    const scheduleList = route?.params?.scheduleList || [];

    const [activeTab, setActiveTab] = useState('view');
    const [taskList, setTaskList] = useState(
        scheduleList.map(item => ({ ...item, completed: false }))
    );

    const toggleComplete = (id) => {
        const updatedList = taskList.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setTaskList(updatedList);
    };

    const renderScheduleItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.activity}</Text>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.isPhysical ? "Yes" : "No"}</Text>
        </View>
    );

    const renderTaskItem = ({ item }) => (
        <View style={[styles.taskItem, item.completed && styles.taskCompleted]}>
            <CheckBox
                value={item.completed}
                onValueChange={() => toggleComplete(item.id)}
            />
            <View style={styles.taskTextContainer}>
                <Text style={styles.taskTitle}>{item.activity} ({item.time})</Text>
                <Text style={styles.taskNote}>Note: {item.notes || "None"}</Text>
            </View>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() =>
                            router.push("./../../Main-Interfaces/baby-home")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>View Baby Schedule</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />

                </View>
                <View style={styles.cardSection}>

                    <View style={styles.tabs}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'view' && styles.activeTab]}
                            onPress={() => setActiveTab('view')}
                        >
                            <Text style={styles.tabText}>View Schedule</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'supervise' && styles.activeTab]}
                            onPress={() => setActiveTab('supervise')}
                        >
                            <Text style={styles.tabText}>Supervise Tasks</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Tab Content */}
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {activeTab === 'view' ? (
                            <>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.cell}>Activity</Text>
                                    <Text style={styles.cell}>Date</Text>
                                    <Text style={styles.cell}>Time</Text>
                                    <Text style={styles.cell}>Physical</Text>
                                </View>
                                <FlatList
                                    data={scheduleList}
                                    renderItem={renderScheduleItem}
                                    keyExtractor={item => item.id}
                                    ListEmptyComponent={<Text style={styles.empty}>No schedule added yet.</Text>}
                                />
                            </>
                        ) : (
                            <FlatList
                                data={taskList}
                                renderItem={renderTaskItem}
                                keyExtractor={item => item.id}
                                ListEmptyComponent={<Text style={styles.empty}>No tasks to supervise.</Text>}
                            />
                        )}</ScrollView>
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
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.BLUE1,
    },

    tabs: {
        flexDirection: 'row',
        marginBottom: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#ffd1a9',
    },
    tabText: {
        fontWeight: '600',
        color: '#333',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#ffe2cc',
        padding: 10,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    cell: {
        flex: 1,
        fontSize: 14,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    taskCompleted: {
        backgroundColor: '#d4fcd4',
    },
    taskTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    taskNote: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },
    empty: {
        marginTop: 20,
        textAlign: 'center',
        color: '#999',
    },
});
