import { StyleSheet, Text, View, Image, FlatList, ScrollView, Button, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ItemsCard from './ItemsCard';
import SpellsCard from './SpellsCard';
import { useState } from 'react';
import ReloadIcon from '../Icons/ReloadIcon';

export default function MainAram() {
    const insets = useSafeAreaInsets();

    const [reload, setReload] = useState(false);

  return (
    <>
      <ScrollView className="relative h-100 bg-[#000f17]" style={{ paddingBottom: insets.bottom }}>
      <View>
        <Text className="text-5xl text-white font-semibold pl-6 pt-16 pb-4">Modo Aram </Text>
      </View>
        <ItemsCard reload={reload} />
        <SpellsCard reload={reload} />
      </ScrollView>
      <View className="absolute bottom-10 right-10">
        <Pressable className="w-16 h-16 bg-[#1e2328] border-2 border-[#c4a464] rounded-full flex items-center justify-center shadow-md shadow-black" onPress={() => setReload(!reload)} ><ReloadIcon className="w-3/6 h-3/6"/></Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
});
