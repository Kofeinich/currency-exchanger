import {CurrencyQuotesModel} from "../models/CurrencyQuotesModel";

export const currencyCounter = (quotes: CurrencyQuotesModel, baseCurrencyCode: string) => {
    let newCoe: number = 1
    for (let convert in quotes) {
        let c = convert.indexOf(baseCurrencyCode)
        if (c !== -1) {
            newCoe = 1 / quotes[convert]
            newCoe.toFixed(3)
        }
        convert = convert.slice(3, 6)
    }
    for (let convert in quotes) {
        quotes[convert] = quotes[convert] * newCoe
        convert = `${baseCurrencyCode}${convert}`
    }
    return quotes
}