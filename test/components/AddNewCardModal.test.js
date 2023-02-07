import React from "react"
import { render } from "@testing-library/react"
import { element, change } from "../reactTestExtensions"
import { AddNewCardModal } from "../../src/components/AddNewCardModal"

describe("AddNewCardModal", () => {
  const addNewCardModal = () => element("#AddNewCardModal")
  const searchField = () => element("[name=search]")

  it("has a role equal to dialog", () => {
    render(<AddNewCardModal />)
    expect(addNewCardModal().getAttribute("role")).toEqual("dialog")
  })

  describe("search field", () => {
    it("renders as an input field", () => {
      render(<AddNewCardModal />)
      expect(searchField()).not.toBeNull()
      expect(searchField().tagName).toEqual("INPUT")
    })

    it("has placeholder text", () => {
      render(<AddNewCardModal />)
      expect(searchField().placeholder).toEqual("Search card")
    })

    it("updates value", () => {
      render(<AddNewCardModal />)
      change(searchField(), "card name")
      expect(searchField().value).toEqual("card name")
    })
  })
})
