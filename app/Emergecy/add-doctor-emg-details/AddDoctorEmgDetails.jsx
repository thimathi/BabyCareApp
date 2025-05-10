import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { insertEmergencyDetails } from "../add-doctor-emg-details/AddEmgDetailsBackEnd";

export default function AddDoctorEmgDetails() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState();
  const { email, user_id } = useLocalSearchParams();
  console.log("Params from route:", email, user_id);

  const [formData, setFormData] = useState({
    name: "",
    speciality: "",
    address: "",
    contact_number1: "",
    contact_number2: "",
    contact_number3: "",
  });

  const handleNext = async () => {
    const type = activeTab;
    console.log("Inserting:", { email, user_id, type, formData });
    const response = await insertEmergencyDetails(
      formData,
      email,
      user_id,
      type
    );
    if (response.success) {
      const userId = response.user_id;
      const email = response.email;
      router.push({
        pathname: "./../../Main-Interfaces/mom-home",
        params: { user_id: userId, email: email },
      });
    } else {
      onsole.log("Error saving data. Please try again.");
    }
  };

  const renderTab = (tabName) => (
    <TouchableOpacity
      style={[styles.tab, activeTab === tabName && styles.activeTab]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text
        style={[styles.tabText, activeTab === tabName && styles.activeTabText]}
      >
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  const getBackgroundColor = () => {
    switch (activeTab) {
      case "Doctor":
        return "#E8F4F8"; // Light Blue
      case "Mid Wife":
        return "#F8E5F0"; // Light Pink
      case "Hospital":
        return "#F4F8E0"; // Light Green
      case "Family":
        return "#FBECD8"; // Soft Peach
      default:
        return "#FFFFFF"; // Default background
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            router.push("./../../Main-Interfaces/mom-home/MomHome")
          }
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Emergency Details</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>

      <View style={styles.tabsContainer}>
        {renderTab("Doctor")}
        {renderTab("Mid Wife")}
        {renderTab("Hospital")}
        {renderTab("Family")}
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of contact"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />

          <Text style={styles.label}>Speciality</Text>
          <TextInput
            style={styles.input}
            placeholder="Explain the situation briefly"
            value={formData.speciality}
            onChangeText={(text) =>
              setFormData({ ...formData, speciality: text })
            }
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Where is the location"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />

          <Text style={styles.label}>Contact Numbers</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact Number 1"
            value={formData.contact_number1}
            onChangeText={(text) =>
              setFormData({ ...formData, contact_number1: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Contact Number 2"
            value={formData.contact_number2}
            onChangeText={(text) =>
              setFormData({ ...formData, contact_number2: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Contact Number 3"
            value={formData.contact_number3}
            onChangeText={(text) =>
              setFormData({ ...formData, contact_number3: text })
            }
          />

          <TouchableOpacity style={styles.Button} onPress={handleNext}>
            <Text style={styles.Buttontext}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BLUE1,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#F8EDF9",
  },
  tab: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  tabText: {
    color: "#666",
    fontWeight: "700",
  },
  activeTab: {
    borderBottomColor: "#5B4FFF",
    borderBottomWidth: 3,
  },
  activeTabText: {
    color: "#5B4FFF",
  },
});
