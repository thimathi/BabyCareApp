import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView ,ScrollView} from 'react-native';
import Colors from '../../../constant/Colors';
import { Ionicons, } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

const initialCart = [
    {
        id: '1',
        name: 'Baby Diapers',
        price: 890,
        image: require('./../../../assets/images/Cloth icon.png'),
        quantity: 1,
    },
    {
        id: '2',
        name: 'Baby Bottle',
        price: 450,
        image: require('./../../../assets/images/baby bottle.png'),
        quantity: 2,
    },
];

export default function Cart() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState(initialCart);

    const increaseQuantity = (id) => {
        const updated = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updated);
    };

    const decreaseQuantity = (id) => {
        const updated = cartItems
            .map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0);
        setCartItems(updated);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs. {item.price}</Text>
                <View style={styles.qtyContainer}>
                    <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.qtyBtn}>
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyNumber}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.qtyBtn}>
                        <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.push("./../../Shop/baby-shop")} >
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity><Text style={styles.headerText}>My Cart</Text>
            </View>
            <ScrollView >
                <View style={styles.cardSection}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.emptyText}>Cart is Empty</Text>}
            />
            <View style={styles.billSection}>
                <Text style={styles.total}>Total: Rs. {totalAmount}</Text>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        marginBottom: 12,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    itemImage: { width: 60, height: 60, resizeMode: 'contain' },
    itemInfo: { flex: 1, marginLeft: 10 },
    name: { fontSize: 16, fontWeight: 'bold' },
    price: { color: '#666', marginVertical: 5 },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyBtn: {
        backgroundColor: Colors.BLUE1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginHorizontal: 5,
    },
    qtyText: { color: 'white', fontSize: 18 },
    qtyNumber: { fontSize: 16 },
    billSection: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 15,
        marginTop: 10,
    },
    total: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    checkoutBtn: {
        backgroundColor: Colors.PRIMARY,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    checkoutText: { color: 'white', fontSize: 16 },
    emptyText: { textAlign: 'center', marginTop: 40, color: '#888' },
});
