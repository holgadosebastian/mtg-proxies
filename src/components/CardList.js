import React from "react"
import { Card } from "./Card"

const AddNewCard = () => <button id="AddNewCard">Add New</button>

export const CardList = ({ cards }) => (
  <div id="CardList">
    {cards.map(({ name, id, image }) => (
      <Card key={id} />
    ))}
    <AddNewCard />
  </div>
)

CardList.defaultProps = {
  cards: [],
}
