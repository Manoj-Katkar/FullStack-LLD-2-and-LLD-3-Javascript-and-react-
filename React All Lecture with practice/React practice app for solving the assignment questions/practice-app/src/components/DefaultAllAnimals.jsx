import React from 'react'

const DefaultAllAnimals = ({animalData}) => {
  return (
    <div data-testid="tile-container-id" className="tile-container">
    {animalData.map((animal) => (
      <div data-testid="animal-tile-id" className="tile" key={animal.name}>
        {animal.name}
      </div>
    ))}
  </div>
  )
}

export default DefaultAllAnimals