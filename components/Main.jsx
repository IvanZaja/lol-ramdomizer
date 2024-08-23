import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChampionCard from './ChampionCard';
import ItemsCard from './ItemsCard';
import SpellsCard from './SpellsCard';

export default function Main() {
    const insets = useSafeAreaInsets();

  return (
      <ScrollView style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <ChampionCard />
        <ItemsCard />
        <SpellsCard />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
});
