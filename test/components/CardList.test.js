import React from "react"
import { render } from "@testing-library/react"
import { element } from "../reactTestExtensions"
import { CardList } from "../../src/components/CardList"

describe("CardList", () => {
  it("renders a main container", () => {
    render(<CardList />)
    expect(element("#CardList")).not.toBeNull()
  })
})
