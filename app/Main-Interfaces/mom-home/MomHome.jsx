import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { getMotherDetails, getBMIRecords } from "./MomHomeBackEnd.js";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

const categories = [
  {
    id: "2",
    Name: "BMI",
    image: require("./../../../assets/images/Bmi 2.png"),
    screen: "./../../meditation/bmi-calculator",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "3",
    Name: "Baby Schedule",
    image: require("./../../../assets/images/Schedule.png"),
    screen: "./../../scheduler/create-baby-schedule",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "6",
    Name: "Clinic",
    image: require("../../../assets/images/Clinic 2.png"),
    screen: "./../../meditation/clinic/mother-clinic",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "4",
    Name: "Reports",
    image: require("./../../../assets/images/reports.png"),
    screen: "./../../meditation/reports",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "5",
    Name: "Entertainment",
    image: require("../../../assets/images/Entertainment.png"),
    screen: "./../../Entertainment/entertainment-main",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "7",
    Name: "Game",
    image: require("./../../../assets/images/game2.png"),
    screen: "./../../game-box/game-colection",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "8",
    Name: "Emergency",
    image: require("./../../../assets/images/SirenIcon.png"),
    screen: "./../../Emergecy/add-doctor-emg-details",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "9",
    Name: "Contact",
    image: require("./../../../assets/images/ambulance.png"),
    screen: "./../../Emergecy/view-emg-details",
    params: (user_id, email) => ({ user_id, email }),
  },
  {
    id: "10",
    Name: "Shop",
    image: require("./../../../assets/images/Shop.png"),
    screen: "./../../Shop/baby-shop",
    params: (user_id, email) => ({ user_id, email }),
  },
];

const { width } = Dimensions.get('window');
const chartHeight = 150;

export default function MomHome() {
  const email = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCategories = categories.filter((category) =>
    category.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [bmiData, setBmiData] = useState([]);
  const [weightData, setWeightData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [motherName, setMotherName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [user_id, setUserId] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");

  const getGreetingMessage = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    const getName = async () => {
      const response = await getMotherDetails(email.email);
      if (response.success) {
        setMotherName(response.firstName);
        setMotherLastName(response.lastName);
        setUserId(response.user_id);
        setSubscriptionPlan(response.subscription_plan);
      }
    };
    getName();
  }, [email]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBMIRecords(user_id);
      if (result.success && Array.isArray(result.records)) {
        const validRecords = result.records.filter(
          item => item.bmiValue && item.weight
        );
        
        setBmiData(validRecords.map(item => item.bmiValue));
        setWeightData(validRecords.map(item => item.weight));
        setLabels(
          validRecords.map(item => 
            new Date(item.created_at).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })
          )
        );
      }
      setLoading(false);
    };

    if (user_id) fetchData();
  }, [user_id]);

  const renderChart = (data, color, title, unit) => {
    if (data.length === 0) return null;
    
    return (
      <View style={styles.chartWrapper}>
        <Text style={styles.chartTitle}>
          {title} ({unit})
          <Text style={styles.chartValue}>
            {data.length > 0 ? ` Current: ${data[data.length - 1]}${unit}` : ''}
          </Text>
        </Text>
        <View style={{ height: chartHeight, flexDirection: 'row' }}>
          <YAxis
            data={data}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fontSize: 10, fill: 'black' }}
            numberOfTicks={5}
          />
          <LineChart
            style={{ flex: 1, marginLeft: 10 }}
            data={data}
            svg={{ stroke: color, strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
          >
            <Grid />
          </LineChart>
        </View>
        <XAxis
          style={{ marginTop: 5 }}
          data={data}
          formatLabel={(value, index) => labels[index] || ''}
          contentInset={{ left: 30, right: 30 }}
          svg={{ fontSize: 10, fill: 'black' }}
          numberOfTicks={5}
        />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF8C42" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locationLabel}>Health status</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart" size={16} color="#FFBF00" />
            <Text style={styles.locationText}>35 days for delivery process</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../Main-Interfaces/baby-home",
                params: { user_id, email },
              })
            }
          >
            <Image
              source={require("../../../assets/images/success baby.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          <View style={styles.profileBadge}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "./../../Main-Interfaces/profile",
                  params: { user_id, email },
                })
              }
            >
              <Image
                source={require("../../../assets/images/mother.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <Text style={styles.planText}>{subscriptionPlan}</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../Main-Interfaces/notifications/mom-notification",
                params: { user_id, email },
              })
            }
          >
            <Ionicons
              name="notifications-outline"
              size={20}
              color="#FFBF00"
              style={styles.iconButton}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={17}
            color="#999"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search your field"
            style={{ flex: 1 }}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery !== "" && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close" size={17} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        {/* Upgrade and Review Panels */}
        <View style={styles.panelRow}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../Main-Interfaces/packages",
                params: { user_id, email },
              })
            }
          >
            <View style={styles.upgradePanel}>
              <Image
                source={require("./../../../assets/images/Crown.gif")}
                style={styles.PanelImage}
              />
              <View style={styles.panelTextContainer}>
                <Text style={styles.PanelTagTag}>Premium</Text>
                <Text style={styles.PanelName}>Upgrade your plan</Text>
                <Text style={styles.ReadMore}>View Packages</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../Main-Interfaces/app-review",
                params: { user_id, email },
              })
            }
          >
            <View style={styles.reviewPanel}>
              <Image
                source={require("./../../../assets/images/Review.gif")}
                style={styles.PanelImage}
              />
              <View style={styles.panelTextContainer}>
                <Text style={styles.PanelName}>Review Us</Text>
                <Text style={styles.ReadMore}>Give your feedback</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>{getGreetingMessage()}, Mom!</Text>
            <Text style={styles.bannerSubtitle}>
              Welcome {motherName} {motherLastName}
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/mom1.png")}
            style={styles.bannerImage}
          />
        </View>

        {/* Health Charts Section */}
        <View style={styles.chartsSection}>
          <Text style={styles.sectionHeaderText}>Health Progress</Text>
          
          {bmiData.length > 0 ? (
            <>
              {renderChart(bmiData, '#4CAF50', 'BMI', '')}
              {renderChart(weightData, '#FF5722', 'Weight', 'kg')}
            </>
          ) : (
            <Text style={styles.noDataText}>No health data available</Text>
          )}
        </View>

        {/* Services */}
        <View style={styles.panelContent}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Services</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryBox}
                  onPress={() =>
                    router.push({
                      pathname: item.screen,
                      params: item.params(user_id, email.email),
                    })
                  }
                >
                  <Image
                    source={item.image}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={styles.categoryText}>{item.Name}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>No services found</Text>
              </View>
            )}
          </ScrollView>

          {/* Guidance Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Guidance</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../GuidanceAndMorale/guidance-main-panel",
                params: { user_id, email },
              })
            }
          >
            <View style={styles.PanelItem}>
              <Image
                source={require("./../../../assets/images/8month baby.png")}
                style={styles.PanelImage}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.PanelTagTag}>Guidance</Text>
                <Text style={styles.PanelName}>Guidance and morale</Text>
                <Text style={styles.ReadMore}>Read more..</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ... [other guidance panels] ... */}

          {/* Meditation Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Meditation</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./../../meditation/reports",
                params: { user_id, email },
              })
            }
          >
            <View style={styles.PanelItem}>
              <Image
                source={require("./../../../assets/images/Bmi 2.png")}
                style={styles.PanelImage}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.PanelTagTag}>Meditation</Text>
                <Text style={styles.PanelName}>
                  BMI Health in Pregnancy Period
                </Text>
                <Text style={styles.ReadMore}>Read more..</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ... [other meditation panels] ... */}
        </View>
      </ScrollView>

      {/* Emergency Call Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => Linking.openURL("tel:1990")}
      >
        <Ionicons name="call" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE8FF",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "#222222",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  locationLabel: { color: "#aaa", fontSize: 12 },
  locationText: { color: "#fff", fontSize: 14, fontWeight: "600" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  iconButton: { marginLeft: 16 },
  profileBadge: {
    borderRadius: 50,
    backgroundColor: "#FFBF00",
    padding: 1,
    paddingRight: 3,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  planText: { color: "#000", fontWeight: "bold", paddingRight: 5 },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFBF00",
  },
  searchContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  panelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  upgradePanel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    flex: 1,
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reviewPanel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    flex: 1,
    marginLeft: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  panelTextContainer: { flex: 1, marginLeft: 10 },
  PanelImage: { width: 50, height: 50, borderRadius: 10 },
  banner: {
    backgroundColor: "#FBC02D",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerText: { flex: 1 },
  bannerTitle: { fontSize: 14, fontWeight: "bold", color: "#fff" },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  bannerImage: { width: 100, height: 100 },
  chartsSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  chartWrapper: {
    marginBottom: 25,
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  chartValue: {
    fontSize: 12,
    color: '#888',
    marginLeft: 10,
  },
  noDataText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 20,
  },
  panelContent: {
    backgroundColor: "#FFEFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: "bold",
    color: '#333',
  },
  categoriesRow: { 
    marginBottom: 15,
    paddingVertical: 5,
  },
  categoryBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    width: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryText: { 
    fontSize: 12, 
    marginTop: 6, 
    textAlign: "center",
    color: '#555',
  },
  noResultsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  noResultsText: {
    fontSize: 14,
    color: "#666",
  },
  PanelItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  PanelTagTag: { 
    fontSize: 12, 
    color: "#FFBF00", 
    fontWeight: "bold" 
  },
  PanelName: { 
    fontSize: 14, 
    fontWeight: "600", 
    marginVertical: 4,
    color: '#333',
  },
  ReadMore: { 
    fontSize: 12, 
    color: "#666",
    fontStyle: 'italic',
  },
  floatingButton: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#FF8C42",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});