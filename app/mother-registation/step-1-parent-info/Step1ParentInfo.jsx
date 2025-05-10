import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
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
    const response = await insertParentInfo(formData, email);
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("./../../OnboardingScreen1")}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create Parent Account</Text>
        </View>
        <ScrollView style={styles.cardSection}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.first_name}
            onChangeText={(text) =>
              setFormData({ ...formData, first_name: text })
            }
          />

          <Text style={styles.label}>Second Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Second Name"
            value={formData.second_name}
            onChangeText={(text) =>
              setFormData({ ...formData, second_name: text })
            }
          />

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={formData.age}
            onChangeText={(numeric) =>
              setFormData({ ...formData, age: numeric })
            }
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />

          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={formData.country}
            onChangeText={(text) => setFormData({ ...formData, country: text })}
          />

          <Text style={styles.label}>District</Text>
          <TextInput
            style={styles.input}
            placeholder="District"
            value={formData.district}
            onChangeText={(text) =>
              setFormData({ ...formData, district: text })
            }
          />

          <Text style={styles.label}>Town</Text>
          <TextInput
            style={styles.input}
            placeholder="Town"
            value={formData.town}
            onChangeText={(text) => setFormData({ ...formData, town: text })}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={formData.date_of_birth}
            onChangeText={(text) =>
              setFormData({ ...formData, date_of_birth: text })
            }
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={formData.contact_number}
            onChangeText={(phone) => setFormData({ ...formData, name: phone })}
          />

          <TouchableOpacity style={styles.Button} onPress={handleNext}>
            <Text style={styles.Buttontext}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
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
