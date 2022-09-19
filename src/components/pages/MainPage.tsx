import {useCounter} from "../hooks/useCounter";
import {currencyCounter} from "../../service-functions/currencyCounter";
import {useEffect, useState} from "react";
import {CurrencyQuotesModel} from "../../models/CurrencyQuotesModel";
import {Panel} from "../view/Panel";

export const MainPage = () => {

    const {newAmount} = useCounter()
    const [current, setCurrent] = useState<CurrencyQuotesModel>({"": 0,})

    useEffect(() => {
        setCurrent(newAmount)
    },[newAmount])

    console.log(current)



    return (
        <div className={
            'flex justify-center min-w-[400px]  ' +
            'w-screen h-screen bg-neutral-800 m-auto'
        }>
            <Panel/>
        </div>
    )
}