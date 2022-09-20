import React, {useEffect, useState} from 'react'
import {ConvertCurrenciesModel} from "../../models/ConvertCurrenciesModel";
import {getExchangeData} from "../../service-functions/fetch/getExchangeData";
import {LocationModel} from "../../models/LocationModel";
import {getLocation} from "../../service-functions/fetch/getLocation";
import {MOCK_LOCATION} from "../../mock-data/location";
import {MOCK_EXCHANGE} from "../../mock-data/exchange";
import {currencyCounter} from "../../service-functions/currencyCounter";
import {CurrencyQuotesModel} from "../../models/CurrencyQuotesModel";


export function useCounter() {
    const [location, setLocation] = useState<LocationModel>(MOCK_LOCATION)
    const [amount, setAmount] = useState<ConvertCurrenciesModel>(MOCK_EXCHANGE)
    const [newAmount, setNewAmount] = useState<CurrencyQuotesModel>({"": 0,})

    useEffect(() => {
        const f = () => {
            getLocation().then(loc => {
                setLocation(loc)
            })
            getExchangeData().then(am => {
                setAmount(am)
            })
        }
        f()
        setInterval(f, 600000)
    }, [])

    useEffect(() => {
        const obj = amount.quotes

        setNewAmount(currencyCounter(obj, location.currency.code))

    }, [location, amount])

    return {newAmount, location}
}