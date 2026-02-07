import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";
import QuantityStepper from "../../../components/QuantityStepper";
import { useState } from "react";
import { useCartContext } from "../../../context/cart/CartContext";
import * as ImagePicker from "expo-image-picker";
import { itemApi } from "../../../api";

export default function DetailsScreen({ route, navigation }) {
    const [quontity, setQuontity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const { addToCart } = useCartContext();
    const { item, setPictureUpdated } = route.params;

    const pickHandler = async () => {
        console.log('Placeholder for picking a picture functionality');
        try {
            setLoading(true)
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permissionResult.granted) {
                Alert.alert('Permission required', 'Permission to access the media library is required.');
                return;
            };
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);
            if (!result.canceled) {
                const uri = result.assets[0].uri
                console.log(uri);
                setImage(uri);
                setPictureUpdated(true);
                await itemApi.updateItem(item.id, { imageUrl: uri });
            }
        } catch (err) {
            alert('Could not pick a picture!');
        } finally {
            setLoading(false);
        }
    };

    const takeHandler = () => {
        console.log('Placeholder for taking a picture functionality');
    };

    const addToCartHandler = () => {
        addToCart(item, quontity);
        alert(`${quontity} ${item.name} added to your cart`)
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: image ?? item.imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.content}>
                    {/* <Text style={styles.name}>{item.name}</Text> */}
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.basePrice}>Base price: ${item.price.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    {/* Extra selector */}
                    <View style={styles.imageBtns}>
                        <Button title={'Pick your pic'} style={{ backgroundColor: 'green' }} onPress={pickHandler} />
                        <Button title={'Take your pic'} style={{ backgroundColor: 'turquoise' }} onPress={takeHandler} />
                    </View>

                    <View style={styles.qtySection}>
                        <Text style={styles.qtyLabel}>Quantity</Text>
                        <QuantityStepper qty={quontity} onIncrement={() => setQuontity((quontity) => quontity + 1)} onDecrement={() => setQuontity((quontity) => Math.max(1, quontity - 1))} />
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalPrice}>${((Number(item.price) * quontity).toFixed(2))}</Text>
                    </View>
                    <View style={styles.footerButtons}>
                        <Button
                            title="Add to Cart"
                            style={styles.addButton}
                            onPress={() => addToCartHandler()}
                        // todo add onPress handler
                        />
                        <Button
                            title="View Cart"
                            variant="outline"
                            style={styles.viewCartButton}
                            // todo add onPress handler
                            onPress={() => navigation.navigate('ModalCart')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: '#FF3B30',
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 8,
    },
    basePrice: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 16,
    },
    qtySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qtyLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    footerButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    addButton: {
        flex: 2,
    },
    viewCartButton: {
        flex: 1,
    },
    imageBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    }
});