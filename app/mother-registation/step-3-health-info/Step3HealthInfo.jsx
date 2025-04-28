import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from 'expo-router';
import Colors from "../../../constant/Colors";
import { insertParentInfo } from "../step-3-health-info/Step3BackEnd";

export default function Step3HealthInfo() {
    const router = useRouter();
    const {user_id} = useLocalSearchParams();

    const [formData, setFormData] = useState({
        bloodGroup: "",
        existingConditions: "",
        allergies: "",
        medications: ""
    });

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
      };

      const handleNext = async () => {
          const response = await insertParentInfo(formData,user_id);
          if (response.success) {
            const userId = response.user_id;
            router.push({
              pathname: "./../../mother-registation/step-4-upload-image",
              params: { user_id: userId },
            });
          } else {
            console.log("Error saving data. Please try again.");
          }
        };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                                <TouchableOpacity onPress={() => router.push("./../../mother-registation/step-2-pregnancy-info")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                
                <Text style={styles.headerTitle}>Mother Registration</Text>
                <View style={{ width: 24 }} /> {/* Spacer for alignment */}
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Health Information</Text>
                
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Blood Group*</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="e.g. O+"
                        value={formData.bloodGroup}
                        onChangeText={(text) => handleChange('bloodGroup', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Existing Medical Conditions</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="e.g. Diabetes, Hypertension"
                        value={formData.existingConditions}
                        onChangeText={(text) => handleChange('existingConditions', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Allergies</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="e.g. Penicillin, Nuts"
                        value={formData.allergies}
                        onChangeText={(text) => handleChange('allergies', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Current Medications</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="e.g. Insulin, Antihypertensives"
                        value={formData.medications}
                        onChangeText={(text) => handleChange('medications', text)}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.nextButton} 
                    onPress={handleNext}
                    activeOpacity={0.8}
                >
                    <Text style={styles.nextButtonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.SECONDARY,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
        marginBottom: 25,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.BLUE1,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        fontSize: 16,
    },
    nextButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});