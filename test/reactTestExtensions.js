import { act } from "react-dom/test-utils"

export const element = selector => document.querySelector(selector)

export const elements = selector => Array.from(document.querySelector(selector))

export const click = element => act(() => element.click())

export const originalValueProperty = reactElement => {
  const prototype = Object.getPrototypeOf(reactElement)

  return Object.getOwnPropertyDescriptor(prototype, "value")
}

export const change = (target, value) => {
  originalValueProperty(target).set.call(target, value)
  const event = new Event("change", {
    target,
    bubbles: true,
  })
  act(() => target.dispatchEvent(event))
}
