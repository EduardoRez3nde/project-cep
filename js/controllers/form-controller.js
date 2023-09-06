import Address from "../models/address.js";
import * as addressService from "../services/address-service.js";
import RequestException from "../services/exceptions/request-exception.js";

class State {
    constructor() {

        this.address = new Address();

        this.btnSave = null;
        this.btnClear = null;

        this.inputCep = null;
        this.inputStreet = null;
        this.inputNumber = null;
        this.inputCity = null;

        this.errorCep = null;
        this.errorNumber = null;
    }
}
const state = new State();

export function init() {

    state.inputCep = document.querySelector("#cep");
    state.inputStreet = document.querySelector("#street");
    state.inputNumber = document.querySelector("#number")
    state.inputCity = document.querySelector("#city");

    state.btnSave = document.querySelector(".btn-left");
    state.btnClear = document.querySelector("#btn-clear");

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.btnClear.addEventListener('click', handleInputBtnClear);
    state.btnSave.addEventListener('click', handleInputBtnSave);
    state.inputCep.addEventListener('change', handleInputCepChange);

}

const handleInputBtnSave = async (event) => {
    event.preventDefault();
    console.log(event.target);

}

const handleInputCepChange = async (event) => {
    const cep = event.target.value;
    try{
        const address = await addressService.findByCep(cep);

        state.inputCity.value = address.city;
        state.inputNumber.value = address.number;
        state.inputStreet.value = address.street;
        state.address = address;

        setFormError("cep", "");
        state.inputNumber.focus();
        console.log(address);
    }
    catch (e) {
        clearForm();
        setFormError("cep", "informe um cep válido");
    }
}

// Função auxiliar de error
const setFormError = (key, value) => {
    let element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

// Evento mostrar mensagem de error
const handleInputNumberChange = (event) => {
    if (event.target.value == "") {
        setFormError('number', 'Campo Requerido');
    }
}

// Evento limpar mensagem
const handleInputBtnClear = (event) => {
    event.preventDefault();
    state.inputCep.innerHTML = "";
    clearForm();
    
}

// Função limpar a mensagem
const clearForm = () => {
    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value = "";
    state.inputStreet.value = "";
    setFormError("cep", "");
    state.inputCep.focus();
}

