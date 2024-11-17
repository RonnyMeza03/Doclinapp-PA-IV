import axios from 'axios';

export const obtenerOrdenBronce = async (idAuth0) => {
    return axios.get(`http://localhost:4000/paypal/${idAuth0}/create-order/premiunBronce`)
}

export const obtenerOrdenPlata = async (idAuth0) => {
    return axios.get(`http://localhost:4000/paypal/${idAuth0}/create-order/premiunPlata`)
}

export const obtenerOrdenOro = async (idAuth0) => {
    return axios.get(`http://localhost:4000/paypal/${idAuth0}/create-order/premiunOro`)
}