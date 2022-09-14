import axios from "axios";
import {LocationModel} from "../../models/LocationModel";
import {MOCK_LOCATION} from "../../mock-data/location";

export async function getLocation() {
    const API_KEY = `a1c4ea59a6aa44b280a7488c7a666016`
    try {
        const r = await axios.get<LocationModel>(`https://api.ipgeolocation.io/ipgeo`, {
            "params": {
                "apiKey": API_KEY,
            },
        })
        return r.data
    }catch (err) {
        console.error('Mock data will be returned' + err);
        return MOCK_LOCATION
    }
}