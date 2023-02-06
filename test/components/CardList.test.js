import React from "react"
import { render } from "@testing-library/react"
import { element, elements } from "../reactTestExtensions"
import { CardList } from "../../src/components/CardList"

describe("CardList", () => {
  const firstCard = () => elements("#CardList .card")[0]

  it("renders a main container", () => {
    render(<CardList />)
    expect(element("#CardList")).not.toBeNull()
  })

  it("renders a card element", () => {
    render(<CardList />)
    expect(firstCard()).not.toBeNull()
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
