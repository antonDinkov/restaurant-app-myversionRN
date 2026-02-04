import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";
import * as Sharing from 'expo-sharing';
import { useState } from "react";

export default function CategoryCard(props) {
    const [isSharing, setIsSharing] = useState(false);
    const shareHandler = async () => {
        if (isSharing) return; // блокира повторно натискане
        setIsSharing(true);
        try {
            const isSharingAvailable = await Sharing.isAvailableAsync(); //това е метод за шерване на локални файлове. Нужна експо инсталация
            console.log(isSharingAvailable);
            if (!props.picUrl) {
                return alert('No picture URL available');
            };

            await Share.share({
                message: `Checkout how thoose ${props.category.title} look like! ${props.picUrl}`,
                title: props.category.title,
            })
        } catch (err) {
            console.log('Error sharing:', err.message);
        } finally {
            setIsSharing(false);
        }
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => props.onPress(props.category.id)}>
                <Text style={styles.text}>{props.category.title}</Text>
                <Text>{props.counts} items</Text>
            </TouchableOpacity>
            <Button title={'Share Picture'} onPress={shareHandler} disabled={isSharing} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 5
    },
    text: {
        fontWeight: 600,
    },
    button: {

    }
})