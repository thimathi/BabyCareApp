
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import Colors from "../../../constant/Colors";
import React from "react";
import colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";


export default function _1yearBaby() {

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <View style={styles.Topheader}>
                    <TouchableOpacity onPress={() => router.push("./../BabyHealthGuidelines")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>1 to 2 Year Baby Healthy Guidelines</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </View>

                <View style={styles.banner}>
                    <Image source={require("./../../../assets/images/1 Year.png")}
                           style={styles.bannerimage} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>1 to 2 Year Baby</Text>
                        <Text style={styles.details}>(Toddler Stage Begins)</Text>
                        <Text style={styles.details}>Read More..</Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("./SignIn")}>Download</TouchableOpacity>
                    </View>
                    <MaterialIcons name="more-vert" size={24} color="gray" />
                </View>

                <View id={"Supplement"} style={{backgroundColor: '#fffa85',borderRadius: 20,padding: 20,marginTop: 2,alignItems: 'center'}}>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Supplement</Text>
                        <Text style={styles.details}>* Breastfeeding: Can continue but not necessary if baby eats well</Text>
                        <Text style={styles.details}>* Whole Milk: Start giving full-fat cow’s milk (2-3 cups/day)</Text>
                        <Text style={styles.details}>* Iron: Ensure iron-rich foods (meat, eggs, spinach, lentils)</Text>
                        <Text style={styles.details}>* Calcium & Vitamin D: 700 mg calcium daily (dairy, cheese, yogurt), Vitamin D for bone growth</Text>
                        <Text style={styles.details}>* Omega-3 (DHA): Found in fish, eggs, fortified milk</Text>
                        <Text style={styles.details}>* Multivitamins: If diet lacks essential nutrients, consult a doctor</Text>
                    </View>

                </View>
                <View id={"Medical Guidelines"} style={{flexDirection: 'row',backgroundColor: '#C0DEFF',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Medical Guidelines</Text>
                        <Text style={styles.details}>* Feeding:-</Text>
                        <Text style={styles.details}>   * Eat with family, introduce more variety (soft rice, pasta, fruits, veggies, lean protein)</Text>
                        <Text style={styles.details}>   * Avoid junk food, excessive sugar, and salt</Text>
                        <Text style={styles.details}>   * Avoid choking hazards (whole nuts, popcorn, grapes, hard candies)</Text>
                        <Text style={styles.details}>* Sleep: 11-14 hours per day (1-2 naps)</Text>
                        <Text style={styles.details}>* Physical Activity: Encourage walking, climbing, and playing</Text>
                        <Text style={styles.details}>* Speech & Social Skills: Start saying simple words, respond to names</Text>
                        <Text style={styles.details}>* Common Health Issues:-</Text>
                        <Text style={styles.details}>   * Teething discomfort (canines and molars start appearing)</Text>
                        <Text style={styles.details}>   * Fever & Common Cold (due to exposure to germs)</Text>
                        <Text style={styles.details}>   * Diaper Rash (if still using diapers, keep area dry)</Text>
                    </View>
                    <View>
                        <Text style={{color:"red",fontsize:14,alignText :"center",fontWeight:"bold",marginHorizontal:10,paddingHorizontal:10}}> Note: Always consult a doctor before taking any medicine or vaccine</Text>
                    </View>

                    <View id={"Medicines & Vaccines  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                        <View style={styles.ColumnContainer}>
                            <Text style={styles.title}>Medicines & Vaccines  </Text>
                            <Text style={styles.details}>* 12-15 months :MMR (Measles, Mumps, Rubella), Chickenpox, Hepatitis A (1st dose), PCV booster</Text>
                            <Text style={styles.details}>* 15-18 months:  DTP booster, Hib booster</Text>
                        </View>
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