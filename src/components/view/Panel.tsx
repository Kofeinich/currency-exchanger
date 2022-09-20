import {DropdownButton} from "./DropdownButton";
import {Input} from "./Input";
import {CurrencyQuotesModel} from "../../models/CurrencyQuotesModel";
import {useState} from "react";
import {LocationModel} from "../../models/LocationModel";

interface PanelProps {
    cur : CurrencyQuotesModel
    loc : LocationModel
}


export const Panel = (props : PanelProps) => {
    const [data, setData] = useState(props.cur)
    const [baseCurrency, setBaseCurrency] = useState(props.loc.currency.code)

    return (
        <section className={
            'flex flex-wrap mx-6 my-6 justify-between w-[460px] h-[440px] ' +
            'bg-gray.600 rounded self-center z-0'
        }>
            <DropdownButton id={'btn-1'} cur={data} name={'Convert From'}/>
            <Input placeholder={`${baseCurrency}`}/>
            <DropdownButton id={'btn-2'} cur={data} name={'Convert To'}/>
            <Input placeholder={'0'}/>
        </section>
    )
}