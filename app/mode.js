import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {

    const imageDefault = {uri: 'https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png?raw=true'};
    const imageAram = {uri: 'https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map12.png?raw=true'};  


    return (
        <View className="flex-1 bg-black items-center justify-center h-full w-full">
            <Link asChild href="/champ" className="text-white text-4xl h-1/2 w-full absolute z-10 top-0">
                <Pressable className="h-20 flex items-center justify-center shadow-md shadow-black border-b-2 border-[#c4a464]" ><Text className="text-white font-bold text-8xl p-4 opacity-100">Grieta</Text></Pressable>
            </Link>
            <Link asChild href="/champAram" className="text-white text-4xl h-1/2 w-full absolute z-10 bottom-0">
                <Pressable className=" h-20 flex items-center justify-center shadow-md shadow-black" ><Text className="text-white font-bold text-8xl p-4">Aram</Text></Pressable>
            </Link>
            <Link asChild href="/champ" className="text-white text-4xl h-1/2 w-full">
                <ImageBackground source={imageDefault} resizeMode="cover" style={styles.image} className="flex items-center justify-center opacity-70"></ImageBackground>
            </Link>
            <Link asChild href="/champAram" className="text-white text-4xl h-1/2 w-full">
                <ImageBackground source={imageAram} resizeMode="cover" style={styles.image} className="flex items-center justify-center opacity-70"></ImageBackground>
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