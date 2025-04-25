import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from "react-native-paper";
import {useRouter} from "expo-router";
import Colors from "../../../constant/Colors";
import {Picker} from "react-native-web";
import {MaterialIcons} from "@expo/vector-icons";
import colors from "../../../constant/Colors";

export default function Step2PregnancyInfo({ navigation }) {

    const [language, setLanguage] = useState("Yes");
    const router = useRouter();

    const [selectedValue, setSelectedValue] = useState('Normal');

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../mother-registation/step-1-parent-info")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mother Pregnancy Registration</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <RadioButton.Group style={styles.Rowcontainer} onValueChange={newValue => setLanguage(newValue)} value={language}>
                <View style={styles.Rowcontainer}>
                    <Text style={styles.label}>Did you have kids already?</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="yes" />
                    <Text style={{ fontSize: 16 }}>Yes</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="no" />
                    <Text style={{ fontSize: 16 }}>No</Text>
                </View>
                </View>
            </RadioButton.Group>

            <Text style={styles.label}>How many kids do you have?</Text>
            <TextInput style={styles.input} placeholder="How many kids?" keyboardType="numeric" />
            <View style={styles.Rowcontainer}>
                <Text style={styles.label} >Delivery Methord (1st kid) </Text>
                <Picker styles={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={styles.picker} >
                <Picker.Item label="Normal" value="normal" />
                <Picker.Item label="Siserian" value="siserian" />
                </Picker>
            </View>
            <View style={styles.Rowcontainer}>
                <Text style={styles.label} >Delivery Methord (2nd kid)</Text>
                <Picker styles={styles.picker}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        style={styles.picker} >
                    <Picker.Item label="Normal" value="normal" />
                    <Picker.Item label="Siserian" value="siserian" />
                </Picker>
            </View>
            <View style={styles.Rowcontainer}>
                <Text style={styles.label} >Delivery Methord (3rd kid) </Text>
                <Picker styles={styles.picker}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        style={styles.picker} >
                    <Picker.Item label="Normal" value="normal" />
                    <Picker.Item label="Siserian" value="siserian" />
                </Picker>
            </View>

            <Text style={styles.label}>Pregnancy Type</Text>

            <RadioButton.Group  onValueChange={newValue => setLanguage(newValue)} value={language}>
                <View style={styles.Rowcontainer}>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Single" />
                    <Text style={{ fontSize: 16 }}>Single</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Twin" />
                    <Text style={{ fontSize: 16 }}>Twin</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                    <RadioButton value="Triple" />
                    <Text style={{ fontSize: 16 }}>Triple</Text>
                </View>
                </View>
            </RadioButton.Group>
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../../mother-registation/step-3-health-info")}>
                <Text style={styles.Buttontext}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20},
    title: {fontWeight: 'bold', fontSize: 18, marginBottom: 10,alignContent:"center", alignItems:"center",marginRight:20,},
    label: {
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
        marginRight:20,
    },
    Rowcontainer: {
      flexDirection: "row",
        alignItems: "center",
    },
    picker:{
      marginLeft: 20 ,
        width:180,
        height:45,
        paddingLeft: 20,
        paddingRight: 30,
        marginRight: 10,
        margin:8,
        borderRadius: 8,
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
        margin:15,
    },
    Buttontext:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",

    },
    header: {
    flexDirection: "row",
        alignItems: "center",
        borderRadius:10,
        padding:20,
        backgroundColor: Colors.SECONDARY,
        justifyContent: "space-between",
        marginBottom: 15,
    },
    headerTitle: {
    fontSize: 18,
        fontWeight: "bold",
        color: colors.BLUE1,
    },
    titleSection: {
    backgroundColor: colors.SECONDARY,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 15,
},


});
