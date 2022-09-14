export interface ConvertCurrenciesModel {
    success: boolean
    timestamp: number
    source: string
    quotes: {
        [index : string] : number
    }
}