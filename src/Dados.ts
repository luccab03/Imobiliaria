import Imovel from "./models/Imovel";
import { Component } from "react";

class Dados extends Component {
    static lista: Array<Imovel> = new Array<Imovel>();

    static getLista = () => {
        return Dados.lista;
    }

    static addLista = (imovel: Imovel) => {
        Dados.lista.push(imovel);
    }

}



export default Dados;
