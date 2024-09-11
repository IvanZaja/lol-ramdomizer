import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {

    const imageDefault = {uri: 'https://github.com/IvanZaja/lol-ramdomizer/blob/master/assets/Images/grieta.webp?raw=true'};
    const imageAram = {uri: 'https://github.com/IvanZaja/lol-ramdomizer/blob/adbb5715ff040e16ffe364f856f10cb2c09efb39/assets/Images/aram.jpg?raw=true'};


    return (
        <View className="flex-1 bg-black items-center justify-center h-full w-full">
            <Link asChild href="/champ" className="text-white text-4xl h-1/2 w-full">
                <Pressable className="h-20 flex items-center justify-center shadow-md shadow-black" ><ImageBackground source={imageDefault} resizeMode="cover" style={styles.image} className="flex items-center justify-center"><Text className="text-white text-4xl p-4 opacity-100">Grieta</Text></ImageBackground></Pressable>
            </Link>
            <Link asChild href="/champAram" className="text-white text-4xl h-1/2 w-full">
                <Pressable className=" h-20 flex items-center justify-center shadow-md shadow-black" ><ImageBackground source={imageAram} resizeMode="cover" style={styles.image} className="flex items-center justify-center"><Text className="text-white text-4xl p-4">Aram</Text></ImageBackground></Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});