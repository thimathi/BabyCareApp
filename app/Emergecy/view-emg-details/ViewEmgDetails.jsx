import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getEmergencyDetails } from "../view-emg-details/ViewEmgDetailsBackEnd";


// Helper to return avatar image based on contact type
const getAvatarByType = (type) => {
  switch (type) {
    case "Doctor":
      return require("../../../assets/images/Doctor Male Skin Type 3.png");
    case "Mid Wife":
      return require("../../../assets/images/Nurse.png");
    case "Mother":
      return require("../../../assets/images/father.png");
    case "Hospital":
      return require("../../../assets/images/SirenIcon.png");
    default:
      return require("../../../assets/images/father.png");
  }
};

export default function ViewEmgDetails() {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const router = useRouter();
  const { email, user_id } = useLocalSearchParams();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);

  const contactTypes = ["Doctor", "Mid Wife", "Family", "Hospital"];

  const handlePress = (numbers, video = false) => {
    const filtered = numbers.filter((n) => n); // Remove null/undefined
    if (filtered.length === 1) {
      openLink(filtered[0], video);
    } else if (filtered.length > 1) {
      setSelectedNumbers(filtered);
      setIsVideoCall(video);
      setShowModal(true);
    }
  };

  const openLink = (number, video = false) => {
    const url = video ? `facetime:${number}` : `tel:${number}`;
    Linking.openURL(url).catch((err) => console.error("Error:", err));
  };

  <Modal visible={showModal} transparent animationType="slide">
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          margin: 20,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Select Number
        </Text>
        {selectedNumbers.map((num, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              setShowModal(false);
              openLink(num, isVideoCall);
            }}
          >
            <Text style={{ fontSize: 16, padding: 10 }}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Text style={{ textAlign: "right", color: "red", marginTop: 10 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>;

  useEffect(() => {
    const loadData = async () => {
      const response = await getEmergencyDetails(email);
      if (response.success) {
        setEmergencyContacts(response.data);
      }
    };
    loadData();
  }, []);

  const groupContactsByType = (type) =>
    emergencyContacts.filter((contact) => contact.type === type);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "../../Main-Interfaces/mom-home",
              params: {
                user_id: user_id,
                email: email,
              },
            })
          }
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emergency</Text>
        <MaterialIcons name="more-vert" size={24} color="white" />
      </View>

      <ScrollView style={styles.container}>
        {contactTypes.map((type) => {
          const grouped = groupContactsByType(type);
          if (grouped.length === 0) return null;

          return (
            <View key={type}>
              <Text style={styles.viewTitle}>{type}</Text>
              {grouped.map((item, index) => (
                <View key={`${type}-${index}`} style={styles.contactCard}>
                  <Image source={getAvatarByType(type)} style={styles.avatar} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    {item.speciality && (
                      <Text style={styles.contactSub}>{item.speciality}</Text>
                    )}
                    {item.address && (
                      <Text style={styles.contactSub}>{item.address}</Text>
                    )}
                    {item.contact_number1 && (
                      <Text style={styles.contactPhone}>
                        {item.contact_number1}
                      </Text>
                    )}
                    {item.contact_number2 && (
                      <Text style={styles.contactPhone}>
                        {item.contact_number2}
                      </Text>
                    )}
                    {item.contact_number3 && (
                      <Text style={styles.contactPhone}>
                        {item.contact_number3}
                      </Text>
                    )}
                  </View>
                  <View style={styles.icons}>
                    <TouchableOpacity
                      onPress={() =>
                        handlePress(
                          [
                            item.contact_number1,
                            item.contact_number2,
                            item.contact_number3,
                          ],
                          true
                        )
                      }
                    >
                      <Feather name="video" size={22} color="#0a9396" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginTop: 10 }}
                      onPress={() =>
                        handlePress(
                          [
                            item.contact_number1,
                            item.contact_number2,
                            item.contact_number3,
                          ],
                          false
                        )
                      }
                    >
                      <Feather name="phone-call" size={22} color="#0a9396" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6ff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#e74c3c",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  viewTitle: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
    color: "#222",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  hospitalCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
  },
  hospitalTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#333",
  },
  hospitalInfo: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  contactCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    alignItems: "flex-start",
    marginBottom: 16,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    marginTop: 6,
  },
  contactName: {
    fontWeight: "700",
    fontSize: 15,
    color: "#222",
  },
  contactSub: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2,
  },
  contactTime: {
    fontSize: 12,
    color: "#888",
  },
  contactPhone: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
