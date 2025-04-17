import React, { useState } from 'react';
import {View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import colors from "../../constant/Colors";


export default function Step4UploadImage({ navigation }) {
    const [image, setImage] = useState(null);

    const pickImage = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
            if (!response.didCancel && !response.error) {
                setImage(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Step3HealthInfo.jsx")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create Parent Account</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

            <Text style={styles.title}>Upload Image</Text>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Pick Image" onPress={pickImage} />
            <Text style={{ marginTop: 10 }}>
                Max size: 5MB | JPG, PNG, JPEG | Stable internet required
            </Text>
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../../Step5Success.jsx")}>
                <Text style={styles.Buttontext}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    title: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
    image: { width: 150, height: 150, borderRadius: 75, marginBottom: 10 },

    header: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius:10,
        padding:20,
        backgroundColor: Colors.SECONDARY,
        justifyContent: "space-between",
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
        marginBottom: 15,}
});
