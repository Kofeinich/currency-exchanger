export interface ConvertCurrenciesModel {
    success: boolean
    timestamp: number
    base: string
    date: string,
    rates: {
        [index : string] : number
    }
}