import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native"
import Json from './items.json'

export default function ItemsCard({ reload }) {
    
    const [item, setItem] = useState(null)
    const [item2, setItem2] = useState(null)
    const [item3, setItem3] = useState(null)
    const [item4, setItem4] = useState(null)
    const [item5, setItem5] = useState(null)
    const [item6, setItem6] = useState(null)

    const [itemId, setItemId] = useState('')
    const [itemId2, setItemId2] = useState('')
    const [itemId3, setItemId3] = useState('')
    const [itemId4, setItemId4] = useState('')
    const [itemId5, setItemId5] = useState('')
    const [itemId6, setItemId6] = useState('')

    useEffect(() => {
            const items = Json?.data;
            const itemsArray = Object.values(items);

            const bootsItems = itemsArray.filter(item => item.tags.includes("Boots"));
            const nonBootsItems = itemsArray.filter(item => !item.tags.includes("Boots"));


            const randomBootsItem = bootsItems[Math.floor(Math.random() * bootsItems.length)];

            const getRandomItem = (items) => {
                const randomIndex = Math.floor(Math.random() * items.length);
                const selectedItem = items[randomIndex];
                items.splice(randomIndex, 1); // Eliminar el elemento seleccionado del array
                return selectedItem;
            };

            const Item1 = getRandomItem(nonBootsItems);
            const Item2 = randomBootsItem;
            const Item3 = getRandomItem(nonBootsItems);
            const Item4 = getRandomItem(nonBootsItems);
            const Item5 = getRandomItem(nonBootsItems);
            const Item6 = getRandomItem(nonBootsItems);

            setItem(Item1);
            setItem2(Item2);
            setItem3(Item3);
            setItem4(Item4);
            setItem5(Item5);
            setItem6(Item6);

            setItemId(Item1?.image?.full?.slice(0, 4));
            setItemId2(Item2?.image?.full?.slice(0, 4));
            setItemId3(Item3?.image?.full?.slice(0, 4));
            setItemId4(Item4?.image?.full?.slice(0, 4));
            setItemId5(Item5?.image?.full?.slice(0, 4));
            setItemId6(Item6?.image?.full?.slice(0, 4));

          console.log(Item2);
      }, [reload])

  return (
    <View className="bg-[#000f17]">
        <Text className="text-white mb-3 font-semibold text-3xl mx-6 mt-6">Objetos</Text>
        <View className="flex flex-wrap flex-row justify-evenly pb-6 pt-3 gap-y-3">
            <View className="mb-5 w-[107px]" >
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId}.png` }} className="w-28 h-28 rounded-lg"  />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item?.name}s</Text>
            </View>
            <View className="mb-5 w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId2}.png` }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item2?.name}</Text>
            </View>
            <View className="mb-5 w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId3}.png` }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item3?.name}</Text>
            </View>
            <View className="w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId4}.png` }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item4?.name}</Text>
            </View>
            <View className="w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId5}.png` }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item5?.name}</Text>
            </View>
            <View className="w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${itemId6}.png` }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{item6?.name}</Text>
            </View>
        </View>
    </View>
  )
}
