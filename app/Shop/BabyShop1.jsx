import React from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,Dimensions,} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import {router} from "expo-router";
import colors from "../../constant/Colors";

const { width } = Dimensions.get('window');

const babyItems = [
    {
        id: '1',
        name: 'Baby Diapers',
        price: 'Rs. 890',
        image: require('./../../assets/images/Cloth icon.png'),
    },
    {
        id: '2',
        name: 'Baby Lotion',
        price: 'Rs. 650',
        image: require('./../../assets/images/shamoo.png'),
    },
    {
        id: '3',
        name: 'Baby Bottle',
        price: 'Rs. 450',
        image: require('./../../assets/images/baby bottle.png'),
    },
    {
        id: '4',
        name: 'Baby Wipes',
        price: 'Rs. 300',
        image: require('./../../assets/images/Gocart.png'),
    },
    {
        id: '5',
        name: 'Rattle Toy',
        price: 'Rs. 250',
        image: require('./../../assets/images/game2.png'),
    },
];

const adBanners = [
    require('./../../assets/images/Baby Kit.jpg'),
    require('./../../assets/images/hat.jpg'),

];

export default function BabyShop1() {
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
        <ScrollView style={styles.container}>
            <View style={styles.Topheader}>
                <TouchableOpacity onPress={() => router.push("./../GuidanceAndMorale")}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Baby Shop</Text>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
            <View style={styles.header}>
                <Image source={require('./../../assets/images/shoping.png')} style={styles.babyImage} />
                <View style={styles.title}>
                    <Text style={styles.title}>“Mom, let’s grab that.</Text>
                    <Text style={styles.title}>I love It mom."</Text>
                    <Text style={styles.details}>Oh, you’ve got great taste my little ! </Text>
                </View>
                <Ionicons name="settings-outline" size={24} style={styles.icon} />
                <Ionicons name="cart" size={24} style={styles.icon} />
            </View>
            {/* Advertising Banner - Scrollable Row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bannerScroll}
            >
                {adBanners.map((img, index) => (
                    <Image
                        key={index}
                        source={img}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefefe',
        flex: 1,
    },
    Topheader: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius:10,
        padding:20,
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
        width: width * 0.8,
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#D9F0FE",
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
        paddingLeft: 10,
    },
    details: {
        fontSize: 15,
        paddingLeft: 10,
    },
});
