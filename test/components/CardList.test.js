import React from "react"
import { render } from "@testing-library/react"
import { element } from "../reactTestExtensions"
import { CardList } from "../../src/components/CardList"

describe("CardList", () => {
  it("renders a main container", () => {
    render(<CardList />)
    expect(element("#CardList")).not.toBeNull()
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
