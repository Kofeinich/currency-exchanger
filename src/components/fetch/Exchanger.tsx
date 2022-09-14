import React, {useEffect, useState} from 'react'
import axios from "axios";
import {ConvertCurrenciesModel} from "../../models/ConvertCurrenciesModel";

export function Exchanger(){
    const [loading, setLoading] = useState(false)
    const [exchanger, setExchanger] = useState<ConvertCurrenciesModel>(
        {
            "success": false,
            "timestamp": 0,
            "base": "",
            "date": "",
            "rates": {}
        }
    )

    const BASE_URL = `https://api.apilayer.com`
    const API_KEY = `F13SP0qqDTD9dKbgfRpoDqLdc252Jm4P`

    const fetchData = async () => {
        setLoading(true)
        const r = await axios.get<ConvertCurrenciesModel>(`${BASE_URL}/currency_data/live`, {
            "params": {
                "base": "USD",
                "symbols": "EUR,GBP"
            },
            "headers": {
                "apikey": API_KEY
            }
        })
        setExchanger(r.data)
        setLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(exchanger)

    return (<> {loading && <p className={'text-center'}>Loading...</p>}</> || exchanger)
}
