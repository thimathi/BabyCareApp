import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, Alert, TouchableOpacity, ActivityIndicator, Platform, SafeAreaView, ScrollView,} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import colors from "../../../constant/Colors";
import { useRouter, useLocalSearchParams } from "expo-router";
import { supabase } from "../../../lib/supabase";
import { insertParentInfo } from "./Step4BackEnd";
import { v4 as uuidv4 } from "uuid";
import { Ionicons, } from "@expo/vector-icons";


export default function UploadImageScreen() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const { user_id } = useLocalSearchParams();

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("Permission Denied", "Need access to your gallery.");
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!res.canceled) setImage(res.assets[0].uri);
  };

  const takePhotoWithCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("Permission Denied", "Need access to your camera.");
    }
    const res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!res.canceled) setImage(res.assets[0].uri);
  };

  const uploadImageToSupabase = async (uri) => {
    try {
      const resp = await fetch(uri);
      const blob = await resp.blob();

      const imageName = `${uuidv4()}.jpg`;
      const filePath = `users/${imageName}`;

      let fileToUpload = blob;
      if (Platform.OS === "web") {
        fileToUpload = new File([blob], imageName, { type: "image/jpeg" });
      }

      const { data, error } = await supabase.storage
        .from("mother-profile-photos")
        .upload(filePath, fileToUpload, {
          cacheControl: "3600",
          upsert: true,
          contentType: "image/jpeg",
        });

      if (error) {
        console.error("Upload Error:", error.message);
        return null;
      }

      return `https://sapauniiuubdrvkbvuty.supabase.co/storage/v1/object/public/mother-profile-photos/${filePath}`;
    } catch (e) {
      console.error("Blob Conversion Error:", e);
      return null;
    }
  };

  const handleSave = async () => {
    if (!image) {
      return Alert.alert("No Image", "Please select or take a photo first.");
    }
    setUploading(true);

    const imageUrl = await uploadImageToSupabase(image);

    if (!imageUrl) {
      setUploading(false);
      return Alert.alert("Upload Failed");
    }

    console.log("Uploaded Image URL:", imageUrl);

    setUploading(false);
    Alert.alert("Image uploaded successfully");

    try {
      const response = await insertParentInfo({ imageUrl }, user_id);

      if (response.success) {
        Alert.alert("Success", "Profile photo saved!");
        router.push({
          pathname: "./../../mother-registation/step-5-success",
          params: { user_id: userId },
        });

      } else {
        Alert.alert("Update Failed", "Could not update user information.");
      }
    } catch (e) {
      console.error("Error during user update:", e);
      Alert.alert("Unexpected Error", "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("./../../mother-registation/step-3-health-info ")} >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity><Text style={styles.headerText}>Create Parent Account</Text>
        </View>
        <View style={styles.cardSection}>
          
            <View style={styles.imageContainer}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("./../../../assets/images/mom1.png") // Add your placeholder image
                }
                style={styles.profileImage}
              />
              <TouchableOpacity
                style={styles.editIcon}
                onPress={pickImageFromGallery}
              >
                <MaterialIcons name="edit" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.actions}>
              <Pressable onPress={takePhotoWithCamera} style={styles.iconButton}>
                <MaterialCommunityIcons name="camera" size={30} color="#800080" />
              </Pressable>
              <Pressable onPress={pickImageFromGallery} style={styles.iconButton}>
                <MaterialCommunityIcons name="image" size={30} color="#800080" />
              </Pressable>
            </View>

            <View style={styles.guidelines}>
              <Text style={styles.guidelineText}>• Max file size: 5Mb</Text>
              <Text style={styles.guidelineText}>
                • Allowed formats: JPG, PNG, JPEG
              </Text>
              <Text style={styles.guidelineText}>
                • Ensure stable internet connection
              </Text>
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={handleSave}>
              {uploading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.nextText}>Save</Text>
              )}
            </TouchableOpacity>
          


        </View>


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
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardSection: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },

  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#f5d8dd",
  },
  editIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#800080",
    borderRadius: 20,
    padding: 5,
  },
  actions: {
    flexDirection: "row",
    gap: 30,
    marginVertical: 20,
  },
  iconButton: {
    backgroundColor: "#f3e2f1",
    padding: 15,
    borderRadius: 50,
  },
  guidelines: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingLeft: 50,
    borderRadius: 10,
    width: "100%",
  },
  guidelineText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    color: Colors.WHITE,
    paddingHorizontal: 70,
    borderRadius: 8,
  },
  nextText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
});
