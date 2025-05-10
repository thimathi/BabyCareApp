import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { insertAppReview } from "./AppReviewBackEnd";

export default function AppReview() {
    const router = useRouter();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const { email, user_id } = useLocalSearchParams();
    console.log("Params from route:", email, user_id);
    const [survey, setSurvey] = useState({
        serviceQuality: false,
        easyToUse: false,
        usefulFeatures: false,
    });

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = async () => {
        const response = await insertAppReview(rating, comment, survey, email, user_id);
      
        if (response.success) {
          Alert.alert("Thank You!", "Your feedback has been submitted.");
          setRating(0);
          setComment("");
          setSurvey({
            serviceQuality: false,
            easyToUse: false,
            usefulFeatures: false,
          });
        } else {
          Alert.alert("Submission Failed", "Please try again later.");
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Review & Feedback</Text>
            </View>

            <ScrollView style={styles.content}>
                {/* Rating */}
                <View style={styles.rating}>
                <Text style={styles.sectionTitle}>Rate Our App</Text>
                <View style={styles.starRow}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <TouchableOpacity key={value} onPress={() => handleRating(value)}>
                            <Ionicons
                                name={value <= rating ? "star" : "star-outline"}
                                size={42}
                                color={'#FFC107'}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                </View>

                {/* Comment */} 
                <Text style={styles.sectionTitle}>Write Your Comment</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type your feedback here..."
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={5}
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                />

                {/* Quality Survey */}
                <Text style={styles.sectionTitle}>Quick Survey</Text>
                {[
                    { key: "serviceQuality", label: "Good Service Quality" },
                    { key: "easyToUse", label: "Easy to Use" },
                    { key: "usefulFeatures", label: "Useful Features" },
                ].map((item) => (
                    <TouchableOpacity
                        key={item.key}
                        style={styles.checkboxContainer}
                        onPress={() =>
                            setSurvey({ ...survey, [item.key]: !survey[item.key] })
                        }
                    >
                        <Ionicons
                            name={survey[item.key] ? "checkbox" : "square-outline"}
                            size={24}
                            color={Colors.PRIMARY}
                        />
                        <Text style={styles.checkboxLabel}>{item.label}</Text>
                    </TouchableOpacity>
                ))}

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit Feedback</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: Colors.PRIMARY,
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    content: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.PRIMARY,
        marginTop: 15,
        marginBottom: 8,
    },
    rating:{
        flex: 1,
        alignItems:'center'
    },
    starRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: "#333",
        textAlignVertical: "top",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: "#333",
    },
    submitButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 25,
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
