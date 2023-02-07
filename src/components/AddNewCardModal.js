import React, { useState } from "react"

export const AddNewCardModal = () => {
  const [query, setQuery] = useState("")

  const handleChange = ({ target: { value } }) => {
    setQuery(value)
  }

  return (
    <div id="AddNewCardModal" role="dialog">
      <input type="text" name="search" placeholder="Search card" value={query} onChange={handleChange} />
    </div>
  )
}
