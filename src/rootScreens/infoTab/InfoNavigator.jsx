import { createNativeStackNavigator } from "@react-navigation/native-stack"
import InfoScreen from "./screens/InfoScreen";

export default function InfoNavigator(props) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    )
}