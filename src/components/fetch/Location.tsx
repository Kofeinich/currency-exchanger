import React, {useEffect, useState} from 'react'
import axios from "axios";
import {LocationModel} from "../../models/LocationModel";

export function Location() {
    const [location, setLocation] = useState<LocationModel>(
        {
            currency: {
                code: "",
                name: "",
                symbol: "",
            }
        }
    )

    const fetchData = async () => {
        const r = await axios.get<LocationModel>(`https://api.ipgeolocation.io/ipgeo`, {
            "params": {
                "apiKey": "a1c4ea59a6aa44b280a7488c7a666016",
            },
        })
        setLocation(r.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(location.currency.code)
    return location
}