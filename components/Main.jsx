import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChampionCard from './ChampionCard';
import ItemsCard from './ItemsCard';

export default function Main() {
    const insets = useSafeAreaInsets();

  return (
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <ChampionCard />
        <ItemsCard />
      </View>
  );
}

const styles = StyleSheet.create({
});
