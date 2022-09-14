import React, {useEffect, useState} from 'react'
import {ConvertCurrenciesModel} from "../../models/ConvertCurrenciesModel";
import {getExchangeData} from "../fetch/getExchangeData";
import {LocationModel} from "../../models/LocationModel";
import {getLocation} from "../fetch/getLocation";

export const CurrencyCounter = () => {
    const [location, setLocation] = useState<LocationModel>()
    const [amount, setAmount] = useState<ConvertCurrenciesModel>()

    useEffect(() => {
        const f = () => {
            getLocation().then(loc => {
                setLocation(loc)
            })
            getExchangeData().then(value => {
                setAmount(value)
            })
        }
        f()
        setInterval(f, 600000)
    }, [])

    return (
        <></>
    )
}