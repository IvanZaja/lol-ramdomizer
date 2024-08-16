import { Image, StyleSheet, Text, View } from "react-native"

export default function ChampionCard() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/Aatrox.png' }} style={styles.image} />
        <Text className="text-white">Aatrox</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 147,
        height: 147,
        borderRadius: 10,
    },
    container: {
        backgroundColor: '#00334D',
        padding: 20,
    },
});
