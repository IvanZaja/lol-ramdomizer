import { Image, StyleSheet, Text, View } from "react-native"

export default function ItemsCard() {
  return (
    <View className="bg-[#000f17]">
        <Text className="text-white mb-3 font-semibold text-3xl mx-6 mt-6">Items</Text>
        <View className="flex flex-wrap flex-row justify-evenly pb-6 pt-3 gap-y-3">
            <View className="mb-5">
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1055.png' }} style={styles.image} classname="basis-1/4" />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
            <View>
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1054.png' }} style={styles.image} />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
            <View>
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1054.png' }} style={styles.image} />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
            <View>
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1054.png' }} style={styles.image} />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
            <View>
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1054.png' }} style={styles.image} />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
            <View>
                <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1054.png' }} style={styles.image} />
                <Text className="text-white text-center mt-3 font-semibold">Doran's Blade</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000f17',
        padding: 20,
    },
    image: {
        width: 107,
        height: 107,
        borderRadius: 10,
    },
});
