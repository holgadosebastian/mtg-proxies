import axios from "axios"
import { searchCards, SCRYFALL_BASE_URL } from "../../src/services/cards"

jest.mock("axios")

describe("cards", () => {
  describe("searchCards", () => {
    const response = { data: { cards: 1 } }

    beforeEach(() => {
      axios.get.mockResolvedValue(response)
    })

    it("performs a request with correct configuration", () => {
      searchCards("name")
      expect(axios.get).toHaveBeenCalledWith(`${SCRYFALL_BASE_URL}?q=name`)
    })

    it("returns the request data", async () => {
      const result = await searchCards("name")
      expect(result).toEqual(response)
    })
  })
})
