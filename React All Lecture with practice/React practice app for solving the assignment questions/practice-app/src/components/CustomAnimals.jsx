import React from 'react'

const CustomAnimals = ({ animalData, clickedClassList}) => {
    // animalData is the array of the objects 
    // clickedClassList is the array of the class Names user clicked 

    // !Now I will convert the clickedClassList array to string so simply I will use the includes method to check the class that is there is present in the animalData array render only those animals in the UI 

    let AllClickedClassListString = clickedClassList.join(' ');

    console.log(AllClickedClassListString);
    
    return (
        <div data-testid="tile-container-id" className="tile-container">
          {animalData
            .filter(animal => {
              // Check if the animal's class is in clickedClassList
              if(AllClickedClassListString.includes(animal.class)){
                return true;
              }
            }
            )
            .map((animal, currentIndex) => (
              <div data-testid="animal-tile-id" className="tile" key={animal.name}>
                {animal.name}
              </div>
            ))
          }
        </div>
      );
    };

export default CustomAnimals