import axios from "axios"

export const SCRYFALL_BASE_URL = "https://api.scryfall.com/cards/search"

export const searchCards = query => axios.get(`${SCRYFALL_BASE_URL}?q=${query}`)
