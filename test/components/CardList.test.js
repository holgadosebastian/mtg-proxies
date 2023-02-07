import React from "react"
import { render } from "@testing-library/react"
import { element, elements } from "../reactTestExtensions"
import { CardList } from "../../src/components/CardList"
import { Card } from "../../src/components/Card"

jest.mock("../../src/components/Card", () => ({
  Card: jest.fn(() => <div className="card" />),
}))

const oneCard = [
  {
    id: 1,
    name: "a",
    image: "b",
  },
]

const twoCards = [
  ...oneCard,
  {
    id: 2,
    name: "c",
    image: "d",
  },
]

describe("CardList", () => {
  it("renders a main container", () => {
    render(<CardList />)
    expect(element("#CardList")).not.toBeNull()
  })

  it("renders a card element", () => {
    render(<CardList cards={oneCard} />)
    expect(Card.mock.calls.length).toEqual(1)
  })

  it("renders no card element when array is empty", () => {
    render(<CardList cards={[]} />)
    expect(Card.mock.calls.length).toEqual(0)
  })

  it("renders more than one card", () => {
    render(<CardList cards={twoCards} />)
    expect(Card.mock.calls.length).toEqual(2)
  })

  it("passes name and image props to Card component", () => {
    const { image, name } = oneCard[0]
    render(<CardList cards={oneCard} />)
    expect(Card).toHaveBeenCalledWith(expect.objectContaining({ image, name }), expect.anything())
  })

  describe("add new card button", () => {
    const addNewCardButton = () => element("#AddNewCard")

    it("renders as a button element", () => {
      render(<CardList />)
      expect(addNewCardButton()).not.toBeNull()
      expect(addNewCardButton().tagName).toEqual("BUTTON")
    })

    it("has Add New as text", () => {
      render(<CardList />)
      expect(addNewCardButton().textContent).toContain("Add New")
    })
  })
})
