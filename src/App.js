import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import CartPtovider from './context/cart/CartProvider';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <CartPtovider>
                    <RootNavigator />
                </CartPtovider>
            </NavigationContainer>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
