import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import CartScreen from "../rootScreens/cartTab/screens/CartScreen";

export default function RootNavigator () {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='TabNav' component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name='ModalCart'component={CartScreen} />
        </Stack.Navigator>
    )
}