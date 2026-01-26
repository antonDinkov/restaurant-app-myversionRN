import { ScrollView, Text, View } from "react-native";
import FoodCard from "../../../components/FoodCard";

export default function CategoryDetailsScreen({route, navigation}) {
    const {items, itemDetailsHandler} = route.params
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            {items.map(item=>
                <FoodCard key={item.id} item={item} onPress={itemDetailsHandler} />
            )}
        </ScrollView>
    )
}