import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import {useRouter} from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../../constant/Colors";

export default function BMICalculatorScreen() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('Female');
    const [bmi, setBmi] = useState('');
    const [status, setStatus] = useState('');
    const [statusColor, setStatusColor] = useState('#fff');

    const determineStatus = (bmiValue) => {
        if (bmiValue < 18.5) return { text: 'Underweight', color: '#87CEFA' };
        else if (bmiValue < 25) return { text: 'Normal Weight', color: '#90EE90' };
        else if (bmiValue < 30) return { text: 'Overweight', color: '#FFD700' };
        else if (bmiValue < 35) return { text: 'Obesity (Class 1)', color: '#FFA500' };
        else if (bmiValue < 40) return { text: 'Obesity (Class 2)', color: '#FF4500' };
        else return { text: 'Severe Obesity (Class 3)', color: '#DC143C' };
    };

    const calculateBMI = () => {
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const bmiValue = (w / (h * h)).toFixed(1);
            setBmi(bmiValue);
            const { text, color } = determineStatus(bmiValue);
            setStatus(text);
            setStatusColor(color);
        }
    };

    const saveRecode = async () => {
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const bmiValue = (w / (h * h)).toFixed(1);
            setBmi(bmiValue);
            const { text, color } = determineStatus(bmiValue);
            setStatus(text);
            setStatusColor(color);

            try {
                await push(ref(database, 'bmiRecords'), {
                    name,
                    age,
                    height,
                    weight,
                    gender,
                    bmi: bmiValue,
                    status: text,
                    timestamp: new Date().toISOString()
                });
                Alert.alert("✅ Saved", "Your BMI record has been saved successfully.");
            } catch (error) {
                Alert.alert("❌ Error", "Failed to save data: " + error.message);
            }
        } else {
            Alert.alert("⚠️ Input Error", "Please enter valid height and weight.");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./MomHome.jsx")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Calculate BMI value</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <View style={styles.banner}>
                <Image source={require('../../assets/images/Bmi 2.png')} style={styles.bannerimage} />
                <Text style={styles.headerText}>Check Your BMI Health</Text>
            </View>

            <View style={styles.inputBox}>
                <Text style={styles.tableTitle}>Name</Text>
                <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.tableTitle}>Age</Text>
                        <TextInput placeholder="Years" value={age} onChangeText={setAge} keyboardType="numeric" style={[styles.input, styles.halfInput]} />
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.tableTitle}>Height</Text>
                        <TextInput placeholder="cm" value={height} onChangeText={setHeight} keyboardType="numeric" style={[styles.input, styles.halfInput]} />
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.tableTitle}>Weight</Text>
                        <TextInput placeholder="Kg" value={weight} onChangeText={setWeight} keyboardType="numeric" style={styles.input} />
                    </View>
                </View>

                <View style={styles.genderRow}>
                    <Text style={styles.tableTitle}>Gender</Text>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Male' && styles.genderSelected]}
                        onPress={() => setGender('Male')}
                    >
                        <Text style={styles.genderText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Female' && styles.genderSelected]}
                        onPress={() => setGender('Female')}
                    >
                        <Text style={styles.genderText}>Female</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <TextInput
                        placeholder="BMI Value"
                        value={bmi}
                        editable={false}
                        style={[styles.input, styles.halfInput]}
                    />
                    <TextInput
                        placeholder="Status"
                        value={status}
                        editable={false}
                        style={[styles.input, styles.halfInput, { backgroundColor: statusColor }]}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={saveRecode}>
                    <Text style={styles.buttonText}>Save Record</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resultBox}>
                <Text style={styles.tableTitle}>Category & Range (kg/m²)</Text>
                <Text style={styles.tableText}>• Underweight - Below 18.5</Text>
                <Text style={styles.tableText}>• Normal Weight - 18.5 - 24.9</Text>
                <Text style={styles.tableText}>• Overweight - 25.0 - 29.9</Text>
                <Text style={styles.tableText}>• Obesity (Class 1) - 30.0 - 34.9</Text>
                <Text style={styles.tableText}>• Obesity (Class 2) - 35.0 - 39.9</Text>
                <Text style={styles.tableText}>• Severe Obesity (Class 3) - 40.0 & Above</Text>

                <Text style={styles.tip}>✅ Eat Balanced Meals – More fruits, veggies, lean protein & whole grains.</Text>
                <Text style={styles.tip}>🏃 Exercise Regularly – At least 30 mins of walking or workouts daily.</Text>
                <Text style={styles.tip}>💧 Stay Hydrated – Drink 2-3 liters of water daily.</Text>
                <Text style={styles.tip}>🛌 Get Enough Sleep – 7-9 hours of quality sleep per night.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius:10,
        padding:20,
        backgroundColor: Colors.SECONDARY,
        justifyContent: "space-between",
    },
    banner: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    bannerimage: {
        width: 140,
        height: 140,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c30047',
        marginTop: 10
    },
    inputBox: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        marginVertical: 3,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    halfInput: {
        width: '48%'
    },
    genderRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    genderButton: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: '#eee',
        borderRadius: 20,
    },
    genderSelected: {
        backgroundColor: '#c30047'
    },
    genderText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#7a0026',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    resultBox: {
        backgroundColor: '#fff5e6',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
    },
    tableTitle: { fontWeight: 'bold', marginBottom: 5, color: '#333' },
    tableText: { marginBottom: 4, color: '#444' },
    tip: { marginTop: 8, color: '#555', fontSize: 13 },
    col: { flex: 1, marginHorizontal: 3 },
});
