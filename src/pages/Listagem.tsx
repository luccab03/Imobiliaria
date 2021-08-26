import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Dados from "../Dados";
import Imovel from "../models/Imovel";
import myHook from "../myHook";


interface ImovelProps {
    imovel: Imovel,
}

const Listagem = () => {
    const ImovelComponent = (props: ImovelProps) => {
        return (
            <View style={styles.imovel}>
                <View style={styles.leftContainer}>
                    <Image
                        source={{ uri: props.imovel.Foto, height: 100, width: 100 }} />
                </View>
                <View style={styles.rightContainer}>
                    <Text>Endereço: {props.imovel.Endereco}</Text>
                    <Text>Finalidade: {props.imovel.Finalidade}</Text>
                    <Text>Tipo: {props.imovel.Tipo}</Text>
                    <Text>Valor: {props.imovel.Valor}</Text>
                </View>
            </View>
        );
    };

    const [lista, setLista] = useState<Imovel[]>([]);
    myHook(() => {
        setLista(Dados.getLista());
    });


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Listagem</Text>
            </View>
            <View style={styles.imovelContainer}>
                {lista.map((value, index) => (<ImovelComponent imovel={value} key={index} />))}
            </View>
        </View>
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
        fontSize: 30,
        fontWeight: "bold"
    },
    imovelContainer: {
        flex: 9
    },
    imovel: {
        flex: 1,
        flexDirection: "row"
    },
    leftContainer: {
        marginRight: 30
    },
    rightContainer: {
        marginTop: 10
    }

});

export default Listagem;
