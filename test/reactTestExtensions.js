import { act } from "react-dom/test-utils"

export const element = selector => document.querySelector(selector)

export const elements = selector => Array.from(document.querySelector(selector))

export const click = element => act(() => element.click())
