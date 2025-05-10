import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions,SafeAreaView, } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import { router } from "expo-router";
import colors from "../../../constant/Colors";

const { width } = Dimensions.get('window');

const babyItems = [
    {
        id: '1',
        name: 'Baby Diapers',
        price: 'Rs. 890',
        image: require('./../../../assets/images/Cloth icon.png'),
    },
    {
        id: '2',
        name: 'Baby Lotion',
        price: 'Rs. 650',
        image: require('./../../../assets/images/shamoo.png'),
    },
    {
        id: '3',
        name: 'Baby Bottle',
        price: 'Rs. 450',
        image: require('./../../../assets/images/baby bottle.png'),
    },
    {
        id: '4',
        name: 'Baby Wipes',
        price: 'Rs. 300',
        image: require('./../../../assets/images/Gocart.png'),
    },
    {
        id: '5',
        name: 'Rattle Toy',
        price: 'Rs. 250',
        image: require('./../../../assets/images/game2.png'),
    },
];
const categories = [
    { id: "1", Name: "Baby Cheramy", image: require("./../../../assets/images/BabyCheramy.png"), screen: "https://www.babycheramy.lk" },
    { id: "2", Name: "Velona", image: require("./../../../assets/images/Velona.png"), screen: "https://buyvelona.com" },
    { id: "3", Name: "Baby Care", image: require("./../../../assets/images/BabyCare.jpg"), screen: "https://babycare.lk/" },
    { id: "44", Name: "ToyMart", image: require("./../../../assets/images/ToyMart.jpg"), screen: "https://toymart.lk" },
    { id: "5", Name: "SmartMama", image: require("../../../assets/images/SmartMama.jpeg"), screen: "https://www.smartmama.lt/" },

];

const adBanners = [
    require('./../../../assets/images/Baby Kit.jpg'),
    require('./../../../assets/images/hat.jpg'),

];

export default function BabyShop() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addToCart}>
                <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => router.push("./../../Main-Interfaces/mom-home")} >
                        <Ionicons name="chevron-back" size={24} color="#fff" />
                    </TouchableOpacity><Text style={styles.headerText}>Baby Shop</Text>
                </View>
                <View style={styles.cardSection}>
                    <View style={styles.header}>
                        <Image source={require('./../../../assets/images/shoping.png')} style={styles.babyImage} />
                        <View style={styles.title}>
                            <Text style={styles.title}>“Mom, let’s grab that.</Text>
                            <Text style={styles.title}>I love It mom."</Text>
                            <Text style={styles.details}>Oh, you’ve got great taste my little ! </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push("./cart")} >
                            <Ionicons name="cart" size={50} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    {/* Advertising Banner - Scrollable Row */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.bannerScroll}>
                        {adBanners.map((img, index) => (
                            <Image
                                key={index}
                                source={img}
                                style={styles.bannerImage}
                                resizeMode="cover"
                            />
                        ))}
                    </ScrollView>
                    <Text style={styles.sectionTitle}>Top Rated Baby Care Brands</Text>
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
                                            {categories.map((item) => (
                                                <TouchableOpacity
                                                    key={item.id}
                                                    style={styles.categoryBox}
                                                    onPress={() => item.screen && router.push(item.screen)}>
                                                    <Image source={item.image} style={{ width: 50, height: 50 }} />
                                                    <Text style={styles.categoryText}>{item.Name}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>

                    {/* Section Header */}
                    <Text style={styles.shopHeader}>🛍️ Baby Item Shop</Text>

                    {/* Baby Item Grid */}
                    <FlatList
                        data={babyItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        numColumns={3}
                        scrollEnabled={false}
                        contentContainerStyle={styles.grid}
                    />


                </View>


            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3006D',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#A3006D',
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
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
    bannerScroll: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    bannerImage: {
        width: width * 0.6,
        height: 150,
        marginRight: 12,
        borderRadius: 12,
    },
    shopHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: '#333',
    },
    grid: {
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 8,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    itemImage: {
        width: 80,
        height: 80,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
        textAlign: 'center',
    },
    itemPrice: {
        fontSize: 13,
        color: '#888',
        marginBottom: 8,
    },
    addToCart: {
        backgroundColor: '#f28b82',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    cartText: {
        color: 'white',
        fontSize: 13,
    },
    babyImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    title: {
        fontSize: 19,
        wordWrap: "break-word",
        fontWeight: "500",
        color: '#fff',

        paddingLeft: 10,
    },
    icon:{
color:'#fff',
paddingLeft:20,
    },
    details: {
        fontSize: 15,
        paddingLeft: 10,
        color:'#fff'
    },
    categoriesRow: { marginBottom: 20, padding: 20, },
    categoryBox: {
        backgroundColor: '#fff',
        padding: 12,
        paddingVertical: 10,
        borderRadius: 12,
        marginRight: 12,
        alignItems: 'center',
        width: 110,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    categoryText: { fontSize: 12, marginTop: 6, textAlign: 'center' },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 20,
    },
});
