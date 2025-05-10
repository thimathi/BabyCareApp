import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { LineChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import { Circle, G, Line } from "react-native-svg";
import * as scale from "d3-scale";
import Colors from "./../../../constant/Colors";
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useNavigation, useRoute } from "@react-navigation/native";

import { useLocalSearchParams } from "expo-router";


const categories = [
    { id: "2", Name: "BMI", image: require("./../../../assets/images/Bmi 2.png"), screen: "./../../meditation/bmi-calculator" },
    { id: "3", Name: "Baby Schedule", image: require("./../../../assets/images/Schedule.png"), screen: "./../../scheduler/view-baby-schedule" },
    { id: "6", Name: "Clinic", image: require("../../../assets/images/Clinic 2.png"), screen: "./../../meditation/clinic/baby-clinic" },
    { id: "4", Name: "Reports", image: require("./../../../assets/images/reports.png"), screen: "./../../meditation/reports" },
    { id: "6", Name: "Entertainment", image: require("../../../assets/images/Entertainment.png"), screen: "./../../Entertainment/entertainment-main" },
    { id: "7", Name: "Game", image: require("./../../../assets/images/game2.png"), screen: "./../../game-box/game-colection" },
    { id: "5", Name: "Contact", image: require("./../../../assets/images/ambulance.png"), screen: "./../../Emergecy/view-emg-details" },

];


export default function BabyHome() {

    const route = useRoute();
    const navigation = useNavigation();
    const email = useLocalSearchParams();
    const chartHeight = 200;

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const weightData = [
        120, 140, 135, 160, 170, 180, 150, 155, 165, 160, 170, 165,
    ];
    const heightData = [60, 65, 63, 68, 72, 74, 71, 73, 76, 75, 78, 80];
    const sugarData = [90, 95, 92, 100, 105, 110, 95, 96, 102, 100, 98, 97];
    const pressureData = [80, 85, 84, 90, 88, 92, 91, 89, 93, 95, 94, 96];

    // First I Created a state to getMotherName
    const [motherName, setMotherName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [user_id, setUserId] = useState("");


    return (
        <View style={styles.container}>
            {/* Top Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.locationLabel}>Health status</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="heart" size={16} color="#D3EDFF" />
                        <Text style={styles.locationText}> 35 days Old</Text>
                    </View>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home")}>
                        <Image source={require('../../../assets/images/mother.png')} // replace with your image
                            style={styles.profileImage} />
                    </TouchableOpacity>

                    <View style={{ borderRadius: 50, backgroundColor:'#D3EDFF', padding:1,paddingRight:3,flexDirection: 'row',alignItems: 'center', color: '#fff', fontWeight: 'bold'}}>
                    <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/profile/baby-profile")}>
                        <Image source={require('../../../assets/images/success baby.png')} // replace with your image
                            style={styles.profileImage} />
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontWeight: 'bold',paddingRight:5 }}>Profile</Text>
                    </View>

                    <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/notifications/baby-notification")}>
                        <Ionicons name="notifications-outline" size={30} color="#D3EDFF" style={styles.iconButton} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>


                {/* Search */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={17} color="#999" style={{ marginRight: 8 }} />
                    <TextInput placeholder="Search your field" style={{ flex: 1 }} />
                </View>

                {/* Banner */}
                <View style={styles.banner}>
                    <View style={styles.bannerText}>
                        <Text style={styles.bannerTitle}>Welcome Mom</Text>
                        <Text style={styles.bannerSubtitle}>
                            {motherName ? `${motherName} ${motherLastName}` : 'Account Name'}</Text>
                        <TouchableOpacity style={styles.orderNowButton} onPress={() => router.push("./../../profile")}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../../../assets/images/2 year.png')} // replace with your image
                        style={styles.bannerImage}
                    />
                </View>

                <View style={styles.PanelContainer}>
                    <View style={{ flexDirection: "row", height: chartHeight + 10, padding: 10, }}>
                        <YAxis
                            data={weightData}
                            contentInset={{ top: 20, bottom: 20 }}
                            svg={{ fontSize: 10, fill: "grey" }}
                            numberOfTicks={6}
                            style={{ marginRight: 10 }}
                        />
                        <View style={{ flex: 1 }}>
                            <LineChart
                                style={{ height: chartHeight }}
                                data={weightData}
                                svg={{ stroke: "orange", strokeWidth: 2 }}
                                contentInset={{ top: 20, bottom: 20 }}
                            />
                            <LineChart
                                style={StyleSheet.absoluteFill}
                                data={heightData}
                                svg={{ stroke: "blue", strokeWidth: 2 }}
                                contentInset={{ top: 20, bottom: 20 }}
                            />
                            <LineChart
                                style={StyleSheet.absoluteFill}
                                data={sugarData}
                                svg={{ stroke: "purple", strokeWidth: 2 }}
                                contentInset={{ top: 20, bottom: 20 }}
                            />
                            <LineChart
                                style={StyleSheet.absoluteFill}
                                data={pressureData}
                                svg={{ stroke: "red", strokeWidth: 2 }}
                                contentInset={{ top: 20, bottom: 20 }}
                            >
                                <Grid />
                            </LineChart>
                            <XAxis
                                style={{ marginHorizontal: -10, height: 20 }}
                                data={months}
                                formatLabel={(value, index) => months[index]}
                                contentInset={{ left: 30, right: 30 }}
                                svg={{ fontSize: 10, fill: "grey" }}
                                scale={scale.scaleBand}
                            />
                        </View>
                    </View>

                </View>
                <View style={styles.PanelContainer}>
                    <Text style={{ color: "orange", paddingLeft: 10 }}>● Weight</Text>
                    <Text style={{ color: "blue", paddingLeft: 10 }}>● Height</Text>
                    <Text style={{ color: "purple", paddingLeft: 10 }}>● Sugar</Text>
                    <Text style={{ color: "red", paddingLeft: 10 }}>● Pressure</Text>
                </View>

                <View style={styles.panelContent}>

                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Services</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
                        {categories.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.categoryBox}
                                onPress={() => item.screen && router.push(item.screen)}>
                                <Image source={item.image} style={{ width: 50, height: 50 }} />
                                <Text style={styles.categoryText}>{item.Name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/*Guidance*/}
                    <Text style={styles.sectionTitle}>Guidance</Text>

                    <TouchableOpacity onPress={() => router.push("./../../Baby Healthy Guidelines/baby-healthy-guide-panal")}>
                        <View style={styles.PanelItem}>
                            <Image
                                source={require("./../../../assets/images/1 Year.png")}
                                style={styles.PanelImage} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.PanelTagTag}>Guidance</Text>
                                <Text style={styles.PanelName}>Baby Healthy Guidelines</Text>
                                <Text style={styles.ReadMore}>Read more..</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/*Meditation*/}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Meditation</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push("./../../meditation/reports")}>
                        <View style={styles.PanelItem}>
                            <Image
                                source={require("./../../../assets/images/Bmi 2.png")}
                                style={styles.PanelImage} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.PanelTagTag}>Meditation</Text>
                                <Text style={styles.PanelName}>BMI Health in Pregnancy Period</Text>
                                <Text style={styles.ReadMore}>Read more..</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("./../../meditation/clinic/baby-clinic")}>
                        <View style={styles.PanelItem}>
                            <Image
                                source={require("./../../../assets/images/Clinic 2.png")}
                                style={styles.PanelImage} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.PanelTagTag}>Meditation</Text>
                                <Text style={styles.PanelName}>Clinic</Text>
                                <Text style={styles.ReadMore}>Read more..</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("./../../meditation/vaccination/baby-vaccination")}>
                        <View style={styles.PanelItem}>
                            <Image
                                source={require("./../../../assets/images/Mother Vaccination.png")}
                                style={styles.PanelImage} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.PanelTagTag}>Meditation</Text>
                                <Text style={styles.PanelName}>Vaccination</Text>
                                <Text style={styles.ReadMore}>Read more..</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                </View>

            </ScrollView>


            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => router.push("./../../Emergecy/view-emg-details")}
            // or use Linking.openURL('tel:123456789') to open phone dialer
            >
                <Ionicons name="call" size={28} color="white" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#EFE8FF', paddingHorizontal: 16, paddingTop: 10 },
    header: {
        backgroundColor: '#222222',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationLabel: { color: '#aaa', fontSize: 12 },
    locationText: { color: '#fff', fontSize: 14, fontWeight: '600' },
    headerIcons: { flexDirection: 'row' },
    iconButton: { marginLeft: 16 },

    searchContainer: {
        backgroundColor: '#FFf',
        marginVertical: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    panelContent: {
        backgroundColor: '#DBECFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    banner: {
        backgroundColor: '#005FCC',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    bannerText: { flex: 1 },
    bannerTitle: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
    bannerSubtitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    orderNowButton: {
        backgroundColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    bannerImage: { width: 100, height: 100, resizeMode: 'contain' },
    profileImage: { width: 30, height: 30, resizeMode: 'contain', marginRight: 10, backgroundColor: '#D3EDFF', padding: 3, borderRadius: 20, },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', paddingBottom: 10, },
    seeAll: { color: '#FFC107', fontWeight: '500' },

    categoriesRow: { marginBottom: 10, padding: 10 },
    categoryBox: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginRight: 12,
        alignItems: 'center',
        width: 110,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    categoryText: { fontSize: 12, marginTop: 6, textAlign: 'center' },

    PanelItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 16,
        padding: 12,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    floatingButton: {
        position: "absolute",
        bottom: 90,
        right: 20,
        backgroundColor: "#FF8C42",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        zIndex: 999,
    },
    PanelContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        margin: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    ColumnContainer: {
        flexDirection: "column",
        paddingLeft: 20,
    },
    PanelImage: { width: 70, height: 70, borderRadius: 12 },
    PanelTag: { fontSize: 10, color: '#FFBF00', fontWeight: 'bold' },
    PanelName: { fontSize: 14, fontWeight: '600', marginVertical: 4 },
    ReadMore: { fontSize: 14, color: '#333' },
});
