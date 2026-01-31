import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export default function RootNavigator () {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='TabNav' component={TabNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}