import React, { useState } from 'react';
import { View,Text, StyleSheet, TextInput, ScrollView, SafeAreaView, TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Colors from '../../../../constant/Colors';
import { colors } from 'react-native-elements';

export default function BabyProfile() {
    const [formData, setFormData] = useState({
        first_name: '',
        second_name: '',
        date_of_birth: '',
        contact_number: '',
        age: '',
        address: '',
        country: '',
        district: '',
        town: '',
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        // Handle update action here (e.g., API call or validation)
        console.log('Updated Profile:', formData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('./../../../Main-Interfaces/baby-home')}>
                        <Ionicons name="chevron-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Baby Profile</Text>
                </View>

                <View style={styles.cardSection}>
                    {[
                        { placeholder: 'First Name', key: 'first_name' },
                        { placeholder: 'Last Name', key: 'second_name' },
                        { placeholder: 'Date of Birth', key: 'date_of_birth' },
                        { placeholder: 'Contact Number', key: 'contact_number' },
                        { placeholder: 'Age', key: 'age', keyboardType: 'numeric' },
                        { placeholder: 'Address', key: 'address' },
                        { placeholder: 'Country', key: 'country' },
                        { placeholder: 'District', key: 'district' },
                        { placeholder: 'Town', key: 'town' },
                    ].map(({ placeholder, key, keyboardType }) => (
                        <TextInput
                            key={key}
                            style={styles.input}
                            placeholder={placeholder}
                            value={formData[key]}
                            keyboardType={keyboardType || 'default'}
                            onChangeText={(text) => handleInputChange(key, text)}
                        />
                    ))}

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#005FCC' }]}
                        onPress={() => router.push('./../../auth/log-in')}
                    >
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        marginTop: 20,
    },
    input: {
        backgroundColor: '#F1F1F1',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 14,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
