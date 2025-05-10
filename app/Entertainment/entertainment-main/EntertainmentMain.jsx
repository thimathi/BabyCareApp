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
  FlatList,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Linking } from "react-native";

import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

const { email, user_id } = useLocalSearchParams();

const categories = [
  {
    id: "2",
    Name: "Youtube",
    image: require("./../../../assets/images/Youtube.png"),
    screen: "https://youtube.com",
  },
  {
    id: "3",
    Name: "Spotify",
    image: require("./../../../assets/images/Spotify.png"),
    screen: "https://open.spotify.com",
  },
  {
    id: "6",
    Name: "Disney",
    image: require("../../../assets/images/Disney.png"),
    screen: "https://www.disneyplus.com",
  },
  {
    id: "4",
    Name: "PrimeVideo",
    image: require("./../../../assets/images//PrimeVideos.png"),
    screen: "https://www.primevideo.com",
  },
  {
    id: "6",
    Name: "Netflix",
    image: require("../../../assets/images/Netflix.png"),
    screen: "https://www.netflix.com/",
  },
];
const handleCategoryPress = (url) => {
  Linking.openURL(url); // works for both web URLs and internal routes if hosted correctly
};

const videos = [
  {
    id: "1",
    thumbnail: require("./../../../assets/images/Thumbnail 1 (2).jpg"), // Replace with your image
    duration: "2:05:38",
    title: "Good Relax Vibes Music  ",
    subtitle: "Top 100 Chill Out Songs Playlist ",
    videoUrl: "https://www.youtube.com/watch?v=Nq4Mh_jTubA",
  },
  {
    id: "2",
    thumbnail: require("./../../../assets/images/Thumbnail 1 (4).jpg"), // Replace with your image
    duration: "3:52",
    title: "Mind Relax Lofi Mashup ",
    subtitle: " Mind Relax Lofi Song ",
    videoUrl: "https://www.youtube.com/watch?v=uwhQBSe5UJI",
  },
  {
    id: "3",
    thumbnail: require("./../../../assets/images/Thumbnail 1 (3).jpg"), // Replace with your image
    duration: "14:14",
    title: "Deep relax night songs",
    subtitle: " slow and reverb......",
    videoUrl:
      "https://www.youtube.com/watch?v=1HtSfa0PKig&list=RDQMQDuLnmDbfJ4&index=2",
  },
  {
    id: "4",
    thumbnail: require("./../../../assets/images/Thumbnail 1 (1).jpg"), // Replace with your image
    duration: "7:00",
    title: "15 Min. Meditation Music Relax Mind Body",
    subtitle: "Relaxing Yoga Music ",
    videoUrl: "https://www.youtube.com/watch?v=H1LIElhBaM8",
  },
];

const VideoCard = ({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => handleVideoPress(item.videoUrl)}
  >
    <View style={styles.thumbnailWrapper}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <Text style={styles.duration}>{item.duration}</Text>
    </View>
    <Text style={styles.title} numberOfLines={2}>
      {item.title}
    </Text>
    <Text style={styles.subtitle} numberOfLines={1}>
      {item.subtitle}
    </Text>
  </TouchableOpacity>
);
const handleVideoPress = (url) => {
  // You can use Linking to open video URLs
  import("react-native").then(({ Linking }) => {
    Linking.openURL(url);
  });
};

export default function EntertainmentMain() {
  const router = useRouter();

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

          <Text style={styles.headerText}>Entertainment</Text>
        </View>

        <View style={styles.cardSection}>
          <View
            style={{
              backgroundColor: "#4D00AC",
              borderRadius: 16,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              paddingLeft: 20,
              margin: 10,
            }}
          >
            <View style={styles.bannerText}>
              <Text style={styles.bannerSubtitle}>
                Entertainment & Mental Relaxation.
              </Text>
              <Text style={styles.bannerTitle}>
                Welcome to entertainment zone
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/Entertainment.png")} // replace with your image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          </View>

          <Text style={styles.sectionTitle}>
            Top Rated Entertainment Platforms
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            {categories.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.categoryBox}
                onPress={() => item.screen && router.push(item.screen)}
              >
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <Text style={styles.categoryText}>{item.Name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.sectionTitle}>Mind Relaxation Music</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            <View style={styles.cardSection}>
              <FlatList
                data={videos}
                renderItem={({ item }) => <VideoCard item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>Mind Relaxing Yoga Music</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesRow}
          >
            <View style={styles.cardSection}>
              <FlatList
                data={videos}
                renderItem={({ item }) => <VideoCard item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
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
    backgroundColor: "#4D00AC",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#4D00AC",
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
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
  playButton: {
    backgroundColor: "#8C0F2E",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  categoriesRow: { marginBottom: 20, padding: 20 },
  categoryBox: {
    backgroundColor: "#fff",
    padding: 12,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    width: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  categoryText: { fontSize: 12, marginTop: 6, textAlign: "center" },
  bannerImage: { width: 150, height: 300, resizeMode: "contain" },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 20,
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
  card: {
    width: 240,
    marginRight: 15,
  },
  thumbnailWrapper: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 135,
    borderRadius: 8,
  },
  duration: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 3,
  },
  title: {
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 14,
  },
  subtitle: {
    color: "#666",
    fontSize: 12,
  },
});
