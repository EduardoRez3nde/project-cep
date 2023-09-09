import Address from "../models/address.js"
import { getJson } from "./request-service.js";


export const findByCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await getJson(url);
    return new Address(result.cep, result.logradouro, null, result.localidade);
}

export const getErrors = (address) => {
    const errors = {};

    if (!address.cep || address.cep == "") {
        errors.cep = "Campo Requerido";
    }

    if (!address.number || address.number == "") {
        errors.number = "Campo Requerido";
    }

    return errors;
}