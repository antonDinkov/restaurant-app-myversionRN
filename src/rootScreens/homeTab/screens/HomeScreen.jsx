import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
    return (
        <ScrollView>
            <View style={Styles.header}>
                <Text style={[Styles.headerText, {fontWeight: 'bold', fontSize: 28}]}>Tasty Bites</Text>
                <View style={Styles.headerView}>
                    <Text style={[Styles.headerText]}>⭐ 4.8 Rating</Text>
                    <Text style={[Styles.headerText]}>•</Text>
                    <Text style={[Styles.headerText]}>🕐 25-35 min</Text>
                </View>
                <Text style={[Styles.headerText]}>Fresh & Delicious Food Delivery Fast</Text>
            </View>
            <View>
                <Text>Featurd Items Main Section Fragment</Text>
                <ScrollView>
                    <Text>Item Card Placeholder</Text>
                </ScrollView>
            </View>
            <View>
                <Text>Categories Main Section Fragment</Text>
                <View>
                    <Text>Category card Placehoder</Text>
                </View>
            </View>
        </ScrollView>

    )
}

const Styles = StyleSheet.create({
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
    }

})