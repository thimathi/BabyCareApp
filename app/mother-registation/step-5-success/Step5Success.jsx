import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import { router } from "expo-router";
import { useRouter, useLocalSearchParams } from "expo-router";
import { insertSubscriptionInfo } from './Step5BackEnd';

export default function Step5Success({ navigation }) {
    const { user_id } = useLocalSearchParams();

    useEffect(() => {
        const subscribeUser = async () => {
            const result = await insertSubscriptionInfo({}, user_id);
            if (!result.success) {
                Alert.alert("Error", "Failed to save subscription information.");
            } else {
                console.log("Subscription info saved successfully.");
            }
        };

        if (user_id) {
            subscribeUser();
        }
    }, [user_id]);

    return (
        <View style={styles.container}>


            <Image
                source={require('../../../assets/images/mom2.png')}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.title}>Congratulations</Text>
            <Image
                source={require('../../../assets/images/Process Success.gif')}
                style={{ 60: 100, height: 60, borderRadius:100, }}/>
            <Text style={styles.label}>Registration Successful!</Text>
            <TouchableOpacity style={styles.Button} onPress={() => router.push("./../../Main-Interfaces/mom-home/MomHome")}>
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
