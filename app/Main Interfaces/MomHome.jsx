import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { LineChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import { Circle, G, Line } from "react-native-svg";
import * as scale from "d3-scale";
import Colors from "../../constant/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";

const IconCard = [
    { id: "1", Name: "Meditation", image: require("../../assets/images/P mother 2.png"), screen: "" },
    { id: "2", Name: "BMI", image: require("../../assets/images/Bmi 2.png"), screen: "./BMICalculatorScreen" },
    { id: "3", Name: "Baby Schedule", image: require("../../assets/images/Schedule.png"), screen: "" },
    { id: "4", Name: "Clinic", image: require("../../assets/images/Clinic 2.png"), screen: "" },
    { id: "5", Name: "Vaccination", image: require("../../assets/images/Mother Vaccination.png"), screen: "" },
    { id: "6", Name: "Entertainment", image: require("../../assets/images/Entertainment.png"), screen: "" },
    { id: "7", Name: "Game", image: require("../../assets/images/game2.png"), screen: "" },
    { id: "8", Name: "Emergency", image: require("../../assets/images/SirenIcon.png"), screen: "" },
];

export default function MomHome() {
    const route = useRoute();
    const navigation = useNavigation();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weightData = [120, 140, 135, 160, 170, 180, 150, 155, 165, 160, 170, 165];
    const heightData = [60, 65, 63, 68, 72, 74, 71, 73, 76, 75, 78, 80];
    const sugarData = [90, 95, 92, 100, 105, 110, 95, 96, 102, 100, 98, 97];
    const pressureData = [80, 85, 84, 90, 88, 92, 91, 89, 93, 95, 94, 96];

    const maxY = Math.max(...weightData, ...heightData, ...sugarData, ...pressureData) + 20;
    const chartHeight = 200;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => item.screen && navigation.navigate(item.screen)}>
            <Image source={item.image} style={styles.babyImage} />
            <Text style={styles.monthText}>{item.Name}</Text>
        </TouchableOpacity>
    );
    const adBanners = [
        require('./../../assets/images/Baby Kit.jpg'),
        require('./../../assets/images/hat.jpg'),
        require('./../../assets/images/carf.jpg'),

    ];

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <Image source={require('./../../assets/images/mom1.png')} style={styles.babyImage} />
                <View style={styles.title}>
                    <Text style={styles.title}>Ms. Jenny</Text>
                    <Text style={styles.details}>Welcome Mom</Text>
                    <Text style={styles.details}>Here is all the info you need…</Text>
                </View>
                <Ionicons name="settings-outline" size={24} style={styles.icon} />
            </View>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', height: chartHeight + 20 }}>
                    <YAxis
                        data={weightData}
                        contentInset={{ top: 20, bottom: 20 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                        numberOfTicks={6}
                        style={{ marginRight: 10 }}
                    />
                    <View style={{ flex: 1 }}>
                        <LineChart
                            style={{ height: chartHeight }}
                            data={weightData}
                            svg={{ stroke: 'orange', strokeWidth: 2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        />
                        <LineChart
                            style={StyleSheet.absoluteFill}
                            data={heightData}
                            svg={{ stroke: 'blue', strokeWidth: 2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        />
                        <LineChart
                            style={StyleSheet.absoluteFill}
                            data={sugarData}
                            svg={{ stroke: 'purple', strokeWidth: 2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        />
                        <LineChart
                            style={StyleSheet.absoluteFill}
                            data={pressureData}
                            svg={{ stroke: 'red', strokeWidth: 2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid />
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: 20 }}
                            data={months}
                            formatLabel={(value, index) => months[index]}
                            contentInset={{ left: 30, right: 30 }}
                            svg={{ fontSize: 10, fill: 'grey' }}
                            scale={scale.scaleBand}
                        />
                    </View>
                </View>

                <View style={styles.PanelContainer}>
                    <Text style={{ color: 'orange', paddingLeft: 10 }}>● Weight</Text>
                    <Text style={{ color: 'blue', paddingLeft: 10 }}>● Height</Text>
                    <Text style={{ color: 'purple', paddingLeft: 10 }}>● Sugar</Text>
                    <Text style={{ color: 'red', paddingLeft: 10 }}>● Pressure</Text>
                </View>

                {/* Your cards and navigation buttons below */}
                {/* (keep the rest of your FlatList and TouchableOpacity buttons here as in your original code) */}

                <FlatList
                    data={IconCard}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.gridContainer}
                />
                <View style={styles.Container}>
                    <View style={styles.PanelContainer}>
                        <TouchableOpacity onPress={() => router.push("./MomHome.jsx")}>
                            <MaterialIcons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Visit Baby Shops</Text>
                    </View>
                    <View style={styles.ColumnContainer}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.bannerScroll}>
                            {adBanners.map((img, index) => (
                                <Image
                                    key={index}
                                    source={img}
                                    style={styles.bannerImage}
                                    resizeMode="cover"/>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.SECONDARY,
    },
    logo: {
        width: 80,
        height: 80,
    },
    babyImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 19,
        wordWrap: "break-word",
        fontWeight: "500",
        paddingLeft: 10,
    },
    details: {
        fontSize: 15,
        paddingLeft: 10,
    },
    gridContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    card: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    PanelContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        margin: 5,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    ColumnContainer: {
        flexDirection: "column",
        paddingLeft: 20,
    },
    bannerScroll: {
        paddingVertical: 10,
            paddingHorizontal: 10,
    },
    bannerImage: {
        width: 250,
            height: 150,
            marginRight: 12,
            borderRadius: 12,
    },
});
