
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import Colors from "../../../constant/Colors";
import React from "react";
import colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";


export default function Month8Baby() {

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <View style={styles.Topheader}>
                    <TouchableOpacity onPress={() => router.push("./../GuidanceAndMorale")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>8th Month Baby Guidance</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </View>

                <View style={styles.banner}>
                    <Image source={require("./../../../assets/images/8month baby.png")}
                           style={styles.bannerimage} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>8th Month Baby</Text>
                        <Text style={styles.title}>(Weeks 29-32)</Text>
                        <Text style={styles.details}>Read More..</Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("./SignIn")}>Download</TouchableOpacity>
                    </View>
                    <MaterialIcons name="more-vert" size={24} color="gray" />
                </View>

                <View style={styles.RowContainer}>
                    <Text style={styles.details}>* Feeding: Eating mashed foods, finger foods introduction</Text>
                    <Text style={styles.details}>* Sleep: 10-14 hours, may have separation anxiety</Text>
                    <Text style={styles.details}>* Health: Watch for choking hazards, teething discomfort</Text>
                    <Text style={styles.details}>* Milestones: Pulling up to stand, understanding "no"</Text>
                </View>
                <View id={"Supplement"} style={{flexDirection: 'row',backgroundColor: '#fffa85',borderRadius: 20,padding: 20,marginTop: 2,alignItems: 'center'}}>
                    <Image
                        source={require("./../../../assets/images/P mother Supplement.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Supplement</Text>
                        <Text style={styles.details}>* Folate & Potassium – Supports cell growth and fluid balance</Text>
                        <Text style={styles.details}>* Foods: Sweet potatoes, beans, lentils, oranges</Text>
                        <Text style={styles.details}>* Drinks: Beetroot juice, electrolyte-rich drinks</Text>
                    </View>

                </View>
                <View id={"Exercises"} style={{flexDirection: 'row',backgroundColor: '#C0DEFF',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("./../../../assets/images/yoga.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Exercises</Text>
                        <Text style={styles.details}>* Physical: Butterfly stretches and sitting cat-cow poses</Text>
                        <Text style={styles.details}>* Mental: Spending time in nature for relaxation</Text>
                    </View>

                </View>
                <View>
                    <Text style={{color:"red",fontsize:14,alignText :"center",fontWeight:"bold",marginHorizontal:10,paddingHorizontal:10}}>Note: Always consult a doctor before taking any medicine or vaccine during pregnancy.</Text>
                </View>
                <View id={"Medicines & Vaccines  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>
                    <Image
                        source={require("./../../../assets/images/medicin 1.png")}
                        style={styles.logo} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Medicines & Vaccines  </Text>
                        <Text style={styles.details}>* Folic Acid (400-600 mcg daily) – Essential for brain and spinal cord development</Text>
                        <Text style={styles.details}>* Foods: Leafy greens, beans, oranges, fortified cereals Drinks: Fresh orange juice, plenty of water</Text>

                    </View>
                </View>


            </View>
        </ScrollView>


    )
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
    button:{
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        paddingHorizontal: 25,
        paddingVertical:10,
        borderRadius: 25,
    }
});