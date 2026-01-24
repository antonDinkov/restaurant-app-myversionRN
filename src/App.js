import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <RootNavigator />
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
