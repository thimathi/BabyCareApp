import React, { useState } from 'react'; import {
    View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, CheckBox, Image, Alert,SafeAreaView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Colors from '../../../../constant/Colors';
import { colors } from 'react-native-elements';

const vaccinesList = [
    'BCG / OPV 0 (Oral Polio Vaccine) / Hepatitis B',
    'DTaP (1st dose)',
    'IPV (1st dose)',
    'Hepatitis B (2nd dose)',
    'Hib (1st dose)',
    'PCV (1st dose)',
    'Rotavirus (1st dose)',
    'DTaP (2nd dose)',
    'IPV (3rd dose)',
    'Hepatitis B (3rd dose)'
];


export default function MomVaccination() {
    const [vaccines, setVaccines] = useState(
        vaccinesList.map(name => ({
            name,
            date: '',
            completed: false,
            showDatePicker: false
        }))
    );

    const toggleDatePicker = (index) => {
        const updated = [...vaccines];
        updated[index].showDatePicker = !updated[index].showDatePicker;
        setVaccines(updated);
    };

    const onDateChange = (event, selectedDate, index) => {
        const updated = [...vaccines];
        updated[index].date = selectedDate.toISOString().split('T')[0];
        updated[index].showDatePicker = false;
        setVaccines(updated);
    };

    const toggleCheckbox = (index) => {
        const updated = [...vaccines];
        updated[index].completed = !updated[index].completed;
        setVaccines(updated);
    };

    const handleUpdate = () => {
        const completed = vaccines.filter(v => v.completed);
        Alert.alert("Updated", `${completed.length} vaccine(s) marked as completed.`);
    };

    const handleDelete = () => {
        const reset = vaccines.map(v => ({
            ...v,
            date: '',
            completed: false
        }));
        setVaccines(reset);
        Alert.alert("Reset", "Vaccination record has been reset.");
    };
    return (
        <SafeAreaView style={styles.container}>
            
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('../../../Main-Interfaces/baby-home')}>
                        <Ionicons name="chevron-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Mother Vaccination</Text>
                </View>
            <ScrollView>
                <View style={styles.cardSection}>
                    <View style={styles.banner}>
                        <Text style={styles.headerText}> Mother Vaccination</Text>
                        <Image source={require('./../../../../assets/images/Mother Vaccination.png')} style={styles.image}/>
                    </View>

                    <Text style={styles.subText}>Check your Vaccinations</Text>
                
                    {vaccines.map((vaccine, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.label}>{vaccine.name}</Text>
                            <TouchableOpacity
                                style={styles.input}
                                onPress={() => toggleDatePicker(index)}
                            >
                                <Text style={{ color: vaccine.date ? '#333' : '#aaa' }}>
                                    {vaccine.date || 'Date'}
                                </Text>
                            </TouchableOpacity>
                            {vaccine.showDatePicker && (
                                <DateTimePicker
                                    value={new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) =>
                                        onDateChange(event, selectedDate || new Date(), index)
                                    }
                                />
                            )}
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={vaccine.completed}
                                    onValueChange={() => toggleCheckbox(index)}
                                />
                                <Text style={styles.checkboxLabel}>Completed</Text>
                            </View>
                        </View>
                    ))}

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                            <Text style={styles.btnText}>+ Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
                            <Text style={styles.btnText}>- Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00C6CD',
    },
    header: {
        backgroundColor: '#00C6CD',
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
        marginTop: 10,
    },
    banner:{
        backgroundColor:'#00C6CD',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    subText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        marginBottom: 18,
        backgroundColor: '#f9f5ff',
        padding: 12,
        borderRadius: 12,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
        color: '#222',
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        marginBottom: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        color: '#444',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingBottom: 30,
    },
    updateBtn: {
        backgroundColor: '#a3ddc3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    deleteBtn: {
        backgroundColor: '#ffb3b3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    btnText: {
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
    }
});
