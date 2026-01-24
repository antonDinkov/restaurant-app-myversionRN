import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "./screens/CartScreen";

export default function CartNavigator(props) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen} options={{}} />
        </Stack.Navigator>
    )
}