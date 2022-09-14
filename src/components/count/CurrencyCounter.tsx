import React, {useEffect, useState} from 'react'
import {ConvertCurrenciesModel} from "../../models/ConvertCurrenciesModel";
import {getExchangeData} from "../fetch/getExchangeData";
import {LocationModel} from "../../models/LocationModel";
import {getLocation} from "../fetch/getLocation";

export const CurrencyCounter = () => {
    const [location, setLocation] = useState<LocationModel>()
    const [amount, setAmount] = useState<ConvertCurrenciesModel>()

    useEffect(() => {
        setTimeout(() =>
                getLocation().then(loc => {
                    setLocation(loc)
                }),
            1000
        )
        setTimeout(() =>
                getExchangeData().then(value => {
                    setAmount(value)
                }),
            1050)
    }, [])

    console.log(location)
    console.log(amount)

    return (
        <></>
    )
}