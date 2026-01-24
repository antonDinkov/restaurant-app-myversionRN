import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeNavigator from "../rootScreens/homeTab/HomeNavigator";
import CartNavigator from "../rootScreens/cartTab/CartNavigator";
import InfoNavigator from "../rootScreens/infoTab/InfoNavigator";

export default function RootNavigator(props) {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeNavigator} options={{headerShown: false}} />
            <Tabs.Screen name="Cart" component={CartNavigator} options={{headerShown: false}} />
            <Tabs.Screen name="Info" component={InfoNavigator} options={{headerShown: false}} />
        </Tabs.Navigator>
    )
}