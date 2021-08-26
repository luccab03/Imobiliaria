import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listagem from "./pages/Listagem";
import Cadastro from "./pages/Cadastro";

// @ts-ignore
const Home = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Imobiliária X</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonOpacity} onPress={() => {
                navigation.navigate("Cadastro");
            }}>
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOpacity} onPress={() => {
                navigation.navigate("Listagem");
            }}>
                <Text style={styles.buttonText}>Listagem</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={"Home"}>
                <Screen name={"Home"} component={Home} options={{ headerShown: false }} />
                <Screen name={"Cadastro"} component={Cadastro} options={{ headerShown: false }} />
                <Screen name={"Listagem"} component={Listagem} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        alignItems: "center"
    },
    headerContainer: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 30
    },
    headerText: {
        fontSize: 50,
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 3
    },
    buttonOpacity: {
        padding: 15,
        backgroundColor: "#959595",
        borderRadius: 7,
        marginBottom: 50
    },
    buttonText: {
        fontSize: 25
    }
});

export default App;
