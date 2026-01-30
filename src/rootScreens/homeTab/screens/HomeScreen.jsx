import { ScrollView, StyleSheet, Text, View } from "react-native";
import { menuItems } from "../../../data/menuItems";
import FoodCard from "../../../components/FoodCard";
import { featuredItems, getItemById, getItemsByCategory } from "../../../utils/itemFilterFns";
import { categories } from "../../../data/categoriesData";
import CategoryCard from "../../../components/CategoryCard";

export default function HomeScreen({ navigation }) {
    const futured = featuredItems(menuItems, ['item-1', 'item-5', 'item-9', 'item-16', 'item-19']);

    const itemDetailsHandler = (itemId) => {
        const item = getItemById(itemId, menuItems)
        navigation.navigate('Details', { item })
    }

    const categoriesDetailsHandler = (catId) => {
        const items = getItemsByCategory(catId, menuItems);
        navigation.navigate('Category', {items, itemDetailsHandler})
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={[styles.headerText, { fontWeight: 'bold', fontSize: 28 }]}>Tasty Bites</Text>
                <View style={styles.headerView}>
                    <Text style={[styles.headerText]}>⭐ 4.8 Rating</Text>
                    <Text style={[styles.headerText]}>•</Text>
                    <Text style={[styles.headerText]}>🕐 25-35 min</Text>
                </View>
                <Text style={[styles.headerText]}>Fresh & Delicious Food Delivery Fast</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featurd Items</Text>
                <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
                    {

                        futured.map(item =>

                            <FoodCard key={item.id} item={item} onPress={itemDetailsHandler} />
                        )
                    }
                </ScrollView>
            </View>
            <View style={[styles.section,{gap: 10}]}>
                <Text style={styles.sectionTitle}>Categories</Text>
                {categories.map(category =>
                    <CategoryCard key={category.id} category={category} counts={getItemsByCategory(category.id, menuItems).length} onPress={categoriesDetailsHandler} />
                )}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#437afb',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 20,
        gap: 10
    },
    headerView: {
        flexDirection: 'row',
        gap: 10,
    },
    headerText: {
        color: 'white',
    },
    section: {
        padding: 20
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    scroll: {
        gap: 10
    }

})