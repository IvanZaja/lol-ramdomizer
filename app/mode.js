import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {

    const image = {uri: 'https://github.com/IvanZaja/lol-ramdomizer/blob/master/assets/Images/grieta.webp'};

    return (
        <View className="flex-1 bg-black items-center justify-center h-full w-full">
            <Link asChild href="/champ" className="text-white text-4xl h-1/2 w-full">
                <Pressable className="h-20 bg-[#1e2328] border-2 border-[#c4a464] flex items-center justify-center shadow-md shadow-black" ><ImageBackground source={image} resizeMode="cover" style={styles.image}><Text className="text-white text-4xl p-4">Grieta</Text></ImageBackground></Pressable>
            </Link>
            <Link asChild href="/champAram" className="text-white text-4xl h-1/2 w-full">
                <Pressable className=" h-20 bg-[#1e2328] border-2 border-[#c4a464] flex items-center justify-center shadow-md shadow-black" ><Text className="text-white text-4xl p-4">Aram</Text></Pressable>
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