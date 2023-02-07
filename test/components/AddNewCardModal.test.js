import React from "react"
import { render } from "@testing-library/react"
import { element } from "../reactTestExtensions"
import { AddNewCardModal } from "../../src/components/AddNewCardModal"

describe("AddNewCardModal", () => {
  it("has a role equal to dialog", () => {
    render(<AddNewCardModal />)
    expect(element("#AddNewCardModal").getAttribute("role")).toEqual("dialog")
  })
})
