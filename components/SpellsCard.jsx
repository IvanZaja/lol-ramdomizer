import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native';

function SpellsCard({ reload }) {

  const [spell, setSpell] = useState('')
  const [spellName, setSpellName] = useState('')
  const [spellImg, setSpellImg] = useState('')


    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_ES/summoner.json')
          .then(response => response.json())
          .then(data => {
            const spells = data?.data
            const spellsArray = Object.values(spells);
            const filteredSpells = spellsArray.filter(spell => 
              spell.modes.includes("CLASSIC") && 
              spell.name !== 'Destello'
          );
            const randomSpell = Math.floor(Math.random() * filteredSpells.length);
    
            const selectedSpell = filteredSpells[randomSpell];
    
            setSpell(selectedSpell),
            setSpellName(spell?.name)

            setSpellImg(spell?.image?.full?.slice(0, -4));
          })
      }, [reload])

  return (
    <View className="bg-[#00334D]">
        <Text className="text-white mb-3 font-semibold text-3xl mx-6 mt-6">Hechizos</Text>
        <View className="flex flex-row justify-evenly pb-6 pt-3 gap-y-3">
              <View className="mb-10 w-[107px]">
                <Image source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/SummonerCherryFlash.png` }} className="w-28 h-28 rounded-lg"  />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">Destello</Text>
              </View>
              <View className="mb-10 w-[107px]">
                <Image source={{ uri: (spellImg ? `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/${spellImg}.png` : 'https://ddragon.leagueoflegends.com/cdn/14.18.1/img/spell/SummonerBarrier.png' ) }} className="w-28 h-28 rounded-lg" />
                <Text className="text-white text-center mt-3 font-semibold text-wrap">{(spellName ? spellName : 'Barrera' )}</Text>
              </View>
        </View>
    </View>
  )
}

export default SpellsCard