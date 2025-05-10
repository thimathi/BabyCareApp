import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, FlatList, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const notifications = [
    {
        id: '1',
        title: 'Clinic Reminder',
        message: 'You have a doctor appointment at 10:00 AM tomorrow.',
        time: '2h ago',
        unread: true,
    },
    {
        id: '2',
        title: 'Feeding Time',
        message: 'It’s time to feed your baby!',
        time: '5h ago',
        unread: false,
    },
    {
        id: '3',
        title: 'Health Tip',
        message: 'Stay hydrated and take your vitamins daily.',
        time: '1d ago',
        unread: true,
    },
];

export default function BabyNotification() {
    const renderItem = ({ item }) => (
        <View style={[styles.notificationCard, item.unread && styles.unreadCard]}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
                {item.unread && <View style={styles.unreadDot} />}
            </View>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFBF00" barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('../../../Main-Interfaces/baby-home')}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Baby Notifications</Text>
            </View>

            <View style={styles.cardSection}>
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005FCC',
    },
    header: {
        backgroundColor: '#005FCC',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
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
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    notificationCard: {
        backgroundColor: '#FAFAFA',
        padding: 16,
        marginBottom: 12,
        borderRadius: 16,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    unreadCard: {
        borderLeftWidth: 4,
        borderLeftColor: '#7B4EFF',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    message: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },
    time: {
        fontSize: 12,
        color: '#999',
        textAlign: 'right',
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#7B4EFF',
    },
});
