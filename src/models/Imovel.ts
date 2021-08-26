export default interface Imovel {
    Endereco: string,
    Finalidade: "Aluguel" | "Venda",
    Tipo: "Casa" | "Apartamento" | "Comércio",
    Valor: number,
    Foto: string,
}
