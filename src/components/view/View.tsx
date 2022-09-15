import {useCounter} from "../hooks/useCounter";
import {currencyCounter} from "../../service-functions/currencyCounter";
import {useEffect, useState} from "react";
import {CurrencyQuotesModel} from "../../models/CurrencyQuotesModel";

export const View = () => {

    const {newAmount} = useCounter()
    const [current, setCurrent] = useState<CurrencyQuotesModel>({"": 0,})

    useEffect(() => {
        setCurrent(newAmount)
    },[newAmount])

    console.log(current)


    return (
        <></>
    )
}