
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import Colors from "../../../constant/Colors";
import React from "react";
import colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";


export default function NewBornBaby() {

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <View style={styles.Topheader}>
                    <TouchableOpacity onPress={() => router.push("./../../Baby Healthy Guidelines")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>0-3 Month Baby Healthy Guidelines</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </View>

                <View style={styles.banner}>
                    <Image source={require("./../../../assets/images/1-3 years .png")}
                           style={styles.bannerimage} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>0-3 Month Baby</Text>
                        <Text style={styles.title}>Newborn - 3 month baby</Text>
                        <Text style={styles.details}>Read More..</Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("./SignIn")}>Download</TouchableOpacity>
                    </View>
                    <MaterialIcons name="more-vert" size={24} color="gray" />
                </View>

                <View id={"Supplement"} style={{backgroundColor: '#fffa85',borderRadius: 20,padding: 20,marginTop: 2,alignItems: 'center'}}>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Supplement</Text>
                        <Text style={styles.details}>* Breastfeeding: Exclusively recommended (every 2-3 hours)</Text>
                        <Text style={styles.details}>* Formula Feeding: If not breastfeeding, use iron-fortified formula</Text>
                        <Text style={styles.details}>* Vitamin D: 400 IU daily (if breastfed)</Text>
                        <Text style={styles.details}>* Iron: After 4 months (if breastfed, consult doctor</Text>
                    </View>

                </View>
                <View id={"Medical Guidelines"} style={{flexDirection: 'row',backgroundColor: '#C0DEFF',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Medical Guidelines</Text>
                        <Text style={styles.details}>* Growth Monitoring: Monthly weight, height, and head circumference checkups</Text>
                        <Text style={styles.details}>* Feeding: No solid foods, only breast milk/formula</Text>
                        <Text style={styles.details}>* Umbilical Cord Care: Keep dry until it falls off (around 2 weeks)</Text>
                        <Text style={styles.details}>* Common Health Issues</Text>
                        <Text style={styles.details}>   * Jaundice (yellow skin, normal in newborns, but monitor)</Text>
                        <Text style={styles.details}>   * Colic (frequent crying, stomach discomfort)</Text>
                        <Text style={styles.details}>   * Spitting up (normal, unless excessive)</Text>
                    </View>

                </View>
                <View>
                    <Text style={{color:"red",fontsize:14,alignText :"center",fontWeight:"bold",marginHorizontal:10,paddingHorizontal:10}}> Note: Always consult a doctor before taking any medicine or vaccine</Text>
                </View>
                <View id={"Medicines & Vaccines  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Medicines & Vaccines  </Text>
                        <Text style={styles.details}>* At Birth: BCG (Tuberculosis), Hepatitis B.</Text>
                        <Text style={styles.details}>* 2 months : DTP (Diphtheria, Tetanus, Pertussis), Hib, Polio, Hepatitis B, PCV (Pneumococcal)</Text>

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