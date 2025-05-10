import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        key: '1',
        title: 'Create New Account With Full Details',
        image: require('./../../assets/images/Registergif.gif'),
    },
    {
        key: '2',
        title: 'Read New Mother Guidance and morale',
        image: require('./../../assets/images/Meet your Doctor.gif'),
    },
    {
        key: '3',
        title: 'Read Babe Healthy Guidance',
        image: require('./../../assets/images/crare mom.gif'),
    },
    {
        key: '4',
        title: 'Read New Postpartum care',
        image: require('./../../assets/images/Postpartum care.gif'),
    },
    {
        key: '5',
        title: 'Feel free with the pregnancy and mom roll with baby care',
        image: require('./../../assets/images/P mother 2.png'),
    },
    {
        key: '6',
        title: 'Grow up your child better healthy.',
        image: require('./../../assets/images/BabyExersice.gif'),
    },
];

const OnboardingScreen1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const router = useRouter();

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const skip = () => {
        router.push('./../mother-registation/step-1-parent-info');
    };

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <TouchableOpacity style={styles.skip} onPress={skip}>
                <Text style={styles.skipText}>Skip ⏭</Text>
            </TouchableOpacity>

            <FlatList
                data={slides}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.key}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />

            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : null,
                        ]}
                    />
                ))}
            </View>

            <Text style={styles.footer}>2MBS IT Solution © 2025</Text>
        </SafeAreaView>
    );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        height: height * 0.4,
        width: width * 0.8,
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        lineHeight: 28,
        fontWeight: '500',
        paddingHorizontal: 20,
    },
    skip: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    skipText: {
        fontSize: 14,
        color: '#444',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#bbb',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#7B4EFF',
        width: 16,
    },
    footer: {
        textAlign: 'center',
        fontSize: 10,
        color: '#999',
        marginBottom: 10,
    },
});
