import React, { useState } from 'react';
import {    View, Text, Image,Pressable, StyleSheet, Alert, Platform, TouchableOpacity,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constant/Colors';
import colors from '../../../constant/Colors';
import { useRouter } from 'expo-router';

export default function UploadImageScreen() {
    const [image, setImage] = useState(null);
    const router = useRouter();
    const pickImageFromGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Permission to access gallery is required!');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhotoWithCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Permission to access camera is required!');
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("./../../mother-registation/step-3-health-info")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create Parent Account</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>

        
        <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <Image
                    source={
                        image
                            ? { uri: image }
                            : require('./../../../assets/images/mom1.png') // Add your placeholder image
                    }
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIcon} onPress={pickImageFromGallery}>
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
                <Text style={styles.guidelineText}>• Allowed formats: JPG, PNG, JPEG</Text>
                <Text style={styles.guidelineText}>• Ensure stable internet connection</Text>
            </View>

                <TouchableOpacity style={styles.nextButton} onPress={() => router.push("./../../mother-registation/step-5-success")}>
                     <Text style={styles.nextText}>Save</Text>
                </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdf0f6',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom:20,
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
    
    imageContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#f5d8dd',
    },
    editIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#800080',
        borderRadius: 20,
        padding: 5,
    },
    actions: {
        flexDirection: 'row',
        gap: 30,
        marginVertical: 20,
    },
    iconButton: {
        backgroundColor: '#f3e2f1',
        padding: 15,
        borderRadius: 50,
    },
    guidelines: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    guidelineText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    nextButton: {
        marginTop: 30,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 12,
        color:Colors.WHITE,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    nextText: {
        color: Colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
