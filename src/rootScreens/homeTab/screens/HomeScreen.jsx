import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import { menuItems } from "../../../data/menuItems";
import FoodCard from "../../../components/FoodCard";
import { getItemById, getItemsByCategory } from "../../../utils/itemFilterFns";
import CategoryCard from "../../../components/CategoryCard";
import { useEffect, useState } from "react";
import { categoryApi, itemApi } from "../../../api";

export default function HomeScreen({ navigation }) {
    const [featured, setFeatured] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catNameCount, setCatNameCount] = useState({});
    const [meals, setMeals] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    async function fetchData() {
        setRefreshing(true);
        try {
            const featuredItems = await itemApi.getFeatured();
            setFeatured(featuredItems.data);
            const categoriesAll = await categoryApi.getAll();
            setCategories(categoriesAll.data);
            const counts = {}
            for (const element of categoriesAll.data) {
                const result = await itemApi.getByCategory(element.id);
                counts[element.id] = result.data.length;
            }
            setCatNameCount(counts);
            const allMeals = await itemApi.getAll();
            setMeals(allMeals.data);
        } catch (error) {
            alert('Cannot Load Data')
        } finally {
            setRefreshing(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refreshHandler = () => fetchData();

    const itemDetailsHandler = (itemId) => {
        const item = getItemById(itemId, menuItems)
        navigation.navigate('Details', { item })
    }

    const categoriesDetailsHandler = (catId) => {
        const items = getItemsByCategory(catId, meals);
        navigation.navigate('Category', { items, itemDetailsHandler })
    }

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}>
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

                        featured.map(item =>

                            <FoodCard key={item.id} item={item} onPress={itemDetailsHandler} />
                        )
                    }
                </ScrollView>
            </View>
            <View style={[styles.section, { gap: 10 }]}>
                <Text style={styles.sectionTitle}>Categories</Text>
                {categories.map(category =>
                    <CategoryCard key={category.id} category={category} counts={catNameCount[category.id]} onPress={categoriesDetailsHandler} />
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