import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as FileSystem from 'expo-file-system';
import { useLocalSearchParams } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import colors from "./../../../constant/Colors";

const { email, user_id } = useLocalSearchParams();
const babyStages = [
  {
    id: "1",
    month: "1st Month",
    weeks: "1-4 Weeks",
    image: require("./../../../assets/images/1month baby.png"),
    screen: "./../month-1-baby",
  },
  {
    id: "2",
    month: "2nd Month",
    weeks: "5-8 Weeks",
    image: require("./../../../assets/images/2month baby.png"),
    screen: "./../month-2-baby",
  },
  {
    id: "3",
    month: "3rd Month",
    weeks: "9-12 Weeks",
    image: require("./../../../assets/images/3month baby.png"),
    screen: "./../month-3-baby",
  },
  {
    id: "4",
    month: "4th Month",
    weeks: "13-16 Weeks",
    image: require("./../../../assets/images/4month baby.png"),
    screen: "./../month-4-baby",
  },
  {
    id: "5",
    month: "5th Month",
    weeks: "17-20 Weeks",
    image: require("./../../../assets/images/5month baby.png"),
    screen: "./../month-5-baby",
  },
  {
    id: "6",
    month: "6th Month",
    weeks: "21-24 Weeks",
    image: require("./../../../assets/images/6month baby.png"),
    screen: "./../month-6-baby",
  },
  {
    id: "7",
    month: "7th Month",
    weeks: "25-28 Weeks",
    image: require("./../../../assets/images/7month baby.png"),
    screen: "./../month-7-baby",
  },
  {
    id: "8",
    month: "8th Month",
    weeks: "29-32 Weeks",
    image: require("./../../../assets/images/8month baby.png"),
    screen: "./../month-8-baby",
  },
  {
    id: "9",
    month: "9th Month",
    weeks: "33-40 Weeks",
    image: require("./../../../assets/images/9month baby.png"),
    screen: "./../month-9-baby",
  },
];

const generatePDF = async () => {
  const htmlContent = `
    <h1 style="color: #2196F3;">Guidance and Morale</h1>
    <p>This is the PDF content rendered from JSX.</p>
  `;

  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Permission Denied', 'Cannot save PDF without permission.');
      return;
    }
  }

  if (Platform.OS === 'web') {
    // Fallback for web: create a blob and trigger download
    const blob = new Blob([htmlContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'guidance_and_morale.pdf';
    link.click();
    return;
  }

  try {
    const options = {
      html: htmlContent,
      fileName: 'guidance_and_morale.pdf',
      directory: 'Documents',
    };

    const file = await RNHTMLtoPDF.convert(options);
    Alert.alert('Success', `PDF saved to ${file.filePath}`);
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to create PDF');
  }
};

export default function GuidanceAndMorale() {
  const navigation = useNavigation();
  const route = useRoute();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(item.screen)}
    >
      <Image source={item.image} style={styles.babyImage} />
      <Text style={styles.monthText}>{item.month}</Text>
      <Text style={styles.weeksText}>{item.weeks}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guidance and Morale</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>
      <View style={styles.cardSection}>
        <View style={styles.titleSection}>
          <Image
            source={require("./../../../assets/images/mom1.png")}
            style={styles.motherImage}
          />
          <View>
            <Text style={styles.mainTitle}>Let’s Learn Your Cute Baby</Text>
            <Text style={styles.subtitle}>Baby Hand Book</Text>
            <TouchableOpacity onPress={generatePDF} style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={babyStages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAD3FF",
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#FAD3FF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardSection: {
    backgroundColor: "#fff",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#27014B",
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  motherImage: {
    width: 120,
    height: 120,
    marginRight: 10,
    resizeMode: "contain",
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#27014B",
  },
  subtitle: {
    fontSize: 18,
    color: "#6A6A6A",
  },
  downloadButton: {
    backgroundColor: "#D42067",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  downloadText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  gridContainer: {
    paddingHorizontal: 10,
    paddingBottom: 70,
  },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  babyImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  monthText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#27014B",
  },
  weeksText: {
    fontSize: 12,
    color: "#6A6A6A",
  },
});
