// // !Approach 
// // first get the all the input fields 

// let inputFieldsList = document.querySelectorAll(".input");

// // iterate over the inputList and for each add the event listner 

// inputFieldsList.forEach((element , index , originalList) => {
//     element.addEventListener("keypress" , (event) => {
//         // Approach 
//         /**
//          * here element is means the one input field 
//          * first check the which key is got pressed and according to that take the action 
//          * if it is backspace and delete then remove current number and move back 
//          * if it is number between the 0 to 9 then then go ahead 
//          * but remaimber for the current element you have to toggle the class focus
//          */

//         // first get the input field which got clicked 
//         let currentField = event.currentTarget;

        
//         console.log(currentField);

//         currentField.classList.toggle(".focus");


//     })
// })





// Get all the input fields
const inputs = document.querySelectorAll('.input');

// Add event listener to each input field
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    // Check if the input is a single-digit number
    if (!isNaN(e.data) && e.data.length === 1) {
      // Move focus to the next input field
      inputs[index + 1]?.focus();
    } else {
      // Clear the input field
      input.value = '';
    }
  });

  input.addEventListener('keyup', (e) => {
    // Check if the key pressed is Backspace or Delete
    if (e.key === 'Backspace' || e.key === 'Delete') {
      // Move focus to the previous input field

    //   input.value = "";
      inputs[index - 1].focus();

        //   and also I have to remove the value 
        input.value = "";



    }



  });
});

// Set the focus on the first input field
inputs[0].focus();