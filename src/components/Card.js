import React from "react"

export const Card = ({ id, name, image, onDuplicate }) => (
  <div>
    <img src={image} />
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => onDuplicate({ id, name, image })}>
        Duplicate
      </button>
    </div>
  </div>
)
