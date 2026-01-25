import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FoodCard(props) {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.item.id)}>
            <View style={styles.card}>
                <Image source={{ uri: props.item.imageUrl }} resizeMode="cover" style={styles.picture} />
                <Text style={[styles.text, {marginVertical: 5}]}>{props.item.name}</Text>
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
        /* justifyContent: 'space-around', */
        borderRadius: 15,
        marginBottom: 10,
        overflow: 'hidden'
    },
    picture: {
        width: '100%',
        height: 140
    },
    text: {
        paddingLeft: 15,
    }
})