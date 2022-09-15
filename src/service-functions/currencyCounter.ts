import {CurrencyQuotesModel} from "../models/CurrencyQuotesModel";

export const currencyCounter = (quotes: CurrencyQuotesModel, baseCurrencyCode: string) => {
    let newCoe: number = 1
    let newConvert : string = ''
    for (let convert in quotes) {
        let c = convert.indexOf(baseCurrencyCode)
        if (c === 3) {
            newCoe = 1 / (quotes[convert])
        }
    }
    const newQuotes: CurrencyQuotesModel = {}
    for (let convert in quotes) {
        newConvert = convert.slice(3, 6)
        newQuotes[`${baseCurrencyCode}${newConvert}`] = (quotes[convert] * newCoe)
    }
    return newQuotes
}