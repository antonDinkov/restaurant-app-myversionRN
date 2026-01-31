import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { itemApi } from "../api";

export default function CategoryCard(props) {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.category.id)}>
            <View style={styles.card}>
                <Text style={styles.text}>{props.category.title}</Text>
                <Text>{props.counts} items</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5
    },
    text: {
        fontWeight: 600,
    }
})