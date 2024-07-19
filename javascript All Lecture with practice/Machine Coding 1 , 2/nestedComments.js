// !so for the better time optimization we will apply the event listner on the container that is grand-grand parent 

let commentContainer = document.querySelector(".container");

const createInputBox = () => {
    const div = document.createElement("div");

    // now I have to set the above div className as the comment-reply-section
    div.setAttribute("class" , "comment-reply-section");

    // hen I have to add the input and the submit button inside it 

    div.innerHTML = `<input type="text" class="input" placeholder="Write reply">
                    <button class="btn submit">Submit</button>`;

     
     // then I will return the div 

     return div;

}

const createReply = (Message) => {

    const div = document.createElement("div");

    div.setAttribute("class" , "all-comments");

    div.innerHTML =   `<div class="card">
                            <span class="text">${Message}</span>
                            <span id="reply" class="reply">Add reply</span>
                        </div>`

     //return the div 
     
     return div;
}

commentContainer.addEventListener("click" , (event) => {
    //* now I want to know the which button was clicked because I have to implement the click event for two buttons thet is for one 1)add reply , 2)submit button
    
    // *I will check for the class with the help of the class I will understand the which button is clicked 

    const isReplyButtonClicked = event.target.classList.contains("reply");
    const isSubmitButtonClicked = event.target.classList.contains("submit");

    // !now I have to takle the action 

    if(isReplyButtonClicked === true){

        const closestCard = event.target.closest(".all-comments");

        // now I have to add the div with the input and the submit button dynamicallt so I have to create the one div 
        // for that I will write the one function 

        const inputBox = createInputBox();

        // Now I have to append that div in the div who is having the className all-comments

        closestCard.append(inputBox);
        



    }

    // if(isSubmitButtonClicked){

    //     // get the closest card 
    //     const closestCard = event.target.closest(".all-comments");

    //     // first get the value of the input field using the closest we will go one level up then again we will come one level down 
    //     const closestComments = event.target.closest("comment-reply-section");

    //     let inputSection = closestComments.children[0];  // it will return the first children 


    //     let message = inputSection.value;

    //     if(message != ""){
    //         // means the my message should not be empty then only I have to allow this 
    //         // then one card should get created for that I will write the one function for that 
    //         let newCard = createReply(message);

    //         console.log(newCard);


    //         // then I have to append this above newcard with appropriate parent who is having the closest class Name as the all-comments 

            

    //         closestCard.appendChild(newCard);



    //         //* and I have to make sure that event.target.parent will not display 
    //         // ^get the closest comment reply section 

    //         closestComments.remove();

    //     }



    // }



if (isSubmitButtonClicked === true) {
  // get the closest card
  const closestCard = event.target.closest(".all-comments");

  // first get the value of the input field using the closest we will go one level up then again we will come one level down
  const closestComments = event.target.closest(".comment-reply-section");

  if (closestComments !== null) {   //*it will make sure that I am having the parent 

    let inputSection = closestComments.children[0]; // it will return the first children
    let message = inputSection.value;

    // !Now I have to make sure that I am ceating the thread with some message do not allow the empty message 

    if(message){     //if it is empty then it will treated as the falsie value and block will not get executed 

        // then one card should get created for that I will write the one function for that
        let newCard = createReply(message);

        console.log(newCard);

        // then I have to append this above newcard with appropriate parent who is having the closest class Name as the all-comments
        closestCard.appendChild(newCard);

        // and I have to make sure that event.target.parent will not display
        // get the closest comment reply section
        closestComments.remove();
    }
    else{
        alert("please Enter the text");  //*giving the alert to the user that enter the text then only you can come in the message thread 
    }


  }
}
    
})