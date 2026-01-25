import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"

export default function HomeNavigator(props) {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({
                title: route.params?.item.name ?? 'Details', // ?? ако от ляво е undefined вземи дясната стойност
            })} />
        </Stack.Navigator>
    )
}