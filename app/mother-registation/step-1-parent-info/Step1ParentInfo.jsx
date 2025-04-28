import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../../../constant/Colors";
import { router, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constant/Colors";
import { insertParentInfo } from "../step-1-parent-info/Step1BackEnd";
import { useLocalSearchParams } from "expo-router";

export default function Step1ParentInfo({ navigation }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    age: "",
    address: "",
    country: "",
    district: "",
    town: "",
    date_of_birth: "",
    contact_number: "",
  });
  
  const { email } = useLocalSearchParams();

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = async () => {
    const response = await insertParentInfo(formData,email);
    if (response.success) {
      const userId = response.user_id;
      router.push({
        pathname: "./../../mother-registation/step-2-pregnancy-info",
        params: { user_id: userId },
      });
    } else {
      console.log("Error saving data. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("./../../OnboardingScreen1.jsx")}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Parent Account</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.first_name}
            onChangeText={(text) => handleChange("first_name", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.second_name}
            onChangeText={(text) => handleChange("second_name", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={formData.date_of_birth}
            onChangeText={(text) => handleChange("date_of_birth", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={formData.contact_number}
            onChangeText={(text) => handleChange("contact_number", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={formData.age}
            onChangeText={(numeric) => handleChange("age", numeric)}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(text) => handleChange("address", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Country"
            value={formData.country}
            onChangeText={(text) => handleChange("country", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="District"
            value={formData.district}
            onChangeText={(text) => handleChange("district", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Town"
            value={formData.town}
            onChangeText={(text) => handleChange("town", text)}
          />

          <TouchableOpacity
            style={styles.Button}
            onPress={handleNext} 
          >
            <Text style={styles.Buttontext}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BLUE1,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B0A4C0",
    backgroundColor: "white",
    marginBottom: 15,
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
  },
  Buttontext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
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

  //input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 }
});
