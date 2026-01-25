import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FoodCard(props) {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image source={{ uri: props.item.imageUrl }} resizeMode="cover" style={styles.picture} />
                <Text style={styles.text}>{props.item.name}</Text>
                <Text style={[styles.text, {color: "#437afb", fontWeight: 'bold'}]}>{props.item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    picture: {
        width: '100%',
        height: 140
    },
    text: {
        paddingLeft: 15,
    }
})