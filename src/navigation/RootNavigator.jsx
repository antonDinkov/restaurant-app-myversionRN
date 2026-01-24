import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeNavigator from "../rootScreens/homeTab/HomeNavigator";
import CartNavigator from "../rootScreens/cartTab/CartNavigator";
import InfoNavigator from "../rootScreens/infoTab/InfoNavigator";
import { Ionicons } from "@expo/vector-icons"

export default function RootNavigator(props) {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeNavigator} options={{headerShown: false, tabBarIcon: ({focused, color, size}) => <Ionicons name="home" size={size} color={color} />}} />
            <Tabs.Screen name="Cart" component={CartNavigator} options={{headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />}} />
            <Tabs.Screen name="Info" component={InfoNavigator} options={{headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />}} />
        </Tabs.Navigator>
    )
}