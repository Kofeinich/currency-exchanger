import axios from "axios";
import {ConvertCurrenciesModel} from "../../models/ConvertCurrenciesModel";
import {MOCK_EXCHANGE} from "../../mock-data/exchange";

export async function getExchangeData() {
    const BASE_URL = `https://api.apilayer.com`

    const API_KEY = `F13SP0qqDTD9dKbgfRpoDqLdc252Jm4P`

    try {
        let r = await axios.get<ConvertCurrenciesModel>(`${BASE_URL}/currency_data/live`, {
            "params": {
                "base": "USD",
                "symbols": "EUR,GBP"
            },
            "headers": {
                "apikey": API_KEY
            }
        })
        return r.data
    } catch (err) {
        console.error('Mock data will be returned' + err);
        return MOCK_EXCHANGE
    }
}
