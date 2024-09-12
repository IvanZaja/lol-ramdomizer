import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ReloadIcon from '../components/Icons/ReloadIcon';

export default function Index() {

    const image = {uri: 'https://github.com/IvanZaja/lol-ramdomizer/blob/master/assets/Images/map.jpg?raw=true'};  

    return (
        <View className="flex-1 bg-black items-center justify-start">
            <ReloadIcon className="w-3/6 h-3/6"/>
            <Link asChild href="/mode" className="text-white text-4xl">
                <Pressable className="w-2/3 h-20 bg-[#1e2328] border-2 border-[#c4a464] flex items-center justify-center shadow-md shadow-black" ><Text className="text-white text-4xl p-4">Comenzar</Text></Pressable>
            </Link>
            <View className="absolute bottom-1 left-1 mx-2">
                <Text className="text-slate-100">
                    LolRandomizer is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc
                </Text>
            </View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} className="flex items-center justify-center opacity-70"></ImageBackground>
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