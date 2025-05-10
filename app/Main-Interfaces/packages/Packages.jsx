import React from "react";
import { View,Text,SafeAreaView,  StyleSheet,TouchableOpacity, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import { useRouter } from "expo-router";

export default function Packages() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../Main-Interfaces/mom-home")}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Premium Plans</Text>
            </View>

            <ScrollView style={styles.body}>
                <Text style={styles.title}>Upgrade to Premium</Text>
                <Text style={styles.subtitle}>
                    Compare plans and choose what suits your parenting journey.
                </Text>

                <View style={styles.planContainer}>
                    {/* Free Plan */}
                    <View style={styles.planCard}>
                        <Text style={styles.planName}>Free</Text>
                        <Text style={styles.price}>LKR 0</Text>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle-outline" size={18} color="gray" />
                            <Text style={styles.featureText}>Basic health reports</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="close-circle-outline" size={18} color="gray" />
                            <Text style={styles.featureText}>Virtual Mother Access</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="close-circle-outline" size={18} color="gray" />
                            <Text style={styles.featureText}>Premium Games & Learning</Text>
                        </View>
                        <TouchableOpacity style={styles.disabledBtn}>
                            <Text style={styles.disabledBtnText}>Your Plan</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Monthly Premium Plan */}
                    <View style={[styles.planCard, styles.highlightCard]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>POPULAR</Text>
                        </View>
                        <Text style={styles.planName}>Premium</Text>
                        <Text style={styles.price}>LKR 990/month</Text>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>Enhanced pregnancy care</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>Virtual Mother & Multi-child</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>Premium Games & Learning</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.subscribeBtn}
                            onPress={() => alert("Subscribed to Premium Monthly")}
                        >
                            <Text style={styles.subscribeBtnText}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 3-Month Plan */}
                    <View style={styles.planCard}>
                        <Text style={styles.planName}>Premium 3-Month</Text>
                        <Text style={styles.price}>LKR 2590</Text>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>All Premium Benefits</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>Save LKR 380</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.subscribeBtn}
                            onPress={() => alert("Subscribed to 3-Month Premium")}
                        >
                            <Text style={styles.subscribeBtnText}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Annual Plan */}
                    <View style={[styles.planCard, styles.highlightCard]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>BEST VALUE</Text>
                        </View>
                        <Text style={styles.planName}>Premium Annual</Text>
                        <Text style={styles.price}>LKR 8990</Text>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>All Premium Benefits</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="checkmark-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.featureText}>Save LKR 2,890</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.subscribeBtn}
                            onPress={() => alert("Subscribed to Annual Premium")}
                        >
                            <Text style={styles.subscribeBtnText}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
                {/* Footer Note */}
                <Text style={styles.footerNote}>
                    All plans are auto-renewed monthly/yearly. Cancel anytime.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.PRIMARY },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    body: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6,
        textAlign: "center",
        color: Colors.PRIMARY,
    },
    subtitle: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginBottom: 20,
    },
    planContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 10,
    },
    planCard: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        elevation: 3,
    },
    highlightCard: {
        backgroundColor: "#fffbea",
        borderColor: Colors.PRIMARY,
        borderWidth: 1,
    },
    badge: {
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        position: "absolute",
        top: 10,
        right: 10,
    },
    badgeText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    planName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 12,
        color: "#333",
    },
    feature: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
    },
    featureText: {
        fontSize: 13,
        marginLeft: 6,
        color: "#444",
    },
    disabledBtn: {
        marginTop: 12,
        backgroundColor: "#ccc",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    disabledBtnText: {
        color: "#fff",
        fontWeight: "bold",
    },
    subscribeBtn: {
        marginTop: 12,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    subscribeBtnText: {
        color: "#fff",
        fontWeight: "bold",
    },
    footerNote: {
        marginTop: 30,
        fontSize: 13,
        textAlign: "center",
        color: "#777",
    },
});