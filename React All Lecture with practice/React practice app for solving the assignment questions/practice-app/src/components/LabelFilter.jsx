import React, { useState } from 'react'
import DefaultAllAnimals from './DefaultAllAnimals';
import CustomAnimals from './CustomAnimals';


const animalData = [
  { name: "Eagle", class: "Birds" },
  { name: "Penguin", class: "Birds" },
  { name: "Parrot", class: "Birds" },
  { name: "Lion", class: "Mammals" },
  { name: "Tiger", class: "Mammals" },
  { name: "Elephant", class: "Mammals" },
  { name: "Cobra", class: "Reptiles" },
  { name: "Lizard", class: "Reptiles" },
  { name: "Tortoise", class: "Reptiles" },
  { name: "Salmon", class: "Fish" },
  { name: "Shark", class: "Fish" },
  { name: "Trout", class: "Fish" },
];

const LabelFilter = () => {
  // !I will create the one state to store the classes that user clicked 
  let [clickedClassList , setClickedClassList] = useState([]);
  
  /***
   *
   * You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
   * Check out the demo gif to make sure that you understand what you’re meant to build.
   * Do not edit the data-testid attributes.
   * Do not edit the animalData object.
   *
   * */
  const animalClasses = Array.from(
    new Set(animalData.map((animal) => animal.class))
  );

  const addToClassList = (event) => {
    let targetedELementClassName = event.target.innerHTML;
    let targetedElement = event.target;

    // Check if class is already in the list
    if (clickedClassList.includes(targetedELementClassName)) {
      // If already selected, remove from list
      let updatedClassList = clickedClassList.filter(
        (item) => item !== targetedELementClassName
      );
      setClickedClassList(updatedClassList);

      // Reset styles
      targetedElement.style.color = "#333";
      targetedElement.style.backgroundColor = "#fff";
    } else {
      // Add to classList
      let newClassList = [...clickedClassList, targetedELementClassName];
      setClickedClassList(newClassList);

      // Change styling for selected state
      targetedElement.style.color = "#fff";
      targetedElement.style.backgroundColor = "#333";
    }
};

  console.log("clickedClassList" , clickedClassList);


  return (
    <div className="wrapper">
      <div data-testid="labels-wrapper-id" className="label-container">
        {animalClasses.map((animalClass) => (
          <div data-testid="label-id" className="label" key={animalClass}
          onClick={addToClassList}
          >
            {animalClass}
          </div>
        ))}
      </div>
        
        <>
            {
                //!here I have to do the conditional rendering 
                clickedClassList.length > 0 ? (<CustomAnimals animalData={animalData} clickedClassList={clickedClassList}/>) : (<DefaultAllAnimals animalData={animalData}/>)
                
            }
        </>
    </div>
  );

}

export default LabelFilter