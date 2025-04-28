import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Colors from "../../../constant/Colors";
import { MaterialIcons } from "@expo/vector-icons";
 import { router, useRouter } from "expo-router";

import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

const contacts = [
    {
        name: 'DAD',
        time: '5.00 a.m',
        phone: '+94 71 718 2131',
        avatar: require('./../../../assets/images/father.png'), // Replace with local image path
    },
    {
        name: 'Mom',
        time: '5.00 a.m',
        phone: '+94 71 433 2331',
        avatar: require('./../../../assets/images/mother.png'),
    },
    {
        name: 'Personal Doctor',
        time: '5.00 a.m',
        phone: '+94 71 433 2331',
        title: 'Dr.T.H. Hemachandra',
        avatar: require('./../../../assets/images/Doctor Male Skin Type 3.png'),
    },
    {
        name: 'Mid Wife',
        time: '5.00 a.m',
        phone: '+94 71 433 2331',
        title: 'Dr. T.Hemachandra (N.n.p)',
        avatar: require('./../../../assets/images/Nurse.png'),
    },
];

export default function ViewEmgDetails({ navigation }) {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    return (

        <View >

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home/MomHome")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Emergency</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
            

            <ScrollView style={styles.container}>

                <View style={styles.hospitalCard}>
                    <FontAwesome5 name="bell" size={40} color="#d62828" style={{ marginRight: 12 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.hospitalTitle}>Hospital/Ambulance</Text>
                        <Text style={styles.hospitalInfo}>• Hospital Phone : 033 899 8999</Text>
                        <Text style={styles.hospitalInfo}>• Ambulance : 1990</Text>
                        <Text style={styles.hospitalInfo}>• : 033 399 8999</Text>
                    </View>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="#333" />
                    </TouchableOpacity>
                </View>

                
                {contacts.map((item, index) => (
                    <View key={index} style={styles.contactCard}>
                        <Image source={item.avatar} style={styles.avatar} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.contactName}>{item.name}</Text>
                            {item.title && <Text style={styles.contactSub}>{item.title}</Text>}
                            <Text style={styles.contactTime}>Last seen: {item.time}</Text>
                            <Text style={styles.contactPhone}>{item.phone}</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableOpacity>
                                <Feather name="video" size={22} color="#0a9396" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10 }}>
                                <Feather name="phone-call" size={22} color="#0a9396" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef6ff',
        paddingHorizontal:20,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#e74c3c',
        paddingTop: 40,
        paddingHorizontal: 16,
        paddingBottom: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    viewTitle: {
        fontSize: 16,
        fontWeight: '600',
        margin: 16,
        color: '#222',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    hospitalCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
    },
    hospitalTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#333',
    },
    hospitalInfo: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    contactCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        alignItems: 'flex-start',
        marginBottom: 16,
        elevation: 2,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
        marginTop: 6,
    },
    contactName: {
        fontWeight: '700',
        fontSize: 15,
        color: '#222',
    },
    contactSub: {
        fontSize: 13,
        color: '#555',
        marginBottom: 2,
    },
    contactTime: {
        fontSize: 12,
        color: '#888',
    },
    contactPhone: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    icons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});