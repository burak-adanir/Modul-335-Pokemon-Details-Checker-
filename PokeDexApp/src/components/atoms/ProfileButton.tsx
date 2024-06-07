import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;


export default function ProfileButton() {
    return (
        <TouchableOpacity onPress={() => console.log("profile pressed")} style={styles.profileButton}>
            <Icon name="account" size={30} color="#E66161" />
            <Text style={styles.profiletext}>
                Profile
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    profileButton: {
        position: 'absolute',
        alignItems: "center",
        top: '50%',
        right: -(screenWidth - screenWidth/5),
        fontSize: 50,
        transform: [{ translateY: 12 }], // Adjust -10 to vertically center the text
    },
    profiletext: {
        color: "#E66161",
        fontWeight: 'bold',
        fontSize: 20,
        position: "relative",
        float: "right",
    }
})