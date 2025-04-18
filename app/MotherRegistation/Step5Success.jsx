import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";

export default function Step5Success({ navigation }) {
    return (
        <View style={styles.container}>


            <Image
                source={require('../../assets/images/mom2.png')} // Replace with your image
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.title}>Congratulations</Text>
            <Text style={styles.label}>Registration Successful!</Text>
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../Step4UploadImage.js")}>
                <Text style={styles.Buttontext}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 },

    image: {
        width: 150,
        height: 220,
        resizeMode: "contain",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#27014B",
        marginBottom: 10,
    },
    label: {
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.BLUE1,
        marginBottom: 5,
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
        fontWeight: "bold",}
});
