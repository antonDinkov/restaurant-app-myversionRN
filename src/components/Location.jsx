import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as LocationExpo from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function Location() {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocationHandler = async () => {
        setLoading(true);
        let { status } = await LocationExpo.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("Permission denied");
            setLoading(false);
            return;
        }
        let loc = await LocationExpo.getCurrentPositionAsync({});
        setLocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude, });
        setLoading(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                {location ? (
                    <MapView style={styles.map} initialRegion={{ latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01, }} >
                        <Marker coordinate={location} title="You are here" />
                    </MapView>
                ) : (
                    <View style={styles.mapOverlay}>
                        <Text style={styles.overlayText}>Map preview will appear here</Text>
                    </View>
                )}
            </View>

            <TouchableOpacity style={styles.locationButton} onPress={getCurrentLocationHandler}>
                {loading ? (
                    <ActivityIndicator color="#6366f1" />
                ) : (
                    <>
                        <Ionicons name="locate" size={20} color="#6366f1" />
                        <Text style={styles.locationButtonText}>Use Current Location</Text>
                    </>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    mapContainer: {
        height: 250,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#f1f5f9',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    overlayText: {
        fontSize: 14,
        color: '#64748b',
        fontWeight: '500',
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#e0e7ff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 12,
    },
    locationButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6366f1',
    },
});