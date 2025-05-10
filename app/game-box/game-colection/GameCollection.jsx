import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function PaymentScreen() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const amount = 15;
  const { email, user_id } = useLocalSearchParams();
  const adBanners = [
    require("../../../assets/images/Baby Kit.jpg"),
    require("../../../assets/images/hat.jpg"),
    require("../../../assets/images/carf.jpg"),
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}

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
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Game Box</Text>
        </View>

        {/* Baby Activities*/}
        <View style={styles.cardSection}>
          <View
            style={{
              backgroundColor: "#0075E2",
              borderRadius: 16,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              margin: 10,
            }}
          >
            <View style={styles.bannerText}>
              <Text style={styles.bannerSubtitle}>Game Box</Text>
              <Text style={styles.bannerTitle}>Welcome to Kid Game Box</Text>
            </View>
            <Image
              source={require("../../../assets/images/game2.png")} // replace with your image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          </View>

          <Text style={styles.sectionTitle}>Baby Activities</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            <View style={styles.columnContainer}>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.banner}>
              <View style={styles.bannerText}>
                <Image
                  source={require("../../../assets/images/bunny 1.png")} // replace with your image
                  style={styles.bannerImage}
                />
                <Text style={styles.bannerTitle}>Welcome Game world</Text>
                <Text style={styles.bannerSubtitle}>Game Box</Text>
                <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Play
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/*Toddler Products*/}
          <Text style={styles.sectionTitle}>Toddler Products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            <View style={styles.columnContainer}>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.banner}>
              <View style={styles.bannerText}>
                <Image
                  source={require("../../../assets/images/bunny 1.png")} // replace with your image
                  style={styles.bannerImage}
                />
                <Text style={styles.bannerTitle}>Welcome Game world</Text>
                <Text style={styles.bannerSubtitle}>Game Box</Text>
                <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Play
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/*Preschooler Products*/}
          <Text style={styles.sectionTitle}>Preschooler Products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            <View style={styles.columnContainer}>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.banner}>
                <View style={styles.bannerText}>
                  <Image
                    source={require("../../../assets/images/bunny 1.png")} // replace with your image
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>Welcome Game world</Text>
                  <Text style={styles.bannerSubtitle}>Game Box</Text>
                  <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.banner}>
              <View style={styles.bannerText}>
                <Image
                  source={require("../../../assets/images/bunny 1.png")} // replace with your image
                  style={styles.bannerImage}
                />
                <Text style={styles.bannerTitle}>Welcome Game world</Text>
                <Text style={styles.bannerSubtitle}>Game Box</Text>
                <TouchableOpacity
                    style={styles.orderNowButton}
                    onPress={() =>
                      router.push({
                        pathname: "./../../profile",
                        params: {
                          user_id: user_id,
                          email: email,
                        },
                      })
                    }
                  >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Play
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C0F2E",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#8C0F2E",
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
  banner: {
    backgroundColor: "#002A5A",
    borderRadius: 16,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 40,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    margin: 10,
  },
  bannerText: { flex: 1 },
  bannerTitle: { fontSize: 14, fontWeight: "bold", color: "#fff" },
  bannerSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  orderNowButton: {
    backgroundColor: "#8C0F2E",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bannerImage: { width: 150, height: 300, resizeMode: "contain" },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  columnContainer: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 0.48,
  },
  totalSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 16,
    color: "#333",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#8C0F2E",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
