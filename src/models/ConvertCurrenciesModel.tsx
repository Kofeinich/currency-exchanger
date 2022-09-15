import {CurrencyQuotesModel} from "./CurrencyQuotesModel";

export interface ConvertCurrenciesModel {
    success: boolean
    timestamp: number
    source: string
    quotes: CurrencyQuotesModel
}