import React from "react"
import { render } from "@testing-library/react"
import { element, click } from "../reactTestExtensions"
import { Card } from "../../src/components/Card"

describe("CardList.Card", () => {
  const testProps = {
    id: 1,
    name: "a",
    image: "http://abe.jpg/",
  }

  const duplicateButton = () => element("button")

  it("displays an image", () => {
    render(<Card />)
    expect(element("img")).not.toBeNull()
  })

  it("adds the src of the image from the image prop", () => {
    render(<Card {...testProps} />)
    expect(element("img").src).toEqual(testProps.image)
  })

  describe("duplicate button", () => {
    it("renders as a button element", () => {
      render(<Card />)
      expect(duplicateButton()).not.toBeNull()
    })

    it("executes the onDuplicate handler when button is clicked", () => {
      const duplicateSpy = jest.fn()
      render(<Card {...testProps} onDuplicate={duplicateSpy} />)
      click(duplicateButton())
      expect(duplicateSpy).toBeCalled()
    })

    it("passes correct properties when to onDuplicate hanlder", () => {
      const { id, name, image } = testProps
      const duplicateSpy = jest.fn()
      render(<Card {...testProps} onDuplicate={duplicateSpy} />)
      click(duplicateButton())
      expect(duplicateSpy).toBeCalledWith({
        id,
        name,
        image,
      })
    })
  })
})
