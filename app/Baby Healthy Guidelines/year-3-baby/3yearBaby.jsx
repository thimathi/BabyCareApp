
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import Colors from "../../../constant/Colors";
import React from "react";
import colors from "../../../constant/Colors";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";


export default function Year_3_Baby() {

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <View style={styles.Topheader}>
                    <TouchableOpacity onPress={() => router.push("./../../Baby Healthy Guidelines")}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>3 to 4 Year Baby Healthy Guidelines</Text>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </View>

                <View style={styles.banner}>
                    <Image source={require("./../../../assets/images/3 years.png")}
                           style={styles.bannerimage} />
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>3 to 4 Year Baby</Text>
                        <Text style={styles.details}>Read More..</Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("./SignIn")}>Download</TouchableOpacity>
                    </View>
                    <MaterialIcons name="more-vert" size={24} color="gray" />
                </View>

                <View id={"Supplement"} style={{backgroundColor: '#fffa85',borderRadius: 20,padding: 20,marginTop: 2,alignItems: 'center'}}>
                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Supplement</Text>
                        <Text style={styles.details}>* Calcium & Vitamin D: 700–1,000 mg calcium (milk, yogurt, cheese)</Text>
                        <Text style={styles.details}>* Iron: Continue iron-rich foods (meat, eggs, fortified cereals)</Text>
                        <Text style={styles.details}>* Omega-3: Fish, eggs, nuts for brain function</Text>
                        <Text style={styles.details}>* Multivitamins: If diet lacks variety, consult a doctor</Text>
                    </View>

                </View>
                <View id={"Medical Guidelines"} style={{flexDirection: 'row',backgroundColor: '#C0DEFF',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                    <View style={styles.ColumnContainer}>
                        <Text style={styles.title}>Medical Guidelines</Text>
                        <Text style={styles.details}>* Feeding:-</Text>
                        <Text style={styles.details}>   * Encourage healthy eating habits, avoid processed foods</Text>
                        <Text style={styles.details}>   * Teach proper chewing, avoid eating while running/playing</Text>
                        <Text style={styles.details}>* Sleep: 10-12 hours per day (naps may stop)</Text>
                        <Text style={styles.details}>* Preschool Preparation: Develop social skills, practice counting and recognizing shapes/colors</Text>
                        <Text style={styles.details}>* Physical Activity: Running, jumping, playing with balls, riding tricycles</Text>
                        <Text style={styles.details}>* Speech & Cognitive Skills: Form full sentences, ask questions</Text>
                        <Text style={styles.details}>* Common Health Issues:-</Text>
                        <Text style={styles.details}>   * Increased risk of flu (ensure hygiene habits like hand washing)</Text>
                        <Text style={styles.details}>   * Behavioral changes (tantrums, learning discipline)</Text>
                        <Text style={styles.details}>   * Vision & Hearing Checks (for early detection of issues)</Text>
                    </View>
                    <View>
                        <Text style={{color:"red",fontsize:14,alignText :"center",fontWeight:"bold",marginHorizontal:10,paddingHorizontal:10}}> Note: Always consult a doctor before taking any medicine or vaccine</Text>
                    </View>

                    <View id={"Medicines & Vaccines  "} style={{flexDirection: 'row',backgroundColor: '#ADF2F6',borderRadius: 20,padding: 20,marginTop: 10,alignItems: 'center'}}>

                        <View style={styles.ColumnContainer}>
                            <Text style={styles.title}>* 3-4 years :Annual Flu Vaccine </Text>
                            <Text style={styles.details}>* 4 years: DTP booster, Polio booster, MMR (2nd dose), Chickenpox booster</Text>
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