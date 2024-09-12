import { StyleSheet, Text, View, Image, FlatList, ScrollView, Button, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChampionCard from './ChampionCard';
import ItemsCard from './ItemsCard';
import SpellsCard from './SpellsCard';
import { useState } from 'react';
import ReloadIcon from './Icons/ReloadIcon';
import { Link } from "expo-router";

export default function Main() {
    const insets = useSafeAreaInsets();

    const [reload, setReload] = useState(false);

  return (
    <>
      <ScrollView className="relative" style={{ paddingBottom: insets.bottom }}>
        <ChampionCard reload={reload} />
        <ItemsCard reload={reload} />
        <SpellsCard reload={reload} />
      </ScrollView>
      <View className="absolute bottom-0 w-full">
        <Pressable className="absolute bottom-5 right-5 w-16 h-16 bg-[#1e2328] border-2 border-[#c4a464] rounded-full flex items-center justify-center shadow-md shadow-black" onPress={() => setReload(!reload)} ><ReloadIcon className="w-3/6 h-3/6"/></Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
});
