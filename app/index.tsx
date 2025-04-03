import {ActivityIndicator, Image, Text, View} from "react-native";
import Colors from "@/constant/Colors";
import {useEffect} from "react";
import {useRouter} from "expo-router";


export  default function Index(){
    const router = useRouter(); // Get navigation instance

    useEffect(() => {
        setTimeout(() => {
            router.push("/auth/Translate");
        }, 2000);
    }, []);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.SECONDARY,
                paddingTop: 120,
                alignItems: "center",
            }}
        >
            <Image source ={require('./../assets/images/Baby mine logo-01.png')}
            style={{
                width: 200,
                height: 200,
                marginTop: 40}}
            />


            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: Colors.PRIMARY,
                    marginBottom: 20,
                }}
            >
                The best baby care partner
            </Text>

            {/* Loading Indicator */}
            <ActivityIndicator
                size="large"
                color={Colors.PRIMARY}
                style={{
                    marginBottom: 20,
                }}
            />

            {/* Background Image */}
            <Image
                source={require('./../assets/images/f987fadbac680ed7167c947985eafcd4_upscayl_4x_realesrgan-x4plus-anime.jpg')}
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                }}
            />
        </View>
    )
}


