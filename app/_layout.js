import { Text, View } from "react-native"
import { Stack } from "expo-router"

function Layout() {
  return (
    <View className="flex-1">
        <Stack 
            screenOptions={{
                headerShown: false
            }}
        />
    </View>
  )
}

export default Layout