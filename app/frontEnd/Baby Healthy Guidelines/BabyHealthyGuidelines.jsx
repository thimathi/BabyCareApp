import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import Colors from "../../constant/Colors";
import React from "react";
import colors from "../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import {router, useRouter} from "expo-router";
import { i18n } from "../utils/i18n";

export default function BabyHealthyGuidelines() {
    const router = useRouter();
    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <View style={styles.Topheader}>
                    <TouchableOpacity onPress={() => router.push("./MomHome")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Baby Healthy Guidelines</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </View>

                <View style={styles.banner}>
                    <Image source={require("../../assets/images/children que.png")}
                           style={styles.bannerimage} />

                </View>

                <View id={"0-3 month  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("../../assets/images/1-3 years .png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>0 -3 month</Text>
                        <Text style={styles.details}>Read more about guidelines</Text>
                    </View>
                </View>
                <View id={"6-39month  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("../../assets/images/10-12 years.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>6-12 month</Text>
                        <Text style={styles.details}>Read more about guidelines</Text>
                    </View>
                </View>
                <View id={"1-2 Year  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("../../assets/images/1 Year.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>1-2 Year</Text>
                        <Text style={styles.details}>Read more about guidelines</Text>
                    </View>
                </View>
                <View id={"2-3 Year  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("../../assets/images/2 year.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>2-3 Year</Text>
                        <Text style={styles.details}>Read more about guidelines</Text>
                    </View>
                </View>id={"3-4 Year"} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}
                    <Image
                        source={require("../../assets/images/3 years.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>3-4 Year</Text>
                        <Text style={styles.details}>Read more about guidelines</Text>
                    </View>

            </View>
        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    Topheader: {
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
        marginBottom: 15,
    },

    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
    bannerimage: {
        width: 120,
        height: 120,
    },
    logo:{
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 22,
        wordWrap: "break-word",
        fontWeight: "500",
        marginBottom:5,
        paddingLeft:10,
    },
    details: {
        fontSize: 15,
        paddingLeft:10,
        marginRight:30,
        wordWrap: "contain",
    },

    header: {
        alignItems: 'center',
        marginBottom: 5,
    },
    banner: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c30047',
        marginTop: 10 },
    RowContainer:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    ColumnContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginRight:20,
    },
    PanelContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
        alignItems: 'center',
    },
});