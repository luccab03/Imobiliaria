import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Picker } from "@react-native-picker/picker";
import Imovel from "../models/Imovel";
import Dados from "../Dados";

const libOptions: ImageLibraryOptions = {
    mediaType: "photo",
    selectionLimit: 1
};
const camOptions: CameraOptions = {
    mediaType: "photo",
    cameraType: "back",
    quality: 0.5
};

const Cadastro = () => {
    const existing = () => {
        launchImageLibrary(libOptions, (res) => {
            if (!res.didCancel) {
                if (res.assets !== undefined) {
                    const asset = res.assets[0];
                    if (asset.uri !== undefined) setFoto(asset.uri);
                }
            }
        });
    };
    const newp = () => {
        launchCamera(camOptions, (res) => {
            if (!res.didCancel) {
                if (res.assets !== undefined) {
                    const asset = res.assets[0];
                    if (asset.uri !== undefined) setFoto(asset.uri);
                }
            }
        });
    };
    const cameraHandler = () => {
        Alert.alert(
            "Foto",
            "Você deseja selecionar uma foto existente ou tirar uma nova?",
            [
                { text: "Existente", onPress: existing },
                { text: "Nova", onPress: newp }
            ]);
    };

    const [Endereco, setEndereco] = useState<string>("");
    const [Finalidade, setFinalidade] = useState<"Aluguel" | "Venda">("Aluguel");
    const [Tipo, setTipo] = useState<"Casa" | "Apartamento" | "Comércio">("Casa");
    const [Valor, setValor] = useState<number>(0);
    const [Foto, setFoto] = useState<string>("");

    const submitHandler = () => {
        if (Endereco !== "" && Valor !== 0 && Foto !== "") {
            const imovel: Imovel = {
                Endereco,
                Finalidade,
                Tipo,
                Valor,
                Foto
            };
            Dados.addLista(imovel);
            Alert.alert("Sucesso!", "Imóvel Cadastrado");
        } else {
            Alert.alert("Erro!", "Favor preencher todos os campos!");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Cadastro</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Endereço</Text>
                    <TextInput style={styles.formControl} onChangeText={(txt) => {
                        setEndereco(txt);
                    }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Finalidade</Text>
                    <View style={styles.formControl}>
                        <Picker
                            selectedValue={Finalidade}
                            onValueChange={(value) => {
                                setFinalidade(value);
                            }}
                            mode={"dropdown"}
                        >
                            <Picker.Item label={"Aluguel"} value={"Aluguel"} />
                            <Picker.Item label={"Venda"} value={"Venda"} />
                        </Picker>
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Tipo</Text>
                    <View style={styles.formControl}>
                        <Picker
                            selectedValue={Tipo}
                            onValueChange={(value) => {
                                setTipo(value);
                            }}
                            mode={"dropdown"}
                        >
                            <Picker.Item label={"Casa"} value={"Casa"} />
                            <Picker.Item label={"Apartamento"} value={"Apartamento"} />
                            <Picker.Item label={"Comércio"} value={"Comércio"} />
                        </Picker>
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Valor</Text>
                    <TextInput style={styles.formControl} keyboardType={"numeric"} onChangeText={(txt) => {
                        setValor(Number.parseInt(txt));
                    }} />
                </View>
                <View style={styles.formGroup}>
                    {Foto ? (<Text style={styles.formLabel}>Foto Carregada!</Text>) : null}
                    <TouchableOpacity style={styles.buttonOpacity} onPress={cameraHandler}>
                        <Text>Foto</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonSubmit} onPress={submitHandler}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
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
    form: {
        flex: 9
    },
    formGroup: {
        flexDirection: "column",
        width: Dimensions.get("window").width * 0.8,
        marginBottom: 20
    },
    formLabel: {
        fontSize: 20,
        fontWeight: "bold"
    },
    formControl: {
        borderBottomColor: "#959595",
        borderBottomWidth: 1,
        width: Dimensions.get("window").width * 0.8
    },
    buttonOpacity: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#959595",
        borderRadius: 7,
        marginBottom: 50
    },
    buttonSubmit: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#2d36ff",
        borderRadius: 7,
        marginBottom: 50
    }
});

export default Cadastro;
