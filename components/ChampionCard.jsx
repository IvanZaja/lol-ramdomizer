import { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"

export default function ChampionCard({ reload }) {

  const [champion, setChampion] = useState(null)
  const [championLane, setChampionLane] = useState('')
  const [championName, setChampionName] = useState('')
  const [championTitle, setChampionTitle] = useState('')
  const lanes = ['Top', 'Jungla', 'Mid', 'Adc', 'Support']


  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_ES/champion.json')
      .then(response => response.json())
      .then(data => {
        const champions = data?.data
        const championsArray = Object.values(champions);
        const randomChamp = Math.floor(Math.random() * championsArray.length);
        const randomIndex = Math.floor(Math.random() * lanes.length);

        const selectedChampion = championsArray[randomChamp];

        setChampion(selectedChampion),
        setChampionLane(lanes[randomIndex])
        setChampionName(champion?.name)
        setChampionTitle(champion?.title)

      })
  }, [reload])

  return (
    <View className="p-6 bg-[#00334D] flex flex-row gap-3">
        <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png` }} className="w-36 h-36 rounded-lg" />
        <View className="flex justify-between">
          <View>
            <Text className="text-white text-2xl font-semibold">{championName}</Text>
            <Text className="text-white text-lg flex-wrap w-56">{championTitle}</Text>
          </View>
          <View className="bg-[#8b5cf6] rounded-full w-[130px] h-[35px]">
            <Text className="text-white text-2xl font-semibold text-center">{championLane}</Text>
          </View>
        </View>
    </View>
  )
}