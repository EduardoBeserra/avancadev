import axios from 'axios';

const apiKey = '02ddd4986d7576dad84da0e9fef09fa4dc21d69d33a00454bc0dc445a11d4f0a'

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apiKey}`
    }
})