import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../../../constant/Colors";
import colors from "../../../constant/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform, PermissionsAndroid, Alert } from "react-native";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import * as FileSystem from "expo-file-system";

export default function Month5Baby() {
  const route = useRoute();
  const { email, user_id } = useLocalSearchParams();
    const generatePDF = async () => {
      const htmlContent = `
          <h1 style="color: #2196F3;">Guidance and Morale</h1>
          <p>This is the PDF content rendered from JSX.</p>
        `;
  
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Permission Denied", "Cannot save PDF without permission.");
          return;
        }
      }
  
      if (Platform.OS === "web") {
        // Fallback for web: create a blob and trigger download
        const blob = new Blob([htmlContent], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "guidance_and_morale.pdf";
        link.click();
        return;
      }
  
      try {
        const options = {
          html: htmlContent,
          fileName: "guidance_and_morale.pdf",
          directory: "Documents",
        };
  
        const file = await RNHTMLtoPDF.convert(options);
        Alert.alert("Success", `PDF saved to ${file.filePath}`);
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Failed to create PDF");
      }
    };
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.Topheader}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../guidance-main-panel",
                params: {
                  user_id: user_id,
                  email: email,
                },
              })
            }
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>5th Month Baby Guidance</Text>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </View>

        <View style={styles.banner}>
          <Image
            source={require("./../../../assets/images/5month baby.png")}
            style={styles.bannerimage}
          />
          <View style={styles.ColumnContainer}>
            <Text style={styles.title}>5th Month Baby</Text>
            <Text style={styles.title}>(Weeks 17-20)</Text>
            <Text style={styles.details}>Read More..</Text>
 
            <TouchableOpacity
              onPress={generatePDF}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
          <MaterialIcons name="more-vert" size={24} color="gray" />
        </View>

        <View style={styles.RowContainer}>
          <Text style={styles.details}>
            * Feeding: Still breast milk/formula, starting to explore textures
          </Text>
          <Text style={styles.details}>
            * Sleep: 10-15 hours, more active during the day
          </Text>
          <Text style={styles.details}>
            * Health: Teething may begin, drooling increases
          </Text>
          <Text style={styles.details}>
            * Milestones: Sitting with support, recognizing faces
          </Text>
        </View>
        <View
          id={"Supplement"}
          style={{
            flexDirection: "row",
            backgroundColor: "#fffa85",
            borderRadius: 20,
            padding: 20,
            marginTop: 2,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../../assets/images/P mother Supplement.png")}
            style={styles.logo}
          />
          <View style={styles.ColumnContainer}>
            <Text style={styles.title}>Supplement</Text>
            <Text style={styles.details}>
              * Protein & Fiber – Supports muscle growth and digestion
            </Text>
            <Text style={styles.details}>
              * Foods: Chicken, tofu, quinoa, whole grains
            </Text>
            <Text style={styles.details}>
              * Drinks: Protein smoothies, fresh fruit juice
            </Text>
          </View>
        </View>
        <View
          id={"Exercises"}
          style={{
            flexDirection: "row",
            backgroundColor: "#C0DEFF",
            borderRadius: 20,
            padding: 20,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../../assets/images/yoga.png")}
            style={styles.logo}
          />
          <View style={styles.ColumnContainer}>
            <Text style={styles.title}>Exercises</Text>
            <Text style={styles.details}>
              * Physical: Seated spinal twists and side stretches
            </Text>
            <Text style={styles.details}>
              * Mental: Visualization exercises for positive childbirth
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "red",
              fontsize: 14,
              alignText: "center",
              fontWeight: "bold",
              marginHorizontal: 10,
              paddingHorizontal: 10,
            }}
          >
            Note: Always consult a doctor before taking any medicine or vaccine
            during pregnancy.
          </Text>
        </View>
        <View
          id={"Medicines & Vaccines  "}
          style={{
            flexDirection: "row",
            backgroundColor: "#ADF2F6",
            borderRadius: 20,
            padding: 20,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../../assets/images/medicin 1.png")}
            style={styles.logo}
          />
          <View style={styles.ColumnContainer}>
            <Text style={styles.title}>Medicines & Vaccines </Text>
            <Text style={styles.details}>
              * Iron & Vitamin B12 – Prevents weakness and fatigue.
            </Text>
            <Text style={styles.details}>
              * Tdap Vaccine (Tetanus, Diphtheria, and Pertussis) – Given
              anytime after 16 weeks to protect the baby from whooping cough.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  Topheader: {
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
  downloadButton: {
    backgroundColor: "#D42067",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  bannerimage: {
    width: 120,
    height: 120,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 22,
    wordWrap: "break-word",
    fontWeight: "500",
    marginBottom: 5,
    paddingLeft: 10,
  },
  details: {
    fontSize: 15,
    paddingLeft: 10,
    marginRight: 30,
    wordWrap: "contain",
  },

  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  banner: {
    width: "100%",
    height: 170,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#c30047",
    marginTop: 10,
  },
  RowContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  ColumnContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 20,
  },
  PanelContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
});
